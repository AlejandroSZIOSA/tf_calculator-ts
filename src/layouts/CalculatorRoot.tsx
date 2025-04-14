import React from "react";
import CalculatorHeader from "../components/CalculatorHeader";
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
