import { type FC } from "react";
import { Link } from "react-router-dom";
import { useUser_Ctx } from "../store/user-Context";
import HomeHeader from "../components/navigation/HomeHeader";
import HomeFooter from "../components/HomeFooter";

const HomePage: FC = () => {
  const { user_Token } = useUser_Ctx();

  /* console.log(user_data); */
  console.log(user_Token);

  return (
    <>
      <HomeHeader />
      <main>
        <h1>Home Page</h1>
        <Link to="/calculator">
          <button>Calculator</button>
        </Link>
      </main>
      <HomeFooter />
    </>
  );
};

export default HomePage;
