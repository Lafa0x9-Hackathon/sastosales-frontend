import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SignUpPage from './pages/SignUp/index';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
