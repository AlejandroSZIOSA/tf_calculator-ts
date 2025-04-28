import { type FC } from "react";
import NavBar from "./NavBar";
import { useUser_Ctx } from "../../store/user-Context";
import { useNavigate } from "react-router-dom";
import classes from "./HomeHeader.module.css";

const HomeHeader: FC = () => {
  const { user_Token } = useUser_Ctx();
  const navigate = useNavigate();

  function handleClick() {
    navigate("/calculator");
  }

  return (
    <header className={classes.header}>
      {user_Token ? (
        <>
          <div style={{ marginLeft: "180px" }}>
            <img
              src="/src/assets/icons/calculator.svg"
              onClick={handleClick}
              width={25}
              height={25}
            ></img>
          </div>
          <NavBar />
        </>
      ) : (
        <NavBar />
      )}
    </header>
  );
};

export default HomeHeader;
