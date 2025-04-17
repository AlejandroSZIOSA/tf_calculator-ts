import { type ReactNode, FC, useState } from "react";
import { useUser_Ctx } from "../../store/user-Context";
import { NavLink } from "react-router-dom";
import classes from "./NavBar_Test.module.css";
const NavBar_Test: FC = () => {
  const { set_LogOut_User, user_Token } = useUser_Ctx();

  const [isOpen, setIsOpen] = useState(false);
  /* const { user, log_Out } = useAuthUser();
  const { clean_Questions_List } = useQuestions();
 */

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

  return (
    <nav className={classes.navbar}>
      <ul>
        {!user_Token
          ? changeLockIcon("/src/assets/icons/lock.svg")
          : changeLockIcon("/src/assets/icons/unlock.svg")}
        <li
          className={`${classes.menuItems} ${
            isOpen ? classes.open : undefined
          }`}
        >
          <ul>
            <li>{!user_Token && localStorage.length === 0 && menuItems}</li>
            {user_Token && <li onClick={handleLogOutUser}>LogOut</li>}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar_Test;
