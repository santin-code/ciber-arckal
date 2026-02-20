import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />
      <h1 className={styles.logo}>ARCKAL</h1>
      <p className={styles.slogan}>simplifying your digital life</p>
      <div className={styles.badges}>
        <span className={styles.badge}>⚡ Pagos de servicios </span>
        <span className={styles.badge}>📱 Recargas </span>
        <span className={styles.badge}>🔒 100% seguro</span>
      </div>
    </header>
  )
}
