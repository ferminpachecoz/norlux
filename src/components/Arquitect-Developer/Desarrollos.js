import React from 'react';
import "./Desarrollos.scss"

export default function Desarrollos({dev}) {
  let array=[
    {
      image: "/houses/house-banner.jpg",
      title: "Complejo Residencial Torres del Norte",
      unidades: "240 unidades",
      barrio: "Martínez",
      lista: ["15% ahorro vs. competencia", "Entregado en tiempo récord"]
    },
    {
      image: "/houses/house-banner.jpg",
      title: "Desarrollo Premium Riverside",
      unidades: "120 unidades",
      barrio: "Tigre",
      lista: ["20% mejora en eficiencia", "Cero reclamos post-entrega"]
    },
    {
      image: "/houses/house-banner.jpg",
      title: "Edificio Corporativo Norte Plaza",
      unidades: "80 oficinas",
      barrio: "Vicente López",
      lista: ["Certificación LEED", "Instalación en tiempo récord"]
    }
  ]
  let array2=[
    {
      image: "/houses/house-banner.jpg",
      title: "Edificio Residencial Premium",
      client: "Estudio Blanc Arquitectos",
      barrio: "Vicente López",
      description: "120 aberturas PVC con diseño minimalista y máxima eficiencia energética."
    },
    {
      image: "/houses/house-banner.jpg",
      title: "Casa Unifamiliar Moderna",
      client: "Arq. Sofia Larsen",
      barrio: "San Isidro",
      description: "Ventanales panorámicos con perfiles ocultos y herrajes de alta gama."
    },
    {
      image: "/houses/house-banner.jpg",
      title: "Complejo de Oficinas",
      client: "Grupo Arquitectónico Norte",
      barrio: "Olivos",
      description: "Muro cortina PVC con control solar y ventilación automatizada."
    }
  ]
  return (
    <div className='desarrollos'>
      {dev?
        <h1 className='section-title'>Desarrollos <b>exitosos</b></h1>
        :
        <h1 className='section-title'>Proyectos <b>destacados</b></h1>
      }
      {dev?
        <p className='section-subtitle mb-5'>Casos de éxito con desarrolladores que confiaron en Nörlux para sus proyectos.</p>
        :
        <p className='section-subtitle mb-5'>Colaboraciones exitosas con estudios de arquitectura reconocidos en Zona Norte.</p>
      }
      <div className='row g-5'>
        {dev?
          array.map((item, index)=>(
            <div className='col' key={index}>
              <div className='card-container'>
                <div className='image-container'>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className='p-3'>
                  <p className='title'>{item.title}</p>
                  <div className='d-flex justify-content-between align-items-center'>
                    <p className='unidades'>{item.unidades}</p>
                    <p className='barrio'>{item.barrio}</p>
                  </div>
                  <ul>
                    <li>
                      <i className="bi bi-graph-up-arrow"></i>
                      <p>{item.lista[0]}</p>
                    </li>
                    <li>
                      <i className="bi bi-clock"></i>
                      <p>{item.lista[1]}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))
        :
          array2.map((item, index)=>(
            <div className='col' key={index}>
              <div className='card-container'>
                <div className='image-container'>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className='p-3'>
                  <p className='title'>{item.title}</p>
                  <p className='client'>{item.client}</p>
                  <p className='barrio'>{item.barrio}</p>
                  <p className='description'>{item.description}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
