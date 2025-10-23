"use client";

type CartContextType = {
  cart: any[];
  addToCart: (item: any) => void;
};

import { createContext, useState, useEffect } from "react";

export const CartContext = createContext<CartContextType | null>(null)

export default function CartProvider ({ children }) {
  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  const addToCart = (item: any) => {
    setCart((prevCart: any) => {
      const existingItem = prevCart.find((i: any) => i.id === item.id);

      if (existingItem) {
        return prevCart.map((i: any) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id: any) => {
    setCart((prev: any) => prev.filter((item: any) => item.id !== id));
  };

  const increaseQty = (id: any) => {
    setCart((prev: any) =>
      prev.map((item: any) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id: any) => {
    setCart((prev: any) =>
      prev.map((item: any) =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const value = { cart, addToCart, removeFromCart, clearCart, increaseQty, decreaseQty };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}