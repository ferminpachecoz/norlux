import React, { useState } from 'react'
import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import Beneficios from '../components/Beneficios';
import Proyectos from '../components/Proyectos';
import Clientes from '../components/Clientes';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';
import ServiceProcess from '../components/ServiceProcess';
import MainBannerAlt from '../components/MainBannerAlt';
import Proveedores from '../components/Proveedores';
import ClientesFinal from '../components/ClientesFinal';
import "../styles/Home.scss"
import CarruselOneImage from '../components/CarruselOneImage';

export default function Home() {
  const [images, setImages] = useState([])
  const [display, setDisplay] = useState(false)
  const handleClick=()=>{
    setDisplay(!display)
  }
  const handleImages = (imagesArray) =>{
    setImages(imagesArray)
  }
  return (
    <>
      <Header />
     {/*  <MainBanner /> */}
      <MainBannerAlt />
      <Contacto />
      <Proveedores />
      <ServiceProcess />
      <Beneficios />
      <Proyectos handleClick={handleClick} handleImages={handleImages} />
      <div className={`carrusel-clientes-overlay ${display?"d-flex":"d-none"}`}>
        <div className='contenedor-carrusel-clientes'>
          <CarruselOneImage images={images} />
        </div>
        <span className='close-icon-container' onClick={handleClick}>
          <i className="bi bi-x-lg"></i>
        </span>
      </div> 
      {/* <Clientes />
      <ClientesFinal /> */}
      <Footer />
    </>
  )
}
