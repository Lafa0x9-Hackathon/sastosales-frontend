import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import  "../CompletePayment/CompletePayment.css"
import Payment from'../assets/payment.png'

const orderSummaryData ={
  seller:{
    name:"Ram Prasad Funal",
    product: "Bullet Bike-350cc(32LL)"
  },
  items:[
    {name:"Subtotal", price:"Rs. 842.00"},
    {name:"Coupan Discount", price:"13%"}
  ],
  total:"Rs. 951.46"
}

const CompletePayment = () => {
  const[paymentComplete, setPaymentComplete]=useState(false);
  const navigate = useNavigate();

  const handleCompletePayment=()=>{

    setPaymentComplete(true);

    navigate('/confirmation');
  }
  return (
    <>
    <p id="main">Payment</p>
    <div className="payment-container">
    
        <img className="image"src={Payment}/> 
        <div className='text'>
        <span className='seller'>Seller by: </span>
        <span className='name'> {orderSummaryData.seller.name}</span>
        <br></br>
        <p id ='bullet'>{orderSummaryData.seller.product}</p>
        </div>
        
        
    </div>
        
        <hr ></hr>
        <p id="order">Order Summary</p>
        {orderSummaryData.items.map((item, index)=>(
          <div className='subtotal-container' key={index}>
          <p className='subtotal'>{item.name}</p>
          <p className='price'>{item.price}</p>
        </div>
        ))}
        
        {/* <div className='subtotal-container'>
          <p className='subtotal'>Coupan Discount</p>
          <p className='price'>13%</p>
        </div> */}
        <hr></hr>
        <br></br>
        <div className='subtotal-container'>
          <p className='total'>Total:</p>
          <p className='total-price'>
            {orderSummaryData.total}
          </p>
        </div>

        {paymentComplete? (
          <p>Your payment has been sucessfully completed!</p>

        ):(
          <button type="submit" onClick={handleCompletePayment}>Complete Payment</button>
        )}
        
       
    </>
  )
}
export default CompletePayment;
