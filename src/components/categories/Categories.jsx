import React from 'react';
import Category from '../category/Category';
import './Categories.css'
import { Link } from 'react-router-dom';





const Categories = () => {
 
  
  const categoriesData = [

    {
      title: 'Automobile',
      svg: 'Automobile.svg',
      ads: '63,476',
      color: '#EBEBFF'
    },
    {
      title: 'Electronics',
      svg : 'Electronic.svg',
      ads : '52,822',
      color: '#E1F7E3'
    },
    {
        title: 'Furniture and Appliances',
        svg : 'Furniture.svg',
        ads : '33,841',
        color: '#FFF2E5'
       
      },
      {
        title: 'Real estate',
        svg : 'RealState.svg',
        ads : '22,649',
        color: '#FFF0F0'
      },
      {
        title: 'Jobs',
        svg : 'Jobs.svg',
        ads : '2,736',
        color: '#FFF2E5'
      },
      {
        title: 'Services',
        svg : 'Services.svg',
        ads : '1,678',
        color : '#E1F7E3'
      },
      {
        title: 'Learning',
        svg : 'Learning.svg',
        ads : '959',
        color : '#FFF2E5'
      }
   
  ];

  return (
   <>
   <div className="wrapper">
<div className='categoriesContainer'>

<div className='categoriesSubContainer-1'>
    <h1>Browse by <b>Category</b></h1>
   <Link to="/catgPage"> <button >View More</button> </Link>
   </div>

    <div className='categoriesSubContainer-2'>
      {categoriesData.map((category, index) => (
        <Category key={index} title={category.title} svg={category.svg} ads= {category.ads} color={category.color} />
      ))}
    </div>

</div>
</div>
    </>
  );
};

export default Categories;
