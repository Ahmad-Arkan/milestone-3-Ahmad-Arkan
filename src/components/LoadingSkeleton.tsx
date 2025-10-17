import styles from "@/styles/LoadingSkeleton.module.css"

export default function LoadingSkeleton() {
  return (
    <div className={`${styles.skeleton}`}>
      <div className={styles.image} />
      <div className={styles.title} />
      <div className={styles.price} />
    </div>
  );
}