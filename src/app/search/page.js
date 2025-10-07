import { getProducts } from "@/libraries/api";
import styles from "@/styles/ProductsList.module.css";
import Icon from "@/components/Icons";
import Link from "next/link";

export default async function SearchPage({ searchParams }) {
  const params = await searchParams;
  const keyword = params.keyword?.toLowerCase() || "";
  const products = await getProducts(); // fetch dari FakeStoreAPI
  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(keyword)
  );

  return (
    <section className={styles.products}>
      {filtered.map((products) => (
        <Link key={products.id} href={`/${products.id}`}>
          <button className={styles.product}>
              <div key={products.id}>
                <img
                  src={products.image || "/images/default-product.webp"}
                  alt={products.title}
                  width={100}
                  height={100}
                />
                <div className={styles.detail}>
                  <span className={`${styles.detail} ${styles.title}`}>{products.title || "Unnamed Item"}</span>
                  <span className={`${styles.detail} ${styles.price}`}>${products.price || "???"} <Icon name="addCard" className={styles.addCard} /></span>
                </div>
              </div>
          </button>
        </Link>
      ))}
    </section>
  );
}
