import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HeroSection from '../../components/WhyPVC/HeroSection'
import Productos from '../../components/Productos'
import Separador from '../../components/Separador'

export default function PuertaPivotante() {
  return (
    <>
      <Header />
      <HeroSection title="Puerta Pivotante" subtitle="Lorem ipsum dolor sit amet" image="/houses/sample-02.jpg" />
      <Productos>
        <h2 className='titulo'>¿Qué <b>ofrecemos</b>?</h2>
        <Separador width="100px" color="--color-3" />
        <p>Siempre a la vanguardia tecnológica y respondiendo a una creciente demanda arquitectónica, Muchtek presenta la nueva PUERTA PIVOTANTE DE PVC, de 2.60 mts de alto, con un sistema de herraje de acero inoxidable y un cerramiento con cremona, que ofrece el máximo grado de seguridad, novedoso diseño, con gran estilo y confort.</p>
        <img src="/PuertaPivotante/caracteristicas-pivotante.jpg" alt="caracteristicas de puerta pivotante" />
        <img src="/PuertaPivotante/detalle-pivotante.jpg" alt="Detalles de puerta pivotante" />
        <h2 className='mt-4'>Descarga nuestros <b>catálogos digitales</b></h2>
        <Separador width="100px" color="--color-3" />
        <div className='row g-4 catalogo-section'>
          <div className='col'>
            <p>Brochure institucional Muchtek</p>
            <span className='d-flex align-items-center'>
              <i className="bi bi-filetype-pdf"></i>
              <a href="#">Descargar</a>
            </span>
          </div>
          <div className='col'>
            <p>Flyer ADN Muchtek</p>
            <span className='d-flex align-items-center'>
              <i className="bi bi-filetype-pdf"></i>
              <a href="#">Descargar</a>
            </span>
          </div>
          <div className='col'>
            <p>Díptico laminados Muchtek</p>
            <span className='d-flex align-items-center'>
              <i className="bi bi-filetype-pdf"></i>
              <a href="#">Descargar</a>
            </span>
          </div>
          <div className='col'>
            <p>Flyer eficiencia energética Muchtek</p>
            <span className='d-flex align-items-center'>
              <i className="bi bi-filetype-pdf"></i>
              <a href="#">Descargar</a>
            </span>
          </div>
        </div>
      </Productos>
      <Footer />
    </>
  )
}
