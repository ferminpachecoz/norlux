import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/WhyPVC/HeroSection'
import TipoProducto from '../components/TipoProducto'

export default function Corredizo() {
  let array=[
    {
      image: "/Perfiles/advance.webp",
      title: "Línea Advance",
      link: "/perfiles/corredizo/linea-advance"
    },
    {
      image: "/Perfiles/prime.webp",
      title: "Línea Prime",
      link: "/perfiles/corredizo/linea-prime"
    },
    {
      image: "/Perfiles/jumbo.webp",
      title: "Línea Jumbo",
      link: "/perfiles/corredizo/linea-jumbo"
    },
    {
      image: "/Perfiles/evolution.webp",
      title: "Línea Evolution",
      link: "/perfiles/corredizo/linea-evolution"
    }
  ]
  return (
    <>
      <Header />
      <HeroSection image="/images/_MG_0165.webp" title="Corredizo" subtitle="Descubrí todos nuestros sistemas corredizos" />
      <TipoProducto array={array} />
      <Footer />
    </>
  )
}
