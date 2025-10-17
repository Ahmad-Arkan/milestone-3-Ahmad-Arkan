import { ProductsResponse } from "@/types/product"
const DATABASE_API = "https://api.escuelajs.co/api/v1"; // API Key
const paginations = {
  offset: 0,
  limit: 50
}

// Products Fetching API
export async function getProducts():Promise<ProductsResponse> {
  try {
    const response = await fetch(`${DATABASE_API}/products?offset=${paginations.offset}&limit=${paginations.limit}`);
    const products = response.json();
    return products;
  } catch(err) {
    console.error('Failed fetching data :', err)
    throw new Error('Failed fetching data')
  }
}

// Product Fetching API By ID
export async function getProduct(id:any) {
  try {
    const response = await fetch(`${DATABASE_API}/products/${id}`);
    const product = response.json();
    return product;
  } catch(err) {
    console.error('Failed fetching data :', err)
    throw new Error('Failed fetching data')
  }
}