import { type FC } from "react";
import { NavLink } from "react-router-dom";
import classes from "./UserHeader.module.css";
import { ICON_SIZE_NAVBAR } from "../../utils/constants";

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
          width={ICON_SIZE_NAVBAR.width}
          height={ICON_SIZE_NAVBAR.height}
          alt="back_icon"
        />
      </NavLink>
    </header>
  );
};

export default UserHeader;
