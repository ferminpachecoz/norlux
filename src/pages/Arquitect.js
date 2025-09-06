import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BannerAlt from '../components/Arquitect-Developer/BannerAlt'
import Ventajas from '../components/Arquitect-Developer/Ventajas'
import Specifications from '../components/Arquitect-Developer/Specifications'
import Desarrollos from '../components/Arquitect-Developer/Desarrollos'
import Agenda from '../components/Arquitect-Developer/Agenda'

export default function Arquitect() {
  let array=[
    {
      icon: "bi bi-file-earmark-ruled",
      title: "Especificaciones Técnicas",
      description: "Documentación completa con detalles constructivos, cortes y especificaciones para tus proyectos.",
    },
    {
      icon: "bi bi-palette",
      title: "Muestras y Catálogos",
      description: "Muestrario completo de perfiles, colores y acabados para presentar a tus clientes.",
    },
    {
      icon: "bi bi-rulers",
      title: "Asesoramiento Técnico",
      description: "Consultoría especializada para optimizar diseño, performance y cumplimiento normativo.",
    },
    {
      icon: "bi bi-people",
      title: "Soporte al Cliente Final",
      description: "Atendemos directamente a tus clientes durante todo el proceso de fabricación e instalación.",
    },
  ]
  return (
    <>
      <Header />
      <BannerAlt />
      <Ventajas 
        title="Servicios especializados para <b>profesionales</b>" 
        subtitle="Herramientas y soporte técnico diseñados para facilitar tu trabajo y garantizar el éxito de tus proyectos." 
        array={array} 
      />
      <Specifications />
      <Desarrollos />
      <Agenda />
      <Footer />
    </>
  )
}
