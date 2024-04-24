import React from "react";
import "../css/ProductDetailCartBody.css";

const ProductDetailCartBody = () => {
  return (
    <>
      <div className="Bodycontainer">
        <div className="lowerBody">
          <form>
            <div className="unitForm ">
              <label htmlFor="title">
                Title of Products<span>*</span>
              </label>

              <div className="specification">
                <ul>
                  <li>
                    <p>Types: sports</p>
                    <p>Kilometer Run: 7000</p>
                    <p>Make Year: 2022</p>
                    <p>Transmission: Automatic</p>
                    <p>Fuel: Petrol</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="unitForm">
              <label htmlFor="price">
                Condition <span>*</span>
              </label>
              <select id="price" name="price" required>
                <option value="good">good</option>
                <option value="damage">damage</option>
                <option value="workable">workable</option>
              </select>
            </div>

            <div className="unitForm">
              <label htmlFor="category">
                Payment Accept<span>*</span>
              </label>
              <select id="category" name="category" required>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="books">Books</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductDetailCartBody;
