const DATABASE_API = "https://fakestoreapi.com"; // API Key

// Products Fetching API
export async function getProducts() {
  try {
    const response = await fetch(`${DATABASE_API}/products`);
    const products = response.json();
    return products;
  } catch(err) {
    console.error('Failed fetching data :', err)
    throw new Error('Failed fetching data')
  }
}

// Product Fetching API By ID
export async function getProduct(id) {
  try {
    const response = await fetch(`${DATABASE_API}/products/${id}`);
    const product = response.json();
    return product;
  } catch(err) {
    console.error('Failed fetching data :', err)
    throw new Error('Failed fetching data')
  }
}