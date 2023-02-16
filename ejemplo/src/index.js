import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
//Aqui se importan el react que es una biblioteca de java y los estilos de la app

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
