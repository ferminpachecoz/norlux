import React from 'react';
import "./Ventajas.scss";
import CardVentajas from './CardVentajas';

export default function Ventajas({dev}) {
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
  let array2=[
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
    <div className='ventajas'>
      {dev?
        <h1 className='section-title'>Ventajas competitivas para <b>tu negocio</b></h1>
        :
        <h1 className='section-title'>Servicios especializados para <b>profesionales</b></h1>
      }
      {dev?
        <p className='section-subtitle mb-5'>Optimiza costos, cumple normativas y diferencia tus desarrollos con aberturas de calidad superior.</p>
        :
        <p className='section-subtitle mb-5'>Herramientas y soporte técnico diseñados para facilitar tu trabajo y garantizar el éxito de tus proyectos.</p>
      }
      <div className='row g-4'>
        {dev?
          array.map((item,index)=>(
            <div key={index} className='col'>
              <CardVentajas 
                icon={item.icon} 
                title={item.title} 
                description={item.description} 
                etiqueta={item.etiqueta} 
              />
            </div>
          ))
          :
          array2.map((item,index)=>(
            <div key={index} className='col'>
              <CardVentajas 
                icon={item.icon} 
                title={item.title} 
                description={item.description} 
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}
