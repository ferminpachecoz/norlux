import React from 'react'
import "./HeroSection.scss"
import Separador from '../Separador'

export default function HeroSection() {
  return (
    <div className='hero-section'>
      <img src="/houses/house-banner.jpg" alt="casa con mucha luz natural" />
      <div className='mask'>
        <h1 className='mb-4'>¿Por qué elegimos <br/> <b>el PVC?</b></h1>
        <Separador color={"--color-2"} width={"100px"} />
        <p className='subtitle mt-4'>En Nörlux decidimos especializarnos exclusivamente  aberturas de PVC porque creemos que la excelencia se logra con foco.</p>
      </div>
    </div>
  )
}
