import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
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
