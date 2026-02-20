import styles from './Section.module.css'
import g from './Juegos.module.css'

const diamonds = [
  { amount: '110 diamantes', price: '$30' },
  { amount: '341 diamantes', price: '$70' },
  { amount: '572 diamantes', price: '$110' },
  { amount: '1,166 diamantes', price: '$210' },
  { amount: '2,398 diamantes', price: '$390' },
]

const memberships = [
  { type: 'Membresía semanal', price: '$50', desc: '7 días de ventajas exclusivas' },
  { type: 'Membresía mensual', price: '$210', desc: '30 días — el mejor valor', best: true },
]

export default function Juegos() {
  return (
    <section id="juegos" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.label}>Gaming</span>
        <h2 className={styles.h2}>
          Recargas para<br />
          <span className={styles.highlight}>tus juegos favoritos</span>
        </h2>

        {/* ROBLOX */}
        <div className={g.robloxCard}>
          <div className={g.gameHeader}>
            <span className={g.gameIcon}>🧱</span>
            <div>
              <h3 className={g.gameTitle}>Roblox</h3>
              <p className={g.gameSub}>Consigue Robux al instante y personaliza tu experiencia</p>
            </div>
            <span className={g.gameBadge} data-color="pink">Disponible</span>
          </div>
          <p className={g.gameDesc}>
            Compra Robux de forma rápida y segura. Úsalos para adquirir accesorios,
            passes de juego, avatares y mucho más dentro de Roblox.
          </p>
        </div>

        {/* FREE FIRE */}
        <div className={g.ffCard}>
          <div className={g.ffHeader}>
            <span className={g.gameIcon}>🔥</span>
            <div>
              <h3 className={g.ffTitle}>Free Fire</h3>
              <p className={g.gameSub}>Diamantes y membresías — recarga hoy mismo</p>
            </div>
            <span className={g.gameBadge} data-color="orange">Disponible</span>
          </div>

          <div className={g.ffBody}>
            {/* Diamantes */}
            <div className={g.tableWrap}>
              <p className={g.tableLabel}>💎 Diamantes</p>
              <table className={g.table}>
                <thead>
                  <tr>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {diamonds.map((d, i) => (
                    <tr key={d.amount}>
                      <td>
                        <span className={g.diamondRow}>
                          <span className={g.diamondIcon}>💎</span>
                          {d.amount}
                        </span>
                      </td>
                      <td>
                        <span className={g.priceBadge}>{d.price}</span>
                      </td>
                      <td>
                        <div className={g.bar}>
                          <div
                            className={g.barFill}
                            style={{ width: `${20 + i * 20}%` }}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Membresías */}
            <div>
              <p className={g.tableLabel}>👑 Membresías</p>
              <div className={g.membershipGrid}>
                {memberships.map((m) => (
                  <div
                    key={m.type}
                    className={`${g.memberCard} ${m.best ? g.memberBest : ''}`}
                  >
                    {m.best && <span className={g.bestTag}>Mejor valor</span>}
                    <p className={g.memberType}>{m.type}</p>
                    <p className={g.memberPrice}>{m.price}</p>
                    <p className={g.memberDesc}>{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
