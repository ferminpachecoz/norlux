import React from 'react';
import "./Beneficios.scss";
import CardIcon from './CardIcon';

export default function Beneficios() {
  let elementos = [
    {
      lightIcon: "shield-check.png",
      darkIcon: "shield-check-white.png",
      title: "Perfiles PVC Alto Rendimiento",
      subtitle: "Muchtek",
      description: "Perfiles de PVC premium con cámaras múltiples para máximo aislamiento térmico y acústico."
    },
    {
      lightIcon: "settings.png",
      darkIcon: "settings-white.png",
      title: "Herrajes de Precisión Europea",
      subtitle: "Rotofrank",
      description: "Herrajes alemanes de última generación que garantizan suavidad, durabilidad y seguridad."
    },
    {
      lightIcon: "team-check.png",
      darkIcon: "team-check-white.png",
      title: "Asesoramiento Especializado",
      subtitle: "Consultoría",
      description: "Equipo técnico especializado para brindar la mejor solución según cada proyecto y necesidad."
    },
    {
      lightIcon: "bolt.png",
      darkIcon: "bolt-white.png",
      title: "Eficiencia y Precisión",
      subtitle: "Procesos optimizados",
      description: "Fabricación con tecnología de punta y procesos optimizados para entregas puntuales."
    },
    {
      lightIcon: "ruler-triangle.png",
      darkIcon: "ruler-triangle-white.png",
      title: "Instalación Llave en Mano",
      subtitle: "Garantía y cumplimiento",
      description: "Servicio integral desde la medición hasta la instalación final con garantía completa."
    },
    {
      lightIcon: "normas-iram.png",
      darkIcon: "normas-iram-white.png",
      title: "Normas IRAM",
      subtitle: "Certificación nacional",
      description: "Todos nuestros productos cumplen y superan las exigentes normas IRAM de calidad."
    },
  ]
  return (
    <div className='beneficios'>
      <h1 className='section-title'>Porque <b>tu tranquilidad</b> es lo más importante, hacemos que todo el proceso sea <b>fácil y seguro</b>, con un servicio que te acompaña <b>para siempre.</b></h1>
      <div className='resaltador'>
        <span className='linea'></span>
      </div>
      <div className='row row-cols-lg-3 g-lg-5 row-cols-2 g-2'>
        {
          elementos.map((item, key)=>(
            <div className='col' key={key}>
              <CardIcon 
              darkIcon={item.lightIcon} 
              lightIcon={item.darkIcon}  
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              />
            </div>
          ))
        }
      </div>
      <p className='text'>Cada detalle está pensado para brindar la mejor experiencia y resultados duraderos</p>
      <div className='d-flex justify-content-evenly align-items-center lista flex-column flex-lg-row'>
        <span className='d-flex align-items-center mb-3'>
          <span className='circle me-2'></span>
          <p>10 años de garantía en perfiles</p>
        </span>
        <span className='d-flex align-items-center mb-3'>
          <span className='circle me-2'></span>
          <p>5 años en herrajes</p>
        </span>
        <span className='d-flex align-items-center mb-3'>
          <span className='circle me-2'></span>
          <p>Instalación certificada</p>
        </span>
      </div>
    </div>
  )
}
