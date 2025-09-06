import React from 'react';
import Header from '../../components/Header';
import HeroSection from '../../components/WhyPVC/HeroSection';
import Productos from '../../components/Productos';
import Separador from '../../components/Separador';
import Footer from '../../components/Footer';
import ImageBg from '../Pisos/ImageBg';
import CardsCarousel from '../Pisos/CardsCarousel';
import IconText from '../Pisos/IconText';

export default function WallPanelInterior() {
  let ITEMS=[
    {
      image: "/WallPanel/TP_WP_EUCALYPTUS_1MOD.jpg",
      title: "Eucalyptus"
    },
    {
      image: "/WallPanel/TP_WP_OAK_1MOD.jpg",
      title: "Oak"
    },
    {
      image: "/WallPanel/TP_WP_POPLAR_1MOD.jpg",
      title: "Poplar"
    },
    {
      image: "/WallPanel/TP_WP_TEEK_1MOD.jpg",
      title: "Teek"
    },
    {
      image: "/WallPanel/TP_WP_WALNUT_1MOD.jpg",
      title: "Walnut"
    },
  ]
  let array=[
    {
      image: "aislacion-termica.png",
      text: "Gran confort térmico."
    },
    {
      image: "estanquidad.png",
      text: "Antialérgico, antihumedad, antimanchas, antitermitas."
    },
    {
      image: "mantenimiento.png",
      text: "No requiere mantenimiento."
    },
    {
      image: "limpieza.png",
      text: "Fácil de instalar y de limpiar."
    },
  ]
  return (
    <>
      <Header />
      <HeroSection title="Wall Panel Interior" subtitle="Lorem ipsum dolor sit amet" image="/houses/house-banner.jpg" />
      <Productos padding="0px">
        <div className='row' style={{padding: "100px"}}>
          <div className='col-7'>
            <h2>Interior</h2>
            <Separador color="--color-3" width="100px" />
            <p>Aplicaciones de diseño interior, decoración y acabados arquitectónicos.</p>
            <p>Se puede colocar directamente sobre todo tipo de paredes (inclusive fuera de plomo o irregulares), áreas cementadas y otros materiales, también atornillado sobre alfajias.</p>
            <ul>
              <li><b>Diseño</b></li>
              <li><b>Confort</b></li>
              <li><b>Versatilidad</b></li>
            </ul>
          </div>
          <div className='col-5'>
            <img src="/WallPanel/wall-panel-interior-contexto.jpg" alt="wall-panel-interior-contexto" />
          </div>
        </div>
        <ImageBg image="/houses/sample-02.jpg">
          <h2>Una gran variedad de colores y texturas</h2>
          <Separador color="--color-2" width="100px" />
          <p>con la resistencia y durabilidad del PVC, garantizando una solución ideal para cada ambiente.</p>
          <CardsCarousel items={ITEMS} colorTitle="--color-4" />
        </ImageBg>
        <div style={{padding: "100px"}}>
          <IconText array={array} gutter="5" cols="4" imgSize="100px" />
        </div>
        <div style={{padding: "50px 150px"}}>
          <iframe width="100%" height="600" src="https://www.youtube.com/embed/qzCFlZDtGnU" title="GUÍA DE INSTALACIÓN - WALL PANEL PVC IN &amp; OUT DESIGN MUCHTEK" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className='row' style={{padding: "100px 200px"}}>
          <div className='col-lg-8'>
            <h2><b>Interior</b> y Exterior</h2>
            <Separador color="--color-3" width="100px" />
            <p>Diseñado para tener la apariencia y textura de la madera natural con la resistencia y durabilidad del PVC.</p>
          </div>
          <div className='col-lg-4'>
            <img src="/WallPanel/wall-panel-renders.png" alt="wall-panel-renders" />
          </div>
          <div className='col-lg-12'>
            <img src="/WallPanel/tipologias-wallpanel-01.png" alt="tipologias-wallpanel-01" />
          </div>
        </div>
        <div style={{padding: "0px 100px 100px 100px"}}>
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
