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
  const product= products.find(item => item.id === id);
  if(!product){
    return <Loading/>
  }
  else{
    const {description, title, price, book_image}= product
    return <section className="single-product">
      <img src= {book_image} alt = {title} classNames = "single-product-image"/>
    <article>
      <h1>{title}</h1> 
      <h2> {price} </h2>   
      <p> {description} </p>
      <button className="btn btn-primary btn-block" onClick={()=>{
       AddtoCart(product)
        history.push('/cart')
      }}> Add to cart </button> 
    </article>
    </section>
  }
  
}
 