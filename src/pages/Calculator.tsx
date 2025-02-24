import React from "react";
import { Link } from "react-router-dom";

const CalculatorPage: React.FC = () => {
  return (
    <>
      <h1>Calculator Page</h1>
      <Link to="/calculator/results">
        <button>Results</button>
      </Link>
    </>
  );
};

export default CalculatorPage;
