import React from 'react'
import HeroSection from '../../components/WhyPVC/HeroSection'
import PVCvsAluminio from './PVCvsAluminio'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Productos from '../../components/Productos'
import Separador from '../../components/Separador'
import SmallSectionBanner from '../../components/SmallSectionBanner'

export default function Noticia1() {
  return (
    <>
      <Header />
      <HeroSection 
        image="/houses/house-banner.webp" 
        title="PVC vs Aluminio"
        subtitle="Lorem ipsum dolor sit amet"
      />
      <Productos padding="0px">
        <div className='section-padding'>
          <h2><b>Nuestra opinión</b> profesional</h2>
          <Separador width="100px" color="--color-3" />
          <p>A la hora de elegir aberturas, el material es uno de los factores más importantes. En Argentina, los más utilizados son el <b>PVC</b> y el <b>aluminio</b>, pero sus prestaciones no son iguales. Desde Nörlux queremos ayudarte a entender las diferencias para que tu decisión sea informada y a largo plazo.</p>
        </div>
        <PVCvsAluminio />
        <div className='section-padding'>
          <h2>¿<b>Por qué elegir PVC</b> Muchtek con Nörlux?</h2>
          <Separador width="100px" color="--color-3" />
          <p>En Nörlux trabajamos únicamente con perfiles de <b>PVC Muchtek</b>, porque estamos convencidos de que es el material que mejor responde a las exigencias actuales: eficiencia energética, confort acústico, durabilidad, diseño y sustentabilidad.</p>
        </div>
        <SmallSectionBanner title="¿Querés dar el siguiente paso?" cta="Mas información" />
      </Productos>
      <Footer />
    </>
  )
}
