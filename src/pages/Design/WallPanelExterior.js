import React from 'react';
import Header from '../../components/Header';
import HeroSection from '../../components/WhyPVC/HeroSection';
import Productos from '../../components/Productos';
import Footer from '../../components/Footer';

export default function WallPanelExterior() {
  return (
    <>
      <Header />
      <HeroSection title="Wall Panel Exterior" subtitle="Lorem ipsum dolor sit amet" image="/houses/house-banner.jpg" />
      <Productos padding="0px">
        
      </Productos>
      <Footer />
    </>
  )
}
