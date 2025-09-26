"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import "./TiposVidrio.scss"
import ContactSection from "../../components/Contacto/ContactSection"

const TiposVidrio = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    proyecto: "",
    mensaje: "",
  })

  const tiposVidrio = [
    {
      id: 1,
      nombre: "Low E (Low Emissivity)",
      descripcion:
        "Vidrios de baja emisividad, recubiertos con una fina capa invisible que reduce la transferencia térmica.",
      beneficios: [
        "Mantienen el calor en invierno y reflejan la radiación en verano",
        "Mejoran la eficiencia energética y reducen el consumo de climatización",
        "Ideales para climas con altas variaciones de temperatura",
      ],
      icon: "🌡️",
      color: "var(--color-3)",
    },
    {
      id: 2,
      nombre: "Sound Control",
      descripcion: "Vidrios laminados especiales que incorporan una lámina acústica en su interior.",
      beneficios: [
        "Reducen notablemente el ruido proveniente del exterior",
        "Perfectos para viviendas en zonas urbanas o cerca de avenidas",
        "Combinados con PVC y DVH, logran un confort acústico superior",
      ],
      icon: "🔇",
      color: "var(--color-3)",
    },
    {
      id: 3,
      nombre: "Profilit U Glass",
      descripcion: "Vidrios translúcidos con forma de 'U', generalmente usados en muros de vidrio.",
      beneficios: [
        "Aportan estética moderna y gran entrada de luz difusa",
        "Se utilizan en fachadas y proyectos arquitectónicos de vanguardia",
        "Favorecen la privacidad al mismo tiempo que iluminan los espacios",
      ],
      icon: "🏢",
      color: "var(--color-3)",
    },
    {
      id: 4,
      nombre: "Cool Lite",
      descripcion: "Vidrios reflectivos de control solar.",
      beneficios: [
        "Reducen la entrada de radiación solar, evitando sobrecalentamiento",
        "Mantienen ambientes más frescos y disminuyen el uso de aire acondicionado",
        "Disponibles en varios tonos, agregando componente estético",
      ],
      icon: "☀️",
      color: "var(--color-3)",
    },
    {
      id: 5,
      nombre: "Solar Neutro Light",
      descripcion: "Vidrios de control solar con aspecto neutro y alta transmisión lumínica.",
      beneficios: [
        "Permiten el paso de mucha luz natural, pero bloquean el calor",
        "Mantienen colores más naturales en el interior",
        "Ideales para quienes buscan luminosidad sin sacrificar eficiencia",
      ],
      icon: "💡",
      color: "var(--color-3)",
    },
    {
      id: 6,
      nombre: "Vidrios Templados",
      descripcion: "Vidrios sometidos a un proceso térmico que los vuelve hasta 5 veces más resistentes.",
      beneficios: [
        "Mayor seguridad: se rompen en pequeños fragmentos no cortantes",
        "Resistentes a impactos, cambios de temperatura y torsiones",
        "Usados en aberturas de gran tamaño, barandas y frentes vidriados",
      ],
      icon: "🛡️",
      color: "var(--color-3)",
    },
    {
      id: 7,
      nombre: "Solar E",
      descripcion: "Vidrios de última generación que combinan baja emisividad y control solar.",
      beneficios: [
        "Reducen la transferencia térmica y bloquean la radiación solar",
        "Mejoran la eficiencia energética tanto en invierno como en verano",
        "Ideales para proyectos sustentables con altos requerimientos",
      ],
      icon: "⚡",
      color: "var(--color-3)",
    },
  ]

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
    // Aquí iría la lógica para enviar el formulario
  }

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
    <section className="tipos-vidrio">
      {/* Hero Section */}
      <motion.div
        className="tipos-vidrio__hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="tipos-vidrio__hero-content">
          <h1 className="tipos-vidrio__title">Tipos de vidrio en Argentina: innovación y confort para tus ventanas</h1>
          <p className="tipos-vidrio__subtitle">
            El vidrio es mucho más que un material transparente: define el confort térmico, acústico, la seguridad y
            hasta la estética de una vivienda. En Argentina, el principal proveedor de vidrios de alta prestación es
            VASA, que ofrece una amplia gama de productos adaptados a diferentes necesidades arquitectónicas.
          </p>
          <p className="tipos-vidrio__brand-message">
            En <strong>Nörlux</strong>, trabajamos con estos vidrios para potenciar el rendimiento de nuestras aberturas
            de PVC Muchtek y ofrecer soluciones personalizadas para cada proyecto.
          </p>
        </div>
        <div className="tipos-vidrio__hero-image">
          <img src="/Novedades/noticia-2/modern-glass-windows-with-different-types-of-glass.webp" alt="Diferentes tipos de vidrio en ventanas modernas" />
        </div>
      </motion.div>

      {/* Tipos de Vidrio Grid */}
      <motion.div
        className="tipos-vidrio__grid-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="tipos-vidrio__container">
          <motion.h2 className="tipos-vidrio__section-title" variants={itemVariants}>
            Principales tipos de vidrio disponibles en Argentina
          </motion.h2>

          <div className="tipos-vidrio__grid">
            {tiposVidrio.map((vidrio, index) => (
              <motion.div
                key={vidrio.id}
                className="tipos-vidrio__card"
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="tipos-vidrio__card-header">
                  <div className="tipos-vidrio__card-icon" style={{ backgroundColor: vidrio.color }}>
                    <span>{vidrio.icon}</span>
                  </div>
                  <h3 className="tipos-vidrio__card-title">{vidrio.nombre}</h3>
                </div>

                <p className="tipos-vidrio__card-description">{vidrio.descripcion}</p>

                <ul className="tipos-vidrio__card-benefits">
                  {vidrio.beneficios.map((beneficio, idx) => (
                    <li key={idx} className="tipos-vidrio__benefit">
                      <span className="tipos-vidrio__benefit-icon">✓</span>
                      {beneficio}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Importancia Section */}
      <motion.div
        className="tipos-vidrio__importance"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="tipos-vidrio__container">
          <div className="tipos-vidrio__importance-content">
            <div className="tipos-vidrio__importance-text">
              <h2 className="tipos-vidrio__importance-title">¿Por qué es importante elegir bien el vidrio?</h2>
              <p className="tipos-vidrio__importance-description">
                El vidrio representa hasta un <strong>70% de la superficie</strong> de una abertura, por lo que su
                elección es tan importante como el material del marco. Dependiendo de las necesidades del proyecto, se
                puede priorizar:
              </p>

              <div className="tipos-vidrio__priorities">
                <div className="tipos-vidrio__priority">
                  <div className="tipos-vidrio__priority-icon">🌡️</div>
                  <span>Eficiencia energética (Low E, Solar E, Cool Lite)</span>
                </div>
                <div className="tipos-vidrio__priority">
                  <div className="tipos-vidrio__priority-icon">🔇</div>
                  <span>Aislación acústica (Sound Control)</span>
                </div>
                <div className="tipos-vidrio__priority">
                  <div className="tipos-vidrio__priority-icon">🛡️</div>
                  <span>Seguridad (templados o laminados)</span>
                </div>
                <div className="tipos-vidrio__priority">
                  <div className="tipos-vidrio__priority-icon">🎨</div>
                  <span>Estética y diseño (Profilit U Glass, Solar Neutro Light)</span>
                </div>
              </div>

              <p className="tipos-vidrio__norlux-message">
                En <strong>Nörlux</strong> asesoramos a cada cliente para seleccionar la combinación ideal de vidrios
                con nuestros perfiles de PVC Muchtek, logrando aberturas de alto rendimiento adaptadas a cada proyecto.
              </p>
            </div>

            <div className="tipos-vidrio__importance-image">
              <img src="public/LineaJumbo/productos/LJ_2H_JBLACK.webp" alt="Asesoramiento en selección de vidrios" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Conclusión y CTA */}
      <motion.div
        className="tipos-vidrio__cta-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="tipos-vidrio__container">
          <div className="tipos-vidrio__conclusion">
            <h2 className="tipos-vidrio__conclusion-title">Conclusión</h2>
            <p className="tipos-vidrio__conclusion-text">
              La innovación en vidrios permite hoy diseñar hogares más eficientes, confortables y modernos. Gracias a la
              alianza con proveedores líderes como <strong>VASA</strong>, en Nörlux ofrecemos a nuestros clientes las
              mejores opciones del mercado para que cada abertura sea una verdadera inversión en calidad de vida.
            </p>
          </div>
          <ContactSection />
        </div>
      </motion.div>
    </section>
  )
}

export default TiposVidrio
