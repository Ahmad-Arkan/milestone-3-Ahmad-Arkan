"use client";

import { getProducts } from "@/libraries/api"
import styles from "@/styles/ProductsList.module.css";
import Icon from "@/components/Icons";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Items ({searchParam, searchProducts}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    if (searchParam) {
      if (searchProducts?.length > 0) setProducts(searchProducts);
      else if (searchProducts?.length === 0) setProducts([]);
      setLoading(false);
    } else {
      // fallback: beranda
      getProducts().then((data) => {
        setProducts(data);
        setLoading(false);
      });
    }
  }, [searchProducts, searchParam]);

  
  if (loading) return null;

  return (
    <section>
      <menu className={styles.menus}>
        <h1>{searchParam ? `Result for: "${(searchParam && searchProducts) ? searchParam : "Aneh"}"` : "All Products"}</h1>
      </menu>
      <ul className={styles.products}>
        {products.map((products) => (
          <Link key={products.id} href={`/${products.id}`}>
            <li className={styles.product}>
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
            </li>
          </Link>
        ))}
      </ul>
    </section>
  )
}