import React from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import BannerAlt from '../components/Arquitect-Developer/BannerAlt'
import Ventajas from '../components/Arquitect-Developer/Ventajas'
import Estadisticas from '../components/Arquitect-Developer/Estadisticas'
import DescripcionServicios from '../components/Arquitect-Developer/DescripcionServicios'
import Desarrollos from '../components/Arquitect-Developer/Desarrollos'
import Agenda from '../components/Arquitect-Developer/Agenda'

export default function Developer() {
  return (
    <>
      <Header />
      <BannerAlt dev={true} />
      <Ventajas dev={true} />
      <Estadisticas />
      <DescripcionServicios />
      <Desarrollos dev={true} />
      <Agenda dev={true} />
      <Footer />
    </>
  )
}
