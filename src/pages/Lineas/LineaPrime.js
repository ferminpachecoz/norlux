import React from 'react'
import Header from '../../components/Header'
import HeroSection from '../../components/WhyPVC/HeroSection'
import Footer from '../../components/Footer'
import Productos from '../../components/Productos'
import Separador from '../../components/Separador'

export default function LineaPrime() {
  return (
    <>
      <Header />
      <HeroSection title="Línea Prime" subtitle="Lorem ipsum dolor sit amet" image="/houses/house-banner.jpg" />
      <Productos>
        <h2>Sistema Corredizo</h2>
        <Separador color="--color-3" width="100px" />
        <p>El sistema corredizo Línea Prime, con matricería austríaca, permite utilizar umbrales de aluminio y puede alcanzar alturas de hasta 2,3 metros.</p>
        <img src="/LineaPrime/prime-renders.png" alt="prime renders" />
        <p>Esta línea es apta para 2, 3, 4 y 6 hojas móviles, con sistema de herrajes standard, permitiendo acristalar vidrios simples y dobles hasta 24 mm de espesor.</p>
        <p>Con guías de aluminio, un nuevo sistema de desagüe oculto y un nuevo sistema de encuentros, la Línea Prime ofrece un gran aislamiento térmico y acústico, con un bajo mantenimiento y una vida útil superior a 50 años.</p>
        <h3>Sistemas de <b>dos y tres</b> guías</h3>
        <img src="/LineaPrime/prime-guias-2-3-guias.png" alt="Prime guias 2 y 3" />
        <h3>Nueva hoja <b>Prime 74</b></h3>
        <p>Hoja más liviana para ventanas más chicas.</p>
        <img src="/LineaPrime/prime-74.png" alt="Prime 74" />
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
