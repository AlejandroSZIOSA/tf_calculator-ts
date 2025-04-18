import { type FC } from "react";
import NavBar from "./NavBar";
import { useUser_Ctx } from "../../store/user-Context";
import { useNavigate } from "react-router-dom";

const HomeHeader: FC = () => {
  const { user_Token } = useUser_Ctx();
  const navigate = useNavigate();

  function handleClick() {
    navigate("/calculator");
  }

  return (
    <header style={{ display: "flex", flexDirection: "row" }}>
      {user_Token ? (
        <>
          <img
            src="/src/assets/icons/calculator.svg"
            onClick={handleClick}
            width={25}
            height={25}
          ></img>
          <NavBar />
        </>
      ) : (
        <NavBar />
      )}
    </header>
  );
};

export default HomeHeader;
