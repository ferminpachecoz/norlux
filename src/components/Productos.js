import React from 'react';
import "./Productos.scss";

export default function Productos({children, padding}) {
  return (
    <div className='productos-padre' style={{padding: padding?padding:"100px 250px"}}>
      {children}
    </div>
  )
}
