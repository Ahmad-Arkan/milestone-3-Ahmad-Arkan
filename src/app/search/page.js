import { getProducts } from "@/libraries/api";
import ProductsList from "@/components/ProductsList"

export default async function SearchPage({ searchParams }) {
  const params = await searchParams;
  const keyword = params.keyword?.toLowerCase() || "";
  const products = await getProducts(); // fetch dari FakeStoreAPI
  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(keyword)
  );

  return (
    <ProductsList searchParam={searchParams.keyword} searchProducts={filtered} />
  );
}
