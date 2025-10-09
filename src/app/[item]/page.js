import { getProduct } from "@/libraries/api";
import ProductDetail from "@/components/ProductDetail";
import ProductList from "@/components/ProductsList"

export default async function ProductDetailPage({ params }) {
  const { item } = await params;
  const product = await getProduct(item);

  const handleAdd = () => {
    console.log("Tambah produk:", product.title);
  };

  return (
    <div>
      <ProductDetail product={product} />
      <ProductList title={"Other Products"} />
    </div>
  );
}
