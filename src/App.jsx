import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import ProductsPage from "./pages/Products";
import SignUpPage from "./pages/SignUp";
import AddProductPage from "./pages/AddProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/products/add",
    element: <AddProductPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
