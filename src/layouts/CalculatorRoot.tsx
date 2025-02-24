import React from "react";
import CalculatorNavigation from "../components/CalculatorNavigation";
import { Outlet } from "react-router-dom";

const CalculatorRootLayout: React.FC = () => {
  return (
    <>
      <CalculatorNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default CalculatorRootLayout;
