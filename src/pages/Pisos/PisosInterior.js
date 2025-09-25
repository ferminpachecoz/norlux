import React from 'react'
import Header from '../../components/Header'
import HeroSection from '../../components/WhyPVC/HeroSection'
import Footer from '../../components/Footer'
import Productos from '../../components/Productos'
import Separador from '../../components/Separador'
import IconText from "./IconText.js"
import ImageBg from './ImageBg.js'
import CardsCarousel from './CardsCarousel.js'
import Ventajas from '../../components/Arquitect-Developer/Ventajas.js'
import CarruselOneImage from '../../components/CarruselOneImage.js'
import SmallSectionBanner from '../../components/SmallSectionBanner.js'
import CarruselCards from '../../components/CarruselCards.js'

export default function PisosInterior() {
  let array=[
    {
      icon: "/LineaJumbo/icons/layer.png",
      title: "Variedad de diseños y texturas",
      description: "Imitaciones de madera y acabados modernos."
    },
    {
      icon: "/pisosInterior/icons/water-resistant.png",
      title: "Resistencia al uso diario",
      description: "Soportan golpes, rayaduras y humedad."
    },
    {
      icon: "/LineaJumbo/icons/meditate.png",
      title: "Confort y calidez",
      description: "Pisos agradables al tacto y de estética acogedora."
    },
    {
      icon: "/pisosInterior/icons/easy-installation.png",
      title: "Instalación sencilla y rápida",
      description: "Sistema práctico que asegura un acabado prolijo."
    },
    {
      icon: "/pisosInterior/icons/mechanic.png",
      title: "Bajo mantenimiento",
      description: "Limpieza simple sin necesidad de ceras o barnices."
    },
    {
      icon: "/LineaEfficient/icons/sustentabilidad.png",
      title: "Durabilidad y sustentabilidad",
      description: "Materiales reciclables y de larga vida útil."
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

  const images=[
    "/houses/house-banner-3.jpg",
    "/houses/house-banner-4.jpg",
    "/houses/house-banner-5.jpg"
  ]
  return (
    <>
      <Header />
      <HeroSection 
        title="Pisos de Interior" 
        subtitle="La solución ideal para quienes buscan diseño, resistencia y bajo mantenimiento en el interior de su hogar o proyecto." 
        image="/pisosInterior/image-banner.jpg" 
      />
      <Productos padding="0px">
        <div className='section-padding'>
          <h2><b>Estética y confort</b> en cada ambiente</h2>
          <Separador width="100px" color="--color-3" />
          <p className='mb-4'>
            Los <b>Pisos de Interior de PVC Muchtek</b>, instalados por <b>Nörlux</b>, combinan la <b>calidez de la madera</b> con la <b>resistencia y practicidad del PVC</b>. Diseñados para adaptarse a todo tipo de ambientes, son una alternativa moderna que aporta <b>confort, estética y durabilidad</b>.
          </p>
          <img 
            src="/pisosInterior/image-banner-2.jpg" 
            alt="Pisos muchtek en casa foa"
            className='mb-4' 
            style={{borderRadius: "10px"}}
          />
          <p>
            A diferencia de los pisos de madera o cerámicos, los de PVC son <b>resistentes a la humedad, a los impactos y al desgaste diario</b>, por lo que resultan perfectos para <b>living, dormitorios, oficinas y espacios comerciales</b>. Además, su colocación es rápida y limpia, logrando un resultado impecable en poco tiempo.
          </p>
        </div>
        <CarruselCards array={array} />
        {/* <div className='section-padding'>
          <CarruselOneImage images={images} />
        </div> */}
        <SmallSectionBanner 
          title="¿Querés pisos modernos, resistentes y fáciles de mantener?" 
          cta="Solicitá tu presupuesto" 
        />
        <div className='row section-padding'>
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
        <ImageBg image="/pisosInterior/pisos-colores.jpg">
          <h2>Pisos de PVC para interior simil madera</h2>
          <Separador color="--color-1" width="100px" />
          <p>Diseños con texturas y colores que logran una apariencia real. Combinalos con nuestros zòcalos de PVC.</p>
          <CardsCarousel items={items} />
        </ImageBg>
        {/* <div className='section-padding'>
          <h2>Ventajas de los <b>pisos de PVC</b> para interior</h2>
          <Separador color="--color-3" width="100px" />
          <p className='mb-5'>Renová tus ambientes, en pocas horas y sin trabajos de albañilería.</p>
          <IconText array={array} gutter="5" cols="3" imgSize="140px" />
        </div> */}
        <div className='row section-padding'>
          <div className='col-lg-5 d-none d-lg-block'>
            <img src="/pisosInterior/about-us-floors-03.jpg" alt="about-us-floors-03" />
          </div>
          <div className='col-lg-7 col-12'>
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
        <div style={{ backgroundImage: "url(/houses/sample-02.jpg)", backgroundAttachment: "fixed"}}>
          <div className='section-padding' style={{width: "100%", height: "100%", backgroundColor: "rgba(27, 31, 30, 0.5)"}}>
            <h2 style={{color: "var(--color-2)"}}>Composición</h2>
            <Separador width="100px" color="--color-1" />
            <p className='mb-5' style={{color: "var(--color-2)"}}>Multicapa, compuesto a base de PVC virgen, malla de fibra de vidrio para mayor estabilidad, lamina con patrón de diseño y capa de abrasión.</p>
            <div className='section-padding'>
              <img src="/pisosInterior/pisos-composicion-cuadro.jpg" alt="pisos-composicion-cuadro"  />
            </div>
          </div>
        </div>
        <div className='section-padding'>
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
