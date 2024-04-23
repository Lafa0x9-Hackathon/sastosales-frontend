import React from "react";
import "./ProductAdded.css";

const ProductAdded = () => {
  return (
      <main className="mainproductadded-container">
      <figure>
        <img src="./frame.png" alt="frame" />
      </figure>
      <div className="ProductAdded-container">
        <h2 className="review-header">Review</h2>
        <div className="sections-container">
          <section className="first-section">
            <div>
              <label htmlFor="title">
                Title of Products <span>*</span>
              </label>
              <br />
              <textarea name="title" id="" cols="30" rows="10">
                Bullet Bike
              </textarea>
            </div>
            <div>
              <label htmlFor="Details">
                Details <span>*</span>
              </label>
              <br />
              <textarea name="details" id="" cols="30" rows="10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente eius nemo laudantium animi dolorem quaerat voluptatibus
                nisi culpa itaque. Velit architecto ea optio deserunt, inventore
                est! Id neque quidem impedit?
              </textarea>
            </div>
            <div>
              <label htmlFor="Specifications">
                Specifications <span>*</span>
              </label>
              <br />
              <textarea name="specs" id="" cols="30" rows="10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                odio, obcaecati cum voluptatibus amet nisi fugit facilis
                excepturi. Ipsam aspernatur ab officiis rem sunt voluptate
                dolorem commodi natus, ducimus ut?
              </textarea>
            </div>
          </section>
          <section className="second-section">
            <div>
              <label htmlFor="price">
                Price <span>*</span>
              </label>
              <br />
              <select name="price" id="">
                <option value="10,000 above">10,000 above</option>
                <option value="10,000 above">20,000 above</option>
                <option value="10,000 above">30,000 above</option>
              </select>
            </div>

            <div>
              <label htmlFor="condition">
                Condition <span>*</span>
              </label>
              <br />
              <select name="condition" id="">
                <option value="working">Working</option>
                <option value="perfect">Perfect</option>
                <option value="mild">Mild</option>
              </select>
            </div>

            <div>
              <label htmlFor="category">
                Category <span>*</span>
              </label>
              <br />
              <select name="category" id="">
                <option value="automobiles">Automobiles</option>
                <option value="gadgets">Gadgets</option>
                <option value="clothes">Clothes</option>
              </select>
            </div>
          </section>
          <section className="third-section">
            <div>
              <label htmlFor="city">
                City <span>*</span>
              </label>
              <br />
              <select name="city" id="">
                <option value="kathmandu">Kathmandu</option>
                <option value="lalitpur">Lalitpur</option>
                <option value="pokhara">Pokhara</option>
              </select>
            </div>

            <div>
              <label htmlFor="ward">Ward</label>
              <br />
              <select name="ward" id="">
                <option value="11">11</option>
                <option value="6">6</option>
                <option value="22">22</option>
              </select>
            </div>

            <div>
              <label htmlFor="payment">Payment Accept</label>
              <br />
              <select name="payment" id="">
                <option value="both">Both</option>
                <option value="cash on delivery">Cash on Delivery</option>
                <option value="prepaid">Prepaid</option>
              </select>
            </div>
          </section>
        </div>
      </div>
      <div className="productadded-btn">
      <button>Previous</button>
      <button>Next</button>
    </div>
    </main>

   
  );
};

export default ProductAdded;
