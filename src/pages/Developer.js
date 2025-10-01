import React from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import BannerAlt from '../components/Arquitect-Developer/BannerAlt'
import Ventajas from '../components/Arquitect-Developer/Ventajas'
import Estadisticas from '../components/Arquitect-Developer/Estadisticas'
import DescripcionServicios from '../components/Arquitect-Developer/DescripcionServicios'
import Desarrollos from '../components/Arquitect-Developer/Desarrollos'
import Agenda from '../components/Arquitect-Developer/Agenda'
import { Helmet } from 'react-helmet'

export default function Developer() {
  let array=[
    {
      icon: "bi bi-graph-up-arrow",
      title: "Rentabilidad Optimizada",
      description: "Mejor relación costo-beneficio con aberturas que agregan valor real a tus desarrollos.",
      etiqueta: "ROI superior"
    },
    {
      icon: "bi bi-clock",
      title: "Entregas Puntuales",
      description: "Cumplimiento estricto de cronogramas para no retrasar tus entregas de obra.",
      etiqueta: "0% retrasos"
    },
    {
      icon: "bi bi-shield-check",
      title: "Cumplimiento Normativo",
      description: "Todas las aberturas cumplen normas IRAM y requisitos municipales vigentes.",
      etiqueta: "100% conforme"
    },
    {
      icon: "bi bi-people",
      title: "Soporte Integral",
      description: "Equipo dedicado para grandes volúmenes con atención personalizada.",
      etiqueta: "Servicio VIP"
    },
  ]
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Especificaciones técnicas, plazos confiables y eficiencia energética para maximizar valor por m² y reducir costos operativos en tus desarrollos."
        />
        <title>Nörlux para desarrolladores: ROI con aberturas de PVC</title>
      </Helmet>
      <Header />
      <BannerAlt dev={true} />
      <Ventajas 
        dev={true} 
        title="Ventajas competitivas para <b>tu negocio</b>" 
        subtitle="Optimiza costos, cumple normativas y diferencia tus desarrollos con aberturas de calidad superior." 
        array={array} 
      />
      <Estadisticas />
      <DescripcionServicios />
      <Desarrollos dev={true} />
      <Agenda dev={true} />
      <Footer />
    </>
  )
}
