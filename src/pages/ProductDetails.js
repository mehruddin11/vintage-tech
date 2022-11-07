import React from "react";
import { useParams } from "react-router-dom";
import {useGlobalContext } from '../context/products'
import { useHistory } from "react-router-dom";
import { useGlobalCartContext } from "../context/cart";
import Loading from '../components/Loading'
export default function ProductDetails() {
  const {products} = useGlobalContext()
  const {AddtoCart}= useGlobalCartContext();
  const { id } = useParams();
  const history = useHistory();
  const product= products.find(item => item.id === Number(id));
  if(!product){
    return <Loading/>
  }
  else{
    const {description, title, price}= product.attributes
    let image = product.attributes.image.data.attributes.formats.thumbnail.url
    return <section className="single-product">
      <img src= {image} alt = {title} className = "single-product-image"/>
    <article>
      <h1>{title}</h1> 
      <h2> &#8377;{price} </h2>   
      <p> {description} </p>
      <button className="btn btn-primary btn-block" onClick={()=>{
       AddtoCart(product.attributes, product.id)
        history.push('/cart')
      }}> Add to cart </button> 
    </article>
    </section>
  }
  
}
 