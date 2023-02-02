import { Button, Spinner } from "flowbite-react";
import { useState } from "react";
import { Selector, TitleBar } from "./components";

console.log(
  "[App.tsx]",
  `Hello world from Electron ${process.versions.electron}!`
);

function App() {
  return (
    <div className="flex h-full w-full justify-center pt-56">
      <div className="mr-4 w-44">
        <Selector />
      </div>
      <Button>
        {/* <Spinner aria-label="Spinner button" />
        <span className="pl-3">Cargando</span> */}
        <span className="w-16">Buscar</span>
      </Button>
    </div>
  );
}

export default App;
