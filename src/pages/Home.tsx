import React from "react";
import { Link } from "react-router-dom";
import { useUser_Ctx } from "../store/user-Context";

const HomePage: React.FC = () => {
  const { user_Token, user_data } = useUser_Ctx();

  console.log(user_Token);
  console.log(user_data);
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/calculator">
        <button>Calculator</button>
      </Link>
    </>
  );
};

export default HomePage;
