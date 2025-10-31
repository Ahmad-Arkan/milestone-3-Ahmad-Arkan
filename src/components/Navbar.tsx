"use client";
import Link from "next/link";
import styles from "@/styles/Navbar.module.css"
import Icon from "@/components/Icons";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar () {
  const [keyword, setKeyword] = useState<string>('');
  const router = useRouter()

  const handleSearchChange = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!keyword.trim()) return;
    router.push(`/search?keyword=${encodeURIComponent(keyword)}`);
  };

  const pathName = usePathname()
  const hiddenPaths = ["/edit", "/auth"];
  const hideNav = hiddenPaths.some(path => pathName.startsWith(path));

  if (hideNav) return null;

  return (
    <nav className={styles.navbar}>
      <menu className={styles.menu1}>
        <Link href="/" className={styles.title}>RevoShop</Link>
        <form className={styles.searchBar} onSubmit={handleSearchChange}>
          <label>
            <input 
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Search Something"
            />
          </label>
          <button type="submit">
            <Icon name="search" />
          </button>
        </form>
        <button className={styles.cart}>
          <Link href="/cart"><Icon name="cart" className={styles.logo} /></Link>
        </button>
        <div className={styles.account}>
          <Link href="/admin"><button>Admin Page</button></Link>
          <Link href="/auth"><button>Login</button></Link>
        </div>
      </menu>
      <menu className={styles.menu2}>
        <div className={styles.suggestions}>
          <button>Clothes</button>
          <button>Outfit</button>
          <button>Cooking</button>
          <button>Furniture</button>
          <button>Electronic</button>
          <button>Computer</button>
        </div>
        <div className={styles.preferences}>
          <button>Address</button>
          <button>English</button>
          <button>Light</button>
        </div>
      </menu>
    </nav>
  )
}