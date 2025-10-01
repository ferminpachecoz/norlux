import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from "../components/WhyPVC/HeroSection"
import ListaRazones from '../components/WhyPVC/ListaRazones'
import ContenidoWhyPVC from '../components/WhyPVC/ContenidoWhyPVC'
import Separador from '../components/Separador'
import { Helmet } from 'react-helmet'

export default function WhyPVC() {
  return (
    <>
    <Helmet>
      <meta
        name="description"
        content="Compará PVC vs. aluminio: mayor eficiencia térmica y acústica, baja manutención y hermeticidad superior para ahorrar energía y ganar confort."
      />
      <title>¿Por qué PVC? Aislamiento, durabilidad y confort</title>
    </Helmet>
      <Header />
      <HeroSection 
        image="/images/_MG_0078.webp" 
        title="¿Por qué elegimos <br/> <b>el PVC?</b>"
        subtitle="En Nörlux decidimos especializarnos exclusivamente  aberturas de PVC porque creemos que la excelencia se logra con foco."
      />
      <ListaRazones />
      <ContenidoWhyPVC />
      <div className='section-padding' style={{backgroundColor: "var(--color-3)"}}>
        <h1 className='section-title mb-4' style={{color: "white"}} >PVC no es una opción más. <br/>
          <b style={{color: "var(--color-2)"}}>Es la mejor opción.</b>
        </h1>
        <Separador color="--color-2" width="100px" />
        <p className='section-subtitle mt-5' style={{color: "var(--color-2)", fontSize: "25px"}}>Y por eso, <b>Nörlux</b>, es la única opción.</p>
      </div>
      <div className='estadisticas section-padding'>
        <div className='row justify-content-evenly align-items-center'>
          <span className='col-12 col-lg'>
            <p style={{fontSize: "40px", color: "var(--color-3)", textAlign: "center"}}>100%</p>
            <p style={{textAlign: "center"}}>PVC Especializado</p>
          </span>
          <span className='col-12 col-lg'>
            <p style={{fontSize: "40px", color: "var(--color-3)", textAlign: "center"}}>0</p>
            <p style={{textAlign: "center"}}>Mantenimiento</p>
          </span>
          <span className='col-12 col-lg'>
            <p style={{fontSize: "40px", color: "var(--color-3)", textAlign: "center"}}>50+</p>
            <p style={{textAlign: "center"}}>Años de vida útil</p>
          </span>
          <span className='col-12 col-lg'>
            <p style={{fontSize: "40px", color: "var(--color-3)", textAlign: "center"}}>∞</p>
            <p style={{textAlign: "center"}}>Reciclable</p>
          </span>
        </div>
      </div>
      <Footer />
    </>
  )
}
