import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Productos from '../../components/Productos';
import HeroSection from '../../components/WhyPVC/HeroSection';
import Separador from '../../components/Separador';
import IconText from '../Pisos/IconText';
import Ventajas from '../../components/Arquitect-Developer/Ventajas';
import CarruselOneImage from '../../components/CarruselOneImage';
import SmallSectionBanner from '../../components/SmallSectionBanner';
import CarruselCards from '../../components/CarruselCards';
import CardsCarousel from '../Pisos/CardsCarousel';
import ImageBg from '../Pisos/ImageBg';

export default function LineaEfficient() {
  let array = [
    {
      icon: "/LineaEfficient/icons/thermal-insulation.png",
      title: "Aislamiento térmico superior",
      description: "Mantiene tu hogar cálido en invierno y fresco en verano."
    },
    {
      icon: "/LineaEfficient/icons/acoustic-panel.png",
      title: "Hermeticidad acústica",
      description: "Bloquea el ruido exterior para un ambiente más tranquilo."
    },
    {
      icon: "/LineaEfficient/icons/mantenimiento.png",
      title: "Durabilidad y bajo mantenimiento",
      description: "El PVC de Muchtek no se deforma, no se oxida y se limpia fácilmente."
    },
    {
      icon: "/LineaEfficient/icons/versatilidad.png",
      title: "Versatilidad de diseño",
      description: "Múltiples configuraciones y acabados para adaptarse a cualquier proyecto."
    },
    {
      icon: "/LineaEfficient/icons/sustentabilidad.png",
      title: "Sustentabilidad",
      description: "Fabricadas con materiales reciclables y pensadas para reducir el consumo energético."
    },
  ]
  let images=["/LineaEfficient/image-banner-2.jpg","/LineaEfficient/image-banner-6.jpg","/LineaEfficient/image-banner-5.jpg"]

  const items=[
    {
      image: "/LineaEfficient/productos/LEFF_CERRADA_ALPINE.jpg",
      title: "alpine"
    },
    {
      image: "/LineaEfficient/productos/LEFF_CC_ALTWEISS COMPLETA.jpg",
      title: "altweiss"
    },
    {
      image: "/LineaEfficient/productos/LN_CC_58-69_BLANCO.jpg",
      title: "blanco"
    },
    {
      image: "/LineaEfficient/productos/LEFF_PF_JETBLACK.jpg",
      title: "jet black"
    },
    {
      image: "/LineaEfficient/productos/LN_58-85_CC_SCHWARZBRAUN.jpg",
      title: "schwarzbraun"
    },
    {
      image: "/LineaEfficient/productos/LEFF_CC_BANDEROLA_TOFFEE.jpg",
      title: "toffee"
    },
  ]
  return (
    <>
      <Header />
      <HeroSection 
        title="Linea Efficient" 
        subtitle="La línea de ventanas practicables de PVC que asegura aislamiento térmico y acústico, con diseño funcional y durabilidad garantizada." 
        image="/LineaEfficient/image-banner.jpg" 

      />
      <Productos padding="0px">
        <div className='section-padding'>
          <h2 className='titulo'>Ventanas que combinan <b>eficiencia y confort</b></h2>
          <Separador width="100px" color="--color-3" />
          <p>
            La línea <b>Efficient</b> de <b>Muchtek</b>, está pensada para quienes buscan el equilibrio perfecto entre <b>diseño, confort y eficiencia energética</b>. Sus aperturas practicables permiten una <b>apertura total</b> que favorece la ventilación, a la vez que ofrecen un <b>alto nivel de hermeticidad</b> gracias a su doble contacto para mantener la temperatura interior, reducir ruidos externos y ahorrar en climatización.
          </p>
          <img 
            src="/LineaEfficient/image-banner-3.jpg" 
            alt="Muchtek en casa foa - linea efficient" 
            className='mb-4'
            style={{borderRadius: "10px"}}
          />
          <p>
            Estas ventanas son ideales para proyectos que buscan una máxima <b>aislación térmica y acústica</b>, adaptándose a diferentes estilos arquitectónicos sin perder prestaciones
          </p>
        </div>
        <CarruselCards array={array} />
        <div className='section-padding'>
          <CarruselOneImage images={images} />
        </div>
        <SmallSectionBanner title="¿Querés conocer cómo la línea Efficient puede transformar tu proyecto?" cta="Solicitá tu presupuesto" />
        <ImageBg image="/LineaEfficient/image-banner.jpg">
          <h2>Gran variedad de colores y texturas</h2>
          <Separador color="--color-2" width="100px" />
          <p>Para elegir el diseño que más se adecue a tus ambientes:</p>
          <CardsCarousel items={items} colorTitle="--color-3" />
        </ImageBg>
        {/* <img src="/LineaEfficient/pano-fijo-renders.png" alt="Paño fijo renders" />
        <h3>Series <b>58-55</b> y <b>58-67</b></h3>
        <img src="/LineaEfficient/pano-fijo-series.png" alt="Paño fijo series" /> */}
        <div className='section-padding'>
          <h2 className='titulo mt-4'>Sistema de <b>doble contacto</b></h2>
          <Separador width="100px" color="--color-3" />
          <p className='big'>Cuenta con los siguientes sistemas:</p>
          <p>De abrir (interior/exterior), oscilobatiente, proyectante, banderola, plegable y corredora paralela. </p>
          <p className='mb-5'>Con refuerzos interiores de acero galvanizado que permiten diseñar aberturas de grandes tamaños con vidrios simples y/o dobles hasta 34 mm de espesor.</p>
          <h3>Series <b>55-69</b> <b>55-69</b>, <b>55-85</b> Y <b>67-85</b></h3>
          <img src="/LineaEfficient/doble-contacto-series-01.png" alt="Doble Contacto Series" />
          <h3>Series <b>67-100</b></h3>
          <img src="/LineaEfficient/doble-contacto-series-02.png" alt="Doble contacto series 2" />
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
