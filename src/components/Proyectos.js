import React from "react";
import "./Proyectos.scss";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Proyectos() {
  const proyectos = [
    {
      image: "/houses/house-banner.jpg",
      title: "Casa Nórdica - San Isidro",
      description:
        "Ventanas de PVC de alto rendimiento con perfiles Muchtek y herrajes Roto Frank.",
      cliente: "Familia Martínez",
      etiqueta: "Residencial",
      href: "#",
    },
    {
      image: "/houses/house-banner.jpg",
      title: "Riverside Premium - Tigre",
      description:
        "Soluciones para gran escala: eficiencia energética y hermeticidad certificada.",
      cliente: "Desarrolladora Delta",
      etiqueta: "Desarrollos",
      href: "#",
    },
    {
      image: "/houses/house-banner.jpg",
      title: "Oficinas Norte Plaza - Vicente López",
      description:
        "DVH con control solar y aislamiento acústico real para entornos corporativos.",
      cliente: "Norte Plaza SA",
      etiqueta: "Corporativo",
      href: "#",
    },
  ];

  return (
    <div className="proyectos">
      <h1 className="section-title">Proyectos que <b>hablan por nosotros</b></h1>
      <p className="section-subtitle">
        Cada proyecto es único y refleja nuestro compromiso con la excelencia, la
        precisión técnica y el diseño nórdico.
      </p>
      <div className="resaltador">
        <span className="linea"></span>
      </div>

      <div className="proyectos-carousel">
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          slidesPerView={1}
          loop
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          aria-label="Carrusel de proyectos"
        >
          {proyectos.map((p, i) => (
            <SwiperSlide key={i}>
              {/* === Slide (mantiene tu estructura) === */}
              <div className="slide row g-0">
                <div className="col-lg-6">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="img-fluid w-100 h-100 object-fit-cover"
                    loading="lazy"
                  />
                </div>
                <div className="col-lg-6 d-flex align-items-center fondo">
                  <div className="contenido">
                    <p className="title">{p.title}</p>
                    <p className="description">{p.description}</p>
                    <div className="cliente d-flex">
                      <span className="circle me-2"></span>
                      <p>Cliente: {p.cliente}</p>
                    </div>
                    <a className="boton" href={p.href}>
                      Ver proyecto completo
                      <i className="ms-2 bi bi-box-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
                <div className="etiqueta">
                  <p>{p.etiqueta}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
