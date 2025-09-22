import React, { useState } from 'react'
import "./Header.scss"

export default function Header() {
  const [display, setDisplay] = useState(false)
  const [display2, setDisplay2] = useState(false)
  
  
  return (
    <div className='header'>
      <div className='top-part d-flex align-items-center justify-content-between'>
        <div className='d-flex'>
          <span className='d-flex me-4 me-lg-3'>
            <i className="bi bi-telephone"></i>
            <p>+54 11 1234-5678</p>
          </span>
          <span className='d-flex align-items-center'>
            <i className="bi bi-envelope"></i>
            <p>info@norlux.com.ar</p>
          </span>
        </div>
        <div className='d-lg-block d-none'>
          <p>Zona Norte, Buenos Aires</p>
        </div>
      </div>
      <div className='row bottom-part d-flex align-items-center justify-content-between'>
        <div className='col-6 col-lg-auto'>
          <a href="/">
            <img src="/logos/logo-lg-verde-negro.png" alt="Logo de Nörlux" />
          </a>
        </div>
        <div className='col-6 d-lg-none'>
          <div className='burger-container d-lg-none d-block' onClick={()=>setDisplay2(!display2)}>
            <i className="bi bi-list"></i>
          </div>
        </div>
        <div className='col-12 col-lg'>
          <ul className='d-lg-flex align-items-center m-0 d-none'>
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
                    <p><a href="/in-out-design/tubulares">Tubulares</a></p>
                    <p><a href="/in-out-design/wall-panel-interior">Wall Panel Interior</a></p>
                    <p><a href="/in-out-design/wall-panel-exterior">Wall Panel Exterior</a></p>
                    <p className='mb-0'><a href="/in-out-design/revestimientos">Revestimientos</a></p>
                  </div>
                </p>
              </span>
            </li>
            <li><a href="/por-que-pvc">¿Por qué PVC?</a></li>
            <li><a href="/nosotros">Nosotros</a></li>
            <li><a href="/FAQs">Preguntas Frecuentes</a></li>
            <li><a href="/novedades">Novedades</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>
        <button className='d-lg-block d-none col-lg-auto'><a href="/contacto">Solicitar Presupuesto</a></button>
      </div>
      <div className={`menu-mobile-overlay ${display2?"d-flex":"d-none"}`}>
        <div className='menu-mobile'>
          <a href="/">
            <img src="/logos/logo-lg-verde-negro.png" alt="Logo de Nörlux" />
          </a>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li className='menu-productos' onClick={()=>setDisplay(!display)}>
              Productos
              <span className={`menu-container ${display?"d-block":"d-none"}`}>
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
                    <p><a href="/in-out-design/tubulares">Tubulares</a></p>
                    <p><a href="/in-out-design/wall-panel-interior">Wall Panel Interior</a></p>
                    <p><a href="/in-out-design/wall-panel-exterior">Wall Panel Exterior</a></p>
                    <p className='mb-0'><a href="/in-out-design/revestimientos">Revestimientos</a></p>
                  </div>
                </p>
              </span>
            </li>
            <li><a href="/por-que-pvc">¿Por qué PVC?</a></li>
            <li><a href="/nosotros">Nosotros</a></li>
            <li><a href="/FAQs">Preguntas Frecuentes</a></li>
            <li><a href="/novedades">Novedades</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
          <button className='menu-mobile-btn'>Solicitar Presupuesto</button>
          <div className='close-button' onClick={()=>setDisplay2(false)}>
            <i className="bi bi-x"></i>
          </div>
        </div>
      </div>
    </div>
  )
}
