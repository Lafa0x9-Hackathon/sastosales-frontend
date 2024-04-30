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
    <div className="sub-category">
    

     <div className="sub-category-header"><img src={car} alt="" className="cariconimg"/> <h3>Automobiles </h3>
     </div>

      <ul className="sub-category-list">
      <li className="sub-category-list-item">Cars</li>
      <li className="sub-category-list-item">Buses and Minibus</li>
      <li className="sub-category-list-item">Heavy Equipment</li>
      <li className="sub-category-list-item">Motorcycles & Trailers</li>
      <li className="sub-category-list-item">Vehicle Parts & Accessories </li>
      <li className="sub-category-list-item" > Watercrafts & Boats </li>

  </ul>


      </div>


      <div className="sub-category">
     <div className="sub-category-header"><img src={estate} alt="" className="cariconimg"/> <h3>Real estate</h3>
     </div>

      <ul className="sub-category-list">
      <li className="sub-category-list-item">Houses & Apartments For Rent</li>
      <li className="sub-category-list-item">Houses & Apartments For Sale</li>
      <li className="sub-category-list-item">Land &Plot For Rent</li>
      <li className="sub-category-list-item">Land &Plot For Sale</li>
      <li className="sub-category-list-item">Commericial Property For Rent</li>
      <li className="sub-category-list-item">Commericial Property For Sale</li>
      <li className="sub-category-list-item">Event centres, Venues and Workstations</li>
      <li className="sub-category-list-item">Short Rental</li>

       </ul>
       </div>




       <div className="sub-category">
     <div className="sub-category-header"><img src={education} alt="" className="cariconimg"/> <h3>Learning </h3>
     </div>

      <ul className="sub-category-list">
      <li className="sub-category-list-item">Language Classes</li>
      <li className="sub-category-list-item">Computer Courses</li>
      <li className="sub-category-list-item">Tutoring,Private, Lessons</li>
      <li className="sub-category-list-item">Music,Threatre,Dance</li>
      <li className="sub-category-list-item">Maths,Physics,Chemistry</li>
      <li className="sub-category-list-item">School Support</li>
      

       </ul>


      </div>

      <div className="sub-category">
     <div className="sub-category-header"><img src={vector} alt="" className="cariconimg"/> <h3>Electronics </h3>
     </div>

      <ul className="sub-category-list">
      <li className="sub-category-list-item">Accessories & supplies for Electronics</li>
      <li className="sub-category-list-item">Laptops & Computer</li>
      <li className="sub-category-list-item">TV & DVD Equipment</li>
      <li className="sub-category-list-item">MAudio & Music Equipment</li>
      <li className="sub-category-list-item">Computer Accessories</li>
      <li className="sub-category-list-item">Computer Hardware</li>
      <li className="sub-category-list-item">Computer Hmonitors</li>
      <li className="sub-category-list-item">Headphones</li>
      <li className="sub-category-list-item">Networking Products</li>
      <li className="sub-category-list-item">Photos & Video Cameras</li>
      <li className="sub-category-list-item">Printers & Scanners</li>
      <li className="sub-category-list-item">Security & Survillance</li>
      <li className="sub-category-list-item">Software</li>
      <li className="sub-category-list-item">Video Games</li>
      <li className="sub-category-list-item">Game Console</li>
      <li className="sub-category-list-item">Mobile Phones</li>
      <li className="sub-category-list-item">Accessories for Mobile Phones & Tablets</li>
      <li className="sub-category-list-item">Smart Watches & Trackers</li>
      <li className="sub-category-list-item">Tablets</li>

  </ul>


      </div>

      <div className="sub-category">
     <div className="sub-category-header"><img src={job} alt="" className="cariconimg"/> <h3>Jobs</h3>
     </div>

      <ul className="sub-category-list">
      <li className="sub-category-list-item">Agriculture-Environment</li>
      <li className="sub-category-list-item">Assistantship-Secretariat-Helpdesk</li>
      <li className="sub-category-list-item">Automotive-Mechanic</li>
      <li className="sub-category-list-item">BTP-Construction-Building</li>
      <li className="sub-category-list-item">Trade-Business Services</li>
      <li className="sub-category-list-item">Commericals-Sale Jobs</li>
      <li className="sub-category-list-item">Accounting-Mangement-Finmance</li>
      <li className="sub-category-list-item">Steering-Manger</li>
      <li className="sub-category-list-item">Aesthetics-Hair-Beauty</li>
      <li className="sub-category-list-item">Public ervice Jobs</li>
      <li className="sub-category-list-item">Real Estate Jobs</li>
      <li className="sub-category-list-item">Independent-Freelance-Telecommuting</li>
      <li className="sub-category-list-item">Computer-Internet</li>
      <li className="sub-category-list-item">Telecommunication</li>
      <li className="sub-category-list-item">Industry,Production & engineering</li>
      <li className="sub-category-list-item">Marketing-COmmunication</li>

  </ul>


      </div>

   
     
      <div className="sub-category">
     <div className="sub-category-header"><img src={electronic} alt="" className="cariconimg"/> <h3>Services </h3>
     </div>

      <ul className="sub-category-list">
      <li className="sub-category-list-item">Agriculture-Environment</li>
      <li className="sub-category-list-item">Assistantship-Secretariat-Helpdesk</li>
      <li className="sub-category-list-item">Automotive-Mechanic</li>
      <li className="sub-category-list-item">BTP-Construction-Building</li>
      <li className="sub-category-list-item">Trade-Business Services</li>
      <li className="sub-category-list-item">Commericals-Sale Jobs</li>
      <li className="sub-category-list-item">Accounting-Mangement-Finmance</li>
      <li className="sub-category-list-item">Steering-Manger</li>
      <li className="sub-category-list-item">Aesthetics-Hair-Beauty</li>
      <li className="sub-category-list-item">Public ervice Jobs</li>
      <li className="sub-category-list-item">Real Estate Jobs</li>
      <li className="sub-category-list-item">Independent-Freelance-Telecommuting</li>
      <li className="sub-category-list-item">Computer-Internet</li>
      <li className="sub-category-list-item">Telecommunication</li>
      <li className="sub-category-list-item">Industry,Production & engineering</li>
      <li className="sub-category-list-item">Marketing-COmmunication</li>

  
  </ul>


      </div>


      <div className="sub-category">
     <div className="sub-category-header"><img src={announce} alt="" className="cariconimg"/> <h3>Local Events </h3>
     </div>

      <ul className="sub-category-list">
      <li className="sub-category-list-item">Accessories & supplies for Electronics</li>
      <li className="sub-category-list-item">Laptops & Computer</li>
      <li className="sub-category-list-item">TV & DVD Equipment</li>
      <li className="sub-category-list-item">MAudio & Music Equipment</li>
      <li className="sub-category-list-item">Computer Accessories</li>
      <li className="sub-category-list-item">Computer Hardware</li>
      <li className="sub-category-list-item">Computer Hmonitors</li>
      <li className="sub-category-list-item">Headphones</li>
      <li className="sub-category-list-item">Networking Products</li>
      <li className="sub-category-list-item">Photos & Video Cameras</li>
      <li className="sub-category-list-item">Printers & Scanners</li>
      <li className="sub-category-list-item">Security & Survillance</li>
      <li className="sub-category-list-item">Software</li>
      <li className="sub-category-list-item">Video Games</li>
      <li className="sub-category-list-item">Game Console</li>
      <li className="sub-category-list-item">Mobile Phones</li>
      <li className="sub-category-list-item">Accessories for Mobile Phones & Tablets</li>
      <li className="sub-category-list-item">Smart Watches & Trackers</li>
      <li className="sub-category-list-item">Tablets</li>

  </ul>


      </div>

  </div>


    </div>


  );
}

export default CategoryPage;
