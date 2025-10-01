import React from 'react'
import Header from '../../components/Header'
import HeroSection from '../../components/WhyPVC/HeroSection'
import Footer from '../../components/Footer'
import AislacionTermica from './AislacionTermica'
import { Helmet } from 'react-helmet'

export default function Noticia6() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Cómo las ventanas de PVC reducen pérdidas de calor y mejoran la eficiencia del hogar y la obra con sellos y burletes adecuados."
        />
        <title>Aislación térmica en PVC: ahorro energético y confort</title>
      </Helmet>
      <Header />
      <HeroSection 
        title="El confort de un hogar eficiente" 
        subtitle="Cómo las ventanas de PVC Nörlux logran una aislación térmica superior" 
        image="/houses/house-banner.webp" 
      />
      <AislacionTermica />
      <Footer />
    </>
  )
}
