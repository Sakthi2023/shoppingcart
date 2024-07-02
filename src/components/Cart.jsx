import React from "react";

const Cart = () => {
  return (
    <div>
      <h2>Cart</h2>

      <ul>
        <li>
          Product A - $10x1
          <button>Remove</button>
          <button>+</button>
          <button>-</button>
        </li>
      </ul>
    </div>
  );
};

export default Cart;
