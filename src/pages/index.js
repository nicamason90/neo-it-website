
import Meta from '../components/Meta'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'

export default function Home() {
  return (
    <>
      <Meta />
      <Header />
      <main id="inicio">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat phone="+50500000000" message="Hola, me interesa un servicio de Neo IT Services." />
    </>
  )
}