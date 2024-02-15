import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./styles.css";

export default function Navbar() {
  // const [items, setItems] = useState(0);
  // let cartItemsCount = localStorage.length;

  // useEffect(() => {
  //   setItems(cartItemsCount);
  // }, [cartItemsCount]);

  const cartItems = useSelector((state) => state.cart);
  // console.log("cart", cartItems);
  // console.log("items in cart", cartItems.length);

  return (
    <div className="navbar">
      <Link className="link" to="/">
        <span className="title">Flipkart</span>
      </Link>
      <Link className="link" to="/cart">
        <div className="cart">
          <div className="cart-logo"></div>
          {cartItems.length > 0 && (
            <span className="counter">{cartItems.length}</span>
          )}
          <span className="cart-title">Cart</span>
        </div>
      </Link>
      <Outlet />
    </div>
  );
}
