import React, { useState, useContext } from "react";
//3
interface ContextTypes {
  isUser_Login: boolean;
  selected_Category: string;
  selected_Product: string;
  set_Login_User: () => void;
  set_LogOut_User: () => void;
  set_Category: (value: string) => void;
  set_Product: (value: string) => void;
}

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
  const logOutUser = () => setIsUserLogin(false);

  const setCategory = (text: string) => setSelectedCategory(text);
  const setProduct = (text: string) => setSelectedProduct(text);

  const contextValues: ContextTypes = {
    isUser_Login: isUserLogin,
    selected_Category: selectedCategory,
    selected_Product: selectedProduct,
    set_Login_User: loginUser,
    set_LogOut_User: logOutUser,
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
  if (!context) {
    throw new Error(
      "useCalculator_Ctx must be used within a CalculatorContextProvider"
    );
  }
  return context;
};
