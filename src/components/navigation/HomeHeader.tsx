import { FC } from "react";
import NavBar from "./NavBar";
import { useUser_Ctx } from "../../store/user-Context";
import NavBar_Test from "./NavBar_Test";
const HomeHeader: FC = () => {
  const { user_Token } = useUser_Ctx();
  return (
    <header style={{ display: "flex", flexDirection: "row" }}>
      {user_Token ? (
        <>
          <img
            src="/src/assets/icons/calculator.svg"
            onClick={() => alert("Figure clicked!")}
            width={25}
            height={25}
          ></img>
          <NavBar_Test />
        </>
      ) : (
        <NavBar_Test />
      )}
    </header>
  );
};

export default HomeHeader;
