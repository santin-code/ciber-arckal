import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Servicios from '@/components/Servicios'
import Recargas from '@/components/Recargas'
import Juegos from '@/components/Juegos'
import Tramites from '@/components/Tramites'
import Contacto from '@/components/Contacto'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <Servicios />
      <Recargas />
      <Juegos />
      <Tramites />
      <Contacto />
      <Footer />
    </main>
  )
}
