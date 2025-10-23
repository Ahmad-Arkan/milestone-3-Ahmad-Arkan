'use client';

import { ProductResponse } from "@/types/product"
import { getProducts } from "@/libraries/api"
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/ProductManagement.module.css"

export default function ProductManagement() {
  const [products, setProducts] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(()=> {
    getProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    })
  })

  return (
    <section>
      <h1 className={styles.title}>Product Management List</h1>
      <ul className={styles.parent}>
        {products.map((products: ProductResponse) => (
          <li className={styles.product} key={products.id}>
            <Link href={`/${products.id}`}>
              <Image
                src={
                  products?.images?.[0]?.startsWith('https://placehold.co/')
                    ? '/images/default-product.webp'
                    : products.images[0]
                }
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
              <Link className={`${styles.details} ${styles.title}`} key={products.id} href={`/${products.id}`}>
                {products.title || "Unnamed Item"}
              </Link>
              <div className={styles.detail}>
                <Link className={`${styles.price}`} key={products.id} href={`/${products.id}`}>
                  ${products.price || "???"}
                </Link>
              </div>
            </div>
            
          </li>
        ))}
      </ul>
    </section>
  )
}