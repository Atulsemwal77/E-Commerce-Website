

import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);  // Add wishlist state
  

  // const addToCart = (product) => {
  //   const productWithDefaultQuantity = { ...product, quantity: 1 }; // Set default quantity to 1
  //   setCart((prevCart) => [...prevCart, productWithDefaultQuantity]);
  // };
  const addToCart = (product) => {
    setCart((prevCart) => {
      const productExists = prevCart.find((item) => item.id === product.id);
  
      if (!productExists) {
        return [...prevCart, { ...product, quantity: 1 }]; // Add product with default quantity 1
      }
      return prevCart; // Avoid duplicates
    });
  };
  
 

  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => {
      if (!prevWishlist.some((item) => item.id === product.id)) {
        return [...prevWishlist, product];  // Add to wishlist if not already added
      }
      return prevWishlist;  // Avoid duplicates
    });
  };
  const handleDelete = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
     };

  const removeFromWishlist = (id) => {
    setWishlist((prevWishlist) => prevWishlist.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, wishlist, addToCart, addToWishlist, handleDelete,removeFromWishlist }}>
      {children}
    </CartContext.Provider>
  );
};
