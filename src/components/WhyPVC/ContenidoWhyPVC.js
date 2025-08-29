import React from 'react'
import Separador from '../Separador'
import "./ContenidoWhyPVC.scss"

export default function ContenidoWhyPVC() {
  return (
    <div className='contenido-why-pvc'>
      <h1 className='section-title mb-4'>Nuestra decisión es técnica,<br/><b>estratégica y sustentable</b></h1>
      <Separador color="--color-3" width="100px" />
      <div className='section-subtitle mt-5'>
        En Nörlux no elegimos el PVC por moda ni por costo: lo elegimos porque <b>funciona mejor</b>. Porque permite fabricar ventanas <b>que acompañan</b> la vida de las personas con menos <b>mantenimiento</b>, mayor <b>eficiencia</b> y un diseño que se integra con <b>armonía</b> a cada proyecto.
      </div>
    </div>
  )
}
