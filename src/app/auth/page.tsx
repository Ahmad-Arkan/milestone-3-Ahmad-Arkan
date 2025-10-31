'use client'
import React, { useState } from 'react'
import styles from '@/styles/EditPage.module.css'
import { login } from '@/libraries/auth'
import { cookies } from 'next/headers'

export default async function Auth() {
  const [email, setEmail] = useState('john@mail.com')
  const [password, setPassword] = useState('changeme')

  async function handleLogin(e) {
    e.preventDefault();
    const data = await login(email, password);
    console.log(data);

    setC
  }


  return (
    <section style={{width:500}}>
      <h1>Login Page</h1>
      <form className={styles.parent} onSubmit={(e)=> handleLogin(e)}>
        <label htmlFor="email">
          <input type="email" onChange={(e)=> setEmail(e.target.value)} placeholder=' ' />
          <span>Email</span>
        </label>
        <label htmlFor="password">
          <input type="password" onChange={(e)=> setPassword(e.target.value)} placeholder=' ' />
          <span>Password</span>
        </label>
        <button className='button'>Login</button>
      </form>
    </section>
  )
}