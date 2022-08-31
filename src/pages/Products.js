import React from "react";
import { useGlobalContext } from "../context/products";
import Loading from "../components/Loading";
import ProductList from "../components/Products/ProductList";
export default function Products() {
  const {products,loading} = useGlobalContext();
  if(loading){
    return <Loading/>
  }
  return <ProductList title="our products" products={products}/>
}
