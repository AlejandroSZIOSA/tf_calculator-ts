import React, { useState, type ReactNode } from "react";
import { get } from "../../utils/http";
import ENDPOINTS from "../../utils/constants";
import { useUser_Ctx } from "../../store/user-Context";
import { type Product } from "../../types/shared";
import LoginForm from "../../components/forms/LoginForm";
import classes from "./Login.module.css";

//Data From Backend
type RawData = {
  seeds: RawDataSeeds[];
};

type RawDataSeeds = {
  id: string;
  name: string;
  weightPerSquareMeter: number;
  createdAt: Date;
};

const LoginPage: React.FC = () => {
  const { set_Login_User, add_User_data } = useUser_Ctx();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  function handleUserData(token: string) {
    if (token) {
      set_Login_User(token); //Ctx
      fetchProducts(token);
    }
  }

  async function fetchProducts(token: string) {
    try {
      setMessage(null);
      setError(null);
      setIsLoading(true);
      const data = (await get<RawData>(ENDPOINTS.GET_SEEDS, token)) as RawData;
      const { seeds } = data;
      const extractedData: Product[] = seeds.map((product) => {
        return {
          id: product.id,
          name: product.name,
          weightPerSquareMeter: product.weightPerSquareMeter,
        };
      });
      add_User_data(extractedData); //Ctx
      setMessage("Data fetched successfully");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  //Loading or error message JSX conditionals
  let content: ReactNode;

  if (isLoading) {
    content = <p>Loading Data...</p>;
  }

  if (error) {
    content = <p>Error: {error}</p>;
  }

  if (message) {
    content = <p>{message}</p>;
  }

  return (
    <div className={classes.container}>
      <h1>Log-In</h1>
      <div style={{ padding: "20px" }}>
        <img
          src="/src/assets/images/login.png"
          width={220}
          height={220}
          alt="login_img"
        />
      </div>
      {content}
      <LoginForm handleUserData={handleUserData} />
    </div>
  );
};

export default LoginPage;
