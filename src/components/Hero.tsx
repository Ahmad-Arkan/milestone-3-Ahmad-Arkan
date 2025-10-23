export const dynamic = 'force-static';
import styles from '@/styles/Hero.module.css'
import Image from 'next/image';
import Link from 'next/link';

type Hero = {
  title: string,
  images: string[],
  buttons: any
}

type Button = {
  id: number,
  image: string,
  name: string,
  link: string
}

export default function Hero({ hero }: { hero: Hero }) {
  return (
    <>
      <section className={styles.images}>
        <Image
          src={hero.images[0]}
          alt={`Hero 0`}
          width={1600}
          height={900}
          className={styles.image}
          priority
        />
      </section>
      <section>
        <h1 className={styles.title}>{hero.title}</h1>
        <ul className={styles.list}>
          {hero.buttons.map((button: Button) => (
            <li key={button.id}>
              <Link href={button.link} className={styles.item}>
                <Image
                  src={button.image}
                  alt={button.name}
                  width={100}
                  height={100}
                />
                <span>{button.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}