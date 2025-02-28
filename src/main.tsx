import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import CalculatorContextProvider from "./store/calculator-Context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CalculatorContextProvider>
      <App />
    </CalculatorContextProvider>
  </StrictMode>
);
