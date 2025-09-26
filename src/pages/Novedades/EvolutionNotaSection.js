import { useState } from "react"
import { motion } from "framer-motion"
import "./EvolutionNotaSection.scss"
import ContactSection from "../../components/Contacto/ContactSection"

const EvolutionNotaSection = () => {
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
    console.log("Formulario Evolution enviado:", formData)
    // Aquí iría la lógica de envío
  }

  const uniqueFeatures = [
    {
      icon: "📐",
      title: "Grandes dimensiones",
      description: "Hojas de hasta 3,60 m de altura y 3,00 m de ancho, con peso de hasta 400 kg",
    },
    {
      icon: "🔍",
      title: "Vidriado de alto espesor",
      description: "Compatible con doble y triple vidrio de hasta 42 mm para máxima aislación",
    },
    {
      icon: "🔒",
      title: "Cierre activo perimetral",
      description: "Mayor seguridad, hermeticidad y resistencia frente al viento y lluvia",
    },
    {
      icon: "🛡️",
      title: "Burletes coextruídos",
      description: "Sellado perfecto de PVC para evitar filtraciones de aire y agua",
    },
    {
      icon: "✨",
      title: "Soft-open & soft-close",
      description: "Máxima suavidad y confort en cada apertura y cierre",
    },
  ]

  const projectAdvantages = [
    {
      icon: "🏗️",
      title: "Más diseño y luminosidad",
      description: "Ventanales de gran tamaño con estética moderna y elegante",
    },
    {
      icon: "🌡️",
      title: "Confort térmico y acústico",
      description: "Aislación superior que mejora la eficiencia energética",
    },
    {
      icon: "💪",
      title: "Resistencia y durabilidad",
      description: "Soporta climas extremos sin perder prestaciones",
    },
    {
      icon: "🔐",
      title: "Seguridad reforzada",
      description: "Herrajes y cierres diseñados para mayor protección",
    },
  ]

  const idealFor = [
    {
      icon: "👨‍💼",
      title: "Arquitectos y desarrolladores",
      description: "Soluciones de gran escala para proyectos premium",
    },
    {
      icon: "🏡",
      title: "Viviendas de alto estándar",
      description: "Donde el confort y el diseño son protagonistas",
    },
    {
      icon: "🌪️",
      title: "Climas exigentes",
      description: "Fuertes vientos, temperaturas extremas o alta exposición",
    },
    {
      icon: "⭐",
      title: "Clientes exigentes",
      description: "Que priorizan calidad, tecnología y sustentabilidad",
    },
  ]

  return (
    <section className="evolution-nota-section">
      {/* Hero Section */}
      <motion.div
        className="evolution-hero"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="evolution-hero__content">
          <div className="evolution-hero__badge">
            <span>Nueva Generación</span>
          </div>
          <h1 className="evolution-hero__title">Evolution: la nueva generación de aberturas de PVC</h1>
          <p className="evolution-hero__subtitle">
            En Nörlux estamos orgullosos de presentar la Línea Evolution de Muchtek, un sistema que redefine los límites
            de las aberturas corredizas en PVC. Con tecnología de vanguardia, capacidad para grandes dimensiones y un
            diseño pensado para el confort.
          </p>
        </div>
        <div className="evolution-hero__image">
          <img src="/LineaEvolution/image-banner-1.webp" alt="Línea Evolution - Ventanas PVC de gran formato" />
        </div>
      </motion.div>

      {/* Características Únicas */}
      <motion.div
        className="evolution-features"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="evolution-features__header">
          <h2>¿Qué hace única a la Línea Evolution?</h2>
        </div>
        <div className="evolution-features__grid">
          {uniqueFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="evolution-feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="evolution-feature-card__icon">{feature.icon}</div>
              <h3 className="evolution-feature-card__title">{feature.title}</h3>
              <p className="evolution-feature-card__description">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Ventajas del Proyecto */}
      <motion.div
        className="evolution-advantages"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="evolution-advantages__header">
          <h2>Ventajas para tu proyecto</h2>
        </div>
        <div className="evolution-advantages__grid">
          {projectAdvantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="evolution-advantage-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="evolution-advantage-card__icon">{advantage.icon}</div>
              <div className="evolution-advantage-card__content">
                <h3>{advantage.title}</h3>
                <p>{advantage.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Para Quién es Ideal */}
      <motion.div
        className="evolution-ideal"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="evolution-ideal__header">
          <h2>¿Para quién es ideal Evolution?</h2>
        </div>
        <div className="evolution-ideal__grid">
          {idealFor.map((item, index) => (
            <motion.div
              key={index}
              className="evolution-ideal-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="evolution-ideal-card__icon">{item.icon}</div>
              <h3 className="evolution-ideal-card__title">{item.title}</h3>
              <p className="evolution-ideal-card__description">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Innovación Section */}
      <motion.div
        className="evolution-innovation"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="evolution-innovation__content">
          <h2>Innovación que se siente</h2>
          <p>
            La Línea Evolution no es sólo una abertura de grandes dimensiones: es un sistema de última generación que
            combina estética, tecnología y sustentabilidad. Diseñada para ofrecer la máxima hermeticidad y eficiencia,
            es la elección perfecta para quienes quieren que sus ventanas estén a la altura de su proyecto.
          </p>
        </div>
        <div className="evolution-innovation__image">
          <img src="/LineaEvolution/productos/LE_2G_ALPINE.webp" alt="Innovación Evolution - Tecnología de vanguardia" />
        </div>
      </motion.div>

      {/* CTA y Formulario */}
      <ContactSection />

      {/* <motion.div
        className="evolution-cta"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="evolution-cta__header">
          <h2>¿Querés conocer más sobre Evolution?</h2>
          <p>
            Completá el formulario y un asesor de Nörlux se pondrá en contacto con vos para brindarte toda la
            información que necesitás.
          </p>
        </div>

        <motion.form
          className="evolution-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="evolution-form__row">
            <div className="evolution-form__field">
              <label htmlFor="nombre">Nombre Completo *</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="evolution-form__field">
              <label htmlFor="telefono">Teléfono *</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="evolution-form__field">
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
          </div>

          <div className="evolution-form__field">
            <label htmlFor="comentarios">Comentarios sobre tu proyecto</label>
            <textarea
              id="comentarios"
              name="comentarios"
              value={formData.comentarios}
              onChange={handleInputChange}
              rows="4"
              placeholder="Contanos sobre tu proyecto y cómo podemos ayudarte con Evolution..."
            />
          </div>

          <motion.button
            type="submit"
            className="evolution-form__submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Solicitar información sobre Evolution
          </motion.button>
        </motion.form>
      </motion.div> */}
    </section>
  )
}

export default EvolutionNotaSection
