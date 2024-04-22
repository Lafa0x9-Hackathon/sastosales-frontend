import React from "react";
// import { BsFillCameraFill } from "react-icons/bs";
// import { FaCartShopping } from "react-icons/fa6";
// import { IoLocationSharp } from "react-icons/io5";
// import { MdOutlineStar } from "react-icons/md";
// import { WiTime9 } from "react-icons/wi";

const Card = ({ heading, image, time, price, rating, location }) => {

    const handleBuy = ()=>{
   
      
    }


  return (
    <div className="card-item">
      <div className="image-container">
        <img src={image} alt="" />
        <span className="badge">
          {/* <BsFillCameraFill /> 1 */}
        </span>
      </div>
      <div className="details">
        <h3 className="title">{heading}</h3>
        <p className="time">
          {/* <WiTime9 className="icon" /> */}
          {time} <span className="automobile">AUTOMOBILE</span>
        </p>
      </div>
      <div className="location">
        <p>EV</p>
        <p className="realoc">
          {/* <IoLocationSharp className="icon" /> */}
          {location}
        </p>
      </div>
      <div className="info">
        <div className="rating">
          {/* <MdOutlineStar className="star" /> */}
          <span className="seller-rating">{rating}</span>
        </div>
        <p className="price">{price}</p>
      </div>
      <div className="btn">
        <button className="buy-button" onClick={handleBuy}>Buy Now</button>

        {/* <FaCartShopping className="cart" /> */}
      </div>
    </div>
  );
};

export default Card;
