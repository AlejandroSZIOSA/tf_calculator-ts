import React from "react";
import { Outlet } from "react-router-dom";
import UserHeader from "../components/navigation/UserHeader";

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
