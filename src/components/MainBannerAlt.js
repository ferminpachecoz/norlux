import React from "react";
import "./MainBannerAlt.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SLIDES = [
  {
    image: "/houses/house-banner.jpg",
    h1: <>Aberturas de PVC de <b>alta prestación</b></>,
    h2: "Soluciones ideales para quienes están construyendo su hogar.",
    ctaText: "Estoy construyendo mi casa",
    ctaHref: "#",            // poné tu URL final
    ctaClass: "verde",
  },
  {
    image: "/houses/house-banner.jpg",
    h1: <>Aberturas de PVC de <b>alta prestación</b></>,
    h2: "Especificaciones técnicas y asesoría para estudios de arquitectura.",
    ctaText: "Soy arquitecto",
    ctaHref: "/arquitect",   // tu ruta existente
    ctaClass: "blanco",
  },
  {
    image: "/houses/house-banner.jpg",
    h1: <>Aberturas de PVC de <b>alta prestación</b></>,
    h2: "Eficiencia, escalabilidad y soporte para desarrollos inmobiliarios.",
    ctaText: "Soy desarrollador",
    ctaHref: "/developer",   // tu ruta existente
    ctaClass: "blanco",
  },
];

export default function MainBannerAlt() {
  return (
    <div className="main-banner">
      <Swiper
        modules={[Autoplay, Pagination, A11y]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        aria-label="Nörlux - slides principales"
      >
        {SLIDES.map((s, i) => (
          <SwiperSlide key={i}>
            <div className="slide">
              <img src={s.image} alt="interior de una vivienda" className="slide-bg" />
              <div className="overlay">
                <div className="content">
                  <h1>{s.h1}</h1>
                  <h2>{s.h2}</h2>

                  <div className="d-flex gap-3">
                    <a href={s.ctaHref} className={s.ctaClass}>
                      {s.ctaText}
                      <i className="ms-2 bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
