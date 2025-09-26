import React from 'react'
import HeroSection from '../../components/WhyPVC/HeroSection'
import EvolutionNotaSection from './EvolutionNotaSection'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Noticia5() {
  return (
    <>
      <Header />
      <HeroSection 
        title="Evolution"
        subtitle="La nueva generación de aberturas de PVC"
        image="/houses/house-banner.webp"
      />
      <EvolutionNotaSection />
      <Footer />
    </>
  )
}
