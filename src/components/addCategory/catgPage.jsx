import React from 'react';
import car from '../../assets/Images/Car.png';
import announce from '../../assets/Announce.png';
import education from '../../assets/Images/Education(1).png';
import electronic from '../../assets/Images/Electronic.png';
import estate from '../../assets/estate.png';
import job from '../../assets/Images/Job.png';
import vector from '../../assets/Images/Vector.png';
import './catgPage.css';
function CategoryPage() {
  const categories = [
    {
      name: 'Automobiles',
      icon: car,
      subcategories: ['Cars', 'Buses and Minibus', 'Heavy Equipment', 'Motorcycles & Trailers', 'Vehicle Parts & Accessories', 'Watercrafts & Boats']
    },
    {
      name: 'Real estate',
      icon: estate,
      subcategories: ['Houses & Apartments For Rent', 'Houses & Apartments For Sale', 'Land &Plot For Rent', 'Land &Plot For Sale', 'Commericial Property For Rent', 'Commericial Property For Sale', 'Event centres, Venues and Workstations', 'Short Rental']
    },
    {
      name: 'Learning',
      icon: education,
      subcategories: ['Language Classes', 'Computer Courses', 'Tutoring,Private, Lessons', 'Music,Threatre,Dance', 'Maths,Physics,Chemistry', 'School Support']
    },
    {
      name: 'Electronics',
      icon: vector,
      subcategories: ['Accessories & supplies for Electronics', 'Laptops & Computer', 'TV & DVD Equipment', 'MAudio & Music Equipment', 'Computer Accessories', 'Computer Hardware', 'Computer Hmonitors', 'Headphones', 'Networking Products', 'Photos & Video Cameras', 'Printers & Scanners', 'Security & Survillance', 'Software', 'Video Games', 'Game Console', 'Mobile Phones', 'Accessories for Mobile Phones & Tablets', 'Smart Watches & Trackers', 'Tablets']
    },
    {
      name: 'Jobs',
      icon: job,
      subcategories: ['Agriculture-Environment', 'Assistantship-Secretariat-Helpdesk', 'Automotive-Mechanic', 'BTP-Construction-Building', 'Trade-Business Services', 'Commericals-Sale Jobs', 'Accounting-Mangement-Finmance', 'Steering-Manger', 'Aesthetics-Hair-Beauty', 'Public ervice Jobs', 'Real Estate Jobs', 'Independent-Freelance-Telecommuting', 'Computer-Internet', 'Telecommunication', 'Industry,Production & engineering', 'Marketing-COmmunication']
    },
    {
      name: 'Services',
      icon: electronic,
      subcategories: ['Agriculture-Environment', 'Assistantship-Secretariat-Helpdesk', 'Automotive-Mechanic', 'BTP-Construction-Building', 'Trade-Business Services', 'Commericals-Sale Jobs', 'Accounting-Mangement-Finmance', 'Steering-Manger', 'Aesthetics-Hair-Beauty', 'Public ervice Jobs', 'Real Estate Jobs', 'Independent-Freelance-Telecommuting', 'Computer-Internet', 'Telecommunication', 'Industry,Production & engineering', 'Marketing-COmmunication']
    },
    {
      name: 'Local Events',
      icon: announce,
      subcategories: ['Accessories & supplies for Electronics', 'Laptops & Computer', 'TV & DVD Equipment', 'MAudio & Music Equipment', 'Computer Accessories', 'Computer Hardware', 'Computer Hmonitors', 'Headphones', 'Networking Products', 'Photos & Video Cameras', 'Printers & Scanners', 'Security & Survillance', 'Software', 'Video Games', 'Game Console', 'Mobile Phones', 'Accessories for Mobile Phones & Tablets', 'Smart Watches & Trackers', 'Tablets']
    }
  ];

  return (
    <div className="Category">
      <p>Here are <br /> the List of Categories and Sub-categories</p>
      <div className="icon">
        {categories.map((category, index) => (
          <img src={category.icon} alt={category.name} className="iconimg" key={index} />
        ))}
      </div>
      <div className="main">
        {categories.map((category, index) => (
          <div className="sub-category" key={index}>
            <div className="sub-category-header">
              <img src={category.icon} alt={category.name} className="cariconimg" />
              <h3>{category.name}</h3>
            </div>
            <ul className="sub-category-list">
              {category.subcategories.map((subcategory, subIndex) => (
                <li className="sub-category-list-item" key={subIndex}>{subcategory}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
