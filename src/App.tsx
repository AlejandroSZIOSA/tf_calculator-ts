import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import RootLayout from "./layouts/Root";
import HomePage from "./pages/Home";
import CalculatorRootLayout from "./layouts/CalculatorRoot";
import CalculatorPage from "./pages/Calculator";
import ResultsPage from "./pages/Results";
import LoginPage from "./pages/auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
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
