import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./CalculatorHeader.module.css";
import { ICON_SIZE_NAVBAR } from "../../utils/constants";

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
          width={ICON_SIZE_NAVBAR.width}
          height={ICON_SIZE_NAVBAR.height}
          alt="home_icon"
        />
      </NavLink>
    </header>
  );
};

export default CalculatorHeader;
