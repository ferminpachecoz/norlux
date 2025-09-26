import React from 'react';
import "./Clientes.scss";

export default function Clientes() {
  return (
    <div className='clientes'>
      <h1 className='section-title'>Clientes satisfechos en <b>todo Zona Norte</b></h1>
      <p className='section-subtitle'>Descubre lo que dicen nuestros clientes sobre su experiencia con Nörlux. Cada pin representa una historia de éxito.</p>
      <div className='resaltador'>
        <span className='linea'></span>
      </div>
      <div className='row g-5'>
        <div className='col-lg-6'>
          <div className='image-container'>
            <img src="image-placeholder.webp" alt="Placeholder" />
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='testimonials'>
            <i className="bi bi-quote"></i>
            <p className='review'>"Trabajo con Nörlux en varios proyectos. Su precisión técnica y acabados son impecables. Los herrajes Rotofrank son de primera calidad."</p>
            <div className='stars d-flex align-items-center'>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill me-3"></i>
              <p className='m-0'>5/5</p>
            </div>
            <div className='profile'>
              <img src="image-placeholder.webp" alt="Placeholder" />
              <div className='ms-4'>
                <p className='name'>Arq. Carlos Mendez</p>
                <p className='profession'>Arquitecto</p>
                <p className='hood'><i className="bi bi-geo-alt me-1"></i>Vicente López</p>
              </div>
            </div>
            <div className='tipo-proyecto'>
              <p className='label'>Proyecto:</p>
              <p className='text'>Edificio residencial - 80 aberturas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
