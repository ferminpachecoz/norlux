import React from 'react';
import "./Ventajas.scss";
import CardVentajas from './CardVentajas';

export default function Ventajas({title, subtitle, array, cols}) {
  return (
    <div className='ventajas'>
      {title?
        <h1 className='section-title' dangerouslySetInnerHTML={{__html: title}}></h1>
        :
        <></>
      }
      {subtitle?
        <p className='section-subtitle mb-5' dangerouslySetInnerHTML={{__html: subtitle}}></p>
        :
        <></>
      }
      <div className={`row g-4 ${cols?"row-cols-"+cols:""}`}>
        {
          array.map((item,index)=>(
            <div key={index} className='col'>
              <CardVentajas 
                icon={item.icon} 
                title={item.title} 
                description={item.description} 
                etiqueta={item.etiqueta} 
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}
