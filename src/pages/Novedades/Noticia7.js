import React from 'react'
import Header from '../../components/Header'
import HeroSection from '../../components/WhyPVC/HeroSection'
import Footer from '../../components/Footer'
import AislacionAcustica from './AislacionAcustica'
import { Helmet } from 'react-helmet'

export default function Noticia7() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Elegí aberturas que bloquean el ruido urbano: perfiles, doble contacto y vidrios correctos para lograr silencio y descanso."
        />
        <title>Aislación acústica en PVC: menos ruido, más bienestar</title>
      </Helmet>
      <Header />
      <HeroSection 
        title="El confort del silencio" 
        subtitle="Cómo las ventanas de PVC Nörlux logran una aislación acústica superior" 
        image="/houses/house-banner.webp"
      />
      <AislacionAcustica />
      <Footer />
    </>
  )
}
