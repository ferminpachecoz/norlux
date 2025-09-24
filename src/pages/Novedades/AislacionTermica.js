"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import "./AislacionTermica.scss"
import ContactSection from "../../components/Contacto/ContactSection"

const AislacionTermica = () => {
  const [counters, setCounters] = useState({
    energyReduction: 0,
    energySaving: 0,
    temperatureStability: 0,
    carbonReduction: 0,
  })

  const metricsRef = useRef(null)
  const isInView = useInView(metricsRef, { once: true, threshold: 0.3 })

  useEffect(() => {
    if (isInView) {
      const animateCounters = () => {
        const targets = {
          energyReduction: 45,
          energySaving: 40,
          temperatureStability: 4,
          carbonReduction: 25,
        }

        const duration = 2000
        const steps = 60
        const stepTime = duration / steps

        let currentStep = 0

        const interval = setInterval(() => {
          currentStep++
          const progress = currentStep / steps
          const easeOutQuart = 1 - Math.pow(1 - progress, 4)

          setCounters({
            energyReduction: Math.round(targets.energyReduction * easeOutQuart),
            energySaving: Math.round(targets.energySaving * easeOutQuart),
            temperatureStability: Math.round(targets.temperatureStability * easeOutQuart),
            carbonReduction: Math.round(targets.carbonReduction * easeOutQuart),
          })

          if (currentStep >= steps) {
            clearInterval(interval)
          }
        }, stepTime)

        return () => clearInterval(interval)
      }

      const cleanup = animateCounters()
      return cleanup
    }
  }, [isInView])

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

  const features = [
    {
      icon: "🔬",
      title: "Material con baja conductividad",
      description:
        "El PVC es naturalmente aislante, a diferencia de metales como el aluminio, que transmiten el calor.",
    },
    {
      icon: "🏗️",
      title: "Diseño multicámara en los perfiles",
      description:
        "Los perfiles de PVC Muchtek tienen cámaras de aire internas que actúan como barreras contra la transferencia térmica.",
    },
    {
      icon: "🪟",
      title: "Doble Vidrio Hermético (DVH)",
      description: "Incorporar DVH mejora la aislación térmica hasta en un 40-50% frente a un vidrio simple.",
    },
    {
      icon: "🔒",
      title: "Burletes y sellado perimetral",
      description:
        "Las juntas de alta calidad y el cierre multipunto aseguran hermeticidad, reduciendo filtraciones de aire.",
    },
  ]

  const benefits = [
    "Mayor confort térmico durante todo el año",
    "Ambientes más saludables al reducir condensación y humedad",
    "Eficiencia energética que contribuye a la sustentabilidad",
    "Valor agregado a tu vivienda con aberturas de alta prestación",
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica de envío del formulario
    console.log("Formulario enviado")
  }

  return (
    <div className="aislacion-termica">
      {/* Hero Section */}
      <motion.section
        className="aislacion-termica__hero"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, threshold: 0.3 }}
        variants={containerVariants}
      >
        <div className="aislacion-termica__container">
          <motion.div className="aislacion-termica__hero-content" variants={itemVariants}>
            <h1 className="aislacion-termica__title">
              El confort de un hogar <span className="highlight">eficiente</span>
            </h1>
            <p className="aislacion-termica__subtitle">
              Cómo las ventanas de PVC Nörlux logran una aislación térmica superior
            </p>
            <p className="aislacion-termica__description">
              Mantener el hogar cálido en invierno y fresco en verano no debería ser una batalla contra el clima ni
              contra el consumo energético. Las ventanas son uno de los puntos más críticos de pérdida o ganancia de
              calor en una vivienda, y elegir el sistema adecuado puede marcar una diferencia enorme en confort y
              eficiencia.
            </p>
          </motion.div>
          <motion.div className="aislacion-termica__hero-image" variants={itemVariants}>
            <img src="/Novedades/noticia-6/modern-home-with-efficient-pvc-windows-thermal-ins.jpg" alt="Hogar eficiente con ventanas de PVC" />
          </motion.div>
        </div>
      </motion.section>

      {/* Definición Section */}
      <motion.section
        className="aislacion-termica__definition"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, threshold: 0.3 }}
        variants={containerVariants}
      >
        <div className="aislacion-termica__container">
          <motion.div className="aislacion-termica__definition-content" variants={itemVariants}>
            <h2 className="aislacion-termica__section-title">¿Qué entendemos por aislación térmica?</h2>
            <p className="aislacion-termica__definition-text">
              La aislación térmica es la capacidad de una abertura de minimizar la transferencia de calor entre el
              interior y el exterior. Esto significa:
            </p>
            <div className="aislacion-termica__definition-points">
              <div className="definition-point">
                <div className="definition-point__icon">❄️</div>
                <p>En invierno, retener el calor generado dentro del hogar</p>
              </div>
              <div className="definition-point">
                <div className="definition-point__icon">☀️</div>
                <p>En verano, evitar que el calor del exterior ingrese al interior</p>
              </div>
              <div className="definition-point">
                <div className="definition-point__icon">⚡</div>
                <p>Reducir condensaciones y puentes térmicos, mejorando la eficiencia energética global</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="aislacion-termica__features"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, threshold: 0.3 }}
        variants={containerVariants}
      >
        <div className="aislacion-termica__container">
          <motion.h2 className="aislacion-termica__section-title" variants={itemVariants}>
            ¿Por qué el PVC Muchtek es un aliado térmico?
          </motion.h2>
          <div className="aislacion-termica__features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="feature-card__icon">{feature.icon}</div>
                <h3 className="feature-card__title">{feature.title}</h3>
                <p className="feature-card__description">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Metrics Section */}
      <motion.section
        className="aislacion-termica__metrics"
        ref={metricsRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, threshold: 0.3 }}
        variants={containerVariants}
      >
        <div className="aislacion-termica__container">
          <motion.h2 className="aislacion-termica__section-title" variants={itemVariants}>
            Beneficios comprobados
          </motion.h2>
          <div className="aislacion-termica__metrics-grid">
            <motion.div className="metric-card" variants={itemVariants}>
              <div className="metric-card__visual">
                <div className="circular-progress">
                  <svg className="circular-progress__svg" viewBox="0 0 100 100">
                    <circle className="circular-progress__bg" cx="50" cy="50" r="45" />
                    <motion.circle
                      className="circular-progress__fill"
                      cx="50"
                      cy="50"
                      r="45"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: isInView ? counters.energyReduction / 100 : 0 }}
                      transition={{ duration: 2, ease: "easeOut" }}
                    />
                  </svg>
                  <div className="circular-progress__text">
                    <span className="number">{counters.energyReduction}</span>
                    <span className="unit">%</span>
                  </div>
                </div>
              </div>
              <h3 className="metric-card__title">Reducción en pérdidas de energía</h3>
              <p className="metric-card__description">En comparación con ventanas tradicionales de vidrio simple</p>
            </motion.div>

            <motion.div className="metric-card" variants={itemVariants}>
              <div className="metric-card__visual">
                <div className="bar-progress">
                  <div className="bar-progress__bg">
                    <motion.div
                      className="bar-progress__fill"
                      initial={{ width: 0 }}
                      animate={{ width: isInView ? `${counters.energySaving}%` : 0 }}
                      transition={{ duration: 2, ease: "easeOut" }}
                    />
                  </div>
                  <div className="bar-progress__text">
                    <span className="number">{counters.energySaving}</span>
                    <span className="unit">%</span>
                  </div>
                </div>
              </div>
              <h3 className="metric-card__title">Ahorro energético anual</h3>
              <p className="metric-card__description">En climatización gracias a la eficiencia del PVC con DVH</p>
            </motion.div>

            <motion.div className="metric-card" variants={itemVariants}>
              <div className="metric-card__visual">
                <div className="temperature-gauge">
                  <div className="temperature-gauge__display">
                    <span className="number">{counters.temperatureStability}</span>
                    <span className="unit">°C</span>
                  </div>
                  <div className="temperature-gauge__bar">
                    <motion.div
                      className="temperature-gauge__fill"
                      initial={{ height: 0 }}
                      animate={{ height: isInView ? `${(counters.temperatureStability / 5) * 100}%` : 0 }}
                      transition={{ duration: 2, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </div>
              <h3 className="metric-card__title">Mayor estabilidad térmica</h3>
              <p className="metric-card__description">
                Menos variación de temperatura respecto a ventanas convencionales
              </p>
            </motion.div>

            <motion.div className="metric-card" variants={itemVariants}>
              <div className="metric-card__visual">
                <div className="carbon-reduction">
                  <div className="carbon-reduction__icon">🌱</div>
                  <div className="carbon-reduction__percentage">
                    <span className="number">{counters.carbonReduction}</span>
                    <span className="unit">%</span>
                  </div>
                  <motion.div
                    className="carbon-reduction__progress"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isInView ? counters.carbonReduction / 100 : 0 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  />
                </div>
              </div>
              <h3 className="metric-card__title">Reducción huella de carbono</h3>
              <p className="metric-card__description">Al reducir el uso de sistemas de climatización</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        className="aislacion-termica__benefits"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, threshold: 0.3 }}
        variants={containerVariants}
      >
        <div className="aislacion-termica__container">
          <motion.h2 className="aislacion-termica__section-title" variants={itemVariants}>
            Beneficios para tu hogar
          </motion.h2>
          <div className="aislacion-termica__benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-item"
                variants={itemVariants}
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
              >
                <div className="benefit-item__icon">✓</div>
                <p className="benefit-item__text">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <ContactSection />

      {/* <motion.section
        className="aislacion-termica__cta"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, threshold: 0.3 }}
        variants={containerVariants}
      >
        <div className="aislacion-termica__container">
          <motion.div className="aislacion-termica__cta-content" variants={itemVariants}>
            <h2 className="aislacion-termica__cta-title">
              En Nörlux diseñamos ventanas que no solo lucen bien, sino que también trabajan por tu bienestar y por el
              futuro del planeta.
            </h2>
            <p className="aislacion-termica__cta-subtitle">
              ¿Querés conocer más sobre nuestras ventanas con aislación térmica?
            </p>

            <form className="aislacion-termica__form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input type="text" placeholder="Nombre completo" className="form-input" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email" className="form-input" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input type="tel" placeholder="Teléfono" className="form-input" required />
                </div>
                <div className="form-group">
                  <select className="form-select" required>
                    <option value="">Seleccionar perfil</option>
                    <option value="arquitecto">Soy arquitecto</option>
                    <option value="desarrollador">Soy desarrollador</option>
                    <option value="cliente">Soy cliente final</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <textarea placeholder="Comentarios sobre tu proyecto" className="form-textarea" rows="4"></textarea>
              </div>
              <motion.button
                type="submit"
                className="form-submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Solicitar información
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.section> */}
    </div>
  )
}

export default AislacionTermica
