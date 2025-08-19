import React from 'react'
import "./Proyectos.scss"

export default function Proyectos() {
  return (
    <div className='proyectos'>
      <h1 className='section-title'>Proyectos que <b>hablan por nosotros</b></h1>
      <p className='section-subtitle'>Cada proyecto es único y refleja nuestro compromiso con la excelencia, la precisión técnica y el diseño nórdico.</p>
      <div className='resaltador'>
        <span className='linea'></span>
      </div>
      <div className='slide row g-0'>
        <div className='col-lg-6'>
          <img src="/houses/house-banner.jpg" alt="Casa moderna con estilo minimalista" />
        </div>
        <div className='col-lg-6 d-flex align-items-center fondo'>
          <div className='contenido'>
            <p className='title'>Casa Nordica - San Isidro</p>
            <p className='description'>Ventanas de PVC de alto rendimiento con perfiles Muchtek y herrajes Rotofrank</p>
            <div className='cliente d-flex'>
              <span className='circle me-2'></span>
              <p>Cliente: Familia Martinez</p>
            </div>
            <button className='boton'> 
              Ver proyecto completo
              <i className="ms-2 bi bi-box-arrow-up-right"></i>
            </button>
          </div>
        </div>
        <div className='etiqueta'>
          <p>Residencial</p>
        </div>
      </div>
    </div>
  )
}
