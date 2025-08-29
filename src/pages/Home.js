import React from 'react'
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

export default function Home() {
  return (
    <>
      <Header />
     {/*  <MainBanner /> */}
      <MainBannerAlt />
      <Contacto />
      <Proveedores />
      <ServiceProcess />
      <Beneficios />
      <Proyectos />
      <Clientes />
      <Footer />
    </>
  )
}
