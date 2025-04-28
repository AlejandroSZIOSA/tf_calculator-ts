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
        <img
          src="/src/assets/icons/home.svg"
          width={25}
          height={25}
          alt="home_icon"
        />
      </NavLink>
    </header>
  );
};

export default CalculatorHeader;
