import { useState } from "react"
import { motion } from "framer-motion"
import "./NuevosDecks.scss"
import ContactSection from "../../components/Contacto/ContactSection"

const NuevosDecks = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    proyecto: "",
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

  const ventajas = [
    {
      icon: "🛡️",
      titulo: "Durabilidad Superior",
      descripcion: "El PVC no se pudre, no absorbe humedad y resiste el ataque de insectos.",
    },
    {
      icon: "🧽",
      titulo: "Bajo Mantenimiento",
      descripcion: "Basta con una limpieza periódica, sin necesidad de tratamientos protectores.",
    },
    {
      icon: "🦶",
      titulo: "Seguridad",
      descripcion: "Superficie antideslizante y libre de astillas.",
    },
    {
      icon: "🌱",
      titulo: "Sustentabilidad",
      descripcion: "Fabricados con materiales reciclables y larga vida útil.",
    },
    {
      icon: "✨",
      titulo: "Estética Premium",
      descripcion: "Disponibles en colores y texturas que imitan la madera natural.",
    },
  ]

  const aplicaciones = [
    "Terrazas y patios residenciales",
    "Bordes de piscinas y soláriums",
    "Jardines y galerías cubiertas",
    "Espacios comerciales y de alto tránsito",
  ]

  const caracteristicas = [
    "No se astillan ni se deforman",
    "Resistentes al agua, al sol y a la humedad",
    "No requieren lijado, barnizado ni pintura",
    "Larga vida útil con mínimo mantenimiento",
  ]

  return (
    <div className="nuevos-decks">
      {/* Hero Section */}
      <motion.section
        className="nuevos-decks__hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="nuevos-decks__hero-content">
          <div className="nuevos-decks__hero-text">
            <motion.span
              className="nuevos-decks__badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Novedad
            </motion.span>
            <motion.h1
              className="nuevos-decks__title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Presentamos los nuevos decks de PVC Muchtek
            </motion.h1>
            <motion.p
              className="nuevos-decks__subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              En Nörlux nos apasiona ofrecer soluciones que combinen diseño, confort y sustentabilidad. Por eso, sumamos
              a nuestro portfolio una innovación que redefine los espacios exteriores.
            </motion.p>
          </div>
          <motion.div
            className="nuevos-decks__hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <img src="/Novedades/noticia-3/modern-pvc-deck-terrace-with-outdoor-furniture.webp" alt="Deck de PVC Muchtek en terraza moderna" />
          </motion.div>
        </div>
      </motion.section>

      {/* Qué son los decks de PVC */}
      <motion.section
        className="nuevos-decks__definition"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="nuevos-decks__container">
          <h2 className="nuevos-decks__section-title">¿Qué son los decks de PVC?</h2>
          <div className="nuevos-decks__definition-content">
            <div className="nuevos-decks__definition-text">
              <p>
                Los decks de PVC son una evolución frente a los decks de madera tradicionales. Fabricados con perfiles
                de PVC de alta resistencia, mantienen la estética cálida y natural de la madera, pero con prestaciones
                técnicas muy superiores:
              </p>
              <ul className="nuevos-decks__features-list">
                {caracteristicas.map((caracteristica, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <span className="nuevos-decks__check">✓</span>
                    {caracteristica}
                  </motion.li>
                ))}
              </ul>
            </div>
            <motion.div
              className="nuevos-decks__definition-image"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src="/Novedades/noticia-3/pvc-deck-profile-close-up-texture-wood-like.webp" alt="Perfil de deck de PVC con textura madera" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Ventajas */}
      <motion.section
        className="nuevos-decks__advantages"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="nuevos-decks__container">
          <h2 className="nuevos-decks__section-title">Ventajas frente a los decks de madera</h2>
          <div className="nuevos-decks__advantages-grid">
            {ventajas.map((ventaja, index) => (
              <motion.div
                key={index}
                className="nuevos-decks__advantage-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="nuevos-decks__advantage-icon">{ventaja.icon}</div>
                <h3 className="nuevos-decks__advantage-title">{ventaja.titulo}</h3>
                <p className="nuevos-decks__advantage-description">{ventaja.descripcion}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Aplicaciones */}
      <motion.section
        className="nuevos-decks__applications"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="nuevos-decks__container">
          <div className="nuevos-decks__applications-content">
            <div className="nuevos-decks__applications-text">
              <h2 className="nuevos-decks__section-title">Aplicaciones ideales</h2>
              <p>Los decks de PVC Muchtek son perfectos para:</p>
              <ul className="nuevos-decks__applications-list">
                {aplicaciones.map((aplicacion, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <span className="nuevos-decks__bullet">▶</span>
                    {aplicacion}
                  </motion.li>
                ))}
              </ul>
            </div>
            <motion.div
              className="nuevos-decks__applications-image"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src="/Novedades/noticia-3/pvc-deck-around-swimming-pool-with-lounge-chairs.webp" alt="Deck de PVC alrededor de piscina" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* El toque Nörlux */}
      <motion.section
        className="nuevos-decks__norlux-touch"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="nuevos-decks__container">
          <div className="nuevos-decks__norlux-content">
            <h2 className="nuevos-decks__section-title">El toque Nörlux</h2>
            <p className="nuevos-decks__norlux-text">
              Incorporamos los decks de PVC Muchtek a nuestra propuesta porque entendemos que la arquitectura moderna
              exige soluciones integrales: interiores confortables y exteriores que inviten a disfrutar. Con esta nueva
              línea, ofrecemos a nuestros clientes un producto premium que combina belleza, practicidad y durabilidad.
            </p>
          </div>
        </div>
      </motion.section>

      {/* CTA y Formulario */}
      <ContactSection />

      {/* <motion.section
        className="nuevos-decks__cta"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="nuevos-decks__container">
          <div className="nuevos-decks__cta-content">
            <h2 className="nuevos-decks__cta-title">
              ¿Querés transformar tu espacio exterior con los nuevos decks de PVC Muchtek?
            </h2>
            <p className="nuevos-decks__cta-subtitle">
              Completá el formulario y un asesor de Nörlux te brindará toda la información que necesitás para tu
              proyecto.
            </p>

            <motion.form
              className="nuevos-decks__form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="nuevos-decks__form-row">
                <div className="nuevos-decks__form-group">
                  <label htmlFor="nombre">Nombre Completo</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="nuevos-decks__form-group">
                  <label htmlFor="telefono">Teléfono</label>
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

              <div className="nuevos-decks__form-row">
                <div className="nuevos-decks__form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="nuevos-decks__form-group">
                  <label htmlFor="proyecto">Tipo de Proyecto</label>
                  <select id="proyecto" name="proyecto" value={formData.proyecto} onChange={handleInputChange} required>
                    <option value="">Seleccionar...</option>
                    <option value="residencial">Residencial</option>
                    <option value="comercial">Comercial</option>
                    <option value="piscina">Borde de piscina</option>
                    <option value="terraza">Terraza/Patio</option>
                  </select>
                </div>
              </div>

              <div className="nuevos-decks__form-group">
                <label htmlFor="comentarios">Comentarios adicionales</label>
                <textarea
                  id="comentarios"
                  name="comentarios"
                  value={formData.comentarios}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Contanos más detalles sobre tu proyecto..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="nuevos-decks__submit-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Solicitar Información
              </motion.button>
            </motion.form>
          </div>
        </div>
      </motion.section> */}
    </div>
  )
}

export default NuevosDecks
