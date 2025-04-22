import React, { useState, useContext } from "react";
import { type Product } from "../types/shared";
interface ContextTypes {
  user_Token: string | null;
  set_Login_User: (v: string) => void;
  set_LogOut_User: () => void;
  user_data: Product[] | null | undefined;
  add_User_data: (v: Product[]) => void;
  remove_User_data: () => void;
}

const UserContext = React.createContext<ContextTypes | null>(null);

//Provider Component
const UserContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  //Define states
  const [userToken, setUserToken] = useState<string | null>(null);
  const [userData, setUserData] = useState<Product[]>();

  const loginUser = (v: string) => setUserToken(v);
  const logOutUser = () => setUserToken(null);

  const addUserData = (v: Product[]) => setUserData(v);
  const removeUserData = () => setUserData(undefined);

  const contextValues: ContextTypes = {
    user_Token: userToken,
    set_Login_User: loginUser,
    set_LogOut_User: logOutUser,

    user_data: userData,
    add_User_data: addUserData,
    remove_User_data: removeUserData,
  };

  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
// Custom Hook
export const useUser_Ctx = () => {
  const context = useContext(UserContext);
  if (context == null) {
    throw new Error("User CTX is null");
  }
  return context;
};
