import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import BloqCafeApp from "./BloqCafeApp.tsx";
import "./css/normalize.css";
import "./css/style.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <BloqCafeApp />
    </StrictMode>
  </BrowserRouter>
);
