import React from "react";
import { AiFillDelete } from "react-icons/ai";
const Cart = () => {
  return (
    <div className="cart">
      <main>
        <CartItem 
          imgSrc={"https://m.media-amazon.com/images/I/81Fm0tRFdHL._SX679_.jpg"}
          name={"apple"}
          price={"455"}
          qty={1}
          id="gfgsgofhsg"
          />
      </main>

      <aside>
        <h2>Subtotal: ${2000}</h2>
        <h2>Shipping: ${200}</h2>
        <h2>Tax: ${20}</h2>
        <h2>Total: ${2220}</h2>
      </aside>
    </div>
  );
};
const CartItem = ({
  imgSrc,
  name,
  price,
  qty,
  decrement,
  increment,
  deleteHandler,
  id,
}) => (
  <div className="cartItem">
    <img src={imgSrc} alt="111" />
    <article>
      <h3>{name}</h3>
      <p>${price}</p>
    </article>

    <div>
      <button onClick={() => decrement(id)}>-</button>
      <p>{qty}</p>
      <button onClick={() => increment(id)}>+</button>
    </div>
    <AiFillDelete />
  </div>
);
export default Cart;
