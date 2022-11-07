import React from "react";
import Product from "./Product";
export default function ProductList({title,products}) {

  return <section className="section"> 
    <h2 className="section-title">{title} </h2>
    <div className="products-center">
    {products.map((items)=>{
        let image = items.attributes.image.data.attributes.formats.thumbnail.url
        return <Product key ={items.id} id = {items.id} {...items.attributes} image= {image}>
        </Product>
    })}
    </div>
  </section>
}
