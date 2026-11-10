import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { registerScriptFonts } from "./lib/scripts";
import "./index.css";

registerScriptFonts(import.meta.env.BASE_URL);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
