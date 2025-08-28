import React from 'react'
import "./BannerAlt.scss"

export default function BannerAlt({dev}) {
  return (
    <div className='banner-alt'>
      <div className='row'>
        <div className='col-lg-7 pe-5'>
          <span className='iconText mb-4'>
            {dev?
              <i className='bi bi-building'></i>
              :
              <i className='bi bi-rulers'></i>
            }
            <p>{dev?"Para desarroladores":"Para arquitectos"}</p>
          </span>
          {dev?
            <h1 className='mb-4'>Maximiza la rentabilidad de <b>tus desarrollos</b></h1>
            :
            <h1 className='mb-4'>Precisión técnica y <b>excelencia estética</b></h1>
          }
          {dev?
            <p className='subtitle'>Aberturas PVC de <b>alto rendimiento</b> que optimizan costos, cumplen normativas y agregan valor real a tus <b>proyectos inmobiliarios.</b></p>
            :
            <p className='subtitle'>Colaboramos con arquitectos que buscan la perfecta combinación entre diseño, performance técnica y cumplimiento normativo en sus proyectos.</p>
          }
          <div className='button-container'>
            {dev?
              <a 
                href="#"
                style={{backgroundColor: "var(--color-2)"}}
                className='me-3'
              >
                <i className='bi bi-building me-2'></i>
                <p>Calcular ROI del Proyecto</p>
              </a>
              :
              <a 
                href="#"
                style={{backgroundColor: "var(--color-2)"}}
                className='me-3'
              >
                <i className='bi bi-download me-2'></i>
                <p>Descargar Catálogo Técnico</p>
              </a>
            }
            {dev?
              <a 
                href="#"
                style={{backgroundColor: "white"}}
              >
                <i className='bi bi-building me-2'></i>
                <p>Solicitar Cotizacion por Volumen</p>
              </a>
              :
              <a 
                href="#"
                style={{backgroundColor: "white"}}
              >
                <i className='bi bi-calendar-check me-2'></i>
                <p>Agendar Consulta Técnica</p>
              </a>
            }
          </div>
        </div>
        <div className='col-lg-5 image-container'>
          <img src="/houses/house-banner.jpg" alt="Banner de casa moderna con luz natural" />
          <span className='stats'>
            {dev?
              <p className='title'>25%</p>
              :
              <p className='title'>IRAM</p>
            }
            {dev?
              <p className='description'>ahorro promedio</p>
              :
              <p className='description'>certificado</p>
            }
          </span>
        </div>
      </div>
    </div>
  )
}
