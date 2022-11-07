import React from "react";
import { useGlobalCartContext } from "../context/cart";
import EmptyCart from "../components/Cart/EmptyCart";
import CartItem from "../components/Cart/CartItem";
import { Link } from "react-router-dom";
import { useGlobalUserProvider } from "../context/user";
export default function Cart() {
  const { total, cart } = useGlobalCartContext();
  const { user } = useGlobalUserProvider();

  if (cart.length === 0) {
    return <EmptyCart />;
  }
  return (
    <section className="cart-items section">
      <h2>Your cart </h2>
      {cart.map((item) => {
        return <CartItem key={Math.random("helo")} {...item} />;
      })}
      <h2> total : &#8377;{total} </h2>
      {user.token ? (
        <Link to="/checkout" className="btn btn-primary btn-block">
          {" "}
          checkout
        </Link>
      ) : (
        <Link to="/login" className="btn btn-primary btn-block">
          {" "}
          Login
        </Link>
      )}
    </section>
  );
}
