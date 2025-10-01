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
import { Helmet } from 'react-helmet'

export default function LineaEvolution() {
  let array=[
    {
      icon: "/LineaPrime/icons/window.webp",
      title: "Hermeticidad superior",
      description: "Doble contacto que maximiza el cierre."
    },
    {
      icon: "/LineaEfficient/icons/thermal-insulation.webp",
      title: "Aislamiento térmico y acústico",
      description: "Eficiencia comparable a un sistema practicable."
    },
    {
      icon: "/LineaEvolution/Icons/mobility.webp",
      title: "Movimiento suave y seguro",
      description: "Herrajes premium que facilitan el deslizamiento."
    },
    {
      icon: "/LineaEvolution/Icons/frame.webp",
      title: "Estética moderna con marcos esbeltos.",
      description: "Diseño minimalista"
    },
    {
      icon: "/LineaJumbo/icons/panorama.webp",
      title: "Luz natural y amplitud",
      description: "Grandes superficies vidriadas que integran ambientes."
    },
    {
      icon: "/Revestimiento/icons/reliability.webp",
      title: "Durabilidad garantizada",
      description: "Perfiles robustos y bajo mantenimiento."
    },
  ]
  const images=[
    "/LineaEvolution/image-banner-3.webp",
    "/LineaEvolution/image-banner-4.webp",
    "/LineaEvolution/image-banner-5.webp",
  ]
  const ITEMS=[
    {
      image: "/LineaEvolution/productos/LE_2G_ALPINE.webp",
      title: "alpine"
    },
    {
      image: "/LineaEvolution/productos/LE_2G_ALTWEISS.webp",
      title: "altweiss"
    },
    {
      image: "/LineaEvolution/productos/LE_2G_BLANCO.webp",
      title: "blanco"
    },
    {
      image: "/LineaEvolution/productos/LE_2G_G BRONZE.webp",
      title: "gold bronze"
    },
    {
      image: "/LineaEvolution/productos/LE_2G_GOLDENOAK.webp",
      title: "golden oak"
    },
    {
      image: "/LineaEvolution/productos/LE_2G_GOAK.webp",
      title: "grey oak"
    },
    {
      image: "/LineaEvolution/productos/LE_2G_GGRAF.webp",
      title: "gris grafito"
    },
    {
      image: "/LineaEvolution/productos/LE_2G_GMET.webp",
      title: "gris metalizado"
    },
    {
      image: "/LineaEvolution/productos/LE_2G_GG_JBLACK.webp",
      title: "jet black"
    },
    {
      image: "/LineaEvolution/productos/LE_2G_JURAPINE.webp",
      title: "jura pine"
    },
    {
      image: "/LineaEvolution/productos/LE_2G_LENGA.webp",
      title: "lenga"
    },
    {
      image: "/LineaEvolution/productos/LE_2G_MATTEXK.webp",
      title: "mattex kitami"
    },
    {
      image: "/LineaEvolution/productos/LE_2G_NOAK.webp",
      title: "natural oak"
    },
    {
      image: "/LineaEvolution/productos/LE_2G_NOGAL.webp",
      title: "nogal"
    },
    {
      image: "/LineaEvolution/productos/LE_2G_PELTRE.webp",
      title: "peltre"
    },
    {
      image: "/LineaEvolution/productos/LE_2G_SCHWARZ.webp",
      title: "schwarzbraun"
    },
    {
      image: "/LineaEvolution/productos/LE_2G_TOFFEE.webp",
      title: "toffee"
    },
    {
      image: "/LineaEvolution/productos/LE_2G_TOAK.webp",
      title: "turner oak"
    },
    {
      image: "/LineaEvolution/productos/LE_2G_WENGUE.webp",
      title: "wengue"
    },
    {
      image: "/LineaEvolution/productos/LE_2G_WA.webp",
      title: "white aluminium"
    },
  ]
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Combina beneficios del doble contacto con movimiento soft-close. Más hermeticidad, confort y diseño en aberturas de alta prestación."
        />
        <title>Línea Evolution: la nueva generación de corredizas</title>
      </Helmet>
      <Header />
      <HeroSection title="Linea Evolution" subtitle="El sistema corredizo de PVC que une diseño moderno con la hermeticidad de la línea Efficient." image="/LineaEvolution/image-banner-1.webp" />
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
        <ImageBg image="/LineaEvolution/image-banner-1.webp">
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
          <img src="/LineaEvolution/evolution-renders.webp" alt="Evolution Renders" />
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
          <img src="/LineaEvolution/evolution-guias-marco.webp" alt="Evolution Guias marco" />
          <img src="/LineaEvolution/evolution-cortes.webp" alt="evolution-cortes" />
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
