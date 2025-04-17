import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";
import { useUser_Ctx } from "../../store/user-Context";
const NavBar: React.FC = () => {
  const { set_LogOut_User, user_Token } = useUser_Ctx();

  function handleLogOutUser() {
    set_LogOut_User();
    localStorage.clear();
  }

  let content: React.ReactNode;

  if (localStorage.length !== 0) {
    content = (
      <li>
        <NavLink
          to="/user/login"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          Login
        </NavLink>
      </li>
    );
  }

  if (user_Token) {
    content = (
      <li>
        <button onClick={handleLogOutUser}>Log Out</button>
      </li>
    );
  }
  if (!user_Token && localStorage.length === 0) {
    content = (
      <>
        <li>
          <NavLink
            to="/user/login"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user/signup"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Sign-up
          </NavLink>
        </li>
      </>
    );
  }

  return (
    <nav>
      <ul className={classes.list}>{content}</ul>
    </nav>
  );
};

export default NavBar;
