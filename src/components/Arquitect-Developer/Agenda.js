import React from 'react';
import "./Agenda.scss";

export default function Agenda({dev}) {
  return (
    <div className='agenda'>
      <span className='icon-title mb-3'>
        <i className="bi bi-calendar-check"></i>
      </span>
      {dev?
        <h1 className='section-title'>¿Listo para optimizar tu <b>próximo desarrollo</b>?</h1>
        :
        <h1 className='section-title'>¿Listo para colaborar en tu <b>próximo proyecto</b>?</h1>
      }
      {dev?
        <p className='section-subtitle mb-4'>Obtén una cotización personalizada para tu proyecto y descubre cómo podemos mejorar tu rentabilidad sin comprometer la calidad.</p>
        :
        <p className='section-subtitle mb-4'>Únete a nuestro programa de arquitectos y accede a condiciones preferenciales, soporte técnico especializado y recursos exclusivos.</p>
      }
      <div className='d-flex justify-content-center align-items-center mb-5'>
        {dev?
          <button>
            <i className="bi bi-calculator"></i>
            Solicitar Analisis de Proyecto
          </button>
        :
          <button>
            <i className="bi bi-phone"></i>
            Contactar Area Técnica
          </button>
        }
        {dev?
          <button>
            <i className="bi bi-truck"></i>
            Solicitar Visita Técnica
          </button>
        :
          <button>
            <i className="bi bi-download"></i>
            Descargar Recursos
          </button>
        }
      </div>
      {dev?
      <div className='row justify-content-center'>
        <div className='col-3'>
          <p className='title'>500+</p>
          <p style={{textAlign: "center", color: "var(--color-2)"}}>Unidades entregadas</p>
        </div>
        <div className='col-3'>
          <p className='title'>98%</p>
          <p style={{textAlign: "center", color: "var(--color-2)"}}>Satisfacción del cliente</p>
        </div>
        <div className='col-3'>
          <p className='title'>0</p>
          <p style={{textAlign: "center", color: "var(--color-2)"}}>Retrasos en entregas</p>
        </div>
      </div>
      :
      <div className='row justify-content-center'>
        <div className='col-3'>
          <p style={{textAlign: "center", color: "var(--color-2)", marginBottom: "0px", display: "flex", alignItems: "center"}}>
            <span className='circle me-1'></span>
            Programa de Arquitectos Nörlux
          </p>
        </div>
        <div className='col-3'>
          <p style={{textAlign: "center", color: "var(--color-2)", marginBottom: "0px", display: "flex", alignItems: "center"}}>
            <span className='circle me-1'></span>
            Condiciones preferenciales
          </p>
        </div>
        <div className='col-3'>
          <p style={{textAlign: "center", color: "var(--color-2)", marginBottom: "0px", display: "flex", alignItems: "center"}}>
            <span className='circle me-1'></span>
            Soporte técnico especializado
          </p>
        </div>
      </div>
      }
    </div>
  )
}
