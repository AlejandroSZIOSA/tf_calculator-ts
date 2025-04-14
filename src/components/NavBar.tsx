import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul className={classes.list}>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Sign-up
          </NavLink>
        </li>
        <li>
          <button>Log Out</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
