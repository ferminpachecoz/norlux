import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from "../components/WhyPVC/HeroSection"
import ListaRazones from '../components/WhyPVC/ListaRazones'
import ContenidoWhyPVC from '../components/WhyPVC/ContenidoWhyPVC'
import Separador from '../components/Separador'

export default function WhyPVC() {
  return (
    <>
      <Header />
      <HeroSection 
        image="/houses/house-banner.jpg" 
        title="¿Por qué elegimos <br/> <b>el PVC?</b>"
        subtitle="En Nörlux decidimos especializarnos exclusivamente  aberturas de PVC porque creemos que la excelencia se logra con foco."
      />
      <ListaRazones />
      <ContenidoWhyPVC />
      <div style={{padding: "100px", backgroundColor: "var(--color-3)"}}>
        <h1 className='section-title mb-4' style={{color: "white"}} >PVC no es una opción más. <br/>
          <b style={{color: "var(--color-2)"}}>Es la mejor opción.</b>
        </h1>
        <Separador color="--color-2" width="100px" />
        <p className='section-subtitle mt-5' style={{color: "var(--color-2)", fontSize: "18px"}}>Y por eso, <b>Nörlux</b>, es la única opción.</p>
      </div>
      <div className='estadisticas' style={{padding: "100px"}}>
        <div className='row justify-content-evenly align-items-center'>
          <span className='col'>
            <p style={{fontSize: "40px", color: "var(--color-3)", textAlign: "center"}}>100%</p>
            <p style={{textAlign: "center"}}>PVC Especializado</p>
          </span>
          <span className='col'>
            <p style={{fontSize: "40px", color: "var(--color-3)", textAlign: "center"}}>0</p>
            <p style={{textAlign: "center"}}>Mantenimiento</p>
          </span>
          <span className='col'>
            <p style={{fontSize: "40px", color: "var(--color-3)", textAlign: "center"}}>50+</p>
            <p style={{textAlign: "center"}}>Años de vida útil</p>
          </span>
          <span className='col'>
            <p style={{fontSize: "40px", color: "var(--color-3)", textAlign: "center"}}>∞</p>
            <p style={{textAlign: "center"}}>Reciclable</p>
          </span>
        </div>
      </div>
      <Footer />
    </>
  )
}
