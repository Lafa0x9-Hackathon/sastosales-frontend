import React from 'react';
import Card from './components/Card';
import './App.css';

const App = () => {
  // Define your card data
  const data = [
  {
    heading: 'Af-1 White Interlocked Sneakers For Women By Jutta Collection',
    image: 'public/bike.jpg',
    time: 'Feb 13th, 2024 at 11:15',
    location: 'Bhadrapur',
    rating: '4.6 Seller',
    price: 'Rs. 852'
  },
  {
    heading: 'Af-1 White Interlocked Sneakers For Women By Jutta Collection',
    image: 'public/avg.jpg',
    time: 'Feb 13th, 2024 at 11:15',
    location: 'Bhadrapur',
    rating: '4.6 Seller',
    price: 'Rs. 852'
  },
  {
    heading: 'Af-1 White Interlocked Sneakers For Women By Jutta Collection',
    image: 'public/bull8.jpg',
    time: 'Feb 13th, 2024 at 11:15',
    location: 'Bhadrapur',
    rating: '4.6 Seller',
    price: 'Rs. 852'
  },
  {
    heading: 'Af-1 White Interlocked Sneakers For Women By Jutta Collection',
    image: 'public/bicycle.jpg',
    time: 'Feb 13th, 2024 at 11:15',
    location: 'Bhadrapur',
    rating: '4.6 Seller',
    price: 'Rs. 852'
  },
  {
    heading: 'Af-1 White Interlocked Sneakers For Women By Jutta Collection',
    image: 'public/bicycle.jpg',
    time: 'Feb 13th, 2024 at 11:15',
    location: 'Bhadrapur',
    rating: '4.6 Seller',
    price: 'Rs. 852'
  }
];


  return (
    <div className="container">
      <div className="row">
        <div className="cardcollection">
          {/* Map through the data and create a card for each item */}
          {data.map((card, index) => (
            <Card
              key={index} // Always add a unique key when mapping through arrays in React
              heading={card.heading}
              image={card.image}
              time={card.time}
              location={card.location}
              rating={card.rating}
              price={card.price}
            />
          ))}
        </div>
        <div className="ads">Ads</div>
      </div>
    </div>
  );
};

export default App;
