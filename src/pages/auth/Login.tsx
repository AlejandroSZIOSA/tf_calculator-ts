import React from "react";
import User from "../../models/user";
import { useCalculator_Ctx } from "../../store/calculator-Context";

const USER_TEST = new User("user", "123");

const LoginPage: React.FC = () => {
  const { isUser_Login, set_Login_User, set_LogOut_User } = useCalculator_Ctx();

  console.log(USER_TEST);
  console.log(isUser_Login);

  return (
    <>
      <h1>Login Page</h1>
      <button onClick={() => set_Login_User()}>Login</button>
      <button onClick={() => set_LogOut_User()}>Log Out</button>
    </>
  );
};

export default LoginPage;
