import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./CalculatorHeader.module.css";

const CalculatorHeader: React.FC = () => {
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
              end
            >
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default CalculatorHeader;
