import React, { useState, useMemo } from 'react';
import Header from "../components/Header"
import Footer from '../components/Footer'
import HeroFAQ from '../components/FAQs/HeroFAQ'
import Filtros from '../components/FAQs/Filtros'
import Acordion from '../components/FAQs/Acordion'
import faqs from '../FAQs'
import { Helmet } from 'react-helmet';

export default function FAQs() {
  const [selected, setSelected] = useState('all');

  const keys = useMemo(() => Object.keys(faqs), []);
  const toRender = selected === 'all' ? keys : [selected];

  // (Opcional) mapa de íconos por categoría
  const icons = {
    servicio: 'bi bi-people',
    aberturas: 'bi bi-building',
    obra: 'bi bi-tools',
    generales: 'bi bi-question-circle'
  };
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Respondemos las dudas clave sobre medidas, tiempos de entrega, elección de vidrios, mantenimiento y nuestro proceso de instalación profesional."
        />
        <title>FAQs Nörlux: instalación, vidrio, plazos y garantía</title>
      </Helmet>
      <Header />
      <HeroFAQ />
      <Filtros selected={selected} onSelect={setSelected} icons={icons} />
      {toRender.map((key) => (
        <Acordion
          key={key}
          accordionId={`accordion-${key}`}
          icon={icons[key] ?? 'bi bi-list'}
          title={faqs[key].name}
          array={faqs[key].array}
        />
      ))}
      <Footer />
    </>
  )
}
