import "./Proveedores.scss";
import Separador from "./Separador";

const Proveedores = () => {
  // Array de clientes con logos placeholder
  const clients = [
    { id: 1, name: "Muchtek", logo: "/proveedores/muchtek.webp" },
    { id: 2, name: "Herramaq", logo: "/proveedores/Herramaq.webp" },
    { id: 3, name: "Rotofrank", logo: "/proveedores/rotofrank.webp" },
    { id: 4, name: "Tecno Perfiles", logo: "/proveedores/tecnoperfiles.webp" },
    { id: 5, name: "Vorne", logo: "/proveedores/vorne.webp" },
    { id: 5, name: "Bestchem", logo: "/proveedores/bestchem.webp" },
    { id: 5, name: "Reze", logo: "/proveedores/reze.webp" },
  ]

  // Duplicamos el array para crear el efecto infinito
  const duplicatedClients = [...clients, ...clients, ...clients]

  return (
    <div className="father">
      <section className="clients-section">
        <div className="clients-container">
          {/* Título atrapante */}
          <h1 className="section-title mb-3">Nuestros <b>proveedores</b></h1>
          <Separador color="--color-3" width="100px" />
          {/* Carrusel infinito */}
          <div className="carousel-wrapper mt-5">
            <div className="carousel-track">
              {duplicatedClients.map((client, index) => (
                <div key={`${client.id}-${index}`} className="client-item">
                  <img src={client.logo || "user-placeholder.webp"} alt={`Logo de ${client.name}`} className="client-logo" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Proveedores
