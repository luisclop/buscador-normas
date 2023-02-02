import { Button, Spinner } from "flowbite-react";
import React, { useState } from "react";
import { Selector } from "./components";

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

  return (
    <div className="flex h-full w-full justify-center pt-56">
      <div className="mr-4 w-48">
        <Selector onSelectedDate={handleSelectedDate} />
      </div>
      <p>Fecha seleccionda: {selectedDate}</p>
      <Button color="success">
        <span className="w-16">Buscar</span>
      </Button>
    </div>
  );
}

export default App;
