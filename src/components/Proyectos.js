import React from "react";
import "./Proyectos.scss";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Proyectos({handleClick, handleImages}) {
  const proyectos = [
    {
      image: "/Casas - Clientes Satisfechos/Casa Barbarita/1754.webp",
      title: "Casa Barbarita - Tigre",
      description:
        "Ventanas de PVC de alto rendimiento con perfiles Muchtek y herrajes Roto Frank.",
      cliente: "Familia Martínez",
      etiqueta: "Residencial",
      arrayImages: [
        "/Casas - Clientes Satisfechos/Casa Barbarita/1754.webp",
        "/Casas - Clientes Satisfechos/Casa Barbarita/1755.webp",
        "/Casas - Clientes Satisfechos/Casa Barbarita/1756.webp",
        "/Casas - Clientes Satisfechos/Casa Barbarita/1757.webp",
        "/Casas - Clientes Satisfechos/Casa Barbarita/2094.webp",
      ]
    },
    {
      image: "/Casas - Clientes Satisfechos/Casa Canning/2437.webp",
      title: "Casa Canning - La Plata",
      description:
        "Soluciones para gran escala: eficiencia energética y hermeticidad certificada.",
      cliente: "Desarrolladora Delta",
      etiqueta: "Residencial",
      arrayImages: [
        "/Casas - Clientes Satisfechos/Casa Canning/2437.webp",
        "/Casas - Clientes Satisfechos/Casa Canning/2438.webp",
      ]
    },
    {
      image: "/Casas - Clientes Satisfechos/Casa Hacoaj/IMG_2709.webp",
      title: "Casa Hacoaj - Tigre",
      description:
        "DVH con control solar y aislamiento acústico real para entornos corporativos.",
      cliente: "Norte Plaza SA",
      etiqueta: "Residencial",
      arrayImages: [
        "/Casas - Clientes Satisfechos/Casa Hacoaj/IMG_1044.webp",
        "/Casas - Clientes Satisfechos/Casa Hacoaj/IMG_1049.webp",
        "/Casas - Clientes Satisfechos/Casa Hacoaj/IMG_2614.webp",
        "/Casas - Clientes Satisfechos/Casa Hacoaj/IMG_2623.webp",
        "/Casas - Clientes Satisfechos/Casa Hacoaj/IMG_2626.webp",
        "/Casas - Clientes Satisfechos/Casa Hacoaj/IMG_2630.webp",
        "/Casas - Clientes Satisfechos/Casa Hacoaj/IMG_2709.webp",
      ]
    },
    {
      image: "/Casas - Clientes Satisfechos/Casa Lagos - Nordelta/_MG_0065.webp",
      title: "Casa Lagos - Nordelta",
      description:
        "DVH con control solar y aislamiento acústico real para entornos corporativos.",
      cliente: "Norte Plaza SA",
      etiqueta: "Residencial",
      arrayImages: [
        "/Casas - Clientes Satisfechos/Casa Lagos - Nordelta/_MG_0065.webp",
        "/Casas - Clientes Satisfechos/Casa Lagos - Nordelta/_MG_0078.webp",
        "/Casas - Clientes Satisfechos/Casa Lagos - Nordelta/_MG_0090.webp",
        "/Casas - Clientes Satisfechos/Casa Lagos - Nordelta/_MG_0094.webp",
        "/Casas - Clientes Satisfechos/Casa Lagos - Nordelta/_MG_0154.webp",
        "/Casas - Clientes Satisfechos/Casa Lagos - Nordelta/_MG_0165.webp",
        "/Casas - Clientes Satisfechos/Casa Lagos - Nordelta/_MG_9831.webp",
        "/Casas - Clientes Satisfechos/Casa Lagos - Nordelta/_MG_9837.webp",
      ]
    },
    {
      image: "/Casas - Clientes Satisfechos/Casa Las Lomas - San Isidro/freepik__modern-residential-house-multiple-exterior-views-h__5629.webp",
      title: "Casa Lagos - San Isidro",
      description:
        "DVH con control solar y aislamiento acústico real para entornos corporativos.",
      cliente: "Norte Plaza SA",
      etiqueta: "Residencial",
      arrayImages: [
        "/Casas - Clientes Satisfechos/Casa Las Lomas - San Isidro/freepik__modern-residential-house-multiple-exterior-views-h__5629.webp",
        "/Casas - Clientes Satisfechos/Casa Las Lomas - San Isidro/freepik__modern-residential-house-multiple-exterior-views-h__5630.webp",
        "/Casas - Clientes Satisfechos/Casa Las Lomas - San Isidro/freepik__modern-residential-house-multiple-exterior-views-h__5633.webp",
        "/Casas - Clientes Satisfechos/Casa Las Lomas - San Isidro/freepik__modern-residential-house-multiple-exterior-views-h__5634.webp",
      ]
    },
    {
      image: "/Casas - Clientes Satisfechos/Edificio Belgrano/3125.webp",
      title: "Edificio - Belgrano",
      description:
        "DVH con control solar y aislamiento acústico real para entornos corporativos.",
      cliente: "Norte Plaza SA",
      etiqueta: "Corporativo",
      arrayImages: [
        "public/Casas - Clientes Satisfechos/Edificio Belgrano/3125.webp",
        "public/Casas - Clientes Satisfechos/Edificio Belgrano/3126.webp",
      ]
    },
    {
      image: "/Casas - Clientes Satisfechos/Pilar - Casa Robles/freepik__modern-residential-house-multiple-exterior-views-h__5622.webp",
      title: "Casa Robles - Pilar",
      description:
        "DVH con control solar y aislamiento acústico real para entornos corporativos.",
      cliente: "Norte Plaza SA",
      etiqueta: "Corporativo",
      arrayImages: [
        "/Casas - Clientes Satisfechos/Pilar - Casa Robles/freepik__modern-residential-house-multiple-exterior-views-h__5622.webp",
        "/Casas - Clientes Satisfechos/Pilar - Casa Robles/freepik__modern-residential-house-multiple-exterior-views-h__5623.webp",
        "/Casas - Clientes Satisfechos/Pilar - Casa Robles/freepik__modern-residential-house-multiple-exterior-views-h__5624.webp",
        "/Casas - Clientes Satisfechos/Pilar - Casa Robles/freepik__modern-residential-house-multiple-exterior-views-h__5626.webp",
        "/Casas - Clientes Satisfechos/Pilar - Casa Robles/freepik__modern-residential-house-multiple-exterior-views-h__5627.webp",
        "/Casas - Clientes Satisfechos/Pilar - Casa Robles/freepik__modern-residential-house-multiple-exterior-views-h__5628.webp",
      ]
    },
  ];

  const funcionDoble=(imagesArray)=>{
    handleClick()
    handleImages(imagesArray)
  }

  return (
    <div className="proyectos">
      <h1 className="section-title">Proyectos que <b>hablan por nosotros</b></h1>
      <p className="section-subtitle">
        Cada proyecto es único y refleja nuestro compromiso con la excelencia, la
        precisión técnica y el diseño.
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
         /*  autoplay={{ delay: 4500, disableOnInteraction: false }} */
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
                    className="img-fluid w-100 object-fit-cover"
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
                    <button className="boton" onClick={()=>funcionDoble(p.arrayImages)}>
                      Ver proyecto completo
                      <i className="ms-2 bi bi-box-arrow-up-right"></i>
                    </button>
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
