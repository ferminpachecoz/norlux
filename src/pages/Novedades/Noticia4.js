import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HeroSection from '../../components/WhyPVC/HeroSection'
import MontajeObra from './MontajeObra'

export default function Noticia4() {
  return (
    <>
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
