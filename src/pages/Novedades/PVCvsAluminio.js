import { useState } from "react"
import { motion } from "framer-motion"
import "./PVCvsAluminio.scss"

const PVCvsAluminio = () => {
  const [activeTab, setActiveTab] = useState(0)

  const comparisonData = [
    {
      title: "Aislación térmica",
      icon: "🌡️",
      pvc: {
        title: "PVC Muchtek",
        description:
          "Material naturalmente aislante, con baja conductividad térmica. En combinación con doble vidrio hermético (DVH), logra reducciones de hasta un 40-50% en pérdidas de energía frente a ventanas convencionales.",
        advantages: ["Baja conductividad térmica", "Hasta 50% menos pérdidas de energía", "Mayor confort térmico"],
      },
      aluminum: {
        title: "Aluminio",
        description:
          "Es un material conductor, lo que significa que transmite el frío y el calor. Incluso con DVH, sin ruptura de puente térmico, sus prestaciones son limitadas.",
        disadvantages: ["Material conductor", "Transmite frío y calor", "Prestaciones limitadas"],
      },
      conclusion:
        "Las ventanas de PVC Muchtek ofrece una eficiencia energética muy superior, ayudando a mantener el hogar confortable y reduciendo el consumo de climatización.",
    },
    {
      title: "Aislación acústica",
      icon: "🔇",
      pvc: {
        title: "PVC Muchtek",
        description:
          "Su estructura multicámara y el cierre hermético con burletes atenúan notablemente los ruidos externos.",
        advantages: ["Estructura multicámara", "Cierre hermético", "Atenúa ruidos externos"],
      },
      aluminum: {
        title: "Aluminio",
        description:
          "Transmite vibraciones sonoras con mayor facilidad, reduciendo la eficacia en zonas de alto tránsito o ruido.",
        disadvantages: ["Transmite vibraciones", "Menor eficacia acústica", "Problemas en zonas ruidosas"],
      },
      conclusion: "El PVC brinda ambientes más silenciosos y confortables.",
    },
    {
      title: "Durabilidad y mantenimiento",
      icon: "🛠️",
      pvc: {
        title: "PVC Muchtek",
        description:
          "No se oxida, no requiere pintura ni tratamientos especiales. Su color y acabado permanecen intactos con el tiempo.",
        advantages: ["No se oxida", "Sin mantenimiento especial", "Color permanente"],
      },
      aluminum: {
        title: "Aluminio",
        description:
          "Puede requerir mantenimiento estético (pintura, anodizado) y es más sensible a la corrosión en zonas de alta humedad o cerca del mar.",
        disadvantages: ["Requiere mantenimiento", "Sensible a corrosión", "Necesita pintura/anodizado"],
      },
      conclusion: "El PVC es más resistente al paso del tiempo y no necesita mantenimiento costoso.",
    },
    {
      title: "Estética y diseño",
      icon: "🎨",
      pvc: {
        title: "PVC Muchtek",
        description:
          "Muchtek ofrece una amplia gama de terminaciones, incluyendo colores y foliados que imitan la madera, adaptándose a estilos clásicos o modernos.",
        advantages: ["Amplia gama de terminaciones", "Foliados imitación madera", "Estilos clásicos y modernos"],
      },
      aluminum: {
        title: "Aluminio",
        description:
          "Si bien también ofrece variedad, las carpinterías de aluminio suelen tener perfiles más delgados, aunque esto compromete prestaciones térmicas.",
        disadvantages: ["Perfiles más delgados", "Compromete prestaciones", "Menor variedad real"],
      },
      conclusion: "El PVC combina variedad estética con alta prestación, sin sacrificar eficiencia.",
    },
    {
      title: "Sustentabilidad",
      icon: "🌱",
      pvc: {
        title: "PVC Muchtek",
        description: "Es reciclable y su eficiencia energética reduce la huella de carbono de la vivienda.",
        advantages: ["Material reciclable", "Reduce huella de carbono", "Eficiencia energética"],
      },
      aluminum: {
        title: "Aluminio",
        description: "También es reciclable, pero su proceso de producción es más intensivo en energía.",
        disadvantages: ["Producción intensiva", "Mayor gasto energético", "Menor eficiencia en uso"],
      },
      conclusion:
        "El PVC de Muchtek es más sustentable durante el uso de la vivienda gracias al ahorro energético que genera.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section className="pvc-aluminum-comparison">
      <div className="container">
        <motion.div
          className="comparison-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>PVC vs Aluminio</h2>
          <p>Descubrí por qué las aberturas de PVC Muchtek son la mejor elección para tu hogar</p>
        </motion.div>

        <div className="comparison-content">
          {/* Navegación por tabs */}
          <motion.div
            className="comparison-tabs"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {comparisonData.map((item, index) => (
              <motion.button
                key={index}
                className={`tab-button ${activeTab === index ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="tab-icon">{item.icon}</span>
                <span className="tab-title">{item.title}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Contenido de la comparación */}
          <motion.div
            className="comparison-details"
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="comparison-grid">
              {/* PVC Column */}
              <div className="material-column pvc-column">
                <div className="material-header">
                  <img src="/Novedades/noticia-1/aluminum-window-profile-icon.webp" alt="PVC Muchtek" className="material-icon" />
                  <h3>{comparisonData[activeTab].pvc.title}</h3>
                  <span className="winner-badge">✅ Ganador</span>
                </div>
                <div className="material-content">
                  <p className="material-description">{comparisonData[activeTab].pvc.description}</p>
                  <ul className="advantages-list">
                    {comparisonData[activeTab].pvc.advantages.map((advantage, index) => (
                      <li key={index}>
                        <span className="check-icon">✓</span>
                        {advantage}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* VS Divider */}
              <div className="vs-divider">
                <span>VS</span>
              </div>

              {/* Aluminum Column */}
              <div className="material-column aluminum-column">
                <div className="material-header">
                  <img src="/Novedades/noticia-1/pvc-window-profile-icon.webp" alt="Aluminio" className="material-icon" />
                  <h3>{comparisonData[activeTab].aluminum.title}</h3>
                </div>
                <div className="material-content">
                  <p className="material-description">{comparisonData[activeTab].aluminum.description}</p>
                  <ul className="disadvantages-list">
                    {comparisonData[activeTab].aluminum.disadvantages.map((disadvantage, index) => (
                      <li key={index}>
                        <span className="cross-icon">✗</span>
                        {disadvantage}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Conclusión */}
            <motion.div
              className="conclusion-box"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h4>Conclusión</h4>
              <p>{comparisonData[activeTab].conclusion}</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="comparison-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>¿Querés conocer más sobre nuestras aberturas de PVC?</h3>
          <p>Descubrí todas las ventajas que Nörlux tiene para ofrecerte</p>
          <motion.button className="cta-button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Solicitá tu presupuesto
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default PVCvsAluminio
