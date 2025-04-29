import { type FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CategoryPicker from "../components/calculator/CategoryPicker";
import ProductPicker from "../components/calculator/ProductPicker";
import CalculateArea from "../components/calculator/CalculateArea";
import { useUser_Ctx } from "../store/user-Context";
import classes from "./Calculator.module.css";

type Category = {
  category: string;
};

type Product = {
  product: string;
};
const CalculatorPage: FC = () => {
  const navigate = useNavigate();
  const { user_data } = useUser_Ctx();

  const [areaResult, setAreaResult] = useState<number>(0);
  const [isCalculateBtnDisabled, setIsCalculateBtnDisabled] =
    useState<boolean>(true);
  const [pickerCategoryValue, setPickerCategoryValue] = useState<Category>({
    category: "",
  });
  const [pickerProductValue, setPickerProductValue] = useState<Product>({
    product: "",
  });

  useEffect(() => {
    if (areaResult === 0) {
      setIsCalculateBtnDisabled(true);
      return;
    }

    if (
      pickerCategoryValue.category === "" ||
      pickerProductValue.product === ""
    ) {
      setIsCalculateBtnDisabled(true);
    } else {
      setIsCalculateBtnDisabled(false);
    }
  }, [areaResult, pickerCategoryValue, pickerProductValue]);

  function handleCalculateBtn() {
    navigate("/calculator/results", {
      state: {
        subTotalArea: areaResult,
        productSelected: pickerProductValue.product,
      },
    });
  }

  if (!user_data) return <h1>NO USER DATA</h1>;

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Calculator</h1>
      <CalculateArea useAreaResult={{ areaResult, setAreaResult }} />

      <CategoryPicker
        usePicker={{ pickerCategoryValue, setPickerCategoryValue }}
      />

      <p>{pickerCategoryValue.category}</p>

      <ProductPicker
        usePicker={{ pickerProductValue, setPickerProductValue }}
        categorySelected={pickerCategoryValue.category}
      />

      <p>{pickerProductValue.product}</p>

      <button disabled={isCalculateBtnDisabled} onClick={handleCalculateBtn}>
        Calculate
      </button>
    </div>
  );
};

export default CalculatorPage;
