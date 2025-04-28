import { type FC } from "react";
import { useUser_Ctx } from "../store/user-Context";
import HomeHeader from "../components/navigation/HomeHeader";
import HomeFooter from "../components/HomeFooter";
import classes from "./HomePage.module.css";

const HomePage: FC = () => {
  const { user_Token } = useUser_Ctx();
  console.log(user_Token);

  return (
    <div>
      <HomeHeader />
      <main>
        <h1>About Us</h1>
      </main>
      <HomeFooter />
    </div>
  );
};

export default HomePage;
