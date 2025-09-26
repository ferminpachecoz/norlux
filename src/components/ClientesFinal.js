import React, { useMemo, useState } from "react";
import "./Clientes.scss";
import "./ClientesFinal.scss";

/**
 * Podés pasar un array por props (clients) si lo traés de un CMS/JSON.
 * Si no, usa este fallback local.
 * Cada cliente define la posición del pin con x/y en % respecto del contenedor del mapa.
 */
const FALLBACK_CLIENTS = [
  {
    id: 1,
    name: "Arq. Carlos Méndez",
    profession: "Arquitecto",
    hood: "Vicente López",
    project: "Edificio residencial - 80 aberturas",
    review:
      "Trabajo con Nörlux en varios proyectos. Precisión técnica y acabados impecables.",
    rating: 5,
    avatar: "/img/clientes/carlos.webp",
    x: 62,
    y: 38,
  },
  {
    id: 2,
    name: "Ing. Paula Romero",
    profession: "Desarrolladora",
    hood: "San Isidro",
    project: "Barrio privado - 120 aberturas",
    review:
      "Excelente performance térmica y acústica. Cumplieron plazos y asesoraron en pliegos.",
    rating: 5,
    avatar: "/img/clientes/paula.webp",
    x: 48,
    y: 50,
  },
  {
    id: 3,
    name: "Estudio Díaz & Asoc.",
    profession: "Estudio de Arquitectura",
    hood: "Olivos",
    project: "Conjunto habitacional - 56 unidades",
    review:
      "DVH y herrajes multipunto marcaron diferencia. Acompañamiento constante en obra.",
    rating: 4,
    avatar: "/img/clientes/estudio.webp",
    x: 30,
    y: 46,
  },
];

export default function ClientesFinal({
  title = <>Clientes satisfechos en <b>toda Zona Norte</b></>,
  subtitle = "Descubrí lo que dicen nuestros clientes sobre su experiencia con Nörlux. Cada pin representa una historia de éxito.",
  mapSrc = "/img/mapa-zonanorte.webp",
  clients = FALLBACK_CLIENTS,
}) {
  const [selectedId, setSelectedId] = useState(clients[0]?.id);
  const selected = useMemo(
    () => clients.find((c) => c.id === selectedId) ?? clients[0],
    [selectedId, clients]
  );

  return (
    <div className="clientes">
      {/* Encabezado: mantiene tus clases/diseño existentes */}
      <h1 className="section-title">{title}</h1>
      <p className="section-subtitle">{subtitle}</p>
      <div className="resaltador">
        <span className="linea" />
      </div>

      <div className="row g-5">
        {/* Columna izquierda: Mapa con pins (no tocamos tu grid) */}
        <div className="col-lg-6">
          <div
            className="image-container"
            aria-label="Mapa con ubicaciones de clientes"
          >
            <img src={mapSrc} alt="Mapa de Zona Norte" />

            {clients.map((c) => (
              <button
                key={c.id}
                type="button"
                className={`map-pin ${selectedId === c.id ? "is-active" : ""}`}
                style={{ left: `${c.x}%`, top: `${c.y}%` }}
                onClick={() => setSelectedId(c.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setSelectedId(c.id);
                }}
                aria-label={`Ver reseña de ${c.name} en ${c.hood}`}
                aria-pressed={selectedId === c.id}
              >
                <span className="pin-dot" />
              </button>
            ))}
          </div>
        </div>

        {/* Columna derecha: datos del cliente seleccionado
            Conservamos nombres de clases típicos para no romper tu SCSS */}
        <div className="col-lg-6">
          <div className="testimonials" role="region" aria-live="polite">
            <i className="bi bi-quote" aria-hidden="true" />

            <p className="review">“{selected?.review}”</p>

            <div className="stars d-flex align-items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <i
                  key={i}
                  className={`bi ${
                    i < (selected?.rating ?? 0) ? "bi-star-fill" : "bi-star"
                  }`}
                  aria-hidden="true"
                />
              ))}
              <p className="m-0 ms-3">{selected?.rating}/5</p>
            </div>

            <div className="profile">
              <img
                src={selected?.avatar}
                alt={`Foto de ${selected?.name}`}
                loading="lazy"
              />
              <div className="ms-4">
                <p className="name">{selected?.name}</p>
                <p className="profession">{selected?.profession}</p>
                <p className="hood">
                  <i className="bi bi-geo-alt me-1" aria-hidden="true" />
                  {selected?.hood}
                </p>
              </div>
            </div>

            <div className="tipo-proyecto">
              <p className="label">Proyecto:</p>
              <p className="text">{selected?.project}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
