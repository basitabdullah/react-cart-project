import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useSelector } from "react-redux";
const Cart = () => {

  const {cartItems} = useSelector(state=>state.cart)
  return (
    <div className="cart">
      <main>
      {
        cartItems.length > 0 ?  (
          cartItems.map((i)=>(
            <CartItem 
            imgSrc={"https://m.media-amazon.com/images/I/81Fm0tRFdHL._SX679_.jpg"}
            name={"apple"}
            price={"455"}
            qty={1}
            id="gfgsgofhsg"
            />
          ))
        ): <h1>No items in the cart.</h1>
      }
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
