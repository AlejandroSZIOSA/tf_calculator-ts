import { FC } from "react";
import NavBar from "./NavBar";
import { useUser_Ctx } from "../../store/user-Context";

const HomeHeader: FC = () => {
  const { user_Token } = useUser_Ctx();
  return (
    <header>
      {user_Token ? (
        <>
          <img
            src="/src/assets/icons/calculator.svg"
            onClick={() => alert("Figure clicked!")}
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
