import React from "react";
import './css/btn.css'
import { Link } from "react-router-dom";
import Denide from '../assets/denied.gif'
export default function Error() {
  return (
  <div>
    <h2 className="err-meassage"> Oops! it's a Dead End scrol down ⬇ </h2>
    <div className="center">
      <img  className="err-img" src= {Denide} alt ="err page" />
    </div>
    <div className="btn-center">
     <Link to ="/"> <button className="back-btn">BackHome</button></Link>
    </div>
  </div>
  )
}
