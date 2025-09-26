import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import "./AislacionAcustica.scss"
import ContactSection from "../../components/Contacto/ContactSection"

const AislacionAcustica = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    comentarios: "",
  })

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 })

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
    // Aquí iría la lógica de envío del formulario
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

  const features = [
    {
      icon: "🔧",
      title: "Propiedades del PVC",
      description:
        "El PVC absorbe y atenúa las vibraciones sonoras, funcionando como una barrera natural contra el ruido, a diferencia del aluminio que lo transmite.",
    },
    {
      icon: "🏗️",
      title: "Diseño multicámara",
      description:
        "Sistema interno de cámaras de aire que reduce el paso de ondas sonoras, trabajando en conjunto con vidrio y herrajes.",
    },
    {
      icon: "🪟",
      title: "Doble Vidrio Hermético",
      description:
        "El DVH reduce hasta un 30-40% del ruido exterior comparado con vidrio simple, gracias a la cámara de aire entre vidrios.",
    },
    {
      icon: "🔒",
      title: "Cierre perimetral",
      description:
        "Sistemas de cierre multipunto que refuerzan la estanqueidad, evitando filtraciones de aire y ruido.",
    },
  ]

  const benefits = [
    {
      icon: "😴",
      title: "Descanso de calidad",
      description: "Ambientes silenciosos que favorecen el sueño",
    },
    {
      icon: "🎯",
      title: "Mejor concentración",
      description: "Ideal para trabajar o estudiar desde casa",
    },
    {
      icon: "🔐",
      title: "Mayor privacidad",
      description: "El sonido interior también queda protegido",
    },
    {
      icon: "📈",
      title: "Valor agregado",
      description: "Aberturas de alta prestación revalorizan tu proyecto",
    },
  ]

  return (
    <div className="aislacion-acustica" ref={sectionRef}>
      {/* Hero Section */}
      <motion.section
        className="aislacion-acustica__hero"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="aislacion-acustica__hero-content">
          <motion.div className="aislacion-acustica__hero-text" variants={itemVariants}>
            <h1 className="aislacion-acustica__title">
              El confort del <span className="highlight">silencio</span>
            </h1>
            <p className="aislacion-acustica__subtitle">
              Cómo las ventanas de PVC Nörlux logran una aislación acústica superior
            </p>
            <p className="aislacion-acustica__description">
              En la vida cotidiana, el ruido se ha convertido en uno de los grandes invasores del confort en el hogar.
              Tránsito constante, obras en construcción, vecinos, bocinas... todos forman parte de un entorno sonoro que
              muchas veces interfiere en nuestro descanso y bienestar.
            </p>
            <p className="aislacion-acustica__brand-message">
              En Nörlux creemos que el hogar debe ser un espacio de tranquilidad y protección, por eso trabajamos con
              ventanas de PVC Muchtek, diseñadas para ofrecer una excelente aislación acústica.
            </p>
          </motion.div>
          <motion.div className="aislacion-acustica__hero-image" variants={itemVariants}>
            <img
              src="/Novedades/noticia-7/quiet-peaceful-home-interior-with-pvc-windows-soun.webp"
              alt="Interior tranquilo con ventanas de PVC que proporcionan aislación acústica"
              className="aislacion-acustica__hero-img"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="aislacion-acustica__features"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="aislacion-acustica__features-header" variants={itemVariants}>
          <h2 className="aislacion-acustica__section-title">
            ¿Cómo logran las ventanas de PVC un mejor aislamiento acústico?
          </h2>
        </motion.div>

        <div className="aislacion-acustica__features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="aislacion-acustica__feature-card"
              variants={itemVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <div className="aislacion-acustica__feature-icon">
                <span className="aislacion-acustica__feature-emoji">{feature.icon}</span>
              </div>
              <h3 className="aislacion-acustica__feature-title">{feature.title}</h3>
              <p className="aislacion-acustica__feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        className="aislacion-acustica__benefits"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="aislacion-acustica__benefits-header" variants={itemVariants}>
          <h2 className="aislacion-acustica__section-title">Beneficios reales para tu hogar</h2>
        </motion.div>

        <div className="aislacion-acustica__benefits-grid">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="aislacion-acustica__benefit-item"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              <div className="aislacion-acustica__benefit-icon">
                <span className="aislacion-acustica__benefit-emoji">{benefit.icon}</span>
              </div>
              <div className="aislacion-acustica__benefit-content">
                <h3 className="aislacion-acustica__benefit-title">{benefit.title}</h3>
                <p className="aislacion-acustica__benefit-description">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        className="aislacion-acustica__experience"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="aislacion-acustica__experience-content" variants={itemVariants}>
          <h2 className="aislacion-acustica__experience-title">Diseñamos experiencias de confort</h2>
          <p className="aislacion-acustica__experience-text">
            En Nörlux, no solo fabricamos ventanas: diseñamos experiencias de confort. Nuestro equipo acompaña a cada
            cliente para elegir la combinación justa de perfil, vidrio y herrajes que mejor se adapte a su proyecto y a
            las necesidades de su entorno.
          </p>
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <ContactSection />

      {/* <motion.section
        className="aislacion-acustica__cta"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="aislacion-acustica__cta-content" variants={itemVariants}>
          <h2 className="aislacion-acustica__cta-title">
            ¿Querés conocer más sobre nuestras ventanas con aislación acústica?
          </h2>
          <p className="aislacion-acustica__cta-subtitle">
            Completá el formulario y un asesor de Nörlux se pondrá en contacto con vos
          </p>

          <form className="aislacion-acustica__form" onSubmit={handleSubmit}>
            <div className="aislacion-acustica__form-row">
              <div className="aislacion-acustica__form-group">
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre completo"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  className="aislacion-acustica__form-input"
                  required
                />
              </div>
              <div className="aislacion-acustica__form-group">
                <input
                  type="tel"
                  name="telefono"
                  placeholder="Teléfono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  className="aislacion-acustica__form-input"
                  required
                />
              </div>
            </div>

            <div className="aislacion-acustica__form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="aislacion-acustica__form-input"
                required
              />
            </div>

            <div className="aislacion-acustica__form-group">
              <textarea
                name="comentarios"
                placeholder="Comentarios adicionales"
                value={formData.comentarios}
                onChange={handleInputChange}
                className="aislacion-acustica__form-textarea"
                rows="4"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="aislacion-acustica__form-button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Solicitar información
            </motion.button>
          </form>
        </motion.div>
      </motion.section> */}
    </div>
  )
}

export default AislacionAcustica
