import React from 'react'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Productos from "../../components/Productos"
import HeroSection from "../../components/WhyPVC/HeroSection"
import Separador from '../../components/Separador'
import CarruselCards from '../../components/CarruselCards'
import CarruselOneImage from '../../components/CarruselOneImage'
import SmallSectionBanner from '../../components/SmallSectionBanner'
import ImageBg from '../Pisos/ImageBg'
import CardsCarousel from '../Pisos/CardsCarousel'

export default function Revestimiento() {
  const array=[
    {
      icon: "/LineaJumbo/icons/interior-design.webp",
      title: "Estética prolija y moderna",
      description: "Ideal para ambientes residenciales y comerciales."
    },
    {
      icon: "/pisosInterior/icons/water-resistant.webp",
      title: "Resistencia a la humedad",
      description: "Perfectos para cocinas y baños."
    },
    {
      icon: "/Revestimiento/icons/reliability.webp",
      title: "Durabilidad garantizada",
      description: "No se deforma, no se descascara, no pierde color."
    },
    {
      icon: "/pisosInterior/icons/easy-installation.webp",
      title: "Fácil instalación",
      description: "Sistema práctico y seguro."
    },
    {
      icon: "/pisosInterior/icons/mechanic.webp",
      title: "Mantenimiento mínimo",
      description: "Limpieza rápida sin tratamientos adicionales."
    },
    {
      icon: "/LineaEfficient/icons/versatilidad.webp",
      title: "Opciones de diseño",
      description: "En blanco liso o acabados imitación madera."
    },
  ]
  const images=["/Revestimiento/image-banner-3.webp", "/Revestimiento/image-banner-4.webp", "/Revestimiento/image-banner-5.webp"]
  const ITEMS=[
    {
      image: "/Revestimiento/productos/TP_CR_BLANCO.webp",
      title: "blanco"
    },
    {
      image: "/Revestimiento/productos/TP_CR_CONCRETE C.webp",
      title: "concrete c"
    },
    {
      image: "/Revestimiento/productos/TP_CR_CONCRETE WHITE.webp",
      title: "concrete white"
    },
    {
      image: "/Revestimiento/productos/TP_CR_EUCALYPTUS.webp",
      title: "eucalyptus"
    },
    {
      image: "/Revestimiento/productos/TP_CR_OAK.webp",
      title: "oak"
    },
    {
      image: "/Revestimiento/productos/TP_CR_PL_I_POPLAR.webp",
      title: "poplar"
    },
    {
      image: "/Revestimiento/productos/TP_CR_TEAK.webp",
      title: "teak"
    },
    {
      image: "/Revestimiento/productos/TP_CR_PL_I_WALNUT.webp",
      title: "walnut"
    }
  ]
  return (
    <>
      <Header />
      <HeroSection 
        title="Revestimientos"
        subtitle="Una solución práctica y moderna para interiores, resistente a la humedad y de larga durabilidad."
        image="/Revestimiento/image-banner.webp"
      />
      <Productos padding="0px">
        <div className='section-padding'>
          <h2><b>Estética limpia</b> y sin mantenimiento</h2>
          <Separador width="100px" color="--color-3" />
          <p>
            Los <b>Cielorrasos de PVC Muchtek</b>, instalados por <b>Nörlux</b>, ofrecen un acabado prolijo y contemporáneo para interiores, aportando <b>estética moderna, fácil instalación y bajo mantenimiento</b>.
          </p>
          <img 
            src="/Revestimiento/image-banner-2.webp" 
            alt="Casa con revestimiento de PVC"
            style={{borderRadius: "10px"}}
            className='mb-4'
          />
          <p>
            A diferencia de los cielorrasos tradicionales, el PVC es <b>resistente a la humedad y al desgaste</b>, lo que lo convierte en la opción ideal para <b>cocinas, baños, livings y oficinas</b>. Además, su superficie lisa facilita la limpieza y conserva su aspecto impecable durante años.
          </p>
          <p>
            Gracias a la variedad de <b>diseños en blanco y texturas imitación madera</b>, los cielorrasos de PVC se adaptan a distintos estilos arquitectónicos, integrándose perfectamente con paredes y revestimientos modernos.
          </p>
        </div>
        <CarruselCards array={array} />
        <div className='section-padding'>
          <CarruselOneImage images={images} />
        </div>
        <SmallSectionBanner title="¿Querés renovar tus interiores con un cielorraso moderno y duradero?" cta="Solicitá tu presupuesto" />
        <ImageBg image="/zocalos/image-banner.webp">
          <h2>Gran variedad de colores y texturas</h2>
          <Separador color="--color-2" width="100px" />
          <p>Para elegir el diseño que más se adecue a tus ambientes:</p>
          <CardsCarousel items={ITEMS} colorTitle="--color-3" />
        </ImageBg>
        <div className='section-padding'>
          <img src="/Revestimiento/info-tecnica.webp" alt="Ficha de informacion tecnica" />
        </div>
      </Productos>
      <Footer />
    </>
  )
}
