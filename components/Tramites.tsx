import styles from './Section.module.css'
import t from './Tramites.module.css'

const tramites = [
  {
    icon: '📋',
    title: 'Actas de nacimiento certificadas',
    desc: 'Trámite oficial rápido. Obten tu acta certificada para cualquier gestión.',
  },
  {
    icon: '🪪',
    title: 'CURP',
    desc: 'Obtén o verifica tu Clave Única de Registro de Población fácilmente.',
  },
  {
    icon: '🔍',
    title: 'Antecedentes no penales',
    desc: 'Carta de antecedentes penales para trámites laborales o personales.',
  },
  {
    icon: '🏥',
    title: 'Número de seguro social (NSS)',
    desc: 'Consulta y obtén tu NSS del IMSS.',
  },
  {
    icon: '🗓️',
    title: 'Citas INE',
    desc: 'Agenda o da seguimiento a tu cita para tramitar o renovar tu credencial.',
  },
  {
    icon: '🖨️',
    title: 'Ampliación y reducción de documentos',
    desc: 'carta, oficio, A4 y más.',
  },
  {
    icon: '📄',
    title: 'Escáner de documentos',
    desc: 'Digitalizamos tus documentos en alta resolución. Formato PDF o imagen.',
  },
]

export default function Tramites() {
  return (
    <section id="tramites" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.label}>Trámites y servicios</span>
        <h2 className={styles.h2}>
          Gestiona tus documentos<br />
          <span className={styles.highlight}>sin complicaciones</span>
        </h2>
        <div className={t.grid}>
          {tramites.map((item) => (
            <div key={item.title} className={t.item}>
              <div className={t.iconBox}>{item.icon}</div>
              <div>
                <h3 className={t.title}>{item.title}</h3>
                <p className={t.desc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
