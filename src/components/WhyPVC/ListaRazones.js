import React from 'react'
import "./ListaRazones.scss"
import Separador from '../Separador'

export default function ListaRazones() {
  let array=[
    {
      icon: "bi bi-thermometer-sun",
      title: "Aislamiento térmico superior",
      description: "Gracias a su baja conductividad, el PVC ofrece un aislamiento térmico que permite mantener la temperatura interior más estable, reduciendo el uso de calefacción y aire acondicionado. Esto se traduce en mayor confort y menor consumo energético.",
      etiqueta: "Menor consumo energético"
    },
    {
      icon: "bi bi-volume-mute",
      title: "Aislamiento acústico real",
      description: "Los perfiles multicámara y los herrajes multipunto garantizan una reducción significativa del ruido exterior, incluso en zonas urbanas o cercanas a avenidas. Ideal para quienes buscan paz dentro del hogar.",
      etiqueta: "Reducción significativa del ruido"
    },
    {
      icon: "bi bi-shield-lock",
      title: "Cierre hermético y seguro",
      description: "Nuestras aberturas integran herrajes europeos multipunto que aseguran un cierre robusto y uniforme, mejorando tanto la seguridad como la hermeticidad del sistema.",
      etiqueta: "Herrajes europeos multipunto"
    },
    {
      icon: "bi bi-palette",
      title: "Acabados premium que se integran al diseño",
      description: "El PVC no es solo funcional: también es estético. Ofrecemos una amplia gama de terminaciones —desde colores lisos hasta foils que imitan la madera con textura y vetas—, lo que permite integrar las aberturas al estilo arquitectónico de cada proyecto sin comprometer la calidad.",
      etiqueta: "Amplia gama de terminaciones"
    },
    {
      icon: "bi bi-wrench",
      title: "Sin mantenimiento, sin preocupaciones",
      description: "El PVC no se oxida, no se degrada con el sol, no se descascara y no requiere pintura ni barnices. A diferencia de otros materiales, conserva su aspecto durante años, reduciendo costos y mantenimiento.",
      etiqueta: "Cero mantenimiento"
    },
    {
      icon: "bi bi-leaf",
      title: "Sustentabilidad comprobada",
      description: "El PVC es 100% reciclable y tiene una larga vida útil. Al reducir el consumo energético y evitar el uso de pinturas o productos contaminantes, contribuye activamente al cuidado del medioambiente.",
      etiqueta: "100% reciclable"
    },
    {
      icon: "bi bi-clock",
      title: "Durabilidad extrema",
      description: "El PVC resiste la humedad, la salinidad, la exposición solar y las variaciones climáticas. Es ideal tanto para climas extremos como para quienes buscan una solución duradera, sin sorpresas.",
      etiqueta: "Resistencia extrema"
    },
  ]
  return (
    <div className='lista-razones'>
      <h1 className='section-title'>Elegimos PVC porque pensamos <br/><b>a largo plazo</b></h1>
      <Separador color={"--color-3"} width={"100px"} />
      <p className='section-subtitle mb-5'>No trabajamos con aluminio ni otros materiales porque el PVC representa, hoy, la mejor combinación entre eficiencia, confort, durabilidad y sustentabilidad.</p>
      <div className='lista row row-cols-2 g-4'>
        {
          array.map((item, index)=>(
            <div className='col' key={index}>
              <div className='contenedor d-flex'>
                <span className='icon-container'>
                  <i className={item.icon}></i>
                </span>
                <span className='contenido'>
                  <p className='title'>{item.title}</p>
                  <p className='description'>{item.description}</p>
                  <p className='etiqueta'>{item.etiqueta}</p>
                </span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
