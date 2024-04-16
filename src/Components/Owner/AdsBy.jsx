import React from "react";
import "./AdsBy.css";
import profile from "../../assets/Images/profile.png";
import star from "../../assets/Images/Star.png";
import chat from "../../assets/Images/chat.png";
import rating1 from "../../assets/Images/rating1.png";
import rating2 from "../../assets/Images/rating2.png";
import rating3 from "../../assets/Images/rating3.png";
import rating4 from "../../assets/Images/rating4.png";
import rating5 from "../../assets/Images/rating5.png";
const AdsBy = () => {
  return (
    <div className="adsContainer">
      <div className="heading">
        <div className="user">
          <img src={profile} alt="profile" className="profile" />

          <div>
            <div className="adsby">Ads By</div>
            <div className="name">Hari Prasad Fuinal</div>
          </div>
          <div className="average-rating">
            <div className="star">
              <img src={star} alt="average rating" />
            </div>
            <span className="rate">4.5</span>
            <span className="number">(7)</span>
          </div>
        </div>
        <hr />
      </div>
      <div className="content">
        <div className="title">Location</div>
        <div className="description">
          Shankhadar Shakwa statue, Purano Thimi- Naya Thimi, Balkumari,
          Madhyapur Thimi Municipality, Bhaktapur
        </div>
      </div>
      <hr />
      <div className="content">
        <div className="title">Ads on</div>
        <div className="description">6 hours ago</div>
      </div>
      <hr />
      <div className="content">
        <div className="title">Condition</div>
        <div className="description">Working</div>
      </div>
      <hr />
      <div className="content">
        <div className="title">Price</div>
        <div className="description">Rs. 842</div>
      </div>
      <hr />
      <div className="content">
        <div className="title">Payment</div>
        <div className="description">Cash on Delivery</div>
      </div>
      <hr />
      <div className="content">
        <div className="title">Specifications</div>
        <div className="description">
          <ul className="specifications">
            <li className="item">Types : Sport</li>
            <li className="item">Run : 7000 </li>
            <li className="item">Make Year : 2022 </li>
            <li className="item">Transmission : Automatic</li>
            <li className="item">Fuel : Petrol</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="lowerBox">
        <div className="btns">
          <button className="purchaseBtn">Purchase</button>
          <button className="addBtn">Add to Card</button>
          <div className="chat">
            <img src={chat} alt=" chat icon" className="chatIcon" />
            <span className="text">Chat </span>
          </div>
        </div>
        <div className="average">
          <div className="star">
            <img src={star} alt="average rating" />
          </div>
          <span className="rate">4.5 Review on Seller</span>
          <span className="number">(7 Review)</span>
        </div>
      </div>
      <div className="rating-item">
        <div className="rating">
          <div className="star">
            <img src={star} alt="average rating" />
          </div>
          <span className="number">5</span>
          <img src={rating5} alt="five rating" className="line" />
        </div>
        <div className="rating">
          <div className="star">
            <img src={star} alt="average rating" />
          </div>
          <span className="number">4</span>
          <img src={rating4} alt="five rating" className="line" />
        </div>
        <div className="rating">
          <div className="star">
            <img src={star} alt="average rating" />
          </div>
          <span className="number">3</span>
          <img src={rating3} alt="five rating" className="line" />
        </div>
        <div className="rating">
          <div className="star">
            <img src={star} alt="average rating" />
          </div>
          <span className="number">2</span>
          <img src={rating2} alt="five rating" className="line" />
        </div>
        <div className="rating">
          <div className="star">
            <img src={star} alt="average rating" />
          </div>
          <span className="number">1</span>
          <img src={rating1} alt="five rating" className="line" />
        </div>
      </div>
    </div>
  );
};

export default AdsBy;
