type Product = {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: any;
  images: any;
}

export type ProductsResponse = Product[]