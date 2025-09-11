import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/WhyPVC/HeroSection'
import TipoProducto from '../components/TipoProducto'

export default function Corredizo() {
  let array=[
    {
      image: "/Perfiles/advance.jpg",
      title: "Línea Advance",
      link: "/perfiles/corredizo/linea-advance"
    },
    {
      image: "/Perfiles/prime.jpg",
      title: "Línea Prime",
      link: "/perfiles/corredizo/linea-prime"
    },
    {
      image: "/Perfiles/jumbo.jpg",
      title: "Línea Jumbo",
      link: "/perfiles/corredizo/linea-jumbo"
    },
    {
      image: "/Perfiles/evolution.jpg",
      title: "Línea Evolution",
      link: "/perfiles/corredizo/linea-evolution"
    }
  ]
  return (
    <>
      <Header />
      <HeroSection image="/houses/house-banner.jpg" title="Corredizo" subtitle="Descubrí todos nuestros corredizos" />
      <TipoProducto array={array} />
      <Footer />
    </>
  )
}
