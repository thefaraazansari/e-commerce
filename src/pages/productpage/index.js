import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import actions from "../../store/actions";
import "./styles.css";

export default function ProductPage() {
  const productId = useLocation().pathname;

  const [productData, setProductData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(0);

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart);
  console.log("cart from productpage", cartItems, cartItems.length);

  const fetchProductData = () => {
    try {
      fetch("https://fakestoreapi.com/products" + productId)
        .then((res) => res.json())
        .then(setProductData);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProductData();
    cartItems.forEach((item) => {
      if (item.id.toString() === productId.slice(1)) {
        setQuantity(item.quantity);
      }
    });
  }, []);

  const onAddToCartClick = () => {
    setQuantity(quantity + 1);
    dispatch(actions.updateCart(productData));
  };

  const decreaseCountClick = () => {
    if (quantity <= 1) {
      setQuantity(0);
      dispatch(actions.deleteItem(productData.id));
    } else {
      setQuantity(quantity - 1);
      dispatch(actions.increaseOrDecrease(productData.id, quantity - 1));
    }
  };

  const increaseCountClick = () => {
    setQuantity(quantity + 1);
    dispatch(actions.increaseOrDecrease(productData.id, quantity + 1));
  };

  return (
    <div className="product-page">
      <Navbar />
      <main>
        {isLoading && <h1 className="loader">Loading ...</h1>}
        {productData && (
          <div className="product-wrapper">
            <div className="container">
              <div className="product-image">
                <img src={productData.image}></img>
              </div>
              <div className="action-btn">
                {quantity < 1 && (
                  <button
                    className="add-to-cart-btn"
                    onClick={onAddToCartClick}
                  >
                    ADD TO CART
                  </button>
                )}
                {quantity >= 1 && (
                  <div className="quantity">
                    <button
                      className="decrease-count"
                      onClick={decreaseCountClick}
                    >
                      -
                    </button>
                    {quantity}
                    <button
                      className="increase-count"
                      onClick={increaseCountClick}
                    >
                      +
                    </button>
                  </div>
                )}
                <button className="buy-now-btn">BUY NOW</button>
              </div>
            </div>
            <div className="product-info">
              <p className="product-title">{productData.title}</p>
              <p className="product-category">
                Category: {productData.category}
              </p>
              <span className="product-price">${productData.price}</span>
              <span className="previous-price">${productData.price * 1.5}</span>
              <span className="product-rating">
                {productData.rating.rate} ({productData.rating.count})
              </span>
              <p className="product-desc">{productData.description}</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
