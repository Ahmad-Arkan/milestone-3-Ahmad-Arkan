import { ProductResponse } from "@/types/product"
import { notFound } from "next/navigation";
const DATABASE_API = "https://api.escuelajs.co/api/v1"; // API Key
const paginations = {
  offset: 0,
  limit: 50
}

// Products Fetching API
export async function getProducts():Promise<ProductResponse> {
  try {
    const response = await fetch(`${DATABASE_API}/products?offset=${paginations.offset}&limit=${paginations.limit}`);
    return response.json();
  } catch(err) {
    console.error('Failed fetching data :', err)
    throw new Error('Failed fetching data')
  }
}

// Product Fetching API By ID
export async function getProduct(id:number):Promise<ProductResponse> {
  try {
    const response = await fetch(`${DATABASE_API}/products/${id}`);
    if (!response.ok) {
      notFound();
    }
    return response.json();
  } catch(err) {
    console.error('Failed fetching data :', err)
    throw new Error('Failed fetching data')
  }
}