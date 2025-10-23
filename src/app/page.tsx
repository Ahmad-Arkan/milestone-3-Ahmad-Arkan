import Image from "next/image";
import styles from "./page.module.css";

import Hero from "@/components/Hero"
import Items from "@/components/ProductsList";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  const hero = {
    title: 'Products Category',
    images: [
      '/images/hero0.png',
    ],
    buttons: [
      {
        id: 1,
        image: 'https://i.imgur.com/ZANVnHE.jpeg',
        name: 'Electronics',
        link: 'http://ahmadrka.com'
      },
      {
        id: 2,
        name: 'Clothes',
        image: 'https://i.imgur.com/QkIa5tT.jpeg',
        link: 'http://ahmadrka.com'
      },
      {
        id: 3,
        name: 'Furnitures',
        image: 'https://i.imgur.com/Qphac99.jpeg',
        link: 'http://ahmadrka.com'
      },
      {
        id: 4,
        name: 'Miscellaneous',
        image: 'https://i.imgur.com/BG8J0Fj.jpg',
        link: 'http://ahmadrka.com'
      },
    ]
  }

  return (
    <>
      <Hero hero={hero} />
      <Items />
      <ThemeToggle />
    </>
  );
}
