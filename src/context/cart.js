import React, {useState} from "react";
import localCart from '../utils/localCart'
function getCartfromLocalStorge(){
    return localStorage.getItem("cart")? JSON.parse(localStorage.getItem('cart')): []
}
const CartContext = React.createContext();

const CartProvider = ({children})=>{
    const [cart, setCart]= useState(getCartfromLocalStorge())
    const [total, setTotal]= useState(0)
    const [cartItems, setCartItems]= useState(0)

    React.useEffect(()=>{
        // local storage
        localStorage.setItem("cart", JSON.stringify(cart)); 
        //cart ietms
       let newCartItems= cart.reduce((total, cartItems)=>{
        return total +=cartItems.amount

       },0)
       setCartItems(newCartItems);
       //cart total
       let newtotal= cart.reduce((total, cartItems)=>{
        return total+= cartItems.amount *cartItems.price
       },0)
       newtotal= parseFloat(newtotal.toFixed(2));
       setTotal(newtotal)
    },[cart])
    // remove item 
    const RemoveItem =(id) =>{
        setCart([...cart].filter(item => item.id !== id))
    }
    // inc amount 
    const IncreaseAmout =(id) =>{
        const newcart = [...cart].map((item)=>{
            return item.id == id? {...item, amount:item.amount+1}:{...item}
        })
        setCart(newcart)
    }
    // dec amount 
    const DecreaseAmount =(id,amount) =>{
        if(amount===1){
            RemoveItem(id);
            return 
        }
        else{
            const newcart = [...cart].map((item)=>{
                return item.id == id? {...item, amount:item.amount-1}:{...item}
            })
            setCart(newcart)
        }
        
    }
    // add to cart 
    const AddtoCart =(product) =>{
        console.log(product)  
        const  {id , book_image, title, price }= product;
        const item= [...cart].find(item => item.id === id)
        if(item){
            IncreaseAmout(id);
        }
        else{
            const newitem = {id,book_image,title,price,amount:1}
            const newcart= [...cart, newitem];
            setCart(newcart);
        }
    }
    const ClearCart =() =>{
        setCart([])
    }
    return <CartContext.Provider value = {{
        cart,
        total,
        cartItems,
        RemoveItem,
        IncreaseAmout,
        DecreaseAmount,
        AddtoCart,
        ClearCart
    }} >
{children}
    </CartContext.Provider>
}

const useGlobalCartContext=()=>{
    return React.useContext(CartContext)
}

export {
    
    useGlobalCartContext,
    CartProvider
}