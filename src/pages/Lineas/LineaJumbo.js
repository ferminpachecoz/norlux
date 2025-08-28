import React from 'react'
import Header from '../../components/Header'
import HeroSection from '../../components/WhyPVC/HeroSection'
import Footer from '../../components/Footer'
import Productos from '../../components/Productos'
import Separador from '../../components/Separador'

export default function LineaJumbo() {
  return (
    <>
      <Header />
      <HeroSection title="Línea Jumbo" subtitle="Lorem ipsum dolor sit amet" image="/houses/house-banner.jpg" />
      <Productos>
        <h2>Sistema Corredizo</h2>
        <Separador />
        <p>El sistema corredizo Línea Jumbo permite dar respuesta a diseños de aberturas de grandes luces, pudiendo alcanzar alturas de hasta 3 metros. Ideal para optimizar espacios en el interior de los ambientes, recibir más luz natural y/o poder disfrutar de grandes vistas, posee refuerzo interior de acero galvanizado, permite acristalar vidrios simples y dobles hasta 34 mm de espesor.</p>
        <img src="/LineaJumbo/jumbo-renders.png" alt="jumbo renders" />
        <p>Gracias al innovador sistema de guías acoplables de marco, se pueden agregar múltiples guías, como también fabricar aberturas con 2, 3, 4 y 6 hojas móviles y/o fijas.</p>
        <p>En sistemas fijo-móvil, el umbral no posee guía de marco en la hoja activa, quedando el marco sin obstrucciones del lado exterior. Además, con refuerzos de mayor inercia, que garantizan una óptima funcionalidad y prestación, ofrece la posibilidad de incluir mosquiteros de PVC.</p>
        <ul>
          <li>Con refuerzo interior de acero galvanizado.</li>
          <li>Permite acristalar vidrios de hasta 34 mm de espesor.</li>
          <li>Sistema de guías acoplables de marco y múltiples hojas.</li>
          <li>Refuerzos de mayor inercia, que garantizan una óptima funcionalidad y prestación.</li>
          <li>Posibilidad de incluir mosquiteros de PVC.</li>
        </ul>
        <h3>Sistemas de <b>dos o más</b> guías</h3>
        <img src="/LineaJumbo/jumbo-guias.png" alt="Jumbo Guias" />
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
