import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Productos from '../../components/Productos';
import HeroSection from '../../components/WhyPVC/HeroSection';
import Separador from '../../components/Separador';

export default function LineaEfficient() {
  return (
    <>
      <Header />
      <HeroSection title="Linea Efficient" subtitle="lorem ipsum dolor sit amet exeberit" image="/houses/house-banner.jpg" />
      <Productos>
        <h2 className='titulo'>Sistema de Paño <b>Fijo</b></h2>
        <Separador width="100px" color="--color-3" />
        <p>Se ofrecen en dos dimensiones de perfil: 55 o 67 mm de alto que se pueden aplicar a los sistemas Doble Contacto. </p>
        <img src="/LineaEfficient/pano-fijo-renders.png" alt="Paño fijo renders" />
        <h3>Series <b>58-55</b> y <b>58-67</b></h3>
        <img src="/LineaEfficient/pano-fijo-series.png" alt="Paño fijo series" />
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
      </Productos>
      <Footer />
    </>
  )
}
