import React from 'react'
import Header from '../../components/Header'
import HeroSection from '../../components/WhyPVC/HeroSection'
import Productos from '../../components/Productos'
import Footer from '../../components/Footer'
import Separador from '../../components/Separador'

export default function LineaEvolution() {
  let array=[
    {
      icon: "",
      title: "",
      description: ""
    }
  ]
  return (
    <>
      <Header />
      <HeroSection title="Linea Evolution" subtitle="El sistema corredizo de PVC que une diseño moderno con la hermeticidad de la línea Efficient." image="/LineaEvolution/image-banner-1.jpg" />
      <Productos>
        <h2>Sistema Corredizo <b>fijo-móvil</b></h2>
        <Separador color="--color-3" width="100px" />
        <p>
          La <b>línea Evolution de Muchtek</b>, marca un antes y un después en el mundo de los <b>sistemas corredizos de PVC</b>. Su innovación radica en combinar la <b>funcionalidad y estética del corredizo</b> con el <b>doble contacto de la línea Efficient</b>, lo que garantiza un <b>cierre totalmente hermético con grandes resistencias de peso y presiones de viento</b>.
        </p>
        <img src="/LineaEvolution/evolution-renders.png" alt="Evolution Renders" />
        <p>
          Gracias a su herraje de alta prestación, las hojas se deslizan con <b>suavidad y precisión</b>, incluso en grandes dimensiones. De esta forma, Evolution ofrece un <b>nivel superior de aislamiento térmico y acústico</b>, sin renunciar al diseño minimalista y a la comodidad de un sistema corredizo.
        </p>
        {/* <ul>
          <li>Diseñada para proyectos exigentes con climas extremos y grandes presiones de viento.</li>
          <li>Asegura la máxima hermeticidad y estanquidad.</li>
          <li>Sistema de herraje con puntos de cierre activos en el encuentro central.</li>
          <li>Movimiento de cierre especial de la hoja en sentido transversal con respecto al perfil de marco.</li>
          <li>Burletería post co-extruida de PVC.</li>
          <li>Permite cubrir grandes luces con hojas de hasta 3.60 metros de altura y hasta 3 metros de ancho, con un peso de hasta 400kg.</li>
          <li>Con doble o triple vidriado hermético de hasta 42 mm.</li>
          <li>Función soft-open y soft-close, brindando mayor confort y seguridad de uso.</li>
        </ul> */}
        <img src="/LineaEvolution/evolution-guias-marco.png" alt="Evolution Guias marco" />
        <img src="/LineaEvolution/evolution-cortes.png" alt="evolution-cortes" />
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
