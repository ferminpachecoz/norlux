import React from 'react'
import Header from '../../components/Header'
import HeroSection from '../../components/WhyPVC/HeroSection'
import Productos from '../../components/Productos'
import Footer from '../../components/Footer'
import Separador from '../../components/Separador'
import CarruselCards from '../../components/CarruselCards'
import CarruselOneImage from '../../components/CarruselOneImage'
import SmallSectionBanner from '../../components/SmallSectionBanner'
import ImageBg from '../Pisos/ImageBg'
import CardsCarousel from '../Pisos/CardsCarousel'

export default function LineaEvolution() {
  let array=[
    {
      icon: "/LineaPrime/icons/window.png",
      title: "Hermeticidad superior",
      description: "Doble contacto que maximiza el cierre."
    },
    {
      icon: "/LineaEfficient/icons/thermal-insulation.png",
      title: "Aislamiento térmico y acústico",
      description: "Eficiencia comparable a un sistema practicable."
    },
    {
      icon: "/LineaEvolution/Icons/mobility.png",
      title: "Movimiento suave y seguro",
      description: "Herrajes premium que facilitan el deslizamiento."
    },
    {
      icon: "/LineaEvolution/Icons/frame.png",
      title: "Estética moderna con marcos esbeltos.",
      description: "Diseño minimalista"
    },
    {
      icon: "/LineaJumbo/icons/panorama.png",
      title: "Luz natural y amplitud",
      description: "Grandes superficies vidriadas que integran ambientes."
    },
    {
      icon: "/Revestimiento/icons/reliability.png",
      title: "Durabilidad garantizada",
      description: "Perfiles robustos y bajo mantenimiento."
    },
  ]
  const images=[
    "/LineaEvolution/image-banner-3.jpg",
    "/LineaEvolution/image-banner-4.jpg",
    "/LineaEvolution/image-banner-5.jpg",
  ]
  const ITEMS=[
    {
      image: "/LineaEvolution/productos/LE_2G_ALPINE.jpg",
      title: "alpine"
    },
    {
      image: "/LineaEvolution/productos/LE_2G_ALTWEISS.jpg",
      title: "altweiss"
    },
    {
      image: "/LineaEvolution/productos/LE_2G_BLANCO.jpg",
      title: "blanco"
    },
    {
      image: "/LineaEvolution/productos/LE_2G_G BRONZE.jpg",
      title: "gold bronze"
    },
    {
      image: "/LineaEvolution/productos/LE_2G_GOLDENOAK.jpg",
      title: "golden oak"
    },
    {
      image: "/LineaEvolution/productos/LE_2G_GOAK.jpg",
      title: "grey oak"
    },
    {
      image: "/LineaEvolution/productos/LE_2G_GGRAF.jpg",
      title: "gris grafito"
    },
    {
      image: "/LineaEvolution/productos/LE_2G_GMET.jpg",
      title: "gris metalizado"
    },
    {
      image: "/LineaEvolution/productos/LE_2G_GG_JBLACK.jpg",
      title: "jet black"
    },
    {
      image: "/LineaEvolution/productos/LE_2G_JURAPINE.jpg",
      title: "jura pine"
    },
    {
      image: "/LineaEvolution/productos/LE_2G_LENGA.jpg",
      title: "lenga"
    },
    {
      image: "/LineaEvolution/productos/LE_2G_MATTEXK.jpg",
      title: "mattex kitami"
    },
    {
      image: "/LineaEvolution/productos/LE_2G_NOAK.jpg",
      title: "natural oak"
    },
    {
      image: "/LineaEvolution/productos/LE_2G_NOGAL.jpg",
      title: "nogal"
    },
    {
      image: "/LineaEvolution/productos/LE_2G_PELTRE.jpg",
      title: "peltre"
    },
    {
      image: "/LineaEvolution/productos/LE_2G_SCHWARZ.jpg",
      title: "schwarzbraun"
    },
    {
      image: "/LineaEvolution/productos/LE_2G_TOFFEE.jpg",
      title: "toffee"
    },
    {
      image: "/LineaEvolution/productos/LE_2G_TOAK.jpg",
      title: "turner oak"
    },
    {
      image: "/LineaEvolution/productos/LE_2G_WENGUE.jpg",
      title: "wengue"
    },
    {
      image: "/LineaEvolution/productos/LE_2G_WA.jpg",
      title: "white aluminium"
    },
  ]
  return (
    <>
      <Header />
      <HeroSection title="Linea Evolution" subtitle="El sistema corredizo de PVC que une diseño moderno con la hermeticidad de la línea Efficient." image="/LineaEvolution/image-banner-1.jpg" />
      <Productos padding="0px">
        <div className='section-padding'>
          <h2><b>La nueva generación</b> de ventanas corredizas</h2>
          <Separador width="100px" color="--color-3" />
          <p>
            La línea <b>Evolution de Muchtek</b>, marca un antes y un después en el mundo de los <b>sistemas corredizos de PVC</b>. Su innovación radica en combinar la <b>funcionalidad y estética del corredizo</b> con el <b>doble contacto de la línea Efficient</b>, lo que garantiza un <b>cierre totalmente hermético con grandes resistencias de peso y presiones de viento</b>.
          </p>
          <p>
            Gracias a su herraje de alta prestación, las hojas se deslizan con <b>suavidad y precisión</b>, incluso en grandes dimensiones. De esta forma, Evolution ofrece un <b>nivel superior de aislamiento térmico y acústico</b>, sin renunciar al diseño minimalista y a la comodidad de un sistema corredizo.
          </p>
        </div> 
        <CarruselCards array={array} />
        <div className='section-padding'>
          <CarruselOneImage images={images} />
        </div>
        <SmallSectionBanner title="¿Querés un corredizo con diseño moderno y hermeticidad total?" cta="Solicitá tu presupuesto" />
        <ImageBg image="/LineaEvolution/image-banner-1.jpg">
          <h2>Gran variedad de colores y texturas</h2>
          <Separador color="--color-2" width="100px" />
          <p>Para elegir el diseño que más se adecue a tus ambientes:</p>
          <CardsCarousel items={ITEMS} colorTitle="--color-4" />
        </ImageBg>
        <div className='section-padding'>
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
        </div>
      </Productos>
      <Footer />
    </>
  )
}
