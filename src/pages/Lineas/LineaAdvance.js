import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HeroSection from '../../components/WhyPVC/HeroSection'
import Productos from '../../components/Productos'
import Separador from '../../components/Separador'

export default function LineaAdvance() {
  return (
    <>
      <Header />
      <HeroSection title="Línea Advance" image="/houses/sample-02.jpg" subtitle="lorem ipsum dolor sit amet" />
      <Productos>
        <h2>Sistema Corredizo</h2>
        <Separador color="--color-3" width="100px" />
        <p>La <b>Línea Advance</b>, con matricería austríaca, ofrece un óptimo costo-beneficio.</p>
        <img src="/Linea Advance/advance-renders.png" alt="Advance Renders" />
        <p>Esta línea es apta para 2, 3, 4 y 6 hojas móviles, con sistema de herrajes standard, permitiendo acristalar vidrios simples y dobles hasta 20 mm de espesor.</p>
        <p>Con guías de aluminio, un nuevo sistema de desagüe oculto y un nuevo sistema de encuentros, la <b>Línea Advance</b> ofrece un gran aislamiento térmico y acústico, con un bajo mantenimiento y una vida útil superior a 50 años.</p>
        <ul className='mb-5'>
          <li>Sistema corredizo de compacto hasta 6 hojas móviles.</li>
          <li>Permite acristalar vidrios hasta 17 mm de espesor.</li>
          <li>Óptima relación costo / beneficio.</li>
        </ul>
        <h3>Sistemas de <b>dos y tres</b> guías</h3>
        <img src="/Linea Advance/sistema-advance-2y3guias.png" alt="Sistema de 2 y 3 guias" />
        <h3>Nuevo sistema <b>fijo-móvil</b></h3>
        <p>Ventana corrediza monorriel de una hoja móvil y un paño fijo u opción fija central y móviles laterales.</p>
        <img src="/Linea Advance/advance-monorriel.png" alt="Advance Monorriel" />
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
