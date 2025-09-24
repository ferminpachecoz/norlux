import React from 'react'
import Header from '../../components/Header'
import HeroSection from '../../components/WhyPVC/HeroSection'
import Footer from '../../components/Footer'
import AislacionTermica from './AislacionTermica'

export default function Noticia6() {
  return (
    <>
      <Header />
      <HeroSection 
        title="El confort de un hogar eficiente" 
        subtitle="Cómo las ventanas de PVC Nörlux logran una aislación térmica superior" 
        image="/houses/house-banner.jpg" 
      />
      <AislacionTermica />
      <Footer />
    </>
  )
}
