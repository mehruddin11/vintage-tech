import React from "react";
import { Link } from "react-router-dom";
import { useGlobalUserProvider } from "../context/user";
import { useGlobalCartContext } from "../context/cart";
export default function LoginLink() {
  const {user, userLogout}= useGlobalUserProvider();
  const {ClearCart}= useGlobalCartContext()
  if(user.token){
     return (<button className="login-btn" onClick={()=>{
      userLogout()
      ClearCart()
     }}> logout </button>
     );
  }
  return <Link to ='/login'> Login </Link>
}
