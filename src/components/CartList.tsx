"use client";

import { useContext } from "react";
import { CartContext } from "@/contexts/CartProvider";
import { ProductResponse } from "@/types/product"
import styles from "@/styles/CartList.module.css"
import Link from "next/link";
import Image from "next/image";

type CartListType = {
  cart: any;
  removeFromCart?: (id: number) => void;
  clearCart?: () => void;
  increaseQty?: (id: number) => void;
  decreaseQty?: (id: number) => void;
}

interface CartMap extends ProductResponse {
  quantity: number;
}

export default function CartList() {
  const { cart, removeFromCart, clearCart, increaseQty, decreaseQty }:CartListType = useContext(CartContext);

  return (
    <section>
      <h1 className={styles.title}>{cart.length === 0? `Your cart is empty 🛒` : `Your Cart`}</h1>
      <ul className={styles.parent}>
        {cart.map((item: CartMap) => (
          <li className={styles.cartItem} key={item.id}>
            <Link className={styles.cartDetail} href={`/${item.id}`}>
              <Image
                src={item.images[0] || "/images/default-product.webp"}
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
            <div className={styles.quantity}>
              <button onClick={() => decreaseQty(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQty(item.id)}>+</button>
            </div>
            <button onClick={() => removeFromCart(item.id)} className={'delete'}>Remove</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
