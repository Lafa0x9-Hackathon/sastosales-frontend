// import Login from "./Components/Login";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from "./components/navBar/navbar";
// import FilterPopUp from "./components/navBar/filterPopUp/filterPopUp";
import Review from "./components/review/review.jsx"
import Home from "./pages/Home";
import ProductsPage from "./pages/Products";
import SignUpPage from "./pages/SignUp";
import AddProductPage from "./pages/AddProduct";
import ProductAdded from "./components/ProductAdded/ProductAdded.jsx";

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
  {
    path: "/nav",
    element: <Navbar />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: "/review",
    element: <Review />,
    errorElement: <div>404 Not Found</div>
  },

  {
    path: "/ProductAdded",
    element: <ProductAdded />,
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
