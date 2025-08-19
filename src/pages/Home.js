import React from 'react'
import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import Beneficios from '../components/Beneficios';
import Proyectos from '../components/Proyectos';
import Clientes from '../components/Clientes';
import Contacto from '../components/Contacto';

export default function Home() {
  return (
    <>
      <Header />
      <MainBanner />
      <Beneficios />
      <Proyectos />
      <Clientes />
      <Contacto />
    </>
  )
}
