import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HeroSection from '../../components/WhyPVC/HeroSection'
import Productos from '../../components/Productos'
import Separador from '../../components/Separador'
import Ventajas from '../../components/Arquitect-Developer/Ventajas'
import CarruselCards from '../../components/CarruselCards'
import CarruselOneImage from '../../components/CarruselOneImage'
import SmallSectionBanner from '../../components/SmallSectionBanner'

export default function PuertaPivotante() {
  const array =[
    {
      icon: "/LineaJumbo/icons/interior-design.png",
      title: "Diseño moderno e imponente",
      description: "Genera impacto visual desde el primer momento."
    },
    {
      icon: "/LineaJumbo/icons/panorama.png",
      title: "Mayor amplitud de paso",
      description: "Ideal para accesos principales y proyectos de gran escala."
    },
    {
      icon: "/LineaEfficient/icons/thermal-insulation.png",
      title: "Aislamiento térmico y acústico",
      description: "Garantiza confort y eficiencia energética integral."
    },
    {
      icon: "/LineaJumbo/icons/cyber-security.png",
      title: "Seguridad reforzada",
      description: "Estructura robusta y herrajes de alta prestación."
    },
    {
      icon: "/LineaEfficient/icons/versatilidad.png",
      title: "Personalización total",
      description: "Diferentes acabados, colores y configuraciones."
    },
  ]
  const images=["/PuertaPivotante/image-banner-2.jpg", "/PuertaPivotante/image-banner-3.jpg", "/PuertaPivotante/image-banner-4.jpg"]
  return (
    <>
      <Header />
      <HeroSection 
        title="Puerta Pivotante" 
        subtitle="La puerta de entrada que combina innovación, amplitud y resistencia, ideal para proyectos residenciales y comerciales premium." 
        image="/PuertaPivotante/image-banner.jpg" 
      />
      <Productos padding="0px">
        <div className='section-padding'>
          <h2>Diseño de vanguardia y <b>máxima seguridad</b></h2>
          <Separador color="--color-3" width="100px" />
          <p>
            Las <b>puertas pivotantes de Muchtek</b>, marcan la diferencia en cualquier proyecto. A diferencia de las puertas tradicionales, su sistema de apertura con eje desplazado brinda un efecto <b>imponente, elegante y funcional</b>, optimizando el uso del espacio y aportando un estilo arquitectónico distintivo.
          </p>
          <img 
            src="/houses/house-banner.jpg" 
            alt="casa con luz natural y puerta pivotante" 
            className='mb-4 section-image'
          />
          <p>
            Diseñadas para quienes buscan una <b>entrada de alto impacto</b>, estas puertas destacan por su <b>resistencia estructural, aislamiento térmico y acústico</b>, además de un funcionamiento suave y confiable gracias a herrajes de última generación.
          </p>
          <p>
            Son la opción perfecta para proyectos que requieren <b>exclusividad, amplitud y diseño contemporáneo</b>.
          </p>
        </div>
        <CarruselCards array={array} />
        <div className='section-padding'>
          <CarruselOneImage images={images} />
        </div>
        <SmallSectionBanner 
          title="¿Querés que tu proyecto tenga una entrada única y exclusiva?" 
          cta="Solicitá tu presupuesto" 
        />
        <div className='section-padding'>
          <h2 className='titulo'>¿Qué <b>ofrecemos</b>?</h2>
          <Separador width="100px" color="--color-3" />
          <p>
            Siempre a la vanguardia tecnológica y respondiendo a una creciente demanda arquitectónica, Muchtek presenta la nueva PUERTA PIVOTANTE DE PVC, de 2.60 mts de alto, con un sistema de herraje de acero inoxidable y un cerramiento con cremona, que ofrece el máximo grado de seguridad, novedoso diseño, con gran estilo y confort.
          </p>
          <img src="/PuertaPivotante/caracteristicas-pivotante.jpg" alt="caracteristicas de puerta pivotante" />
          <img src="/PuertaPivotante/detalle-pivotante.jpg" alt="Detalles de puerta pivotante" />
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
