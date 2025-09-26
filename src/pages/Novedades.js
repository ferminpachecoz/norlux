import React from 'react';
import Header from '../components/Header';
import HeroSection from "../components/WhyPVC/HeroSection";
import Productos from "../components/Productos";
import Separador from '../components/Separador';
import ImageCard from '../components/Novedades/ImageCard';
import Footer from '../components/Footer';

export default function Novedades() {
  return (
    <>
      <Header />
      <HeroSection 
        image="/images/_MG_0197.webp" 
        title="Novedades" 
        subtitle="Descubrí todas las novedades del mundo del PVC" 
      />
      <Productos padding="0px">
        <div className='section-padding'>
          <h2>Novedades</h2>
          <Separador color="--color-3" width="100px" />
          <div className='row mb-3'>
            <ImageCard 
              width="12" 
              image="/images/IMG-20250919-WA0012.webp" 
              title="PVC vs. Aluminio" 
              category="Aberturas"
              link="/novedades/pvc-vs-aluminio"
            />
          </div>
          <div className='row mb-3 g-3'>
            <ImageCard 
              width="6" 
              image="/images/_MG_9837.webp" 
              title="Tipos de Vidrio en Argentina" 
              category="lorem ipsum"
              link="/novedades/tipos-de-vidrio"
            />
            <ImageCard 
              width="6" 
              image="/Decks/deck-foto-03.webp" 
              title="Nuevos Decks de PVC" 
              category="lorem ipsum"
              link="/novedades/nuevos-decks-de-pvc"
            />
          </div>
          <div className='row mb-3 g-3'>
            <ImageCard 
              width="8" 
              image="/Casas - Clientes Satisfechos/Casa Canning/2438.webp" 
              title="Importancia de montaje en obra de calidad" 
              category="Obra"
              link="/novedades/la-importancia-de-un-montaje-en-obra-de-calidad"
            />
            <ImageCard 
              width="4" 
              image="/LineaEvolution/productos/LE_2G_GG_JBLACK.webp" 
              title="Evolution: La Nueva Generación" 
              category="PVC"
              link="/novedades/evolution-la-nueva-generacion-de-aberturas-pvc"
            />
          </div>
          <div className='row mb-3 g-3'>
            <ImageCard 
              width="4" 
              image="/images/_MG_0235.webp" 
              title="Aislacion térmica en ventanas de PVC" 
              category="lorem ipsum"
              link="/novedades/aislacion-termica-en-ventanas-de-pvc"
            />
            <ImageCard 
              width="8" 
              image="/images/IMG-20250919-WA0009.webp" 
              title="Aislacion acústica en ventanas de PVC" 
              category="lorem ipsum"
              link="/novedades/aislacion-acustica-en-ventanas-de-pvc"
            />
          </div>
        </div>
      </Productos>
      <Footer />
    </>
  )
}
