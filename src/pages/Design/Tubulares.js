import React from 'react'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Productos from "../../components/Productos"
import HeroSection from "../../components/WhyPVC/HeroSection"
import Separador from '../../components/Separador'
import ImageBg from '../Pisos/ImageBg'
import CardsCarousel from '../Pisos/CardsCarousel'
import IconText from '../Pisos/IconText'
import CarruselCards from '../../components/CarruselCards'
import CarruselOneImage from '../../components/CarruselOneImage'
import SmallSectionBanner from '../../components/SmallSectionBanner'

export default function Tubulares() {
  const ITEMS = [
    {
      image: "/tubulares/TOFFEE_REC_TP.jpg",
      title: "Toffee",
    },
    {
      image: "/tubulares/TB_SR_NOGAL.jpg",
      title: "Nogal",
    },
    {
      image: "/tubulares/LENGA_TP.jpg",
      title: "Lenga",
    },
    {
      image: "/tubulares/JET BLACK_TP.jpg",
      title: "Jet Black",
    },
    {
      image: "/tubulares/GREYOAK_TP.jpg",
      title: "Greyoak",
    },
    {
      image: "/tubulares/GOLDEN OAK_REC_TP.jpg",
      title: "Golden Oak",
    },
    {
      image: "/tubulares/GOLDBRONZE_TP.jpg",
      title: "Gold Bronze",
    },
    {
      image: "/tubulares/ALPINE_REC_TP.jpg",
      title: "Alpine",
    },
    // ...agregá más si querés
  ];
  const array=[
    {
      icon: "/LineaJumbo/icons/terrace.png",
      title: "Diseño arquitectónico moderno",
      description: "Aporta carácter y sofisticación a las fachadas."
    },
    {
      icon: "/Tubulares/icons/wood.png",
      title: "Acabados imitación madera",
      description: "Estética natural sin los problemas del material original."
    },
    {
      icon: "/LineaJumbo/icons/interior-design.png",
      title: "Integración arquitectónica",
      description: "Se adaptan a múltiples estilos y amplían las posibilidades de diseño."
    },
    {
      icon: "/pisosInterior/icons/water-resistant.png",
      title: "Resistencia a la intemperie",
      description: "Soporta lluvia, sol y cambios de temperatura."
    },
    {
      icon: "/LineaEfficient/icons/mantenimiento.png",
      title: "Mínimo mantenimiento",
      description: "No requiere barnices ni pinturas."
    },
    {
      icon: "/Revestimiento/icons/reliability.png",
      title: "Durabilidad superior",
      description: "No se pudre, no se astilla, no pierde color fácilmente."
    },
    {
      icon: "/LineaEfficient/icons/sustentabilidad.png",
      title: "Sustentabilidad",
      description: "Fabricados con materiales reciclables."
    },
  ]
  const images = ["/Tubulares/image-banner-3.JPEG", "/Tubulares/image-banner-4.jpg", "/Tubulares/image-banner-5.jpg"]
  return (
    <>
      <Header />
      <HeroSection 
        title="Tubulares" 
        subtitle="La solución ideal para crear revestimientos exteriores de diseño premium con la calidez de la madera y la resistencia del PVC." 
        image="/Tubulares/image-banner-1.jpg" 
      />
      <Productos padding="0px">
        <div className='section-padding'>
          <h2><b>Fachadas modernas</b> con estética natural</h2>
          <Separador width="100px" color="--color-3" />
          <p>
            Los <b>Tubulares de PVC Muchtek</b>, comercializados por <b>Nörlux</b>, están pensados para aportar un <b>diseño contemporáneo y elegante</b> a las fachadas modernas. Gracias a sus acabados en <b>imitación madera</b>, logran transmitir la <b>calidez y estética natural</b> de este material, pero con todas las ventajas del PVC: <b>durabilidad, resistencia a la intemperie y bajo mantenimiento.</b>
          </p>
          <img 
            src="/Tubulares/image-banner-2.jpeg" 
            alt="Foto de tubulares en una casa" 
            style={{borderRadius: "10px"}}
            className='mb-4'
          />
          <p>
            Además, se <b>integran de manera armónica con la arquitectura exterior</b>, lo que permite una <b>amplitud de posibilidades en diseños modernos</b>, adaptándose tanto a viviendas familiares como a proyectos comerciales y de vanguardia.
          </p>
        </div>
        <CarruselCards array={array} />
        <div className='section-padding'>
          <CarruselOneImage images={images} />
        </div>
        <SmallSectionBanner title="¿Querés darle a tu proyecto una fachada moderna y elegante?" cta="Solicitá tu presupuesto" />
        <div className='row section-padding'>
          <div className='col-7'>
            <h2>Parasoles - <b>Pérgolas</b> - Quiebravistas - <b>Louvers</b></h2>
            <Separador color="--color-3" width="100px" />
            <p>Los <b>Tubulares Muchtek</b> son ideales para ambientar espacios que requieran <b>control solar</b> y <b>renovación de aire</b>.</p>
            <p>Para viviendas, edificios, aeropuertos, centros comerciales, hoteles, construcciones educativas, parques, etc. Son de <b>fácil instalación</b> y poseen gran versatilidad de diseños innovadores que requieren <b>mínimo mantenimiento</b>.</p>
            <p>Son ideales para ambientar espacios que necesiten control solar y renovación de aire. Permiten aportar diseño a los proyectos arquitectónicos, utilizándolos como revestimientos de paredes, cielorrasos decorativos, divisorios de balcones o ambientes interiores, pantallas, portones batientes, cercas, entre otros. Tienen la posibilidad de foliarlos en la <b>amplia gama de colores</b> y texturas de SKAI Foils.</p>
          </div>
          <div className='col-5'>
            <img src="/Tubulares/un-tubulares-02.jpg" alt="un-tubulares-02" />
          </div>
        </div>
        <ImageBg image="/houses/sample-02.jpg">
          <h2>Posibilidad de laminarlos</h2>
          <Separador color="--color-2" width="100px" />
          <p>en la amplia gama de colores y texturas de SKAI Foils.</p>
          <CardsCarousel items={ITEMS} colorTitle="--color-4" />
        </ImageBg>
        <div className='row' style={{padding: "100px"}}>
          <div className='col-lg-5'>
            <h2>Medidas</h2>
            <Separador color="--color-3" width="100px" />
            <img src="/Tubulares/tubular-38x38.png" alt="tubular-38x38" />
            <img src="/Tubulares/tubular-76x38.png" alt="tubular-76x38" />
            <h3>Ideales para ambientar espacios que requieran <b>control solar</b> y <b>renovación de aire</b>.</h3>
            <ul>
              <li>Celosías</li>
              <li>Divisiones</li>
              <li>Fachadas</li>
              <li>Pérgolas</li>
              <li>Revestimientos</li>
              <li>Cerramientos</li>
            </ul>
          </div>
          <div className='col-lg-7'>
            <img src="/Tubulares/medidas-tubulares-tipologias-01.png" alt="medidas-tubulares-tipologias-01" />
            <h3 className='my-4'>El sistema se complementa con <b>tapas de PVC</b> disponibles para ambos tubulares.</h3>
            <img src="/Tubulares/medidas-tubulares-tipologias-tapas.png" alt="medidas-tubulares-tipologias-tapas" />

          </div>
        </div>
        <div style={{padding: "100px 150px"}}>
          <h2 style={{textAlign: "center"}}>Próximamente</h2>
          <div style={{margin:"10px auto", width:"100px", height:"4px", backgroundColor:"var(--color-3)"}}>

          </div>
          <img src="/Tubulares/medidas-tubulares-tipologias-refuerzos.png" alt="medidas-tubulares-tipologias-refuerzos" />
        </div>
        <div style={{backgroundColor: "var(--color-1)"}}>
          <div className='row' style={{padding: "100px 150px 50px 150px"}}>
            <div className='col-lg-2'>
              <img src="/Tubulares/tubular-render.png" alt="tubular-render" />
            </div>
            <div className='col-lg-10 px-5'>
              <h2>Contamos con una variada <b>gama de accesorios</b> y terminaciones en PVC para brindar soluciones a <b>tus proyectos</b>.</h2>
            </div>  
          </div>
          <div className='row' style={{padding: "0px 200px 100px 200px"}}>
            <img src="/Tubulares/medidas-tubulares-tipologias-complementarios.png" alt="medidas-tubulares-tipologias-complementarios" />
          </div>
        </div>
        <div style={{padding: "100px"}}>
          <h2 className='mt-4'>Descarga nuestros <b>catálogos digitales</b></h2>
          <Separador width="100px" color="--color-3" />
          <div className='row g-4 catalogo-section'>
            <div className='col'>
              <p>Brochure institucional Muchtek</p>
              <span className='d-flex align-items-center'>
                <i className="bi bi-filetype-pdf"></i>
                <a href="#">Descargar</a>
              </span>
            </div>
            <div className='col'>
              <p>Flyer ADN Muchtek</p>
              <span className='d-flex align-items-center'>
                <i className="bi bi-filetype-pdf"></i>
                <a href="#">Descargar</a>
              </span>
            </div>
            <div className='col'>
              <p>Díptico laminados Muchtek</p>
              <span className='d-flex align-items-center'>
                <i className="bi bi-filetype-pdf"></i>
                <a href="#">Descargar</a>
              </span>
            </div>
            <div className='col'>
              <p>Brochure In&Out Design Muchtek</p>
              <span className='d-flex align-items-center'>
                <i className="bi bi-filetype-pdf"></i>
                <a href="#">Descargar</a>
              </span>
            </div>
          </div>
        </div>
      </Productos>
      <Footer />
    </>
  )
}
