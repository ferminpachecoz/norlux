import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/WhyPVC/HeroSection'
import TipoProducto from "../components/TipoProducto"
import { Helmet } from 'react-helmet'

export default function DobleContacto() {
  let array = [
    {
      image: "/Perfiles/efficient-58-69.webp",
      title: "Línea Efficient",
      link: "/perfiles/doble-contacto/linea-efficient"
    },
    {
      image: "/Perfiles/pivotante.webp",
      title: "Puerta Pivotante",
      link: "/perfiles/doble-contacto/puerta-pivotante"
    },
  ]
  return (
    <>
    <Helmet>
      <meta
        name="description"
        content="Ventanas batientes de PVC con burletes de doble contacto para aislación térmica y acústica superior, seguridad y eficiencia energética."
      />
      <title>Doble contacto Nörlux: máxima hermeticidad y confort</title>
    </Helmet>
      <Header />
      <HeroSection image="/images/_MG_9831.webp" title="Doble Contacto" subtitle="Descubrí todas nuestros perfiles de doble contacto" />
      <TipoProducto array={array} />
      <Footer />
    </>
  )
}
