import React from 'react'
import Header from '../../components/Header'
import HeroSection from '../../components/WhyPVC/HeroSection'
import Footer from '../../components/Footer'
import TiposVidrio from './TiposVidrio'

export default function Noticia2() {
  return (
    <>
      <Header />
      <HeroSection 
        title="Tipos de vidrio en Argentina" 
        subtitle="Innovación y confort para tus ventanas" 
        image="/houses/house-banner.webp" 
      />
      <TiposVidrio />
      <Footer />
    </>
  )
}
