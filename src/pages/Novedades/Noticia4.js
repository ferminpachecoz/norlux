import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HeroSection from '../../components/WhyPVC/HeroSection'
import MontajeObra from './MontajeObra'
import { Helmet } from 'react-helmet'

export default function Noticia4() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Insumos profesionales y procedimientos precisos para asegurar hermeticidad y durabilidad. La calidad se consolida en la instalación."
        />
        <title>Montaje en obra: por qué la instalación define la performance</title>
      </Helmet>
      <Header />
      <HeroSection 
        title="Montaje en obra" 
        subtitle="La clave para que tus ventanas rindan al máximo" 
        image="/houses/house-banner.webp"
      />
      <MontajeObra />
      <Footer />
    </>
  )
}
