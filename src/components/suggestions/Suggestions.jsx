import React from 'react'
 import './Suggestions.css'
 import Bike from '../../assets/bike.png'
 import Camera from '../../assets/camera.png'
 import Cycle from '../../assets/cycle.png'
 import Cart from '../../assets/cart.png'
 import Timer from '../../assets/timer.png'
 import Location from '../../assets/location.png'
import Star from '../../assets/Star.png'


 const setTime ={

    Date:"Feb 13th, 2024 at 11:15",
    location:"Bhadrapur",
    review:"4.6",
    name:"Seller",
    price:"RS.842"

 }
   
export const Suggestions = () => {
  return (
   <>

   <div className='top'>Suggestions</div> 
   <div className="container">
    
   <div className='suggest'>
      
        <div className='card'>
         <img  src={Bike} />
         <p id ="camera"><img src={Camera}/> 1</p>
         <p id ="bold"> AF-1 White interlocked Sneekers For Women By Jutta Collection</p>
          <p>
            <span>
                <img src ={Timer} /> {setTime.Date}
                    <button>AUTOMOBILE</button>
                    </span> 
                    </p>
         
          <p id ="location">
            EV
           <img src={Location}/>
           {setTime.location}
           </p> 
            
          <div className='rating'> 
             <p id='star'> <img src ={Star}  style={{ maxWidth: '20px', height: 'auto' }}/> </p>
             <p id='review'>{setTime.review}</p>
             <p id="name">{setTime.name}</p> 
             <p id ="price">{setTime.price}</p> 
          </div>


          <div className='bottom'>
          <button>Buy Now</button><img src={Cart} />
          </div>
          
   </div>
            
{/* 2nd card */}
        <div className='card'>
        <img src={Bike} alt="Bike" />
          <p id="camera"><img src={Camera} alt="Camera" /> 1</p>
          <p id="bold">AF-1 White interlocked Sneekers For Women By Jutta Collection</p>
          <p>
            <span>
              <img src={Timer} alt="Timer" /> {setTime.Date}
              <button>AUTOMOBILE</button>
            </span>
          </p>
          <p id="location">
            EV
            <img src={Location} alt="Location" />
            {setTime.location}
          </p>
          <div className='rating'>
            <p> <img src={Star} alt="Star"style={{ maxWidth: '20px', height: 'auto' }} /> </p>
            <p id='review'>{setTime.review}</p>
            <p id="name">{setTime.name}</p>
            <p id="price">{setTime.price}</p>
          </div>
          <div className='bottom'>
            <button>Buy Now</button><img src={Cart} alt="Cart" />
          </div>
        </div>
      


      {/* 3rd card */}
        <div className='card'>
        <img src={Cycle} alt="Bike" />
          <p id="camera"><img src={Camera} alt="Camera" /> 1</p>
          <p id="bold">AF-1 White interlocked Sneekers For Women By Jutta Collection</p>
          <p>
            <span>
              <img src={Timer} alt="Timer" /> {setTime.Date}
              <button>AUTOMOBILE</button>
            </span>
          </p>
          <p id="location">
            EV
            <img src={Location} alt="Location" />
            {setTime.location}
          </p>
          <div className='rating'>
            <p> <img src={Star} alt="Star"style={{ maxWidth: '20px', height: 'auto' }} /> </p>
            <p id='review'>{setTime.review}</p>
            <p id="name">{setTime.name}</p>
            <p id="price">{setTime.price}</p>
          </div>
          <div className='bottom'>
            <button>Buy Now</button><img src={Cart} alt="Cart" />
          </div>  
        </div>



        {/* 4th card */}
        <div className='card'>
        <img src={Cycle} alt="Bike" />
          <p id="camera"><img src={Camera} alt="Camera" /> 1</p>
          <p id="bold">AF-1 White interlocked Sneekers For Women By Jutta Collection</p>
          <p>
            <span>
              <img src={Timer} alt="Timer" /> {setTime.Date}
              <button>AUTOMOBILE</button>
            </span>
          </p>
          <p id="location">
            EV
            <img src={Location} alt="Location" />
            {setTime.location}
          </p>
          <div className='rating'>
            <p> <img src={Star} alt="Star"style={{ maxWidth: '20px', height: 'auto' }} /> </p>
            <p id='review'>{setTime.review}</p>
            <p id="name">{setTime.name}</p>
            <p id="price">{setTime.price}</p>
          </div>
          <div className='bottom'>
            <button>Buy Now</button><img src={Cart} alt="Cart" />
          </div>  
        </div>
        </div>
        </div>  
</>
  )
}
