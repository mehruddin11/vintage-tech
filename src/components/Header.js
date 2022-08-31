import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import "./css/header.css";
import CartLink from "./Cart/CartLink";
export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={Logo} alt="vinatge tech logo" className="logo" />
      </Link>
      <nav>
        <ul>
          <div>
            <li>
              <Link to="/"> Home </Link>{" "}
            </li>
            <li>
              <Link to="/about"> About </Link>
            </li>
            <li>
              <Link to="/products"> Products </Link>
            </li>
          </div>
          <div>
            <li>
              <Link to="/login"> Login </Link>
            </li>
            <CartLink></CartLink>
          </div>
        </ul>
      </nav>
    </div>
  );
}
