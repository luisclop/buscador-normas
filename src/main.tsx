import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./samples/node-api";
import "./index.scss";
import { TitleBar } from "./components";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TitleBar />
    <App />
  </React.StrictMode>
);

postMessage({ payload: "removeLoading" }, "*");
