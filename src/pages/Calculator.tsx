import { FC, useState } from "react";
import { Link } from "react-router-dom";
import ProductPicker from "../components/calculator/ProductPicker";
import FinderPicker from "../components/calculator/FinderPicker";

type Category = {
  category: string;
};
const CalculatorPage: FC = () => {
  const [pickerValue, setPickerValue] = useState<Category>({
    category: "",
  });

  return (
    <div>
      <h2>Product Calculator</h2>
      {/* <CalculateArea /> */}
      <ProductPicker usePicker={{ pickerValue, setPickerValue }} />
      <FinderPicker categorySelected={pickerValue.category} />
      <Link to="/calculator/results">
        <button>Results</button>
      </Link>
    </div>
  );
};

export default CalculatorPage;
