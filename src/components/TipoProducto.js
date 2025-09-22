import React from 'react';
import "./TipoProducto.scss";

export default function TipoProducto({array}) {
  return (
    <div className='tipo-producto'>
      <div className='row row-cols-lg-2 row-cols-1 g-4'>
        {
          array.map((item, index)=>(
          <div className='col' key={index}>
            <div className='contenido'>
              <img src={item.image} alt={item.title} />
              <a href={item.link} className='mask'>
                <h2>{item.title}</h2>
              </a>
            </div>
          </div>
          ))
        }
      </div>
    </div>
  )
}
