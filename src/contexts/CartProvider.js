"use client";

import { createContext, use, useState } from "react";

export const CartContext = createContext({})

export default function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const value = { cart, addToCart, removeFromCart, clearCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}