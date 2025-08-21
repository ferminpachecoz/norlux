import React from 'react'
import "./Separador.scss"

export default function Separador({color, width}) {
  return (
    <div className='separator' style={{backgroundColor: `var(${color})`, width: width}}>

    </div>
  )
}
