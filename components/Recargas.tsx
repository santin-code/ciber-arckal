import styles from './Section.module.css'
import rc from './Recargas.module.css'

const carriers = [
  { name: 'Bait', emoji: '🔵', color: '#00bcd4' },
  { name: 'Telcel', emoji: '🔴', color: '#e53935' },
  { name: 'AT&T', emoji: '🔵', color: '#00a8e0' },
  { name: 'Movistar', emoji: '🟢', color: '#009900' },
  { name: 'Newww', emoji: '🟣', color: '#9c27b0' },
  { name: 'Unefon', emoji: '🟠', color: '#ff5722' },
  { name: 'Virgin Mobile', emoji: '❤️', color: '#e91e63' },
  { name: 'Oui', emoji: '🇫🇷', color: '#3f51b5' },
]

export default function Recargas() {
  return (
    <section id="recargas" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.label}>Recargas electrónicas</span>
        <h2 className={styles.h2}>
          Todas las operadoras,<br />
          <span className={styles.highlight}>un solo lugar</span>
        </h2>
        <p className={rc.intro}>
          Recarga tu línea en segundos. Sin comisiones ocultas, sin esperas.
          Disponible para todas las operadoras de México.
        </p>
        <div className={rc.grid}>
          {carriers.map((c) => (
            <div
              key={c.name}
              className={rc.chip}
              style={{ '--c': c.color } as React.CSSProperties}
            >
              <span className={rc.dot} />
              <span className={rc.chipName}>{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
