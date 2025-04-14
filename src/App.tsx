import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import UserRootLayout from "./layouts/UserRoot";
import HomePage from "./pages/Home";
import CalculatorRootLayout from "./layouts/CalculatorRoot";
import CalculatorPage from "./pages/Calculator";
import ResultsPage from "./pages/Results";
import LoginPage from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <HomePage />,
  },
  {
    path: "/user",
    element: <UserRootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <Signup /> },
    ],
  },
  {
    path: "calculator",
    element: <CalculatorRootLayout />,
    children: [
      { index: true, element: <CalculatorPage /> },
      {
        /* index: true, */
        path: "results",
        element: <ResultsPage />,
      },
    ],
  },
]);

function App() {
  //console.log(USER_TEST);
  return <RouterProvider router={router}></RouterProvider>;
}
export default App;
