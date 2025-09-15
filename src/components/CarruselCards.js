import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CardVentajas from './Arquitect-Developer/CardVentajas';
import "./CarruselCards.scss"

export default function CarruselCards({array}) {
  return (
    <div className='carrusel-cards'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={3}           // 1 slide visible por vez
        loop                        // vuelve a empezar al final
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: true }}
      >
        {
          array.map((item,index)=>(
            <SwiperSlide key={index} className='py-4 px-2'>
              <CardVentajas 
                icon={item.icon} 
                title={item.title} 
                description={item.description} 
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}
