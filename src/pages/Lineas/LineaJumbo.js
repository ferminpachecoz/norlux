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
import { Helmet } from 'react-helmet'

export default function LineaJumbo() {
  const array=[
    {
      icon: "/LineaJumbo/icons/panorama.webp",
      title: "Máxima amplitud",
      description: "Ideal para ventanales de gran porte y vistas panorámicas."
    },
    {
      icon: "/LineaJumbo/icons/meditate.webp",
      title: "Confort asegurado",
      description: "Aislamiento térmico y acústico en superficies amplias."
    },
    {
      icon: "/LineaJumbo/icons/layer.webp",
      title: "Múltiples hojas",
      description: "Posibilidad de cubrir largos tramos con diferentes configuraciones."
    },
    {
      icon: "/LineaJumbo/icons/terrace.webp",
      title: "Integración total",
      description: "Conecta espacios interiores con galerías, jardines o terrazas."
    },
    {
      icon: "/LineaJumbo/icons/cyber-security.webp",
      title: "Resistencia y seguridad",
      description: "Herrajes de alta prestación para hojas pesadas."
    },
    {
      icon: "/LineaJumbo/icons/interior-design.webp",
      title: "Estética premium",
      description: "Diseño contemporáneo que realza cualquier proyecto."
    },
  ]
  const images=["/LineaJumbo/image-banner.webp","/images/_MG_0212.webp", "/images/_MG_0154.webp"]
  const ITEMS=[
    {
      image: "/LineaJumbo/productos/LJ_2G_FINAL_BLANCO.webp",
      title: "blanco"
    },
    {
      image: "/LineaJumbo/productos/LJ_2H_JBLACK.webp",
      title: "jet black"
    },
    {
      image: "/LineaJumbo/productos/LJ_2H_LENGA.webp",
      title: "lenga"
    },
    {
      image: "/LineaJumbo/productos/LJ_2H_TOAK.webp",
      title: "turner oak"
    },
  ]
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Ventanales XXL en PVC con estabilidad estructural, hermeticidad y confort. Amplía tus vistas sin resignar performance."
        />
        <title>Línea Jumbo: corredizas para grandes luces y panoramas</title>
      </Helmet>
      <Header />
      <HeroSection 
        title="Línea Jumbo" 
        subtitle="La línea de ventanales corredizos de PVC pensada para abrir tus espacios al máximo, con diseño premium y alta eficiencia." 
        image="/LineaJumbo/image-banner.webp" 
      />
      <Productos padding="0px">
        <div className='section-padding'>
          <h2>Sistema Corredizo</h2>
          <Separador />
          <p>
            La línea <b>Jumbo</b> de <b>Muchtek</b>, es la elección ideal para <b>proyectos arquitectónicos de gran escala</b> que buscan integrar el interior con el exterior a través de <b>vistas panorámicas y ventanales de gran porte</b>.
          </p>
          <img src="/LineaJumbo/jumbo-renders.webp" alt="jumbo renders" />
          <p>
            Gracias a su sistema corredizo de alta prestación, permite un <b>desplazamiento suave y seguro incluso en hojas de gran tamaño</b>, garantizando la misma <b>hermeticidad, aislamiento térmico y acústico</b> que caracteriza al PVC.
          </p>
          <p>
            Es la opción perfecta para <b>living-comedores, galerías y proyectos residenciales premium</b> que priorizan amplitud, diseño y confort.
          </p>
        </div>
        <CarruselCards array={array} />
        <div className='section-padding'>
          <CarruselOneImage images={images} />
        </div>
        <SmallSectionBanner 
          title="¿Querés abrir tus espacios al máximo con diseño y eficiencia?" 
          cta="Solicitá tu presupuesto" 
        />
        <ImageBg image="/LineaJumbo/image-banner.webp">
          <h2>Gran variedad de colores y texturas</h2>
          <Separador color="--color-2" width="100px" />
          <p>Para elegir el diseño que más se adecue a tus ambientes:</p>
          <CardsCarousel items={ITEMS} colorTitle="--color-4" />
        </ImageBg>
        <div className='section-padding'>
          <h3 className='mt-5'>Sistemas de <b>dos o más</b> guías</h3>
          <img src="/LineaJumbo/jumbo-guias.webp" alt="Jumbo Guias" />
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
