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
      image: "/Casas - Clientes Satisfechos/Casa Barbarita/1754.JPG",
      title: "Casa Barbarita - Tigre",
      description:
        "Ventanas de PVC de alto rendimiento con perfiles Muchtek y herrajes Roto Frank.",
      cliente: "Familia Martínez",
      etiqueta: "Residencial",
      arrayImages: [
        "/Casas - Clientes Satisfechos/Casa Barbarita/1754.JPG",
        "/Casas - Clientes Satisfechos/Casa Barbarita/1755.JPG",
        "/Casas - Clientes Satisfechos/Casa Barbarita/1756.JPG",
        "/Casas - Clientes Satisfechos/Casa Barbarita/1757.JPG",
        "/Casas - Clientes Satisfechos/Casa Barbarita/2094.JPG",
      ]
    },
    {
      image: "/Casas - Clientes Satisfechos/Casa Canning/2437.JPG",
      title: "Casa Canning - La Plata",
      description:
        "Soluciones para gran escala: eficiencia energética y hermeticidad certificada.",
      cliente: "Desarrolladora Delta",
      etiqueta: "Residencial",
      arrayImages: [
        "/Casas - Clientes Satisfechos/Casa Canning/2437.JPG",
        "/Casas - Clientes Satisfechos/Casa Canning/2438.JPG",
      ]
    },
    {
      image: "/Casas - Clientes Satisfechos/Casa Hacoaj/IMG_2709.jpg",
      title: "Casa Hacoaj - Tigre",
      description:
        "DVH con control solar y aislamiento acústico real para entornos corporativos.",
      cliente: "Norte Plaza SA",
      etiqueta: "Residencial",
      arrayImages: [
        "/Casas - Clientes Satisfechos/Casa Hacoaj/IMG_1044.HEIC",
        "/Casas - Clientes Satisfechos/Casa Hacoaj/IMG_1049.HEIC",
        "/Casas - Clientes Satisfechos/Casa Hacoaj/IMG_2614.HEIC",
        "/Casas - Clientes Satisfechos/Casa Hacoaj/IMG_2623.HEIC",
        "/Casas - Clientes Satisfechos/Casa Hacoaj/IMG_2626.HEIC",
        "/Casas - Clientes Satisfechos/Casa Hacoaj/IMG_2630.HEIC",
        "/Casas - Clientes Satisfechos/Casa Hacoaj/IMG_2709.jpg",
      ]
    },
    {
      image: "/Casas - Clientes Satisfechos/Casa Lagos - Nordelta/_MG_0065.jpg",
      title: "Casa Lagos - Nordelta",
      description:
        "DVH con control solar y aislamiento acústico real para entornos corporativos.",
      cliente: "Norte Plaza SA",
      etiqueta: "Residencial",
      arrayImages: [
        "/Casas - Clientes Satisfechos/Casa Lagos - Nordelta/_MG_0065.jpg",
        "/Casas - Clientes Satisfechos/Casa Lagos - Nordelta/_MG_0078.jpg",
        "/Casas - Clientes Satisfechos/Casa Lagos - Nordelta/_MG_0090.jpg",
        "/Casas - Clientes Satisfechos/Casa Lagos - Nordelta/_MG_0094.jpg",
        "/Casas - Clientes Satisfechos/Casa Lagos - Nordelta/_MG_0154.jpg",
        "/Casas - Clientes Satisfechos/Casa Lagos - Nordelta/_MG_0165.jpg",
        "/Casas - Clientes Satisfechos/Casa Lagos - Nordelta/_MG_9831.jpg",
        "/Casas - Clientes Satisfechos/Casa Lagos - Nordelta/_MG_9837.jpg",
      ]
    },
    {
      image: "/Casas - Clientes Satisfechos/Casa Las Lomas - San Isidro/freepik__modern-residential-house-multiple-exterior-views-h__5629.png",
      title: "Casa Lagos - San Isidro",
      description:
        "DVH con control solar y aislamiento acústico real para entornos corporativos.",
      cliente: "Norte Plaza SA",
      etiqueta: "Residencial",
      arrayImages: [
        "/Casas - Clientes Satisfechos/Casa Las Lomas - San Isidro/freepik__modern-residential-house-multiple-exterior-views-h__5629.png",
        "/Casas - Clientes Satisfechos/Casa Las Lomas - San Isidro/freepik__modern-residential-house-multiple-exterior-views-h__5630.png",
        "/Casas - Clientes Satisfechos/Casa Las Lomas - San Isidro/freepik__modern-residential-house-multiple-exterior-views-h__5633.png",
        "/Casas - Clientes Satisfechos/Casa Las Lomas - San Isidro/freepik__modern-residential-house-multiple-exterior-views-h__5634.png",
      ]
    },
    {
      image: "/Casas - Clientes Satisfechos/Edificio Belgrano/3125.JPG",
      title: "Edificio - Belgrano",
      description:
        "DVH con control solar y aislamiento acústico real para entornos corporativos.",
      cliente: "Norte Plaza SA",
      etiqueta: "Corporativo",
      arrayImages: [
        "public/Casas - Clientes Satisfechos/Edificio Belgrano/3125.JPG",
        "public/Casas - Clientes Satisfechos/Edificio Belgrano/3126.JPG",
      ]
    },
    {
      image: "/Casas - Clientes Satisfechos/Pilar - Casa Robles/freepik__modern-residential-house-multiple-exterior-views-h__5622.png",
      title: "Casa Robles - Pilar",
      description:
        "DVH con control solar y aislamiento acústico real para entornos corporativos.",
      cliente: "Norte Plaza SA",
      etiqueta: "Corporativo",
      arrayImages: [
        "/Casas - Clientes Satisfechos/Pilar - Casa Robles/freepik__modern-residential-house-multiple-exterior-views-h__5622.png",
        "/Casas - Clientes Satisfechos/Pilar - Casa Robles/freepik__modern-residential-house-multiple-exterior-views-h__5623.png",
        "/Casas - Clientes Satisfechos/Pilar - Casa Robles/freepik__modern-residential-house-multiple-exterior-views-h__5624.png",
        "/Casas - Clientes Satisfechos/Pilar - Casa Robles/freepik__modern-residential-house-multiple-exterior-views-h__5626.png",
        "/Casas - Clientes Satisfechos/Pilar - Casa Robles/freepik__modern-residential-house-multiple-exterior-views-h__5627.png",
        "/Casas - Clientes Satisfechos/Pilar - Casa Robles/freepik__modern-residential-house-multiple-exterior-views-h__5628.png",
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
