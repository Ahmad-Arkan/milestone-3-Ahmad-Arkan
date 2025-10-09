import { getProduct } from "@/libraries/api";
import ProductList from "@/components/ProductsList"

export default async function ProductDetailPage({ params }) {
  const { item } = await params;
  const product = await getProduct(item);

  const handleAdd = () => {
    console.log("Tambah produk:", product.title);
  };

  return (
    <div>
      <section>
        <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
          <img
            src={product.image}
            alt={product.title}
            style={{
              width: 300,
              aspectRatio: "1/1",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />

          <div>
            <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
              {product.title}
            </h1>
            <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
              {product.description}
            </p>
            <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
              ${product.price}
            </p>
            <p style={{ color: "#666" }}>Category: {product.category}</p>
          </div>
        </div>
      </section>
      <ProductList title={"Other Products"} />
    </div>
  );
}
