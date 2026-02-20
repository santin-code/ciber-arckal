import styles from './Section.module.css'
import svc from './Servicios.module.css'

const services = [
  {
    icon: '📺',
    name: 'Megacable',
    desc: 'Internet, televisión y telefonía por cable. Paga tu mensualidad en segundos, sin filas y sin complicaciones.',
    color: '#00e5ff',
  },
  {
    icon: '🌐',
    name: 'Totalplay',
    desc: 'Fibra óptica ultrarrápida, TV y telefonía. Mantén tu servicio activo con un pago rápido desde aquí.',
    color: '#a855f7',
  },
  {
    icon: '⚡',
    name: 'CFE',
    desc: 'Paga tu recibo de luz al instante. Evita cortes y recargos. Ingresa tu número de servicio y listo.',
    color: '#ffe600',
  },
]

export default function Servicios() {
  return (
    <section id="servicios" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.label}>Pago de servicios</span>
        <h2 className={styles.h2}>
          Paga tus servicios aquí <br />
          <span className={styles.highlight}>_</span>
        </h2>
        <div className={svc.grid}>
          {services.map((s) => (
            <div key={s.name} className={svc.card} style={{ '--c': s.color } as React.CSSProperties}>
              <span className={svc.icon}>{s.icon}</span>
              <h3 className={svc.name}>{s.name}</h3>
              <p className={svc.desc}>{s.desc}</p>
              <span className={svc.tag}>Disponible ahora</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
