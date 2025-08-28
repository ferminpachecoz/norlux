import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BannerAlt from '../components/Arquitect-Developer/BannerAlt'
import Ventajas from '../components/Arquitect-Developer/Ventajas'
import Specifications from '../components/Arquitect-Developer/Specifications'
import Desarrollos from '../components/Arquitect-Developer/Desarrollos'
import Agenda from '../components/Arquitect-Developer/Agenda'

export default function Arquitect() {
  return (
    <>
      <Header />
      <BannerAlt />
      <Ventajas />
      <Specifications />
      <Desarrollos />
      <Agenda />
      <Footer />
    </>
  )
}
