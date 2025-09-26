import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HeroSection from '../../components/WhyPVC/HeroSection'
import NuevosDecks from './NuevosDecks'

export default function Noticia3() {
  return (
    <>
      <Header />
      <HeroSection 
        title="Nuevos Decks de PVC" 
        subtitle="Presentamos los nuevos decks de PVC Muchtek" 
        image="/pisosInterior/image-banner.webp" 
      />
      <NuevosDecks />
      <Footer />
    </>
  )
}
