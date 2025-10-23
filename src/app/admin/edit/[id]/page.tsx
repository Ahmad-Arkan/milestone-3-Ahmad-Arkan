"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getProduct } from "@/libraries/api";
import { ProductResponse } from '@/types/product'
import styles from '@/styles/EditPage.module.css'

export default function EditPage() {
  const [product, setProduct] = useState<ProductResponse>()
  const { id } = useParams()
  const productId = parseInt(id as string, 10)

  useEffect(() => {
    if (!id) return;
    // Panggil API secara async
    getProduct(productId)
      .then((data) => setProduct(data))
      .catch((err) => console.error("Failed to fetch product:", err));
  }, [id]);

  console.log('product', product)

  const handleSubmit = ()=> {
    alert('submitted')
  }

  return (
    <section>
      <h1>Edit Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <input id="name" type="text" />
        </label>
      </form>
    </section>
  );
}
