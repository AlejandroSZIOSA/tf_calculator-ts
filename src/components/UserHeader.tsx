import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./UserHeader.module.css";

const UserHeader: React.FC = () => {
  return (
    <header className={classes.UserHeader}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? classes.active : undefined)}
        end
      >
        Home
      </NavLink>
    </header>
  );
};

export default UserHeader;
