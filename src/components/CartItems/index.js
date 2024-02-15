import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./styles.css";

export default function CartItems({
  id,
  title,
  image,
  price,
  rating,
  quantity,
}) {
  return (
    <div className="cartItems">
      <Link className="link" to={`/${id}`}>
        <div className="product-container">
          <img className="product-image" src={image} alt=""></img>
          <div className="product-info">
            <span className="product-title">{title}</span>
            <span className="product-price">${price}</span>
            <span className="product-rating">Ratings: ({rating.rate}/5)</span>
            <span className="product-title">Quantity: {quantity}</span>
            <div className="action-btn">
              {quantity < 1 && (
                <button className="add-to-cart-btn">ADD TO CART</button>
              )}
              {quantity >= 1 && (
                <div className="quantity">
                  <button className="decrease-count">-</button>
                  {quantity}
                  <button className="increase-count">+</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
      <Outlet />
    </div>
  );
}
