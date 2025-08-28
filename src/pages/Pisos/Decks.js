import React from 'react'
import Header from '../../components/Header'
import HeroSection from '../../components/WhyPVC/HeroSection'
import Productos from '../../components/Productos'
import Footer from '../../components/Footer'
import Separador from '../../components/Separador'
import IconText from './IconText'

export default function Decks() {
  let array=[
    {
      image: "mantenimiento.png",
      text: "No requiere mantenimiento adicional."
    },
    {
      image: "limpieza.png",
      text: "Se limpia con agua y jabón."
    },
    {
      image: "facil.png",
      text: "Se instala de forma muy sencilla."
    },
    {
      image: "estanquidad.png",
      text: "Resistente a la humedad y al agua."
    },
    {
      image: "recubrimiento.png",
      text: "Recubrimiento acrílico en toda su superficie."
    },
    {
      image: "antideslizante.png",
      text: "Es antideslizante, no se astilla ni se agrieta."
    },
    {
      image: "ignifugo.png",
      text: "Muy baja propagación de llama y autoextinguible."
    },
    {
      image: "sustentable.png",
      text: "Amigable con el medio ambiente. Se puede reciclar al 100%."
    },
    {
      image: "durabilidad.png",
      text: "Posee una larga vida útil."
    },
  ]
  return (
    <>
      <Header />
      <HeroSection title="Decks" subtitle={"Lorem ipsum dolor sit amet"} image={"/houses/house-banner.jpg"} />
      <Productos padding="100px 100px">
        <div className='row'>
          <div className='col-lg-7'>
            <h2>Ahora el Deck es de <b>PVC</b>.</h2>
            <Separador color="--color-3" width="100px" />
            <p>El <b>Deck de PVC</b> es una opción ideal para proyectos arquitectónicos que requieren durabilidad, resistencia y bajo mantenimiento. Su diseño innovador y tecnología avanzada lo convierten en un material versátil y ecoamigable, perfecto para áreas exteriores expuestas a la intemperie.</p>
          </div>
          <div className='col-lg-5'>
            <img src="/Decks/deck-foto-03.jpg" alt="deck-foto-03" />
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-6'>
            <img src="/Decks/decks-foils-01.png" alt="decks-foils-01" />
            <p>Con una variedad de colores y texturas disponibles, el <b>Deck de PVC</b> se adapta a cualquier estilo arquitectónico, mientras que su resistencia a la humedad, los insectos y los hongos garantiza una vida útil prolongada.</p>
            <h2>Instalación</h2>
            <p>Su fácil instalación y mantenimiento reducen los costos y el tiempo de construcción, lo que lo hace una opción costo-efectiva para cualquier proyecto.</p>
            <img src="/Decks/decks_instalacion.png" alt="decks_instalacion" />
          </div>
          <div className='col-lg-6 p-5'>
            <IconText array={array} />
          </div>
        </div>
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
      </Productos>
      <Footer />
    </>
  )
}
