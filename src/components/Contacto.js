import React from 'react';
import "./Contacto.scss";

export default function Contacto() {
  return (
    <div className='contacto'>
      <h1 className='section-title' style={{color: "white"}}>¿Listo para transformar <b style={{color: "var(--color-2)"}}>tu proyecto?</b></h1>
      <p className='section-subtitle' style={{color: "white"}}>Obtén un presupuesto personalizado o agenda una reunión con nuestros especialistas. Te acompañamos en cada paso del proceso.</p>
      <div className='resaltador'>
        <span className='linea' style={{backgroundColor: "white"}}></span>
      </div>
      <div className='row g-5'>
        <div className='col-lg-6'>
          <div className='presupuesto'>
            <div className='d-flex justify-content-center mb-3'>
              <span className='icon-container'>
                <i className="bi bi-chat-left-dots"></i>
              </span>
            </div>
            <p className='title'>Solicitar Presupuesto</p>
            <p className='description'>Recibe una cotización detallada sin compromiso</p>
            <button className='btn-presupuesto'>Obtener Presupuesto Gratuito</button>
            <ul>
              <li>
                <span className='circle'></span>
                <p>Respuesta en menos de 24 horas.</p>
              </li>
              <li>
                <span className='circle'></span>
                <p>Visita técnica incluida.</p>
              </li>
              <li>
                <span className='circle'></span>
                <p>Sin compromiso de compra.</p>
              </li>
            </ul>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='reunion presupuesto'>
            <div className='d-flex justify-content-center mb-3'>
              <span className='icon-container'>
                <i className="bi bi-calendar-check"></i>
              </span>
            </div>
            <p className='title'>Agendar Reunión</p>
            <p className='description'>Habla directamente con nuestros especialistas</p>
            <button className='btn-presupuesto'>Reservar Cita Online</button>
            <ul>
              <li>
                <span className='circle'></span>
                <p>Reuniones virtuales o presenciales</p>
              </li>
              <li>
                <span className='circle'></span>
                <p>Asesoramiento técnico especializado</p>
              </li>
              <li>
                <span className='circle'></span>
                <p>Horarios flexibles</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='anexo'>
        <p className='main-text'>¿Prefieres contactarnos directamente?</p>
        <div className='d-flex justify-content-center align-items-center'>
          <span className='d-flex me-5'>
            <i className="bi bi-telephone-fill me-2"></i>
            <p>+54 11 4567-8900</p>
          </span>
          <span className='d-flex'>
            <i className="bi bi-envelope me-2"></i>
            <p>info@norlux.com.ar</p>
          </span>
        </div>
      </div>
    </div>
  )
}
