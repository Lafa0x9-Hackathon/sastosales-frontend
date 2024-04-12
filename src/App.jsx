import React from "react";
import Card from "./Components/Card";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="cardcollection">
          <Card
            heading="Af-1 White Interlocked Sneakers For Women By Jutta Collection"
            image="public/bike.jpg"
            time="Feb 13th, 2024 at 11:15"
            location="Bhadrapur"
            rating="4.6 Seller"
            price="Rs. 852"
          />
          <Card
            heading="Af-1 White Interlocked Sneakers For Women By Jutta Collection"
            image="public/avg.jpg"
            time="Feb 13th, 2024 at 11:15"
            location="Bhadrapur"
            rating="4.6 Seller"
            price="Rs. 852"
          />

          <Card
            heading="Af-1 White Interlocked Sneakers For Women By Jutta Collection"
            image="public/bull8.jpg"
            time="Feb 13th, 2024 at 11:15"
            location="Bhadrapur"
            rating="4.6 Seller"
            price="Rs. 852"
          />
          <Card
            heading="Af-1 White Interlocked Sneakers For Women By Jutta Collection"
            image="public/bicycle.jpg"
            time="Feb 13th, 2024 at 11:15"
            location="Bhadrapur"
            rating="4.6 Seller"
            price="Rs. 852"
          />
          <Card
            heading="Af-1 White Interlocked Sneakers For Women By Jutta Collection"
            image="public/bicycle.jpg"
            time="Feb 13th, 2024 at 11:15"
            location="Bhadrapur"
            rating="4.6 Seller"
            price="Rs. 852"
          />
        </div>
        <div className="ads">Ads</div>
      </div>
    </div>
  );
};

export default App;
