'use client'
import React, { FormEventHandler, useState } from 'react'
import styles from '@/styles/EditPage.module.css'
import { login } from '@/libraries/api'

export default function Auth() {
  const [email, setEmail] = useState('john@mail.com')
  const [password, setPassword] = useState('changeme')

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    if (!email || !password) {
      alert('Email & Password cannot be empty')
      return
    }

    const data = await login(email, password);
    console.log(data);

    
  }

  return (
    <section style={{width:500}}>
      <h1>Login Page</h1>
      <form className={styles.parent} onSubmit={(e)=> handleLogin(e)}>
        <label htmlFor="email">
          <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder=' ' />
          <span>Email</span>
        </label>
        <label htmlFor="password">
          <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder=' ' />
          <span>Password</span>
        </label>
        <button className='button'>Login</button>
      </form>
    </section>
  )
}