import ProductDetails from "./Component/ProductDetails";
import { ShoppingCard } from "./Component/ShoppingCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
function App() {
  return (
    <div>
       <BrowserRouter>
  <Routes>
  <Route path="/" element={<ShoppingCard />} />
  <Route path="/product-details" element={<ProductDetails />} />
  </Routes>
  </BrowserRouter>
    </div>
   
  );
}



export default App
