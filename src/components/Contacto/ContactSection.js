"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import "./ContactSection.scss"
import Separador from "../Separador"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    userType: "",
    comments: "",
    files: null,
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const userTypeOptions = [
    { value: "", label: "Selecciona una opción" },
    { value: "arquitecto", label: "Soy arquitecto" },
    { value: "desarrollador", label: "Soy desarrollador" },
    { value: "cliente-final", label: "Soy cliente final" },
  ]

  const handleInputChange = (e) => {
    const { name, value, files } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files : value,
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "El nombre completo es requerido"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "El teléfono es requerido"
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El email no es válido"
    }

    if (!formData.userType) {
      newErrors.userType = "Por favor selecciona una opción"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData)
      setIsSubmitting(false)
      // Reset form or show success message
    }, 2000)
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="contact-section">
      <div className="contact-container">
        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="contact-header" variants={itemVariants}>
            <h2 className="section-title">Hablemos de <b>tu proyecto</b></h2>
            <Separador color="--color-3" width="100px" />
            <p className="mt-4">
              Contanos sobre tu proyecto y te acompañamos desde el primer momento. Nuestro equipo de especialistas está
              listo para asesorarte.
            </p>
          </motion.div>

          <motion.form className="contact-form" onSubmit={handleSubmit} variants={itemVariants}>
            <div className="form-grid">
              <motion.div className="form-group" variants={itemVariants}>
                <label htmlFor="fullName">Nombre Completo *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={errors.fullName ? "error" : ""}
                  placeholder="Ingresa tu nombre completo"
                />
                {errors.fullName && <span className="error-message">{errors.fullName}</span>}
              </motion.div>

              <motion.div className="form-group" variants={itemVariants}>
                <label htmlFor="phone">Teléfono *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={errors.phone ? "error" : ""}
                  placeholder="Ej: +54 11 1234-5678"
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </motion.div>

              <motion.div className="form-group" variants={itemVariants}>
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={errors.email ? "error" : ""}
                  placeholder="tu@email.com"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </motion.div>

              <motion.div className="form-group" variants={itemVariants}>
                <label htmlFor="userType">Tipo de cliente *</label>
                <select
                  id="userType"
                  name="userType"
                  value={formData.userType}
                  onChange={handleInputChange}
                  className={errors.userType ? "error" : ""}
                >
                  {userTypeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.userType && <span className="error-message">{errors.userType}</span>}
              </motion.div>
            </div>

            <motion.div className="form-group full-width" variants={itemVariants}>
              <label htmlFor="files">Archivos adjuntos</label>
              <div className="file-input-wrapper">
                <input
                  type="file"
                  id="files"
                  name="files"
                  onChange={handleInputChange}
                  multiple
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.dwg"
                />
                <div className="file-input-display">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" />
                    <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" />
                    <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" />
                    <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  <span>
                    {formData.files && formData.files.length > 0
                      ? `${formData.files.length} archivo(s) seleccionado(s)`
                      : "Seleccionar archivos (PDF, DOC, JPG, DWG)"}
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div className="form-group full-width" variants={itemVariants}>
              <label htmlFor="comments">Comentarios</label>
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleInputChange}
                placeholder="Contanos sobre tu proyecto, necesidades específicas, plazos, etc."
                rows="5"
              />
            </motion.div>

            <motion.div className="form-actions" variants={itemVariants}>
              <motion.button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar consulta
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="m9 18 6-6-6-6" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </>
                )}
              </motion.button>

              <p className="form-note">Te responderemos en menos de 24 horas con una propuesta personalizada.</p>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
