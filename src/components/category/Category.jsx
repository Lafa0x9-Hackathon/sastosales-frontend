import React from "react";
import "./Category.css";

const Category = ({ title, svg, ads,color }) => {
  return (
    <div className="categoryContainer" style={{backgroundColor:`${color}`}}>
      <div className="categorySubContainer-1">
        <img src={`/categoryIcons/${svg}`} alt="" />
      </div>
      <div className="categorySubContainer-2">
        <h2>{title}</h2>
        <p>{ads} ads</p>
      </div>
    </div>
  );
};

export default Category;
