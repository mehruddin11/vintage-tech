import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import Url from '../utils/URL'
import {FeaturedProducts} from '../utils/helpers'
const ProductContext= React.createContext();
const ProductProvider = ({children}) =>{  
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [featured, setFeatured] = useState([])
    useEffect(()=>{
        setLoading(true)
        axios.get(`${Url}`).then(response =>{
            const featured= FeaturedProducts(response.data)
            setProducts(response.data)  
            setFeatured(featured)
            setLoading(false)
        })
        return ()=>{}
    },[])
    return (
    <ProductContext.Provider 
    value ={
        {
            products,
            loading,
            featured
        }
    }>
        {children}
    </ProductContext.Provider>
    );
} 
const useGlobalContext= ()=>{
    return useContext(ProductContext)
}

export {
    useGlobalContext, 
    ProductProvider,
}