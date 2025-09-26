import React from 'react';
import "./Footer.scss";

export default function Footer() {
  return (
    <div className='footer'>
      <div className='row'>
        <div className='col-lg-3'>
          <img src="/logos/logo-lg-claro-claro.webp" alt="Logo Nörlux" />
          <p className='small mb-4'>Aberturas PVC de Alto Rendimiento</p>
          <p className='medium'>Especialistas en ventanas y puertas PVC con tecnología europea. Transformamos espacios con calidad, diseño y eficiencia energética.</p>
          <div className='social-media d-flex justify-content-start align-items-center'>
            <span className='icon-container'>
              <i className="bi bi-instagram"></i>
            </span>
            <span className='icon-container'>
              <i className="bi bi-facebook"></i>
            </span>
            <span className='icon-container'>
              <i className="bi bi-linkedin"></i>
            </span>
          </div>
        </div>
        <div className='col-lg-3'>
          <p className='col-title'>Enlaces Rápidos</p>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">¿Por qué PVC?</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div className='col-lg-3'>
          <p className='col-title'>Servicios</p>
          <ul>
            <li>Ventanas PVC</li>
            <li>Puertas PVC</li>
            <li>Muro Cortina</li>
            <li>Asesoramiento Técnico</li>
            <li>Instalación</li>
            <li>Mantenimiento</li>
          </ul>
        </div>
        <div className='col-lg-3'>
          <p className='col-title'>Contacto</p>
          <ul>
            <li className='d-flex'>
              <i className="bi bi-geo-alt me-2" style={{color: "var(--color-3)"}}></i>
              <p>Av. del Libertador 1234. Vicente López, Buenos Aires</p>
            </li>
            <li className='d-flex'>
              <i className="bi bi-telephone me-2" style={{color: "var(--color-3)"}}></i>
              <p>+54 11 4567-8900</p>
            </li>
            <li className='d-flex'>
              <i className="bi bi-envelope me-2" style={{color: "var(--color-3)"}}></i>
              <p>info@norlux.com.ar</p>
            </li>
            <li className='d-flex'>
              <i className="bi bi-clock me-2" style={{color: "var(--color-3)"}}></i>
              <p>Lun - Vie: 8:00 - 18:00 | Sáb: 9:00 - 13:00</p>
            </li>
          </ul>
        </div>
      </div>
      <div className='separador'></div>
      <div className='newsletter'>
        <p className='col-title'>Mantente Informado</p>
        <p className='small'>Recibe noticias sobre productos, proyectos y consejos para tu hogar.</p>
        <form>
          <input type="text" placeholder='Tu Email'/>
          <button type='submit'>Suscribirse</button>
        </form>
      </div>
      <div className='separador'></div>
      <div className='derechos d-lg-flex d-block justify-content-between align-items-center'>
        <p>© 2024 Nörlux. Todos los derechos reservados.</p>
        <span className='d-flex'>
          <p className='me-lg-5 me-2'>Política de Privacidad</p>
          <p className='me-lg-5 me-2'>Términos de Uso</p>
          <p className='me-lg-5 me-2'>Cookies</p>
        </span>
      </div>
    </div>
  )
}
