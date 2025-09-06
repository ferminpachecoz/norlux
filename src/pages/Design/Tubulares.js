import React from 'react'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Productos from "../../components/Productos"
import HeroSection from "../../components/WhyPVC/HeroSection"
import Separador from '../../components/Separador'
import ImageBg from '../Pisos/ImageBg'
import CardsCarousel from '../Pisos/CardsCarousel'
import IconText from '../Pisos/IconText'

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
  let array = [
    {
      image: "ignifugo.png",
      text: "Ignífugo y autoextinguible."
    },
    {
      image: "durabilidad.png",
      text: "Larga durabilidad."
    },
    {
      image: "impacto.png",
      text: "No se corroe, pudre o astilla."
    },
    {
      image: "aislacion-termica.png",
      text: "Aislante térmico."
    },
    {
      image: "electrico.png",
      text: "Aislante eléctrico"
    },
    {
      image: "termitas.png",
      text: "No lo afectan hongos ni termitas."
    },
    {
      image: "mantenimiento.png",
      text: "Cero mantenimiento."
    },
    {
      image: "solar.png",
      text: "Protección solar."
    },
  ]
  return (
    <>
      <Header />
      <HeroSection title="Tubulares" subtitle="Lorem ipsum dolor sit amet" image="/houses/house-banner.jpg" />
      <Productos padding="0px">
        <div className='row' style={{padding: "100px"}}>
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
        <div style={{padding: "100px"}}>
          <IconText array={array} gutter="5" cols="4" imgSize="100px" />
        </div>
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
