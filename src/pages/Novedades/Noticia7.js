import React from 'react'
import Header from '../../components/Header'
import HeroSection from '../../components/WhyPVC/HeroSection'
import Footer from '../../components/Footer'
import AislacionAcustica from './AislacionAcustica'

export default function Noticia7() {
  return (
    <>
      <Header />
      <HeroSection 
        title="El confort del silencio" 
        subtitle="Cómo las ventanas de PVC Nörlux logran una aislación acústica superior" 
        image="/houses/house-banner.jpg"
      />
      <AislacionAcustica />
      <Footer />
    </>
  )
}
