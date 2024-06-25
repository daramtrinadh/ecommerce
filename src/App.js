import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import EcommerceContext from "./components/Context/EcommerceContext"
import ProductItemDetail from "./components/ProductItemDetail";

const App = () => {
  const [cartList, setCartList] = useState([]);
  console.log(cartList);

  const addToCart = (product) => {
    setCartList((prevCartList) => {
      const productExists = prevCartList.find(
        (eachProduct) => eachProduct.id === product.id
      );

      if (productExists) {
        return prevCartList.map((eachProduct) =>
          eachProduct.id === product.id
            ? { ...eachProduct, quantity: eachProduct.quantity + 1 }
            : eachProduct
        );
      } else {
        return [...prevCartList, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartList((prevCartList) =>
      prevCartList.filter((eachProduct) => eachProduct.id !== productId)
    );
  };

  const incrementQuantity = (productId) => {
    setCartList((prevCartList) =>
      prevCartList.map((eachProduct) =>
        eachProduct.id === productId
          ? { ...eachProduct, quantity: eachProduct.quantity + 1 }
          : eachProduct
      )
    );
  };

  const decrementQuantity = (productId) => {
    setCartList((prevCartList) =>
      prevCartList.map((eachProduct) =>
        eachProduct.id === productId && eachProduct.quantity > 1
          ? { ...eachProduct, quantity: eachProduct.quantity - 1 }
          : eachProduct
      )
    );
  };

  console.log(cartList);

  return (
    <EcommerceContext.Provider
      value={{
        addToCart,
        cartList,
        decrementQuantity,
        incrementQuantity,
        removeFromCart,
      }}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product/:id' element={<ProductItemDetail/>}/>
        </Routes>
      </Router>
    </EcommerceContext.Provider>
  );
};

export default App;
