import React from "react";

const Card = ({ heading, image, time, price, rating, location }) => {
  return (
    <div className="card-item">
      <div className="image-container">
        <img src={image} alt="" />
      </div>
      <div className="details">
        <h3 className="title">{heading}</h3>
        <p className="time">
          {time} <span className="automobile">AUTOMOBILE</span>
        </p>
      </div>
      <div className="location">
        <p>EV</p>
        <p className="realoc">{location}</p>
      </div>
      <div className="info">
        <p className="rating">{rating}</p>
        <p className="price">{price}</p>
      </div>
      <div className="btn">
        <button className="buy-button">Buy Now</button>
      </div>
    </div>
  );
};

export default Card;
