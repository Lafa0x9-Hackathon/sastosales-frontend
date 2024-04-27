
import "./catgpage.css";
import car from '../../Assets/Car.png';
import announce from '../../Assets/Announce.png';
import education from '../../Assets/Education(1).png';
import electronic from '../../Assets/Electronic.png';
import estate from '../../Assets/estate.png';
import job from '../../Assets/Job.png';
import vector from '../../Assets/Vector.png';



function CategoryPage() {
  return (
    <div className="Category">

    Here are <br />
    the List of Categories and Sub-categories 

    <div className="icon">
    <img src={car} alt="" className="iconimg"/>
    
    <img src={estate} alt="" className="iconimg"/>
    <img src={education} alt=""  className="iconimg"/>
    <img src={vector} alt="" className="iconimg" />
    <img src={job} alt="" className="iconimg"/>
    <img src={electronic} alt="" className="iconimg"/>
    <img src={announce} alt="" className="iconimg"/>

    </div>

  <div className="main">
    <div className="car">
     <div className="Car-header"><img src={car} alt="" className="cariconimg"/> <h3>Automobiles </h3>
     </div>
   
      <ul className="car-list">
      <li className="car-list-item">Mobile</li>
      <li className="car-list-item">Mobile</li>
      <li className="car-list-item">Mobile</li>
      <li className="car-list-item">Mobile</li>
      <li className="car-list-item">Mobile</li>
      <li className="car-list-item">Mobile</li>

  </ul>
 
 
      </div>


    <div className="car">
    
      </div>


 
    <div className="car">
    
      </div>
  
    <div className="car">
    
      </div>
 
    <div className="car">
    
      </div>
  
    <div className="car">
    
      </div>
 
    <div className="car">
    
      </div>
  </div>


    </div>

    
  );
}

export default CategoryPage;