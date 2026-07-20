import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/global.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);

// Fade out and remove the initial boot loader now that the app has mounted.
const bootLoader = document.getElementById("app-loader");
if (bootLoader) {
  requestAnimationFrame(() => {
    bootLoader.classList.add("app-loader--hidden");
    window.setTimeout(() => bootLoader.remove(), 500);
  });
}
