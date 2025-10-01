import React from 'react';
import Header from '../../components/Header';
import HeroSection from '../../components/WhyPVC/HeroSection';
import Productos from '../../components/Productos';
import Footer from '../../components/Footer';
import Separador from '../../components/Separador';
import CarruselCards from '../../components/CarruselCards';
import CarruselOneImage from '../../components/CarruselOneImage';
import SmallSectionBanner from '../../components/SmallSectionBanner';
import CardsCarousel from '../Pisos/CardsCarousel';
import ImageBg from '../Pisos/ImageBg';
import { Helmet } from 'react-helmet';

export default function WallPanelExterior() {
  const array=[
    {
      icon: "/LineaJumbo/icons/interior-design.webp",
      title: "Diseño arquitectónico premium",
      description: "Estética contemporánea que eleva el valor del proyecto."
    },
    {
      icon: "/Tubulares/icons/wood.webp",
      title: "Acabados imitación madera",
      description: "Calidez natural con la resistencia del PVC."
    },
    {
      icon: "/LineaJumbo/icons/layer.webp",
      title: "Integración arquitectónica",
      description: "Múltiples opciones de diseño para fachadas modernas."
    },
    {
      icon: "/pisosInterior/icons/water-resistant.webp",
      title: "Resistencia a la intemperie",
      description: "Soporta sol, lluvia y cambios de temperatura."
    },
    {
      icon: "/Revestimiento/icons/reliability.webp",
      title: "Durabilidad y bajo mantenimiento",
      description: "No requiere barnices ni pinturas"
    },
    {
      icon: "/LineaEfficient/icons/sustentabilidad.webp",
      title: "Sustentabilidad",
      description: "Materiales reciclables y eco-friendly."
    },
  ]

  const images=["/WallPanelExterior/image-banner-4.webp", "/WallPanelExterior/image-banner-5.webp", "/WallPanelExterior/image-banner-6.webp"]

  const ITEMS = [
    {
      image: "/WallPanelExterior/colores/TP_WP_TURNEROAK.webp",
      title: "Turner Oak",
    },
    {
      image: "/WallPanelExterior/colores/TP_WP_NOGAL.webp",
      title: "Nogal",
    },
    {
      image: "/WallPanelExterior/colores/TP_WP_TOFFEE.webp",
      title: "Toffee",
    },
    {
      image: "/WallPanelExterior/colores/TP_WP_MATTEX KITAMI.webp",
      title: "Mattex Kitami",
    },
    {
      image: "/WallPanelExterior/colores/TP_WP_JURA PINE.webp",
      title: "Jura Pine",
    },
    {
      image: "/WallPanelExterior/colores/TP_WP_GOLDENOAK.webp",
      title: "Golden Oak",
    },
    {
      image: "/WallPanelExterior/colores/TP_WP_CONCRETE_A.webp",
      title: "Concrete",
    },
    {
      image: "/WallPanelExterior/colores/TP_WP_ALPINE.webp",
      title: "Alpine",
    },
    // ...agregá más si querés
  ];

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Revestimientos de PVC con protección UV y bajo mantenimiento. Actualizá tu fachada con estética moderna y mejor desempeño térmico."
        />
        <title>Wall Panel Exterior: fachadas en PVC de larga vida</title>
      </Helmet>
      <Header />
      <HeroSection 
        title="Wall Panel Exterior" 
        subtitle="La solución innovadora de PVC que combina estética contemporánea y máxima durabilidad para fachadas." 
        image="/WallPanelExterior/image-banner-1.webp" 
      />
      <Productos padding="0px">
        <div className='section-padding'>
          <h2><b>Diseño premium</b> con resistencia total</h2>
          <Separador width="100px" color="--color-3" />
          <p className='mb-4'>
            Los <b>Wallpanel Exterior de PVC Muchtek</b>, comercializados por <b>Nörlux</b>, son una opción de <b>revestimiento moderno para fachadas</b> que aporta carácter, elegancia y una terminación arquitectónica de vanguardia. 
          </p>
          <img 
            src="/WallPanelExterior/image-banner-2.webp" 
            alt="Diseño wall panel de exterior" 
            style={{borderRadius: "10px"}}
            className='mb-4'
          />
          <p>
            Gracias a sus <b>acabados en imitación madera y texturas contemporáneas</b>, permiten integrar la <b>calidez natural con el diseño minimalista</b>, realzando el valor estético de cualquier proyecto. Además, al ser de PVC, ofrecen una <b>resistencia superior a la intemperie</b>, con <b>mínimo mantenimiento y larga vida útil</b>.
          </p>
          <p>
            Su <b>integración arquitectónica</b> los hace ideales para <b>viviendas familiares, desarrollos residenciales y locales comerciales</b>, brindando una <b>amplitud de posibilidades de diseño moderno</b> sin los inconvenientes de materiales tradicionales.
          </p>
        </div>
        <CarruselCards array={array} />
        <div className='section-padding'>
          <CarruselOneImage images={images} />
        </div>
        <SmallSectionBanner title="¿Querés una fachada moderna, resistente y sin mantenimiento?" cta="Solicitá tu presupuesto" />
        <ImageBg image="/WallPanelExterior/image-banner-3.webp">
          <h2>Posibilidad de laminarlos</h2>
          <Separador color="--color-2" width="100px" />
          <p>en la amplia gama de colores y texturas de SKAI Foils.</p>
          <CardsCarousel items={ITEMS} colorTitle="--color-4" />
        </ImageBg>
      </Productos>
      <Footer />
    </>
  )
}
