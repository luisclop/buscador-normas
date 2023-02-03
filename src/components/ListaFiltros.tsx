import { ListGroup, Button } from "flowbite-react";
import React from "react";

export function ListaFiltros(props: {
  onSelectedSector: (sector: string) => void;
  sector: string;
}) {
  const handleSelectedSector = (sector: string) => {
    props.onSelectedSector(sector);
  };
  return (
    <div className="flex flex-wrap gap-2">
      <Button.Group>
        <Button
          color=""
          className={`${
            props.sector === "PRODUCE"
              ? "border-2 border-green-800 bg-green-800 text-white"
              : "border-2 border-green-700 bg-white text-black"
          } transition-all hover:bg-green-700 hover:text-white focus:bg-green-800 focus:text-white`}
          onClick={() => handleSelectedSector("PRODUCE")}
        >
          PRODUCE
        </Button>
        <Button
          color=""
          className={`${
            props.sector === "MINAN"
              ? "border-2 border-green-800 bg-green-800 text-white"
              : "border-2 border-green-700 bg-white text-black"
          } transition-all hover:bg-green-700 hover:text-white focus:bg-green-800 focus:text-white`}
          onClick={() => handleSelectedSector("MINAN")}
        >
          MINAN
        </Button>
        <Button
          color=""
          className={`${
            props.sector === "PROMPERU"
              ? "border-2 border-green-800 bg-green-800 text-white"
              : "border-2 border-green-700 bg-white text-black"
          } transition-all hover:bg-green-700 hover:text-white focus:bg-green-800 focus:text-white`}
          onClick={() => handleSelectedSector("PROMPERU")}
        >
          PROMPERU
        </Button>
        <Button
          color=""
          className={`${
            props.sector === "MIDAGRI"
              ? "border-2 border-green-800 bg-green-800 text-white"
              : "border-2 border-green-700 bg-white text-black"
          } transition-all hover:bg-green-700 hover:text-white focus:bg-green-800 focus:text-white`}
          onClick={() => handleSelectedSector("MIDAGRI")}
        >
          MIDAGRI
        </Button>
        <Button
          color=""
          className={`${
            props.sector === "VIVIENDA"
              ? "border-2 border-green-800 bg-green-800 text-white"
              : "border-2 border-green-700 bg-white text-black"
          } transition-all hover:bg-green-700 hover:text-white focus:bg-green-800 focus:text-white`}
          onClick={() => handleSelectedSector("VIVIENDA")}
        >
          VIVIENDA
        </Button>
        <Button
          color=""
          className={`${
            props.sector === "MTPE"
              ? "border-2 border-green-800 bg-green-800 text-white"
              : "border-2 border-green-700 bg-white text-black"
          } transition-all hover:bg-green-700 hover:text-white focus:bg-green-800 focus:text-white`}
          onClick={() => handleSelectedSector("MTPE")}
        >
          MTPE
        </Button>
        <Button
          color=""
          className={`${
            props.sector === "MINEN"
              ? "border-2 border-green-800 bg-green-800 text-white"
              : "border-2 border-green-700 bg-white text-black"
          } transition-all hover:bg-green-700 hover:text-white focus:bg-green-800 focus:text-white`}
          onClick={() => handleSelectedSector("MINEN")}
        >
          MINEN
        </Button>
        <Button
          color=""
          className={`${
            props.sector === "MTC"
              ? "border-2 border-green-800 bg-green-800 text-white"
              : "border-2 border-green-700 bg-white text-black"
          } transition-all hover:bg-green-700 hover:text-white focus:bg-green-800 focus:text-white`}
          onClick={() => handleSelectedSector("MTC")}
        >
          MTC
        </Button>
      </Button.Group>
    </div>
  );
}
