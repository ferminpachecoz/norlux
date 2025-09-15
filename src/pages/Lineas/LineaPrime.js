import React from 'react'
import Header from '../../components/Header'
import HeroSection from '../../components/WhyPVC/HeroSection'
import Footer from '../../components/Footer'
import Productos from '../../components/Productos'
import Separador from '../../components/Separador'
import Ventajas from '../../components/Arquitect-Developer/Ventajas'
import CarruselOneImage from '../../components/CarruselOneImage'
import SmallSectionBanner from '../../components/SmallSectionBanner'
import CarruselCards from '../../components/CarruselCards'
import ImageBg from '../Pisos/ImageBg'
import CardsCarousel from '../Pisos/CardsCarousel'

export default function LineaPrime() {
  let array=[
    {
      icon: "/LineaJumbo/icons/panorama.png",
      title: "Amplitud visual",
      description: "Ventanales corredizos que iluminan los ambientes."
    },
    {
      icon: "/LineaJumbo/icons/meditate.png",
      title: "Confort y eficiencia",
      description: "Aislamiento térmico y acústico de alta prestación."
    },
    {
      icon: "/LineaPrime/icons/window.png",
      title: "Optimización de espacios",
      description: "Apertura corrediza sin hojas batientes."
    },
    {
      icon: "/LineaPrime/icons/window-2.png",
      title: "Diseño elegante",
      description: "Adaptable a diferentes estilos residenciales."
    },
    {
      icon: "/pisosInterior/icons/mechanic.png",
      title: "Durabilidad y resistencia",
      description: "Materiales robustos y de bajo mantenimiento."
    }
  ]
  const images=[
    "/houses/house-banner.jpg",
    "/houses/house-banner-3.jpg",
    "/houses/house-banner-4.jpg",
  ]
  const ITEMS=[
    {
      image: "/LineaPrime/productos/LP_2G_FINAL_BLANCO.jpg",
      title: "blanco"
    },
    {
      image: "/LineaPrime/productos/LP_2G_GG_GRIS_GRAFITO.jpg",
      title: "gris grafito"
    },
    {
      image: "/LineaPrime/productos/LP_2G_GMET_2.jpg",
      title: "gris metalizado"
    },
    {
      image: "/LineaPrime/productos/LP_2G_JB.jpg",
      title: "jet black"
    },
    {
      image: "/LineaPrime/productos/LP_2G_PELTRE.jpg",
      title: "peltre"
    },
  ]
  return (
    <>
      <Header />
      <HeroSection 
        title="Línea Prime" 
        subtitle="La línea de ventanales corredizos de PVC ideal para balcones y espacios sociales, con diseño elegante y eficiente." 
        image="/LineaPrime/image-banner.jpg" 
      />
      <Productos padding="0px">
        <div className='section-padding'>
          <h2>Corredizos que combinan <b>amplitud y confort</b></h2>
          <Separador width="100px" color="--color-3" />
          <p className='mb-4'>
            La <b>línea Prime de Muchtek</b>, es la opción perfecta para quienes buscan <b>ventanales corredizos amplios y funcionales</b> en sus hogares. Diseñada para <b>balcones, livings y galerías</b>, combina un diseño moderno con el confort del aislamiento térmico y acústico del PVC.
          </p>
          <img 
            src="/LineaPrime/image-banner-2.jpg" 
            alt="Banner de linea prime casa luz natural" 
            style={{borderRadius: "10px"}}
            className='mb-4'
          />
          <p className='mb-4'>
            Su sistema corredizo ofrece un <b>movimiento suave, seguro y duradero</b>, optimizando el espacio y permitiendo una <b>mayor entrada de luz natural</b> sin comprometer la hermeticidad.
          </p>
        </div>
        <CarruselCards array={array} />
        <div className='section-padding'>
          <CarruselOneImage 
            images={images} 
          />
        </div>
        <SmallSectionBanner 
          title="¿Querés ventanales corredizos que combinen diseño y confort?" 
          cta="Solicitá tu presupuesto" 
        />
        <ImageBg image="/LineaPrime/image-banner-2.jpg">
          <h2>Gran variedad de colores y texturas</h2>
          <Separador color="--color-2" width="100px" />
          <p>Para elegir el diseño que más se adecue a tus ambientes:</p>
          <CardsCarousel items={ITEMS} colorTitle="--color-4" />
        </ImageBg>
        <div className='section-padding'>
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
        </div>
      </Productos>
      <Footer />
    </>
  )
}
