import React from "react";
import { Link } from "react-router-dom";
import { useUser_Ctx } from "../store/user-Context";
import HomeHeader from "../components/navigation/HomeHeader";

const HomePage: React.FC = () => {
  const { user_Token } = useUser_Ctx();

  /* console.log(user_data); */
  console.log(user_Token);

  return (
    <>
      <HomeHeader />
      <h1>Home Page</h1>
      <Link to="/calculator">
        <button>Calculator</button>
      </Link>
    </>
  );
};

export default HomePage;
