import React from "react";
export default function Hero({children}) {
  return (
  <div className="hero">
  <div className="banner">
    <h1> Be a Memeber of our community  </h1> 
    <p> Embrace your choice - we do  </p>
    {children}
  </div>
    
  </div>

  )
}
