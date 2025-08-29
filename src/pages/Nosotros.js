import React from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import "./Nosotros.scss";

export default function Nosotros() {
  let array = [
    {
      icon: "bi bi-heart",
      title: "Una marca confiable",
      description: "Construimos relaciones duraderas basadas en la confianza y el cumplimiento."
    },
    {
      icon: "bi bi-check2-circle",
      title: "Una experiencia sin fricciones",
      description: "Procesos claros y comunicación transparente en cada etapa del proyecto."
    },
    {
      icon: "bi bi-shield-check",
      title: "Una empresa que cumple",
      description: "Comprometidos con cada obra, cumplimos lo pactado y seguimos presentes después de la entrega."
    },
  ]
  return (
    <>
      <Header />
      <div className='nosotros'>
        <div className='banner'>
          <h1>Nosotros</h1>
          <div className='highlight'></div>
          <p className='subtitle'>En Nörlux creemos que construir es mucho más que levantar paredes. Es <b>crear espacios</b> donde las personas van a vivir sus momentos <b>más importantes</b>.</p>
        </div>
        <div className='content'>
          <p>Por eso, acompañamos cada proyecto con el <b>profesionalismo</b>, la <b>responsabilidad</b> y la <b>empatía</b> que hacen falta para dar tranquilidad en cada paso.</p>
          <p className='resaltado'>
            <b>Nuestra historia</b> nace tras más de 10 años de experiencia en el rubro de las aberturas. Aprendimos lo que funciona, lo que no, y lo que los clientes realmente necesitan: cumplimiento, comunicación clara y soluciones que simplifican el proceso en lugar de sumar problemas.
          </p>
          <img src="/houses/house-banner.jpg" alt="House with natural light" />
          <p>
            Somos una empresa joven, pero con la madurez que da <b>la experiencia</b>. Nos apoyamos en <b>tecnología</b>, <b>procesos eficientes</b> y <b>herramientas</b> de gestión modernas para ofrecer un servicio ordenado, preciso y predecible. Porque entendemos que la <b>confianza</b> se construye con hechos, no con promesas.
          </p>
          <img src="/houses/sample-02.jpg" alt="Building with natural light" />
          <p>En un entorno donde muchas veces reinan los retrasos, los sobrecostos y la desorganización, decidimos ser distintos. Nos comprometemos con <b>cada obra</b>, <b>cumplimos</b> lo pactado y seguimos <b>presentes</b> incluso después de la entrega.</p>
        </div>
        <div className='seccion'>
          <p className='title'><b>Nörlux</b> es eso:</p>
          <div className='highlight mt-3 mb-5'></div>
          <div className='row g-5'>
            {
              array.map((item, index)=>(
              <div className='col' key={index}>
                <div className='card'>
                  <span className='icon-container'>
                    <i className={item.icon}></i>
                  </span>
                  <p className='title'>{item.title}</p>
                  <p className='description'>{item.description}</p>
                </div>
              </div>
              ))
            }
          </div>
        </div>
        <div className='experience'>
          <div className='row'>
            <div className='texto col-lg-6'>
              <h2>Más de 10 años <br/><b>de experiencia</b></h2>
              <div className='highlight'></div>
              <p>Una década aprendiendo, perfeccionando y entendiendo las necesidades reales de nuestros clientes nos ha dado la perspectiva necesaria para ofrecer soluciones que realmente funcionan.</p>
              <p>Combinamos la energía de una empresa joven con la sabiduría que solo da la experiencia en el mercado.</p>
            </div>
            <div className='estadistica col-lg-6'>
              <div className='row row-cols-2 g-5'>
                <div className='col'>
                  <p className='number'>+10</p>
                  <p className='description'>Años de experiencia</p>
                </div>
                <div className='col'>
                  <p className='number'>100%</p>
                  <p className='description'>Cumplimiento</p>
                </div>
                <div className='col'>
                  <p className='number'>24/7</p>
                  <p className='description'>Soporte post-venta</p>
                </div>
                <div className='col'>
                  <p className='number'>∞</p>
                  <p className='description'>Compromiso</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
