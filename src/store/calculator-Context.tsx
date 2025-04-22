import {
  type FC,
  createContext,
  type ReactNode,
  useState,
  useContext,
} from "react";
//3
interface ContextTypes {
  selected_Category: string;
  selected_Product: string;
  set_Category: (value: string) => void;
  set_Product: (value: string) => void;
}

//1
const CalculatorContext = createContext<ContextTypes | null>(null);

//2
const CalculatorContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<string>("");

  const setCategory = (text: string) => setSelectedCategory(text);
  const setProduct = (text: string) => setSelectedProduct(text);

  const contextValues: ContextTypes = {
    selected_Category: selectedCategory,
    selected_Product: selectedProduct,
    set_Category: setCategory,
    set_Product: setProduct,
  };

  return (
    <CalculatorContext.Provider value={contextValues}>
      {children}
    </CalculatorContext.Provider>
  );
};
export default CalculatorContextProvider;
// Custom Hook
export const useCalculator_Ctx = () => {
  const context = useContext(CalculatorContext);
  if (context == null) {
    throw new Error(
      "useCalculator_Ctx must be used within a CalculatorContextProvider"
    );
  }
  return context;
};
