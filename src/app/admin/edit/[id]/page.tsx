"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getProduct } from "@/libraries/api";
import { ProductResponse } from '@/types/product'
import styles from '@/styles/EditPage.module.css'

export default function EditPage() {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const { id } = useParams()
  const productId = parseInt(id as string, 10)

  useEffect(() => {
    if (!id) return;
    const fetchProduct = async ()=> {
      try {
        const data: ProductResponse = await getProduct(productId)

        setTitle(data.title || "")
        setPrice(String(data.price || ""))
        setDescription(data.description || "")
      } catch (err) {
        console.error("Failed to fetch product:", err);
      }
    }

    fetchProduct()
  }, [id]);

  const handleSubmit = async (pre: React.FormEvent)=> {
    pre.preventDefault();
    alert('submitted')
    try {
      const res = await fetch(`https://api.escuelajs.co/api/v1/products/${productId}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          title: title,
          price: Number(price),
          description: description
        })
      })

      console.log(res)

      if (!res.ok) {
        const errText = await res.text()
        console.error("Server responded:", res.status, errText)
        throw new Error("Update failed")
      }

      const updated = await res.json()
      console.log("updated",updated)
    } catch (err) {
      console.error("Error", err)
    }
  }

  return (
    <section>
      <h1>Edit Page</h1>
      <form onSubmit={handleSubmit} className={styles.parent}>
        <label htmlFor="name">
          <input name={title} value={title} onChange={(e) => setTitle(e.target.value)} id="name" type="text" placeholder=" " />
          <span>Product Name</span>
        </label>
        <label htmlFor="price">
          $
          <input name={price} value={price} onChange={(e) => setPrice(e.target.value)} id="price" type="number" min={0} placeholder=" " />
          <span>Price</span>
        </label>
        <label htmlFor="description">
          <textarea name={description} value={description} onChange={(e) => setDescription(e.target.value)} id="description" placeholder=" " />
          <span>Description</span>
        </label>
        <button>Submit</button>
      </form>
    </section>
  );
}
