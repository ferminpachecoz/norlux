"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import "./MontajeObra.scss"
import ContactSection from "../../components/Contacto/ContactSection"

const MontajeObra = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    comentarios: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Formulario enviado:", formData)
    // Aquí iría la lógica de envío
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const insumos = [
    {
      title: "Selladores Adhesil Pro 66",
      description: "Un sellador de alto desempeño, formulado para lograr una hermeticidad perfecta en obra.",
      features: [
        "Máxima adherencia sobre múltiples superficies",
        "Resistencia a la intemperie y a los rayos UV",
        "Garantiza un sellado flexible y duradero, evitando filtraciones con el paso del tiempo",
      ],
      icon: "🔧",
    },
    {
      title: "Tornillos Torx para el amure",
      description:
        "El amure —el anclaje de la ventana al muro— es un paso crítico. En Nörlux lo realizamos con tornillos Torx.",
      features: [
        "Mayor precisión en el ajuste",
        "Mejor resistencia mecánica que los tornillos convencionales",
        "Instalación más segura y sin riesgo de barrido de la cabeza del tornillo",
      ],
      icon: "⚙️",
    },
  ]

  const problemas = [
    { text: "Filtraciones de agua o aire", icon: "💧" },
    { text: "Pérdida de aislación térmica y acústica", icon: "🌡️" },
    { text: "Riesgos en la seguridad y estabilidad", icon: "⚠️" },
    { text: "Menor vida útil del producto", icon: "⏳" },
  ]

  const beneficios = [
    { text: "Ventanas perfectamente niveladas y encuadradas", icon: "📐" },
    { text: "Cierres herméticos que mantienen todas las prestaciones de aislación", icon: "🔒" },
    { text: "Terminaciones prolijas que acompañan la estética del proyecto", icon: "✨" },
  ]

  return (
    <motion.div
      className="montaje-obra"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Hero Section */}
      <motion.section className="montaje-obra__hero" variants={itemVariants}>
        <div className="montaje-obra__hero-content">
          <div className="montaje-obra__hero-text">
            <h1 className="montaje-obra__title">Montaje en obra: la clave para que tus ventanas rindan al máximo</h1>
            <p className="montaje-obra__subtitle">
              En Nörlux sabemos que una abertura de alta prestación solo cumple con sus promesas si está correctamente
              instalada. La elección del material es fundamental, pero el montaje en obra de calidad es lo que asegura
              la hermeticidad, aislación y durabilidad que tus ventanas necesitan.
            </p>
          </div>
          <div className="montaje-obra__hero-image">
            <img src="/Novedades/noticia-4/montaje-obra-1.webp" alt="Montaje profesional de ventanas PVC" />
          </div>
        </div>
      </motion.section>

      {/* Importancia del Montaje */}
      <motion.section className="montaje-obra__importance" variants={itemVariants}>
        <div className="montaje-obra__container">
          <h2 className="montaje-obra__section-title">¿Por qué es tan importante el montaje?</h2>
          <div className="montaje-obra__importance-content">
            <div className="montaje-obra__importance-text">
              <p>
                Una ventana puede estar fabricada con los mejores perfiles y vidrios, pero si la instalación falla, los
                problemas aparecen rápidamente:
              </p>
              <div className="montaje-obra__problems">
                {problemas.map((problema, index) => (
                  <motion.div
                    key={index}
                    className="montaje-obra__problem-item"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="montaje-obra__problem-icon">{problema.icon}</span>
                    <span className="montaje-obra__problem-text">{problema.text}</span>
                  </motion.div>
                ))}
              </div>
              <p className="montaje-obra__conclusion">
                Por eso, en Nörlux ponemos el mismo cuidado en la fabricación que en la instalación, trabajando con
                equipos altamente especializados y protocolos de montaje estandarizados.
              </p>
            </div>
            <div className="montaje-obra__importance-image">
              <img src="/Novedades/noticia-4/montaje-en-obra-2.webp" alt="Problemas de instalación incorrecta" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Insumos de Calidad */}
      <motion.section className="montaje-obra__materials" variants={itemVariants}>
        <div className="montaje-obra__container">
          <h2 className="montaje-obra__section-title">Insumos de primera calidad</h2>
          <p className="montaje-obra__materials-intro">
            La calidad del montaje no depende solo de la mano de obra: también de los insumos utilizados. En Nörlux
            empleamos exclusivamente productos de primera línea, como:
          </p>
          <div className="montaje-obra__materials-grid">
            {insumos.map((insumo, index) => (
              <motion.div
                key={index}
                className="montaje-obra__material-card"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="montaje-obra__material-header">
                  <span className="montaje-obra__material-icon">{insumo.icon}</span>
                  <h3 className="montaje-obra__material-title">{insumo.title}</h3>
                </div>
                <p className="montaje-obra__material-description">{insumo.description}</p>
                <ul className="montaje-obra__material-features">
                  {insumo.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="montaje-obra__material-feature">
                      <span className="montaje-obra__feature-bullet">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Equipos Especializados */}
      <motion.section className="montaje-obra__team" variants={itemVariants}>
        <div className="montaje-obra__container">
          <div className="montaje-obra__team-content">
            <div className="montaje-obra__team-text">
              <h2 className="montaje-obra__section-title">Equipos especializados, resultados superiores</h2>
              <p className="montaje-obra__team-description">
                Nuestro equipo técnico está capacitado para trabajar en obra con máxima precisión, asegurando:
              </p>
              <div className="montaje-obra__benefits">
                {beneficios.map((beneficio, index) => (
                  <motion.div
                    key={index}
                    className="montaje-obra__benefit-item"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="montaje-obra__benefit-icon">{beneficio.icon}</span>
                    <span className="montaje-obra__benefit-text">{beneficio.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="montaje-obra__team-image">
              <img src="/Novedades/noticia-4/montaje-obra-3.webp" alt="Equipo especializado en montaje" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Sello Nörlux */}
      <motion.section className="montaje-obra__seal" variants={itemVariants}>
        <div className="montaje-obra__container">
          <div className="montaje-obra__seal-content">
            <h2 className="montaje-obra__section-title">El sello Nörlux en cada instalación</h2>
            <p className="montaje-obra__seal-text">
              Elegir Nörlux significa asegurarte de que cada ventana cumpla con lo que promete: eficiencia energética,
              confort acústico y diseño duradero. Gracias a nuestros insumos premium y a la experiencia de nuestros
              equipos, logramos instalaciones que potencian el valor de cada abertura.
            </p>
          </div>
        </div>
      </motion.section>

      {/* CTA y Formulario */}

      <ContactSection />

      {/* <motion.section className="montaje-obra__cta" variants={itemVariants}>
        <div className="montaje-obra__container">
          <div className="montaje-obra__cta-content">
            <h2 className="montaje-obra__cta-title">
              ¿Querés conocer más sobre nuestro servicio de montaje especializado?
            </h2>
            <p className="montaje-obra__cta-subtitle">
              Completá el formulario a continuación y un asesor de Nörlux se pondrá en contacto con vos para asesorarte
              en tu proyecto.
            </p>

            <form className="montaje-obra__form" onSubmit={handleSubmit}>
              <div className="montaje-obra__form-row">
                <div className="montaje-obra__form-group">
                  <label htmlFor="nombre" className="montaje-obra__form-label">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className="montaje-obra__form-input"
                    required
                  />
                </div>
                <div className="montaje-obra__form-group">
                  <label htmlFor="telefono" className="montaje-obra__form-label">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    className="montaje-obra__form-input"
                    required
                  />
                </div>
              </div>

              <div className="montaje-obra__form-group">
                <label htmlFor="email" className="montaje-obra__form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="montaje-obra__form-input"
                  required
                />
              </div>

              <div className="montaje-obra__form-group">
                <label htmlFor="comentarios" className="montaje-obra__form-label">
                  Comentarios
                </label>
                <textarea
                  id="comentarios"
                  name="comentarios"
                  value={formData.comentarios}
                  onChange={handleInputChange}
                  className="montaje-obra__form-textarea"
                  rows="4"
                  placeholder="Contanos sobre tu proyecto..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="montaje-obra__form-button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Solicitar Asesoramiento
              </motion.button>
            </form>
          </div>
        </div>
      </motion.section> */}
    </motion.div>
  )
}

export default MontajeObra
