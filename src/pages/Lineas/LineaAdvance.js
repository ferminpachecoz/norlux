import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HeroSection from '../../components/WhyPVC/HeroSection'
import Productos from '../../components/Productos'
import Separador from '../../components/Separador'
import Ventajas from '../../components/Arquitect-Developer/Ventajas'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function LineaAdvance() {
  let array = [
    {
      icon: "bi bi-file-earmark-ruled",
      title: "Diseño compacto y funciona",
      description: "Perfecto para cocinas, baños y dormitorios."
    },
    {
      icon: "bi bi-file-earmark-ruled",
      title: "Ahorro de espacio",
      description: "Sistema corredizo sin hojas que invadan el interior."
    },
    {
      icon: "bi bi-file-earmark-ruled",
      title: "Hermeticidad y aislamiento",
      description: "Mantiene el confort incluso en aberturas pequeñas."
    },
    {
      icon: "bi bi-file-earmark-ruled",
      title: "Durabilidad y bajo mantenimiento",
      description: "Resistencia al uso diario y fácil limpieza."
    },
    {
      icon: "bi bi-file-earmark-ruled",
      title: "Versatilidad de acabados",
      description: "múltiples opciones de diseño y colores."
    },
  ]
  const images = [
    "/houses/house-banner-2.jpg",
    "/houses/house-banner-3.jpg",
    "/houses/house-banner-4.jpg",
  ];
  return (
    <>
      <Header />
      <HeroSection title="Línea Advance" image="/houses/sample-02.jpg" subtitle="Corredizas prácticas para espacios reducidos." />
      <Productos padding="0px">
        <div style={{padding: "100px 200px 0px 200px"}}>
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
        <Ventajas 
          array={array}
        />
         <div style={{padding: "100px 200px 0px 200px"}}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            loop
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
          >
            {images.map((src, i) => (
              <SwiperSlide key={i}>
                <img
                  src={src}
                  alt={`slide-${i}`}
                  className="w-100 h-100 object-fit-cover"
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div style={{padding: "100px 200px 100px 200px"}}>
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
