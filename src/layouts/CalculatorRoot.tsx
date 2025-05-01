import { type FC } from "react";
import CalculatorHeader from "../components/navigation/CalculatorHeader";
import { Outlet } from "react-router-dom";

const CalculatorRootLayout: FC = () => {
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
