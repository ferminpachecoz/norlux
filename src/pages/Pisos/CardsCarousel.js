import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// estilos base de Swiper (¡importá estos!)
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./CardsCarousel.scss";


export default function CardsCarousel({ items, colorTitle }) {
  return (
    <div className="cards-carousel">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={3}
        spaceBetween={24}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 16 },
          576: { slidesPerView: 2, spaceBetween: 20 },
          992: { slidesPerView: 3, spaceBetween: 24 },
        }}
      >
        {items.map((it, i) => (
          <SwiperSlide key={i}>
            <article className="card-item">
              <div className="media">
                <img src={it.image} alt={it.title} loading="lazy" />
              </div>
              {/* Overlay inferior izquierda */}
              <div className="overlay">
                <h3 className="title" style={{color: colorTitle?`var(${colorTitle})`:"var(--color-1)"}}>{it.title}</h3>
                {it.headline && <p className="headline">{it.headline}</p>}
                {it.sub && <p className="sub">{it.sub}</p>}
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
