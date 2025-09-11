import React from 'react'
import Header from '../../components/Header'
import HeroSection from '../../components/WhyPVC/HeroSection'
import Productos from '../../components/Productos'
import Footer from '../../components/Footer'
import Separador from '../../components/Separador'
import IconText from './IconText'
import CarruselOneImage from '../../components/CarruselOneImage'

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
  let images=[
    "/Decks/image-1.jpg",
    "/Decks/image-2.jpg",
    "/Decks/img-banner.jpg",
  ]
  return (
    <>
      <Header />
      <HeroSection title="Decks de PVC" subtitle={"La mejor alternativa a la madera: resistente, elegante y de bajo mantenimiento."} image={"/Decks/img-banner.jpg"} />
      <Productos padding="100px 100px">
        <div className='row'>
          <div className='col-lg-7'>
            <h2>Ahora el Deck es de <b>PVC</b>.</h2>
            <Separador color="--color-3" width="100px" />
            <p>Los <b>Decks de PVC Muchtek</b>, instalados por <b>Nörlux</b>, son la solución perfecta para quienes buscan <b>disfrutar de espacios exteriores sin preocuparse por el mantenimiento constante de la madera.</b></p>
            <p>
              A diferencia de los decks tradicionales, los de PVC <b>no se astillan</b>, no se pudren, resisten la humedad y el sol, y conservan su estética intacta durante años. Además, están diseñados con un sistema de instalación <b>simple y segura</b>, que garantiza un resultado <b>impecable y duradero</b>.
            </p>
          </div>
          <div className='col-lg-5'>
            <img src="/Decks/deck-foto-03.jpg" alt="deck-foto-03" />
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-6'>
            <img src="/Decks/decks-foils-01.png" alt="decks-foils-01" />
            <p>Ideales para <b>terrazas, balcones, jardines y áreas de piscina</b>, ofrecen un <b>diseño elegante y contemporáneo</b>, con múltiples acabados que se adaptan a distintos estilos arquitectónicos.</p>
            <h2>Instalación</h2>
            <p>Su fácil instalación y mantenimiento reducen los costos y el tiempo de construcción, lo que lo hace una opción costo-efectiva para cualquier proyecto.</p>
            <img src="/Decks/decks_instalacion.png" alt="decks_instalacion" />
          </div>
          <div className='col-lg-6 p-5'>
            <IconText array={array} />
          </div>
        </div>
        <CarruselOneImage images={images} />
        <h2 className='mt-5'>Descarga nuestros <b>catálogos digitales</b></h2>
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
