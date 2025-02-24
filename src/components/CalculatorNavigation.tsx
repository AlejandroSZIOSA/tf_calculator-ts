import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./CalculatorNavigation.module.css";

const CalculatorNavigation: React.FC = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default CalculatorNavigation;
