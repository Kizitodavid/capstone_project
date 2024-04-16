import React, { createContext, useState } from 'react'; 
import Products from '../Componets/Assets/Products'
import product from '../Componets/Assets/Products'


export const BooksContext = createContext(null);
const getDefautCart = ()=>{
    let cart = {}
    for (let index = 0; index < Products.length+1; index++) {
        cart[index] = 0;
    }
    return cart
}
const BooksMenu = (props) => {
    const [cartItems,setCartItems] = useState(getDefautCart());

    const addToCart = (itemId)=>{
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}))
    }
    const removeFromCart = (itemId)=>{
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemIfo = Products.find((product)=>product.id===Number(item));
                totalAmount += itemIfo.price * cartItems[item];
            }
            return totalAmount;
        }
    }

    const contextValue = {getTotalCartAmount,Products,cartItems,addToCart,removeFromCart};

    return(
        <BooksContext.Provider value={contextValue}>
            {props.children}
        </BooksContext.Provider>
    )
}

export default BooksMenu;
