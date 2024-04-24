import React from "react";
import "./css/ProductDetailCart.css";
import ProductDetailCartHeader from "./compontnts/ProductDetailCartHeader";
import ProductDetailCartBody from "./compontnts/ProductDetailCartBody";
import Pegination from "./compontnts/pegination";
const BasicProductDetails = () => {
  return (
    <>
      <section>
        <div className="main_container">
          <div className="line">
            <img src="/public/image/image.png" alt="image" />
          </div>
          <div className="basic_product_detail">
            <div className="bodeHeader">
              <ProductDetailCartHeader />
            </div>

            <div className="Bodycontainer">
              <ProductDetailCartBody />

              <Pegination />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BasicProductDetails;
