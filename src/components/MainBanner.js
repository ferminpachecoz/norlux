import React from 'react';
import "./MainBanner.scss";

export default function MainBanner() {
  return (
    <div className='main-banner'>
      <img src="/houses/house-banner.jpg" alt="interior of a house" />
      <div className='overlay'>
        <div className='content'>
          <h1>Aberturas de PVC de <b>alta prestación</b></h1>
          <h2>Soluciones en ventanas y puertas de PVC para viviendas, estudios de arquitectura, y desarrollos de inversión</h2>
          <div className='d-flex justify-content-between align-items-center'>
            <a href="#" className='verde'>
              Estoy construyendo mi casa 
              <i className="ms-2 bi bi-arrow-right"></i>
            </a>
            <a href="/arquitect" className='blanco'>
              Soy Arquitecto
              <i className="ms-2 bi bi-arrow-right"></i>
            </a>
            <a href="/developer" className='blanco'>
              Soy desarrollador
              <i className="ms-2 bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
