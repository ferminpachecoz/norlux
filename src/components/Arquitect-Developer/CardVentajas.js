import React from 'react';
import "./CardVentajas.scss"

export default function CardVentajas({icon, title, description, etiqueta}) {
  return (
    <div className='card-ventajas'>
      <span className='icon-container mb-3'>
        <i className={icon}></i>
      </span>
      <p className='title'>
        {title}
      </p>
      <p className='description'>
        {description}
      </p>
      {etiqueta?
        <span className='etiqueta'>
          {etiqueta}
        </span>
        :
        <></>
      }
    </div>
  )
}
