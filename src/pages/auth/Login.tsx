import React from "react";
import User from "../../models/user";

const USER_TEST = new User("user", "123");

const LoginPage: React.FC = () => {
  console.log(USER_TEST);
  return (
    <>
      <h1>Login Page</h1>
    </>
  );
};

export default LoginPage;
