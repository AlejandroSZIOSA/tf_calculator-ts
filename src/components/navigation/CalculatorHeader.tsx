import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./CalculatorHeader.module.css";

const CalculatorHeader: React.FC = () => {
  return (
    <header className={classes.header}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? classes.active : undefined)}
        end
      >
        Home
      </NavLink>
      <button>Log Out</button>
    </header>
  );
};

export default CalculatorHeader;
