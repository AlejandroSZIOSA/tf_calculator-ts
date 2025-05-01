import { type FC } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import classes from "./CalculatorHeader.module.css";
import { ICON_SIZE_NAVBAR } from "../../utils/constants";

const CalculatorHeader: FC = () => {
  const navigate = useNavigate();

  // Function to handle back button click and navigate to previous page if available, otherwise to home page.
  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <header className={classes.header}>
      <NavLink
        to="/"
        onClick={handleBack}
        className={({ isActive }) => (isActive ? classes.active : undefined)}
        end
      >
        <img
          src="/src/assets/icons/back.svg"
          width={ICON_SIZE_NAVBAR.width}
          height={ICON_SIZE_NAVBAR.height}
          alt="home_icon"
        />
      </NavLink>
    </header>
  );
};

export default CalculatorHeader;
