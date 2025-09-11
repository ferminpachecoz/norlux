import React from 'react'
import Separador from './Separador';
import "./SmallSectionBanner.scss";

export default function SmallSectionBanner({title, cta}) {
  return (
    <div className='small-section-banner'>
      <h1>{title}</h1>
      <Separador width="100px" color="--color-2" />
      <a href="/contacto">{cta}</a>
    </div>
  )
}
