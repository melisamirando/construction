import React from "react";

const CartItem = ({ item, handleQuantityChange }) => {
  const { id, title, price, quantity, totalPrice } = item;

  return (
    <div key={id}>
      <h2>{title}</h2>
      <p>Price: ${price}</p>
      <p>Quantity: {quantity}</p>
      <p>Total Price: ${totalPrice}</p>
      <input
        type="number"
        value={quantity}
        onChange={(e) => handleQuantityChange(id, parseInt(e.target.value))}
      />
    </div>
  );
};

export default CartItem;
