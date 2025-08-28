import React from 'react';
import "./ImageBg.scss";
import Separador from '../../components/Separador';

export default function ImageBg({image, children}) {
  return (
    <div style={{backgroundImage: `url(${image})`}} className='image-bg'>
      <div className='mask'>
        {children}
      </div>
    </div>
  )
}
