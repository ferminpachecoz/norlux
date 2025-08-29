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
      <HeroSection image="/houses/house-banner.jpg" title="Novedades" subtitle="Descubrí todas las novedades del mundo del PVC" />
      <Productos padding="100px 150px">
        <h2>Novedades</h2>
        <Separador color="--color-3" width="100px" />
        <div className='row mb-3'>
          <ImageCard 
            width="12" 
            image="/houses/house-banner.jpg" 
            title="Lorem ipsum dolor sit amet" 
            category="lorem ipsum"
          />
        </div>
        <div className='row mb-3 g-3'>
          <ImageCard 
            width="6" 
            image="/houses/house-banner.jpg" 
            title="Lorem ipsum dolor sit amet" 
            category="lorem ipsum"
          />
          <ImageCard 
            width="6" 
            image="/houses/house-banner.jpg" 
            title="Lorem ipsum dolor sit amet" 
            category="lorem ipsum"
          />
        </div>
        <div className='row mb-3 g-3'>
          <ImageCard 
            width="8" 
            image="/houses/house-banner.jpg" 
            title="Lorem ipsum dolor sit amet" 
            category="lorem ipsum"
          />
          <ImageCard 
            width="4" 
            image="/houses/house-banner.jpg" 
            title="Lorem ipsum dolor sit amet" 
            category="lorem ipsum"
          />
        </div>
        <div className='row mb-3 g-3'>
          <ImageCard 
            width="4" 
            image="/houses/house-banner.jpg" 
            title="Lorem ipsum dolor sit amet" 
            category="lorem ipsum"
          />
          <ImageCard 
            width="8" 
            image="/houses/house-banner.jpg" 
            title="Lorem ipsum dolor sit amet" 
            category="lorem ipsum"
          />
        </div>
      </Productos>
      <Footer />
    </>
  )
}
