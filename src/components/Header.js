import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import "./css/header.css";
import CartLink from "./Cart/CartLink";
import { useGlobalUserProvider } from "../context/user";
import LoginLink from '../components/LoginLink'
export default function Header() {
  const {user}= useGlobalUserProvider();
  return (
    <div className="header">
      <Link to="/">
        <img src={Logo} alt="vinatge tech logo" className="logo" />
      </Link>
      <nav>
        <ul>
          <div>
            
            <li>
              <Link className="header-link" to="/"> Home </Link>
            </li>
            <li>
              <Link className="header-link" to="/about"> About </Link>
            </li>
            <li>
              <Link className="header-link" to="/products"> Products </Link>
            </li>
            {
              user.token && <li> <Link className="header-link" to = '/checkout'>
                 Checkout </Link> 
                 </li>
            }
          </div>
          <div>
           
            <LoginLink/>
            <CartLink></CartLink>
          </div>
        </ul>
      </nav>
    </div>
  );
}
