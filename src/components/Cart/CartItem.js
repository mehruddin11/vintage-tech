import React from "react";
import { useGlobalCartContext } from "../../context/cart";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
export default function CartItem({ id, book_image, title, amount, price }) {
  const {RemoveItem, IncreaseAmout, DecreaseAmount}= useGlobalCartContext()
  return (
    <article className="cart-item">
      <img src={book_image} alt={title} />
      <div>
        <h4> {title} </h4>
        <h5> {price} </h5>
        <button
          type="button"
          className="cart-btn remove-btn"
          onClick={() => {
            RemoveItem(id)
          }}
        >remove
        </button>
      </div>
      <div>
        <button
          className="cart-btn amount-btn"
          type="button"
          onClick={() => {
            IncreaseAmout(id);
          }}
        >
          <FaAngleUp />
        </button>
        <p className="item-amount"> {amount} </p>
        <button
          className="cart-btn amount-btn "
          type="buttom"
          onClick={() => {
            DecreaseAmount(id, amount);
          }}
        >
          <FaAngleDown />
        </button>
      </div>
    </article>
  );
}
