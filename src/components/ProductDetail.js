"use client";
import React from 'react'
import Image from 'next/image'
import styles from '@/styles/ProductDetail.module.css'

function ProductDetail({product}) {
  return (
    <section className={styles.parent}>
      <Image
        src={product.image || "/images/default-product.webp"}
        alt={product.title}
        width={100}
        height={100}
        onError={(e) => {
          e.currentTarget.src = "/images/default-product.webp";
        }}
        unoptimized
      />
      <div className={styles.details}>
        <h1 className={styles.title}>{product.title}</h1>
        <h2 className={styles.description}>{product.description}</h2>
        <p className={styles.category}>Category : <span>{product.category}</span></p>
      </div>
      <div className={styles.actions}>
        <h1 className={styles.price}>${product.price}</h1>
      </div>
    </section>
  )
}

export default ProductDetail