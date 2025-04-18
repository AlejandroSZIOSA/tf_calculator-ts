import { type ReactNode, FC, useState } from "react";
import { useUser_Ctx } from "../../store/user-Context";
import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";
const NavBar_Test: FC = () => {
  const { set_LogOut_User, user_Token } = useUser_Ctx();
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the lock icon menu
  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  //A Function with JSX :)
  function changeLockIcon(iconUrl: string) {
    return (
      <li className={classes.toggleMenu} onClick={toggleMenu}>
        <img src={`${iconUrl}`} width={25} height={25} alt="lockIcon"></img>
      </li>
    );
  }

  //Set logOut User status
  function handleLogOutUser() {
    set_LogOut_User();
    localStorage.clear();
  }

  //A Constant with JSX :)
  const menuItems: ReactNode = (
    <>
      <NavLink to="/user/login" className={classes.NavLink}>
        Login
      </NavLink>
      <NavLink to="/user/signUp" className={classes.NavLink}>
        SignUp
      </NavLink>
    </>
  );

  let dynamicMenuItems: ReactNode;

  if (!user_Token) {
    dynamicMenuItems = <li>{menuItems}</li>;
  } else {
    dynamicMenuItems = <li onClick={handleLogOutUser}>LogOut</li>;
  }

  return (
    <nav className={classes.navbar}>
      <ul>
        {/* calculator icon shows when user is login */}
        {!user_Token
          ? changeLockIcon("/src/assets/icons/lock.svg")
          : changeLockIcon("/src/assets/icons/unlock.svg")}
        <li
          className={`${classes.menuItems} ${
            isOpen ? classes.open : undefined
          }`}
        >
          <ul>
            {/* <li>{!user_Token && localStorage.length === 0 && menuItems}</li>
            {user_Token && <li onClick={handleLogOutUser}>LogOut</li>} */}
            {dynamicMenuItems}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar_Test;
