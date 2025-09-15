import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HeroSection from '../../components/WhyPVC/HeroSection'
import Productos from '../../components/Productos'
import Separador from '../../components/Separador'
import Ventajas from '../../components/Arquitect-Developer/Ventajas'
import CarruselOneImage from '../../components/CarruselOneImage'
import CarruselCards from '../../components/CarruselCards'
import SmallSectionBanner from '../../components/SmallSectionBanner'
import ImageBg from '../Pisos/ImageBg'
import CardsCarousel from '../Pisos/CardsCarousel'

export default function LineaAdvance() {
  let array = [
    {
      icon: "/LineaJumbo/icons/interior-design.png",
      title: "Diseño compacto y funciona",
      description: "Perfecto para cocinas, baños y dormitorios."
    },
    {
      icon: "/LineaPrime/icons/window.png",
      title: "Ahorro de espacio",
      description: "Sistema corredizo sin hojas que invadan el interior."
    },
    {
      icon: "/LineaEfficient/icons/acoustic-panel.png",
      title: "Hermeticidad y aislamiento",
      description: "Mantiene el confort incluso en aberturas pequeñas."
    },
    {
      icon: "/pisosInterior/icons/easy-installation.png",
      title: "Durabilidad y bajo mantenimiento",
      description: "Resistencia al uso diario y fácil limpieza."
    },
    {
      icon: "/LineaEfficient/icons/versatilidad.png",
      title: "Versatilidad de acabados",
      description: "múltiples opciones de diseño y colores."
    },
  ]
  const images = [
    "/Linea Advance/image-banner-2.jpg",
    "/Linea Advance/image-banner-3.jpg",
    "/Linea Advance/image-banner-5.jpg",
  ];
  const items=[
    {
      image: "/Linea Advance/productos/LA_2G_FINAL_BLANCO.jpg",
      title: "blanco"
    },
    {
      image: "/Linea Advance/productos/LA_2G_NOGAL.jpg",
      title: "nogal"
    },
    {
      image: "/Linea Advance/productos/LA_2G_SIPO.jpg",
      title: "sipo"
    },
    {
      image: "/Linea Advance/productos/LA_2G_W.jpg",
      title: "wengue"
    },
  ]
  return (
    <>
      <Header />
      <HeroSection 
        title="Línea Advance" 
        image="/Linea Advance/image-banner-4.jpg" 
        subtitle="La línea ideal de ventanas corredizas de PVC para cocinas, baños y dormitorios, donde cada centímetro cuenta." 
      />
      <Productos padding="0px">
        <div className='section-padding'>
          <h2><b>Corredizas prácticas</b> para espacios reducidos</h2>
          <Separador width="100px" color="--color-3" />
          <p>
            La línea <b>Advance de Muchtek</b>, fue desarrollada pensando en espacios donde las ventanas cumplen un papel fundamental en la <b>iluminación y ventilación diaria</b>. Su formato corredizo permite un <b>uso práctico en superficies reducidas</b>, como sobre mesadas de cocina, baños o dormitorios con ventanas pequeñas.
          </p>
          <img 
            src="/Linea Advance/image-banner-1.jpg" 
            alt="Casa con luz natural y jardin" 
            className='mb-4'
            style={{borderRadius: "10px"}}
          />
          <p>
            Además de su <b>movimiento suave y seguro</b>, estas ventanas mantienen el <b>aislamiento térmico y acústico característico del PVC</b>, garantizando eficiencia y confort incluso en aberturas de menor tamaño.
          </p>
        </div>
        <CarruselCards array={array} />
        <div className='section-padding'>
          <CarruselOneImage images={images} />
        </div>
        <SmallSectionBanner title="¿Necesitás una solución práctica para tus espacios reducidos?" cta="Solicitá tu presupuesto" />
        <ImageBg image="/LineaEfficient/image-banner-2.jpg">
          <h2>Gran variedad de colores y texturas</h2>
          <Separador color="--color-2" width="100px" />
          <p>Para elegir el diseño que más se adecue a tus ambientes:</p>
          <CardsCarousel items={items} colorTitle="--color-4" />
        </ImageBg>
        <div className='section-padding'>
          <h2>Sistema Corredizo</h2>
          <Separador color="--color-3" width="100px" />
          <p>La <b>línea ideal</b> de ventanas corredizas de PVC para cocinas, baños y dormitorios, donde cada centímetro cuenta.</p>
          <img src="/Linea Advance/advance-renders.png" alt="Advance Renders" />
          <p>
            La línea <b>Advance</b> de <b>Muchtek</b>, fue desarrollada pensando en espacios   donde las ventanas cumplen un papel fundamental en la <b>iluminación y ventilación diaria</b>. Su formato corredizo permite un <b>uso práctico en superficies reducidas</b>, como sobre mesadas de cocina, baños o dormitorios con ventanas pequeñas.
          </p>
          <p className='mb-0'>
            Además de su <b>movimiento suave y seguro</b>, estas ventanas mantienen el <b>aislamiento térmico y acústico</b> característico del PVC, garantizando eficiencia y confort incluso en aberturas de menor tamaño.
          </p>
        </div>
        <div className='section-padding'>
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
        </div>
      </Productos>
      <Footer />
    </>
  )
}
