import React from 'react'
import Header from '../../components/Header'
import HeroSection from '../../components/WhyPVC/HeroSection'
import Productos from '../../components/Productos'
import Footer from '../../components/Footer'
import Separador from '../../components/Separador'
import CardsCarousel from './CardsCarousel'
import IconText from './IconText'

export default function Zocalos() {
  let array=[
    {
      image: "estanquidad.png",
      text: "Resistente al agua y a la humedad."
    },
    {
      image: "mantenimiento.png",
      text: "Libre de mantenimiento."
    },
    {
      image: "texturas.png",
      text: "Textura suave y homogénea."
    },
    {
      image: "facil.png",
      text: "Rápida y sencilla colocación."
    },
    {
      image: "impacto.png",
      text: "No se astilla."
    },
    {
      image: "durabilidad.png",
      text: "Larga vida útil."
    },
    {
      image: "ignifugo.png",
      text: "lgnífugo y antibacteriano."
    },
    {
      image: "sustentable.png",
      text: "Amigable con el medio ambiente."
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
  return (
    <>
      <Header />
      <HeroSection title="Zócalos" subtitle="Lorem ipsum dolor sit amet" image="/houses/house-banner.jpg" />
      <Productos padding="100px 150px" style={{position: "relative"}}>
        <div className='row'>
          <div className='col-7'>
            <h2>Fabricados con todo el <b>know how</b> Muchtek</h2>
            <Separador color="--color-3" width="100px" />
            <p className='mb-5'>Se pueden cortar, ingletar, atornillar o pegar con silicona facilitando el montaje, como los zócalos tradicionales de madera o mdf, pero con las ventajas del PVC.</p>
            <p className='mb-5'>Diseño compuesto por dos piezas: una base, más embellecedor, permitiendo una segunda función de cable canal y brindando resistencia a los impactos.</p>
            <p className='mb-5'>Para todo tipo de ambientes, inclusive donde se extreman condiciones de salubridad e higiene.</p>
          </div>
          <div className='col-5' >
            <img 
            src="/zocalos/un-zocalos-02.jpg" 
            alt="un-zocalos-02" 
            style={{height: "80%"}}
            />
          </div>
        </div>
        <section className="container my-5">
          <h2>Gran variedad de <b>colores y texturas</b></h2>
          <Separador color="--color-3" width="100px" />
          <p>Para elegir el diseño que más se adecue a tus ambientes:</p>
          <CardsCarousel items={ITEMS} />
        </section>
        <div className='mt-5'>
          <h2>Ventajas de los <b>zócalos de PVC</b></h2>
          <Separador color="--color-3" width="100px" />
          <IconText array={array} cols="4" gutter="5" imgSize="100px" />
        </div>
        <div className='mt-5'>
          <h2>Diseños y <b>Tipologías</b></h2>
          <Separador color="--color-3" width="100px" />
          <div className='row'>
            <div className='col-lg-6'>
              <img src="/zocalos/disenos_zocalos.png" alt="disenos_zocalos" />
            </div>
            <div className='col-lg-6'>
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
      </Productos>
      <Footer />
    </>
  )
}
