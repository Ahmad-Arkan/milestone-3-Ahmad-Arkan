"use client";

import { useContext } from "react";
import { CartContext } from "@/contexts/CartProvider";
import styles from "@/styles/CartList.module.css"
import Link from "next/link";
import Image from "next/image";

export default function CartList() {
  const { cart, removeFromCart, clearCart, increaseQty, decreaseQty } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <section>
        <h1 className={styles.title}>Your cart is empty 🛒</h1>
      </section>
    );
  }

  return (
    <section>
      <h1 className={styles.title}>Your Cart</h1>
      <ul className={styles.parent}>
        {cart.map((item) => (
          <li className={styles.cartItem} key={item.id}>
            <Link className={styles.cartDetail} href={`/${item.id}`}>
              <Image
                src={item.image || "/images/default-product.webp"}
                alt={item.title}
                width={100}
                height={100}
                onError={(e) => {
                  e.currentTarget.src = "/images/default-product.webp";
                }}
                unoptimized
              />
              <div className={styles.cartName}>
                <h3>{item.title}</h3>
                <p>${item.price}</p>
              </div>
            </Link>
            <div>
              <button onClick={() => decreaseQty(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQty(item.id)}>+</button>
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
