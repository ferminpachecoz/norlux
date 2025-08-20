import React from 'react'
import "./Header.scss"

export default function Header() {
  return (
    <div className='header'>
      <div className='top-part d-flex align-items-center justify-content-between'>
        <div className='d-flex'>
          <span className='d-flex'>
            <i className="bi bi-telephone"></i>
            <p>+54 11 1234-5678</p>
          </span>
          <span className='d-flex'>
            <i className="bi bi-envelope"></i>
            <p>info@norlux.com.ar</p>
          </span>
        </div>
        <div>
          <p>Zona Norte, Buenos Aires</p>
        </div>
      </div>
      <div className='bottom-part d-flex align-items-center justify-content-between'>
        <img src="/logos/logo-lg-verde-negro.png" alt="Logo de Nörlux" />
        <ul className='d-flex align-items-center m-0'>
          <li>Inicio</li>
          <li>Productos</li>
          <li>¿Por qué PVC?</li>
          <li><a href="/nosotros">Nosotros</a></li>
          <li>FAQ</li>
        </ul>
        <button>Solicitar Presupuesto</button>
      </div>
    </div>
  )
}
