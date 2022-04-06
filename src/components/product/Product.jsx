import React from "react";
import "./product.css";

const Product = ({ img, link }) => {
  return (
    <div className="product">
      <div className="product-browser">
        <div className="product-circle"></div>
        <div className="product-circle1"></div>
        <div className="product-circle2"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="product-img" />
      </a>
    </div>
  );
};

export default Product;
