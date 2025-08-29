import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/WhyPVC/HeroSection'
import Footer from '../components/Footer'
import ContactSection from '../components/Contacto/ContactSection'
import MapSection from '../components/Contacto/MapSection'

export default function Contacto() {
  return (
    <>
      <Header />
      <HeroSection image="/houses/house-banner.jpg" title="Contacto" subtitle="Lorem ipsum dolor sit amet" />
      <ContactSection />
      <MapSection />
      <Footer />
    </>
  )
}
