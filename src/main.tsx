import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import CalculatorContextProvider from "./store/calculator-Context.tsx";
import UserContextProvider from "./store/user-Context.tsx";

//Strict mode , doble renderizado del componente, sacar al final :)
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserContextProvider>
      <CalculatorContextProvider>
        <App />
      </CalculatorContextProvider>
    </UserContextProvider>
  </StrictMode>
);
