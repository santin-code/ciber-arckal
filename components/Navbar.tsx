'use client'

import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#recargas', label: 'Recargas' },
  { href: '#juegos', label: 'Juegos' },
  { href: '#tramites', label: 'Trámites' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {links.map((l) => (
          <a key={l.href} href={l.href} className={styles.link}>
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
