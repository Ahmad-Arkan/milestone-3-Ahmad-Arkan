'use client'
import React, { useEffect, useState } from 'react'

export default function loading() {
  const [dot, setDot] = useState('.');

  useEffect(() => {
    const interval = setInterval(() => {
      setDot(prev => {
        switch (prev) {
          case '.':
            return '..';
          case '..':
            return '...';
          case '...':
            return '.';
          default:
            return '.';
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <h1>Loading{dot}</h1>
      <h2>Please wait</h2>
    </section>
  )
}
