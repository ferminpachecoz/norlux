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
          <li><a href="/">Inicio</a></li>
          <li className='menu-productos'>
            Productos
            <span className='menu-container'>
              <p className='categorias perfiles'>
                Perfiles
                <div className='sub-categorias perfiles-sub'>
                  <p><a href="/perfiles/doble-contacto">Doble Contacto</a></p>
                  <p className='mb-0'><a href="/perfiles/corredizo">Corredizo</a></p>
                </div>
              </p>
              <p className='categorias pisos'>
                Pisos
                <div className='sub-categorias pisos-sub'>
                  <p><a href="/pisos/decks">Decks</a></p>
                  <p><a href="/pisos/pisos-de-interior">Pisos de interior</a></p>
                  <p className='mb-0'><a href="/pisos/zocalos">Zócalos</a></p>
                </div>
              </p>
              <p className='mb-0 categorias design'>
                In & Out Design
                <div className='sub-categorias design-sub'>
                  <p>Tubulares</p>
                  <p>Wall Panel</p>
                  <p className='mb-0'>Revestimientos</p>
                </div>
              </p>
            </span>
          </li>
          <li><a href="/por-que-pvc">¿Por qué PVC?</a></li>
          <li><a href="/nosotros">Nosotros</a></li>
          <li><a href="/FAQs">FAQ</a></li>
        </ul>
        <button>Solicitar Presupuesto</button>
      </div>
    </div>
  )
}
