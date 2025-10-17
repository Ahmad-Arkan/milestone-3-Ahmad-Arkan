export const dynamic = 'force-static';
import styles from '@/styles/Hero.module.css'
import Image from 'next/image';

export default function Hero() {
  return (
    <>
      <section className={styles.images}>
        <Image
          src='/images/hero0.png'
          alt='Hero 0'
          width={1600}
          height={900}
          className={styles.image}
        />
      </section>
      <section>
        <h1>Category</h1>
        <ul>
          <li>A</li>
          <li>B</li>
          <li>C</li>
          <li>D</li>
          <li>E</li>
        </ul>
      </section>
    </>
  )
}