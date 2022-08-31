import React from "react";
import { useGlobalContext } from "../../context/products";
import ProductList from './ProductList';
import Loading from '../Loading'
export default function FeaturedProducts() {
  const {products, loading, featured}= useGlobalContext()
  if(loading){
    return <Loading/>
  }  return <ProductList title="featured Products products" products= {featured}/>
}
