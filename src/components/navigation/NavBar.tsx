import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";
import { useUser_Ctx } from "../../store/user-Context";
const NavBar: React.FC = () => {
  const { set_LogOut_User } = useUser_Ctx();

  //Set logOut User status
  function handleLogOutUser() {
    set_LogOut_User();
    localStorage.clear();
  }
  return (
    <nav>
      <ul className={classes.list}>
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
        <li>
          <button onClick={handleLogOutUser}>Log Out</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
