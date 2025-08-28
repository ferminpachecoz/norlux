import React from 'react'
import Header from '../../components/Header'
import HeroSection from '../../components/WhyPVC/HeroSection'
import Footer from '../../components/Footer'
import Productos from '../../components/Productos'
import Separador from '../../components/Separador'
import IconText from "./IconText.js"
import ImageBg from './ImageBg.js'
import CardsCarousel from './CardsCarousel.js'

export default function PisosInterior() {
  let array=[
    {
      image: "ignifugo.png",
      text: "Ignífugo y antibacteriano."
    },
    {
      image: "impacto.png",
      text: "Resistente a la abrasión, golpes y rayaduras."
    },
    {
      image: "mantenimiento.png",
      text: "Libre mantenimiento."
    },
    {
      image: "sustentable.png",
      text: "Amigable con el medio ambiente, 100% reciclable."
    },
    {
      image: "limpieza.png",
      text: "Limpieza muy sencilla."
    },
    {
      image: "aislacion-acustica.png",
      text: "No hace ruido ni se siente frío bajo los pies."
    },
    {
      image: "multicapa.png",
      text: "Excelente performance gracias a su sistema multicapa."
    },
    {
      image: "estanquidad.png",
      text: "Resistente al deslizamiento, al agua y humedad, por lo que puede ser utilizado en ambientes como baños y cocinas."
    },
    {
      image: "tipologias-02.png",
      text: "Apto para losa / piso radiante."
    },
  ]

  let items=[
    {
      image: "/pisosInterior/pisos-roble.jpg",
      title: "Roble"
    },
    {
      image: "/pisosInterior/pisos-pinotea.jpg",
      title: "Pinotea"
    },
    {
      image: "/pisosInterior/pisos-iroko.jpg",
      title: "Iroko"
    },
  ]
  return (
    <>
      <Header />
      <HeroSection title="Pisos de Interior" subtitle="Lorem ipsum dolor sit amet" image="/houses/house-banner.jpg" />
      <Productos padding="0px">
        <div className='row' style={{padding: "100px 150px"}}>
          <div className='col-lg-7'>
            <h2>Sistema <b>Click Locking</b></h2>
            <Separador color="--color-3" width="100px" />
            <p>Los pisos de interior cuentan con tecnología de click perimetral de alta presición, logrando disimular las juntas entre las tablas, evitando que el agua ingrese entre las mismas.</p>
            <img src="/pisosInterior/pisos-render-01.png" alt="pisos-render-01" />
            <h3>NO LLEVA MANTAS NI ADHESIVOS</h3>
          </div>
          <div className='col-lg-5'>
            <img src="/pisosInterior/about-us-floors-04.jpg" alt="about-us-floors-04" />
          </div>
        </div>
        <div style={{ backgroundImage: "url(/houses/sample-02.jpg)", backgroundAttachment: "fixed"}}>
          <div style={{padding: "100px 150px", width: "100%", height: "100%", backgroundColor: "rgba(27, 31, 30, 0.5)"}}>
            <h2 style={{color: "var(--color-2)"}}>Composición</h2>
            <Separador width="100px" color="--color-1" />
            <p className='mb-5' style={{color: "var(--color-2)"}}>Multicapa, compuesto a base de PVC virgen, malla de fibra de vidrio para mayor estabilidad, lamina con patrón de diseño y capa de abrasión.</p>
            <div style={{padding: "0px 100px"}}>
              <img src="/pisosInterior/pisos-composicion-cuadro.jpg" alt="pisos-composicion-cuadro"  />
            </div>
          </div>
        </div>
        <div style={{padding: "100px 150px"}}>
          <h2>Ventajas de los <b>pisos de PVC</b> para interior</h2>
          <Separador color="--color-3" width="100px" />
          <p className='mb-5'>Renová tus ambientes, en pocas horas y sin trabajos de albañilería.</p>
          <IconText array={array} gutter="5" cols="3" imgSize="140px" />
        </div>
        <div style={{padding: "100px 150px"}} className='row'>
          <div className='col-5'>
            <img src="/pisosInterior/about-us-floors-03.jpg" alt="about-us-floors-03" />
          </div>
          <div className='col-7'>
            <h2>Instalacion</h2>
            <Separador color="--color-3" width="100px" />
            <p>Sistema click perimetral. 1-2-3 y listo!!!</p>
            <ul>
              <li>Rápida, fácil y en seco.</li>
              <li>Sólo se precisa cutter y escuadra.</li>
              <li>No requiere adhesivos.</li>
              <li>Se coloca sobre cualquier superficie plana.</li>
            </ul>
            <div className='row'>
              <div className='col'>
                <img src="/pisosInterior/instalacion-pisos-02.jpg" alt="" />
              </div>
              <div className='col'>
                <img src="/pisosInterior/instalacion-pisos-03.jpg" alt="instalacion-pisos-03" />
              </div>
              <div className='col'>
                <img src="/pisosInterior/instalacion-pisos-04.jpg" alt="instalacion-pisos-04" />
              </div>
            </div>
          </div>
        </div>
        <ImageBg image="/pisosInterior/pisos-colores.jpg">
          <h2>Pisos de PVC para interior simil madera</h2>
          <Separador color="--color-1" width="100px" />
          <p>Diseños con texturas y colores que logran una apariencia real. Combinalos con nuestros zòcalos de PVC.</p>
        </ImageBg>
        <div style={{padding: "100px 150px"}}>
          <CardsCarousel items={items} />
        </div>
        <div style={{padding: "0px 150px 100px 150px"}}>
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
          </div>
        </div>
      </Productos>
      <Footer />
    </>
  )
}
