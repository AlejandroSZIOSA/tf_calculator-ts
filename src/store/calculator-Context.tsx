import React, { useState } from "react";
//3
interface ContextTypes {
  isUser_Login: boolean;
  selected_Category: string;
  selected_Product: string;
}
//4
type ContextValuesObj = {
  isUser_Login: boolean;
  selected_Category: string;
  selected_Product: string;

  set_Login_User: () => void;
  set_Category: (value: string) => void;
  set_Product: (value: string) => void;
};
//1
const CalculatorContext = React.createContext<ContextTypes | undefined>(
  undefined
);

//2
const CalculatorContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isUserLogin, setIsUserLogin] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<string>("");

  const loginUser = () => setIsUserLogin(true);
  const setCategory = (t: string) => setSelectedCategory(t);
  const setProduct = (t: string) => setSelectedProduct(t);

  const contextValues: ContextValuesObj = {
    isUser_Login: isUserLogin,
    set_Login_User: loginUser,
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
