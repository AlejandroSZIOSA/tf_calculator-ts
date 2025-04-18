import { FC } from "react";
import { Link } from "react-router-dom";
import CalculateArea from "../components/calculator/CalculateArea";
import ProductSelection from "../components/calculator/ProductSelection";

const CalculatorPage: FC = () => {
  return (
    <div>
      <h2>Product Calculator</h2>
      {/* <CalculateArea /> */}
      <ProductSelection />

      <Link to="/calculator/results">
        <button>Results</button>
      </Link>
    </div>
  );
};

export default CalculatorPage;
