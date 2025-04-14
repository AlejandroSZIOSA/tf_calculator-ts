import React from "react";
import { Outlet } from "react-router-dom";
import UserHeader from "../components/UserHeader";

const UserRootLayout: React.FC = () => {
  return (
    <>
      <UserHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default UserRootLayout;
