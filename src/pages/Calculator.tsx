import { type FC, useState } from "react";
import { Link } from "react-router-dom";
import CategoryPicker from "../components/calculator/CategoryPicker";
import ProductPicker from "../components/calculator/ProductPicker";
import { useUser_Ctx } from "../store/user-Context";

type Category = {
  category: string;
};

type Product = {
  product: string;
};
const CalculatorPage: FC = () => {
  const { user_data } = useUser_Ctx();

  const [pickerCategoryValue, setPickerCategoryValue] = useState<Category>({
    category: "",
  });

  const [pickerProductValue, setPickerProductValue] = useState<Product>({
    product: "",
  });

  if (!user_data) return <h1>NO USER DATA</h1>;

  return (
    <div>
      <h2>Product Calculator</h2>
      {/* <CalculateArea /> */}
      <CategoryPicker
        usePicker={{ pickerCategoryValue, setPickerCategoryValue }}
      />
      <ProductPicker
        usePicker={{ pickerProductValue, setPickerProductValue }}
        categorySelected={pickerCategoryValue.category}
      />

      <p>{pickerProductValue.product}</p>
      {/* <p>{pickerCategoryValue.category}</p> */}
      {/* <Link to="/calculator/results">
        <button>Calculate</button>
      </Link> */}
    </div>
  );
};

export default CalculatorPage;
