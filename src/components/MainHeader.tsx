import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";
import NavBar from "./NavBar";

const MainHeader: React.FC = () => {
  return (
    <header className={classes.MainHeader}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? classes.active : undefined)}
        end
      >
        Home
      </NavLink>
      <NavBar />
    </header>
  );
};

export default MainHeader;
