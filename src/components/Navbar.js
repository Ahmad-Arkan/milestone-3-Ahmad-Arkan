"use client";
import Link from "next/link";
import styles from "@/styles/Navbar.module.css"
import Icon from "@/components/Icons";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar () {
  const [keyword, setKeyword] = useState('');
  const router = useRouter()

  const handleSearchChange = (e) => {
    e.preventDefault();
    if (!keyword.trim()) return;
    router.push(`/search?keyword=${encodeURIComponent(keyword)}`);
    // setKeyword('')
  };

  return (
    <nav className={styles.navbar}>
      <menu className={styles.menu1}>
        <Link href="/" className={styles.title}>RevoStore</Link>
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
        <button>
          <Link href="/cart"><Icon name="cart" className={styles.logo} /></Link>
        </button>
        {/* <div className={styles.account}>
          <button>Sign Up</button>
          <button>Login</button>
        </div> */}
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