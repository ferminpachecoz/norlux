import React from 'react'
import Header from '../../components/Header'
import HeroSection from '../../components/WhyPVC/HeroSection'
import Productos from '../../components/Productos'
import Footer from '../../components/Footer'
import Separador from '../../components/Separador'
import CardsCarousel from './CardsCarousel'
import IconText from './IconText'
import ImageBg from './ImageBg'
import CarruselCards from '../../components/CarruselCards'
import CarruselOneImage from '../../components/CarruselOneImage'
import SmallSectionBanner from '../../components/SmallSectionBanner'

export default function Zocalos() {
  const array =[
    {
      icon: "/pisosInterior/icons/water-resistant.png",
      title: "Resistencia a la humedad y golpes",
      description: "No se deforman ni deterioran con el uso diario."
    },
    {
      icon: "/pisosInterior/icons/mechanic.png",
      title: "Fácil mantenimiento",
      description: "Limpieza rápida sin necesidad de tratamientos."
    },
    {
      icon: "/LineaEfficient/icons/versatilidad.png",
      title: "Estética moderna",
      description: "Múltiples diseños y colores para combinar con cualquier piso."
    },
    {
      icon: "/pisosInterior/icons/easy-installation.png",
      title: "Instalación práctica",
      description: "Colocación sencilla y firme."
    },
    {
      icon: "/Revestimiento/icons/reliability.png",
      title: "Durabilidad garantizada",
      description: "Conservan su apariencia por muchos años."
    },
    {
      icon: "/LineaEfficient/icons/sustentabilidad.png",
      title: "Sustentabilidad",
      description: "Opción reciclable y respetuosa con el medio ambiente."
    },
  ]
  const ITEMS = [
    {
      image: "/zocalos/almendra.jpg",
      title: "Almendra",
      headline: "PRÓXIMAMENTE",
      sub: "Nuevos foliados",
    },
    {
      image: "/zocalos/blanco.jpg",
      title: "Blanco",
      headline: "PRÓXIMAMENTE",
      sub: "Nuevos foliados",
    },
    {
      image: "/zocalos/TP_Z_60_EUCA.jpg",
      title: "Eucalyptus",
      headline: "PRÓXIMAMENTE",
      sub: "Nuevos foliados",
    },
    {
      image: "/zocalos/TP_Z_60_OAK.jpg",
      title: "Oak",
      headline: "PRÓXIMAMENTE",
      sub: "Nuevos foliados",
    },
    {
      image: "/zocalos/TP_Z_60_POPLAR.jpg",
      title: "Poplar",
      headline: "PRÓXIMAMENTE",
      sub: "Nuevos foliados",
    },
    {
      image: "/zocalos/TP_Z_60_TEEK.jpg",
      title: "Teak",
      headline: "PRÓXIMAMENTE",
      sub: "Nuevos foliados",
    },
    {
      image: "/zocalos/TP_Z_60_WALNUT.jpg",
      title: "Walnut",
      headline: "PRÓXIMAMENTE",
      sub: "Nuevos foliados",
    },
    {
      image: "/zocalos/abedul.jpg",
      title: "Abedul",
      headline: "PRÓXIMAMENTE",
      sub: "Nuevos foliados",
    },
    // ...agregá más si querés
  ];
  const images=[
    "/zocalos/image-banner.jpg",
    "/zocalos/image-banner-3.jpg",
    "/zocalos/image-banner-2.jpg"
  ]
  return (
    <>
      <Header />
      <HeroSection 
        title="Zócalos de PVC" 
        subtitle="Resistentes, estéticos y fáciles de mantener, para un acabado perfecto en cada ambiente."
        image="/zocalos/image-banner.jpg"
      />
      <Productos padding="0px" style={{position: "relative"}}>
        <div className='section-padding'>
          <h2>El detalle que realza <b>tus espacios</b></h2>
          <Separador width="100px" color="--color-3" />
          <p>
            Los <b>Zócalos de PVC Muchtek</b>, instalados por <b>Nörlux</b>, son la terminación ideal para lograr un acabado <b>prolijo y duradero</b> en cada ambiente. Gracias a su <b>resistencia</b> y <b>fácil limpieza</b>, son una opción muy superior a los zócalos de madera tradicionales, que suelen desgastarse con el tiempo y la humedad.
          </p>
        </div>
        <ImageBg image="/zocalos/image-banner.jpg">
          <h2>Gran variedad de colores y texturas</h2>
          <Separador color="--color-2" width="100px" />
          <p>Para elegir el diseño que más se adecue a tus ambientes:</p>
          <CardsCarousel items={ITEMS} colorTitle="--color-4" />
        </ImageBg>
        <div className='section-padding'>
          <p>
            Su <b>diseño versátil</b> permite combinarlos con diferentes tipos de pisos, ya sean <b>vinílicos</b>, de PVC, <b>porcelanatos</b> o <b>flotantes</b>, aportando un detalle estético <b>moderno y funcional</b> que resalta el estilo de cada espacio.
          </p>
        </div>
        <CarruselCards array={array} />
        <div className='section-padding'>
          <CarruselOneImage images={images} />
        </div>
        <SmallSectionBanner title="¿Querés darle a tu proyecto un acabado prolijo y moderno?" cta="Solicitá tu presupuesto" />
        <div className='row section-padding'>
          <div className='col-lg-7 col-12'>
            <h2>Fabricados con todo el <b>know how</b> Muchtek</h2>
            <Separador color="--color-3" width="100px" />
            <p className='mb-5'>Se pueden cortar, ingletar, atornillar o pegar con silicona facilitando el montaje, como los zócalos tradicionales de madera o mdf, pero con las ventajas del PVC.</p>
            <p className='mb-5'>Diseño compuesto por dos piezas: una base, más embellecedor, permitiendo una segunda función de cable canal y brindando resistencia a los impactos.</p>
            <p className='mb-0 mb-lg-5'>Para todo tipo de ambientes, inclusive donde se extreman condiciones de salubridad e higiene.</p>
          </div>
          <div className='col-lg-5 col-12 d-lg-block d-none' >
            <img 
            src="/zocalos/un-zocalos-02.jpg" 
            alt="un-zocalos-02" 
            style={{height: "80%"}}
            />
          </div>
        </div>
        <div className='section-padding'>
          <div className='mt-5'>
            <h2>Diseños y <b>Tipologías</b></h2>
            <Separador color="--color-3" width="100px" />
            <div className='row'>
              <div className='col-lg-6 col-12'>
                <img src="/zocalos/disenos_zocalos.png" alt="disenos_zocalos" />
              </div>
              <div className='col-lg-6 col-12'>
                <img src="/zocalos/tipologias_zocalos.png" alt="tipologias_zocalos" />
              </div>
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
            <div className='col'>
              <p>Brochure In&Out Design Muchtek</p>
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
