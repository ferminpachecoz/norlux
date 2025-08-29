"use client"
import { motion } from "framer-motion"
import "./MapSection.scss"
import Separador from "../Separador"

const MapSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const contactInfo = [
    {
      icon: "📍",
      title: "Dirección",
      content: "Escalada 1200, Buenos Aires, Argentina",
    },
    {
      icon: "📞",
      title: "Teléfono",
      content: "+54 11 1234-5678",
    },
    {
      icon: "📧",
      title: "Email",
      content: "info@norlux.com.ar",
    },
    {
      icon: "🕒",
      title: "Horarios",
      content: "Lun - Vie: 8:00 - 18:00\nSáb: 9:00 - 13:00",
    },
  ]

  return (
    <section className="map-section">
      <div className="map-section__container">
        <motion.div
          className="map-section__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="map-section__header" variants={itemVariants}>
            <h2 className="section-title">Visitanos en <b>nuestro showroom</b></h2>
            <Separador color="--color-3" width="100px" />
            <p className="map-section__subtitle mt-4">
              Te esperamos para conocer de cerca nuestros productos y recibir asesoramiento personalizado
            </p>
          </motion.div>

          <div className="map-section__main">
            <motion.div className="map-section__map-container" variants={itemVariants}>
              <div className="map-section__map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.344!2d-58.4647!3d-34.6158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb7d4654bb7d7%3A0x1234567890abcdef!2sEscalada%201200%2C%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Nörlux"
                ></iframe>
              </div>
            </motion.div>

            <motion.div className="map-section__info" variants={itemVariants}>
              <h3 className="map-section__info-title">Información de contacto</h3>
              <div className="map-section__contact-grid">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    className="map-section__contact-item"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="map-section__contact-icon">{item.icon}</div>
                    <div className="map-section__contact-content">
                      <h4 className="map-section__contact-title">{item.title}</h4>
                      <p className="map-section__contact-text">{item.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MapSection
