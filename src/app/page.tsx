import Image from "next/image";
import styles from "./page.module.css";

import Hero from "@/components/Hero"
import Items from "@/components/ProductsList";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <>
      <Hero />
      <Items />
      <ThemeToggle />
    </>
  );
}
