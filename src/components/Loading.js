import React from "react";
import { useGlobalContext } from "../context/products";
import LoadingGiF from '../assets/loading.gif'
export default function Loading() {
  const {loading}= useGlobalContext()
  return <div className="loading">
<h2> loading...</h2>
<img src= {LoadingGiF} alt= "loading gif" />
  </div>
}
