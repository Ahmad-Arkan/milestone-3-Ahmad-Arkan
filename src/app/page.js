import Image from "next/image";
import styles from "./page.module.css";

import Items from "@/components/ProductsList";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <>
      <Items />
      <ThemeToggle />
      <h1>aaaaaaaaaaaaaaaaaa</h1>
      <p>aaa</p>
      <form>
        <input type="text"></input>
      </form>
    </>
  );
}
