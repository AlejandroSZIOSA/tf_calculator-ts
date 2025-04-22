import { FC, useState } from "react";
import { Link } from "react-router-dom";
import CategoryPicker from "../components/calculator/CategoryPicker";
import ProductPicker from "../components/calculator/ProductPicker";
import { useUser_Ctx } from "../store/user-Context";

type Category = {
  category: string;
};
const CalculatorPage: FC = () => {
  const { user_data } = useUser_Ctx();

  const [pickerCategoryValue, setPickerCategoryValue] = useState<Category>({
    category: "",
  });

  if (!user_data) return <h1>NO USER DATA</h1>;

  return (
    <div>
      <h2>Product Calculator</h2>
      {/* <CalculateArea /> */}
      <CategoryPicker
        usePicker={{ pickerCategoryValue, setPickerCategoryValue }}
      />
      <ProductPicker categorySelected={pickerCategoryValue.category} />
      <Link to="/calculator/results">
        <button>Results</button>
      </Link>
    </div>
  );
};

export default CalculatorPage;
