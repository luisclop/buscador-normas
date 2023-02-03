import { Button, Spinner } from "flowbite-react";
import React, { useState } from "react";
import { Selector, ListaFiltros, TablaResultados } from "./components";

function App() {
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toLocaleDateString("es-ES")
  );
  const handleSelectedDate = (date: Date) => {
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    let f_month = month < 10 ? "0" + month : month;
    let f_day = day < 10 ? "0" + day : day;

    const formattedDate = `${f_day}/${f_month}/${year}`;
    setSelectedDate(formattedDate);
  };

  const [sector, setSector] = useState("");
  const handleSelectedSector = (sector: string) => {
    setSector(sector);
  };

  return (
    <div className="flex h-full w-full flex-col justify-start p-4">
      <ListaFiltros onSelectedSector={handleSelectedSector} sector={sector} />
      <p>Filtro: {sector} </p>
      <div className="mt-4 flex">
        <div className="mr-4 w-48">
          <Selector onSelectedDate={handleSelectedDate} />
          <p>Fecha seleccionda: {selectedDate}</p>
        </div>
        <Button
          color=""
          className="bg-green-700 text-white transition-all hover:bg-green-800 focus:bg-green-700"
        >
          <span className="w-16">Buscar</span>
        </Button>
      </div>
      <TablaResultados />
    </div>
  );
}

export default App;
