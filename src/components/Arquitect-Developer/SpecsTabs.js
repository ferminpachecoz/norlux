import React, { useState, useMemo } from "react";
import "./SpecsTabs.scss";

const DATA = {
  perfiles: {
    title: "Perfiles PVC",
    items: [
      "Sistema Muchtek de 5 cámaras",
      "Refuerzos de acero galvanizado",
      "Espesor de pared: 2.8mm",
      "Coeficiente U: desde 1.4 W/m²K",
    ],
  },
  herrajes: {
    title: "Herrajes",
    items: [
      "Herrajes Rotofrank alemanes",
      "Capacidad de carga: hasta 150kg",
      "Ciclos de apertura: >20.000",
      "Opciones de seguridad integradas",
    ],
  },
  vidriado: {
    title: "Vidriado",
    items: [
      "DVH estándar 4+12+4mm",
      "Opciones laminadas y templadas",
      "Control solar disponible",
      "Cámara con gas argón opcional",
    ],
  },
};

export default function SpecsTabs() {
  const [active, setActive] = useState("perfiles");
  const { title, items } = useMemo(() => DATA[active], [active]);

  return (
    <section className="specs-tabs">
      {/* Tabs */}
      <div className="tabs" role="tablist" aria-label="Características">
        <button
          type="button"
          role="tab"
          aria-selected={active === "perfiles"}
          className={`tab ${active === "perfiles" ? "is-active" : ""}`}
          onClick={() => setActive("perfiles")}
        >
          Perfiles PVC
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={active === "herrajes"}
          className={`tab ${active === "herrajes" ? "is-active" : ""}`}
          onClick={() => setActive("herrajes")}
        >
          Herrajes
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={active === "vidriado"}
          className={`tab ${active === "vidriado" ? "is-active" : ""}`}
          onClick={() => setActive("vidriado")}
        >
          Vidriado
        </button>
      </div>
      {/* Card */}
      <div className="specs-card" role="region" aria-live="polite">
        <h2 className="specs-title">{title}</h2>

        <ul className="specs-list">
          {items.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
