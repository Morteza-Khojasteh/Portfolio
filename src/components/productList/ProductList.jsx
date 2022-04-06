import React from "react";
import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="product-list">
      <div className="product-list-text">
        <h1 className="product-list-title">Projects</h1>
        <p className="product-list-desc"></p>
      </div>
      <div className="product-lists">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
