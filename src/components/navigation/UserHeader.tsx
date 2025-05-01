import { type FC } from "react";
import { NavLink } from "react-router-dom";
import classes from "./UserHeader.module.css";

const UserHeader: FC = () => {
  return (
    <header className={classes.header}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? classes.active : undefined)}
        end
      >
        <img
          src="/src/assets/icons/back.svg"
          width={25}
          height={25}
          alt="back_icon"
        />
      </NavLink>
    </header>
  );
};

export default UserHeader;
