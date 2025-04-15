import React, { useState, useEffect } from "react";
import User from "../../models/user";
import { useCalculator_Ctx } from "../../store/calculator-Context";

import { get } from "../../utils/http";
import { useUser_Ctx } from "../../store/user-Context";
import LoginForm from "../../components/forms/LoginForm";

const TEST_TOKEN = import.meta.env.VITE_TEST_TOKEN;

const USER_TEST = new User("user", "123");

//Data From Backend
type RawData = {
  seeds: RawDataSeeds[];
};

type RawDataSeeds = {
  id: number;
  name: number;
  weightPerSquareMeter: number;
  createdAt: Date;
};

//Data will uses in Frontend
export type Product = {
  id: number;
  name: number;
  weightPerSquareMeter: number;
};

const LoginPage: React.FC = () => {
  /* const { isUser_Login, set_Login_User, set_LogOut_User } = useCalculator_Ctx(); */

  const { set_Login_User, add_User_data } = useUser_Ctx();

  const [products, setProducts] = useState<Product[]>();
  const [error, setError] = useState<string | null>(null);

  /* console.log(USER_TEST);
  console.log(isUser_Login); */

  //Fetching data with token
  // "https://jsonplaceholder.typicode.com/posts"
  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const data = (await get<RawData>(
        "http://localhost:8081/seed/seeds",
        TEST_TOKEN
      )) as RawData;

      const { seeds } = data;

      //Convert and extract the fetched data from the backend, to the data will frontend app will use It
      const extractedData: Product[] = seeds.map((product) => {
        return {
          id: product.id,
          name: product.name,
          weightPerSquareMeter: product.weightPerSquareMeter,
        };
      });
      setProducts(extractedData);
      add_User_data(extractedData);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  }

  function testToken() {
    set_Login_User("TOKEN");
  }

  function handleUserData(email: string, password: string) {}

  console.log(products);
  return (
    <>
      <h1>Login Page</h1>
      <LoginForm handleUserData={handleUserData} />
      <button onClick={testToken}>Login</button>
      <button onClick={() => set_LogOut_User()}>Log Out</button>
    </>
  );
};

export default LoginPage;
