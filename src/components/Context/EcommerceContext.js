import React from 'react'

const EcommerceContext=React.createContext({
    addToCart:()=>{},
    cartList:[],
    removeFromCart:()=>{},
    incrementQuantity:()=>{},
    decrementQuantity:()=>{}
    

})
export default EcommerceContext
