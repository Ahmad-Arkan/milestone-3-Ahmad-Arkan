"use client";

import { useContext } from "react";
import { CartContext } from "@/contexts/CartProvider";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <section style={{ padding: "1rem" }}>
        <h1>Your cart is empty 🛒</h1>
      </section>
    );
  }

  return (
    <section style={{ padding: "1rem" }}>
      <h1>Your Cart</h1>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {cart.map((item) => (
          <li
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1rem",
              borderBottom: "1px solid #ccc",
              paddingBottom: "0.5rem",
            }}
          >
            <div>
              <h3>{item.title}</h3>
              <p>${item.price}</p>
            </div>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>

      <button
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          background: "red",
          color: "white",
          border: "none",
          borderRadius: "0.5rem",
        }}
        onClick={clearCart}
      >
        Clear Cart
      </button>
    </section>
  );
}
