import React from 'react';
import "./HeroFAQ.scss"
import Separador from '../Separador';

export default function HeroFAQ() {
  return (
    <div className='hero-section-faqs'>
      <h1 className='section-title mb-4'>Preguntas <br/><b>Frecuentes</b></h1>
      <Separador width="100px" color="--color-2"/>
      <p className='section-subtitle'>Encuentra respuestas a las consultas más comunes sobre nuestros productos y servicios</p>
    </div>
  )
}
