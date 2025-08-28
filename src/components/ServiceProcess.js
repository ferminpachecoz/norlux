"use client"
import { motion } from "framer-motion"
import "./ServiceProcess.scss"

const ServiceProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Asesoramiento inicial",
      subtitle: "Escuchamos tu proyecto y resolvemos tus dudas.",
      description: "Te contactás con nosotros y un asesor especializado te acompaña desde el primer momento.",
      icon: "💬",
    },
    {
      number: "02",
      title: "Relevamiento en obra",
      subtitle: "Medimos, analizamos y anticipamos detalles.",
      description: "Visitamos tu obra para relevar todo lo necesario y garantizar una fabricación sin errores.",
      icon: "📐",
    },
    {
      number: "03",
      title: "Presupuesto en 24 hs",
      subtitle: "Claro, detallado y adaptado a tu proyecto.",
      description: "Te enviamos una propuesta en 24 horas con toda la información técnica y comercial que necesitás.",
      icon: "📋",
    },
    {
      number: "04",
      title: "Fabricación e instalación",
      subtitle: "Con procesos eficientes y supervisión técnica.",
      description: "Cumplimos los plazos y garantizamos una colocación cuidada y profesional.",
      icon: "🔧",
    },
    {
      number: "05",
      title: "Seguimiento y postventa",
      subtitle: "Nos aseguramos de que todo funcione como esperás.",
      description: "Quedamos disponibles para acompañarte ante cualquier consulta o necesidad.",
      icon: "🤝",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const stepVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section className="service-process">
      <div className="service-process__container">
        <motion.div
          className="service-process__header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Nuestro <b>proceso</b> de trabajo</h2>
          <p className="section-subtitle">
            Un acompañamiento integral que te da tranquilidad desde el primer contacto hasta después de la instalación
          </p>
        </motion.div>

        <motion.div
          className="service-process__steps"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="service-process__timeline" variants={lineVariants} />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="service-process__step"
              variants={stepVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              <div className="service-process__step-number">
                <span>{step.number}</span>
              </div>

              <div className="service-process__step-content">

                <h3 className="service-process__step-title">{step.title}</h3>

                <p className="service-process__step-subtitle">{step.subtitle}</p>

                <p className="service-process__step-description">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceProcess
