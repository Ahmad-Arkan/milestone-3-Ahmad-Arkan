"use client";

import { getProducts } from "@/libraries/api"
import styles from "@/styles/ProductsList.module.css";
import Icon from "@/components/Icons";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Items () {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts().then((data) => {
      try {
        setProducts(data);
      } catch(err) {
        console.error('Failed fetching products :', err)
        setError('Failed fetching products, please try again.');
      } finally {
        setLoading(false);
    }
    });
  }, []);

  if (loading) return null;

  return (
    <section className={styles.products}>
      {products.map((products) => (
        <Link key={products.id} href={`/${products.id}`}>
          <button className={styles.product}>
            <img 
              src={products.image || "/images/default-product.webp"}
              alt={products.title}
              width={100}
              height={100}
              onError={(e) => {
                e.currentTarget.src = "/images/default-product.webp";
              }}
            />
            <div className={styles.detail}>
              <span className={`${styles.detail} ${styles.title}`}>{products.title || "Unnamed Item"}</span>
              <span className={`${styles.detail} ${styles.price}`}>${products.price || "???"} <Icon name="addCard" className={styles.addCard} /></span>
            </div>
          </button>
        </Link>
      ))}
    </section>
  )
}