import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItems from "../../components/CartItems";
import Navbar from "../../components/Navbar";
import "./styles.css";

export default function Cartpage() {
  const [cartItems, setCartItems] = useState([]);
  const storeItems = useSelector((state) => state.cart);

  let price = 0;
  cartItems.forEach((item) => (price += item.price * item.quantity));

  useEffect(() => {
    setCartItems(storeItems);
  }, []);

  return (
    <div className="cartpage">
      <Navbar />
      <main>
        <h1>Cart</h1>
        <div className="cart-wrapper">
          <div className="cart-items-container">
            {cartItems.map((item) => (
              <CartItems key={item.id} {...item} />
            ))}
          </div>
          <div className="total-amount">
            <div>
              <span>Price ({cartItems.length} items)</span>
              <span>${(price * 1.5).toFixed(2)}</span>
            </div>
            <div>
              <span>Discount</span>
              <span>-${(price * 0.5).toFixed(2)}</span>
            </div>
            <div>
              <span>Delivery</span>
              <span>
                <del>${cartItems.length * 30}</del> Free
              </span>
            </div>
            <hr />
            <div className="total">
              <span>Total </span>
              <span>${price.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
