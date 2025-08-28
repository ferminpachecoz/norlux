import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/WhyPVC/HeroSection'
import TipoProducto from "../components/TipoProducto"

export default function DobleContacto() {
  let array = [
    {
      image: "/Perfiles/efficient-58-69.jpg",
      title: "Línea Efficient",
      link: "/perfiles/doble-contacto/linea-efficient"
    },
    {
      image: "/Perfiles/pivotante.jpg",
      title: "Puerta Pivotante",
      link: "/perfiles/doble-contacto/puerta-pivotante"
    },
  ]
  return (
    <>
      <Header />
      <HeroSection image="/houses/house-banner.jpg" title="Doble Contacto" subtitle="Descubrí todas nuestros perfiles de doble contacto" />
      <TipoProducto array={array} />
      <Footer />
    </>
  )
}
