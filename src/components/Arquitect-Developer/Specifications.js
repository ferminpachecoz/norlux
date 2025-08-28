import React from 'react';
import "./Specifications.scss";
import SpecsTabs from './SpecsTabs';

export default function Specifications() {
  return (
    <div className='specifications'>
      <h1 className='section-title'>Especificaciones <b>técnicas</b></h1>
      <p className='section-subtitle mb-5'>Datos técnicos precisos para tus especificaciones de proyecto y cálculos de performance.</p>
      <SpecsTabs />
    </div>
  )
}
