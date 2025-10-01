import React from 'react'
import Header from '../../components/Header'
import HeroSection from '../../components/WhyPVC/HeroSection'
import Footer from '../../components/Footer'
import TiposVidrio from './TiposVidrio'
import { Helmet } from 'react-helmet'

export default function Noticia2() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Low-E, Sound Control, templado y más. Definí el paquete de vidrio ideal según uso, clima y normativa para mejorar performance."
        />
        <title>Tipos de vidrio en Argentina: guía para elegir bien</title>
      </Helmet>
      <Header />
      <HeroSection 
        title="Tipos de vidrio en Argentina" 
        subtitle="Innovación y confort para tus ventanas" 
        image="/houses/house-banner.webp" 
      />
      <TiposVidrio />
      <Footer />
    </>
  )
}
