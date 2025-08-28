import React from 'react'
import "./HeroSection.scss"
import Separador from '../Separador'

export default function HeroSection({image, title, subtitle}) {
  return (
    <div className='hero-section'>
      <img src={image} alt="casa con mucha luz natural" />
      <div className='mask'>
        <h1 className='mb-4' dangerouslySetInnerHTML={{ __html: title }}></h1>
        <Separador color={"--color-2"} width={"100px"} />
        <p className='subtitle mt-4'>{subtitle}</p>
      </div>
    </div>
  )
}
