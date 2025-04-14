import React from "react";
import CalculatorHeader from "../components/navigation/CalculatorHeader";
import { Outlet } from "react-router-dom";

const CalculatorRootLayout: React.FC = () => {
  return (
    <>
      <CalculatorHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default CalculatorRootLayout;
