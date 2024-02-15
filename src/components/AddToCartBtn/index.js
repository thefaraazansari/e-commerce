import React, { useEffect, useState } from "react";

export default function AddToCartBtn(props) {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    // updateQuantityCountFromLocalStorage();
  }, []);

  const onAddToCartClick = () => {
    increaseCountClick();
  };

  // const updateQuantityCountFromLocalStorage = () => {
  //   const productKey = productId.slice(1);
  //   const productQuantity = JSON.parse(localStorage.getItem(productKey));
  //   if (productQuantity) setQuantity(productQuantity.qty);
  // };

  const decreaseCountClick = () => {
    let itemQuantity;
    if (quantity <= 1) {
      removeFromLocalStorage(props.productData.id);
      setQuantity(0);
      itemQuantity = 0;
    } else {
      setQuantity(quantity - 1);
      itemQuantity = quantity - 1;
    }
    updateLocalStorage(props.productData.id, props.productData, itemQuantity);
  };

  const increaseCountClick = () => {
    setQuantity(quantity + 1);
    updateLocalStorage(props.productData.id, props.productData, quantity + 1);
  };

  const updateLocalStorage = (key, value, qty) => {
    localStorage.setItem(key, JSON.stringify({ ...value, qty }));
  };

  const removeFromLocalStorage = (key) => {
    localStorage.removeItem(key);
  };

  return (
    <div>
      <div>AddToCartBtn</div>
      <div className="add-to-cart-btn-container">
        {quantity < 1 && (
          <button className="add-to-cart-btn" onClick={onAddToCartClick}>
            ADD TO CART
          </button>
        )}
        {quantity >= 1 && (
          <div className="quantity">
            <button className="decrease-count" onClick={decreaseCountClick}>
              -
            </button>
            {quantity}
            <button className="increase-count" onClick={increaseCountClick}>
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
