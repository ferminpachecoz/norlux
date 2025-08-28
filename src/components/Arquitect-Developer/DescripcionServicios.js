import React from 'react';
import "./DescripcionServicios.scss";
import Separador from "../Separador"

export default function DescripcionServicios() {
  let array=[
    {
      title: "Cotización por Volumen",
      description: "Precios preferenciales para desarrollos de gran escala",
      lista:["Descuentos por cantidad", "Condiciones de pago flexibles", "Precios fijos por proyecto"]
    },
    {
      title: "Planificación de Entregas",
      description: "Cronograma coordinado con el avance de obra",
      lista:["Entregas escalonadas", "Stock reservado", "Logística optimizada"]
    },
    {
      title: "Soporte Técnico",
      description: "Asesoramiento especializado para optimizar especificaciones",
      lista:["Análisis de proyecto", "Optimización de costos", "Cumplimiento normativo"]
    },
    {
      title: "Garantía Extendida",
      description: "Respaldo completo para tranquilidad de compradores finales",
      lista:["10 años en perfiles", "5 años en herrajes", "Servicio post-venta"]
    }
  ]
  return (
    <div className='descripcion-servicios'>
      <h1 className='section-title mb-4'>Servicios especializados para <b>grandes volúmenes</b></h1>
      <Separador width="100px" color="--color-3" />
      <div className='row row-cols-2 g-4 mt-4'>
        {
          array.map((item,index)=>(
            <div className='col' key={index}>
              <div className='card-container'>
                <p className='title'>{item.title}</p>
                <p className='description'>{item.description}</p>
                <ul>
                  {
                    item.lista.map((element,index)=>(
                      <li key={index}>
                        <span className='circle'></span>
                        <p className='mb-0'>{element}</p>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
