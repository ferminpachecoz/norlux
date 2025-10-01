import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/WhyPVC/HeroSection'
import Footer from '../components/Footer'
import ContactSection from '../components/Contacto/ContactSection'
import MapSection from '../components/Contacto/MapSection'
import { Helmet } from 'react-helmet'

export default function Contacto() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Escribinos para cotizar ventanas y puertas de PVC. Relevamos tu obra, tomamos medidas y planificamos una instalación precisa y garantizada."
        />
        <title>Contacto Nörlux: presupuesto y asesoramiento técnico</title>
      </Helmet>
      <Header />
      <HeroSection image="/houses/house-banner.webp" title="Contacto" subtitle="Lorem ipsum dolor sit amet" />
      <ContactSection />
      <MapSection />
      <Footer />
    </>
  )
}
