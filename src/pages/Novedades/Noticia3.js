import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HeroSection from '../../components/WhyPVC/HeroSection'
import NuevosDecks from './NuevosDecks'
import { Helmet } from 'react-helmet'

export default function Noticia3() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Conocé la nueva línea de decks: durables, antideslizantes y fáciles de limpiar. Perfectos para galerías, piscinas y terrazas."
        />
        <title>Nuevos decks de PVC: estética, agarre y cero mantenimiento</title>
      </Helmet>
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
