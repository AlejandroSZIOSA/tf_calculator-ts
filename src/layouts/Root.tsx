import React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";

const RootLayout: React.FC = () => {
  return (
    <>
      <MainHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
