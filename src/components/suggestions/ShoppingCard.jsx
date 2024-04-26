import React from 'react';
import './ShoppingCard.css';
import bulletbike from '../assets/bulletbike.jpg';
 import profile from '../assets/profile.png';
 import cart from '../assets/ShoppingCartSimple.png'
import location from '../assets/location.png';
import user from '../assets/User.png';
import bar from '../assets/bar-chart.png';
import star from '../assets/Star.png';
import vector from '../assets/Vector.png';
import { Link } from 'react-router-dom';
//  import ProductDetails from './ProductDetails';

const ShoppingCartData={
  buyer:{
    name:"Ram Prasad Fuial"
  },
  product:{
    review:"4.5(10)",
    price:"Rs.842"
  }
}

export const ShoppingCard = () => {
  return (
    <> 
      <h2>Shopping Cart</h2>
      <div className="shopping-cart">

{/* Triangle shape */}
<div className="triangle"></div>
 {/* Cart icon */}
          <div className="cart-icon">
          <img src={cart} alt="Cart" />
          </div>

        <p className="paragraph">Bullet Bike - 350 (32 lot)</p>
          
          
          <div className="figure">
                <img src= {bulletbike} alt ="example"/>
                <p>There are many variations of passages of Lorem ipsum available, but the majority have suffered alteration in some form,by injected hun........</p>
            </div>
          <div className="category">
          <button>AUTOMOBILES</button>
        </div>


        <div className="profile">
          <img src={profile} alt="profile-icon" />
          <p>Add by</p> 
          </div>
 
          <div className="name">
          <p>{ShoppingCartData.buyer.name} </p>
          </div>

          <div className='review'>
          <p><img src={star} />{ShoppingCartData.product.review}  </p>
          </div>
         

        <div className="options">
          <p><img src={user} /> 2 views</p>
          <p><img src={bar} />Working</p>
          <p><img src={location} /> Bhadrapur</p>
        </div>
        
          
          <div className='chat'>
          <p> {ShoppingCartData.product.price} </p>
          <button>
            <img src={vector}/> Chat
          </button>
         
          </div>

          <div className='line'>
            </div>
          
          <div className='buy'>
          <button >
            <img src = {cart}/>Buy This Product</button>
          </div>


          <div className='product'>
          <Link to="/product-details">
          <button >Product Details</button>
          
           </Link>
          

          </div>


    </div>
     

    </>
  )
}
