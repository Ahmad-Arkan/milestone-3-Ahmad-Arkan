"use client";

import { getProducts } from "@/libraries/api"
import { CartContext } from "@/contexts/CartProvider";
import styles from "@/styles/ProductsList.module.css";
import Icon from "@/components/Icons";
import { useEffect, useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Items ({title, searchParam, productsData}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    if (searchParam) {
      if (productsData?.length > 0) setProducts(productsData);
      else if (productsData?.length === 0) setProducts([]);
      setLoading(false);
    } else {
      getProducts().then((data) => {
        setProducts(data);
        setLoading(false);
      });
    }
  }, [productsData, searchParam]);

  
  if (loading) return null;

  return (
    <section>
      <menu className={styles.menus}>
        <h1 className={styles.title}>
          {title
            ? title
            : searchParam
              ? productsData?.length > 0
                ? <>Result for: <span className="keyword">"{searchParam}"</span></>
                : <>Result not found for <span className="keyword">"{searchParam}"</span><br /><span className={styles.description}>Try different keyword</span></>
              : "All Products"}
        </h1>
        <h2></h2>
      </menu>
      <ul className={styles.parent}>
        {products.map((products) => (
          <li className={styles.product} key={products.id}>
            <Link href={`/${products.id}`}>
              <Image
                src={products.image || "/images/default-product.webp"}
                alt={products.title}
                width={100}
                height={100}
                onError={(e) => {
                  e.currentTarget.src = "/images/default-product.webp";
                }}
                unoptimized
              />
            </Link>
            <div className={styles.details}>
              <Link className={`${styles.title}`} key={products.id} href={`/${products.id}`}>
                {products.title || "Unnamed Item"}
              </Link>
              <div className={styles.detail}>
                <Link className={`${styles.price}`} key={products.id} href={`/${products.id}`}>
                  ${products.price || "???"}
                </Link>
                <button onClick={() => addToCart(products)} className={styles.addCard}><Icon name="addCard" /></button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}