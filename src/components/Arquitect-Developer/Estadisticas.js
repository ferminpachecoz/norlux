import React from 'react';
import "./Estadisticas.scss"

export default function Estadisticas() {
  let array=[
    {
      stats: "15-25%",
      title: "Ahorro en costos",
      description: "vs. alternativas premium"
    },
    {
      stats: "40% menos",
      title: "Tiempo de instalación",
      description: "que sistemas tradicionales"
    },
    {
      stats: "Mínimo",
      title: "Mantenimiento",
      description: "durante 10+ años"
    },
    {
      stats: "+8%",
      title: "Valor agregado",
      description: "en precio de venta final"
    }
  ]
  return (
    <div className='estadisticas'>
      <h1 className='section-title'>Retorno de inversión <b>comprobado</b></h1>
      <p className='section-subtitle mb-4'>Datos reales de proyectos ejecutados que demuestran el impacto positivo en tu rentabilidad.</p>
      <div className='row  g-4'>
        {
          array.map((item, index)=>(
            <div className='col' key={index}>
              <div className='card-container'>
                <p className='stats'>{item.stats}</p>
                <p className='title'>{item.title}</p>
                <p className='description'>{item.description}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
