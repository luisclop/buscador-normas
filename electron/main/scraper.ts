import puppeteer from "puppeteer";

export const SECTORES = [
  "PRODUCE",
  "AMBIENTE",
  "VIVIENDA",
  "VIVIENDA, CONSTRUCCION Y SANEAMIENTO",
  "SIERRA Y SELVA EXPORTADORA",
  "DESARROLLO AGRARIO Y RIEGO",
  "COMISION DE PROMOCION DEL PERU PARA LA EXPORTACION Y EL TURISMO",
  "TRABAJO Y PROMOCION DEL EMPLEO",
  "ENERGIA Y MINAS",
  "TRANSPORTES Y COMUNICACIONES",
];

const FILTROS = {
  PRODUCE: "PRODUCE",
  MINAN: "AMBIENTE",
  PROMPERU: "COMISION DE PROMOCION DEL PERU PARA LA EXPORTACION Y EL TURISMO",
  MIDAGRI: "DESARROLLO AGRARIO Y RIEGO",
  VIVIENDA: "VIVIENDA, CONSTRUCCION Y SANEAMIENTO",
  MTPE: "TRABAJO Y PROMOCION DEL EMPLEO",
  MINEN: "ENERGIA Y MINAS",
  MTC: "TRANSPORTES Y COMUNICACIONES",
};

export async function conectar(fecha) {
  // Crear el navegador para ingresar a la web
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();

  await page.goto("https://diariooficial.elperuano.pe/Normas");

  // Buscar normas en una fecha específica
  const desde = await page.waitForSelector(`input[name="cddesde"]`);
  await page.evaluate((el, fecha) => (el.value = fecha), desde, fecha);
  const hasta = await page.waitForSelector(`input[name="cdhasta"]`);
  await page.evaluate((el, fecha) => (el.value = fecha), hasta, fecha);
  const botonBuscar = await page.waitForSelector(`button[name="btnBuscar"]`);
  await botonBuscar.click();

  // Esperar a que se carguen los resultados.
  const resultadosCargados = ".edicionesoficiales_articulos";
  await page.waitForSelector(resultadosCargados);

  const normas = await page.evaluate(() => {
    const resultados = document.querySelectorAll(".ediciones_texto");
    let textos = [];
    resultados.forEach((tag) => {
      textos.push(tag);
    });
    const normas_formato = textos.map((element) => {
      const link = element.querySelector("a").href;
      const lineas = element.textContent.split("\n");
      const lineas2 = lineas.map((linea) => linea.trim());
      const lineas3 = lineas2.filter((line) => line.trim() !== "");
      // Separar el titulo de la norma en numero, organismo y tipo de documento
      const partesTitulo = lineas3[1].split(/N° |N.º /);
      const tipoDocumento = partesTitulo[0].split("  ")[0].split(" ");
      const siglasDoc = tipoDocumento.map((word) => word[0]).join("");
      const patronNumero = /[0-9-]+/g;
      const numero = partesTitulo[1].match(patronNumero)[0].replace(/-$/, "");
      // const organismo = partesTitulo[1].replace(patronNumero, "");
      const patronOrganismo = /[A-Z][^0-9-]*/g;
      const organismo = partesTitulo[1].match(patronOrganismo);
      return {
        sector: lineas3[0],
        norma: lineas3[1],
        fecha: lineas3[2].substring(7, 17),
        organismo: organismo ? organismo.join("-").replace(/\/$/, "") : "-",
        documento: siglasDoc,
        numero: numero,
        sumilla: lineas3[3],
        enlace: link,
      };
    });
    // console.log("Listo.");
    return normas_formato;
  });
  // console.log(normas);
  await browser.close();
  return normas;
}

export async function filtrarResultados(resultados, filtro) {
  const normas_filtradas = resultados.filter((norma) =>
    filtro.includes(norma.sector)
  );
  return normas_filtradas;
}
