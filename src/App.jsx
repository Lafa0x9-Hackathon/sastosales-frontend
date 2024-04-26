
import React from "react";

// import Login from "./Components/Login";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from "./Components/navBar/navbar.jsx";
// import FilterPopUp from "./Components/navBar/filterPopUp/filterPopUp";
import Review from "./Components/review/review.jsx";
import Home from "./pages/Home";
import ProductsPage from "./pages/Products";
import SignUpPage from "./pages/SignUp";
import AddProductPage from "./pages/AddProduct";
import ProductAdded from "./Components/ProductAdded/ProductAdded.jsx";
import AdsBy from "./Components/Owner/AdsBy.jsx";
import Confirmation from "./Components/CompletePayment/Confirmation.jsx";
import CompletePayment from "./Components/CompletePayment/CompletePayment.jsx";
// import Suggestions  from "./Components/suggestions/Suggestions";
import BasicProductDetails from "./Components/ProductAdded/compontnts/ProductDetailCartBody";

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
    path: "/addProduct",
    element: <ProductAdded />,
  },

  {
    path: "/AdsBy",
    element: <AdsBy />
  },

  {
    path:'/CompletePayment',
    element: <CompletePayment />
  },
   {
    path:'/',
    element: <Confirmation />
  },
  // {
  //   path:'/Suggestions',
  //   element: <Suggestions />
  // },

  {
    path: '/BasicProductDetails',
    element: <BasicProductDetails />
  },


 
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
