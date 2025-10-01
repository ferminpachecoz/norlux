import React from 'react'
import HeroSection from '../../components/WhyPVC/HeroSection'
import EvolutionNotaSection from './EvolutionNotaSection'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Helmet } from 'react-helmet'

export default function Noticia5() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Soft-close, gran hermeticidad y diseño minimalista. Descubrí por qué Evolution eleva la experiencia y el confort diario."
        />
        <title>Evolution: la nueva generación de aberturas de PVC</title>
      </Helmet>
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
