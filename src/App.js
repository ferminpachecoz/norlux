import {Routes, Route} from "react-router-dom"
import "./App.scss"
import "./Fonts.scss"
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import WhyPVC from "./pages/WhyPVC";
import FAQs from "./pages/FAQs";
import Developer from "./pages/Developer";
import Arquitect from "./pages/Arquitect";
import DobleContacto from "./pages/DobleContacto";
import Corredizo from "./pages/Corredizo";
import LineaEfficient from "./pages/Lineas/LineaEfficient";
import PuertaPivotante from "./pages/Lineas/PuertaPivotante";
import LineaAdvance from "./pages/Lineas/LineaAdvance";
import LineaPrime from "./pages/Lineas/LineaPrime";
import LineaJumbo from "./pages/Lineas/LineaJumbo";
import LineaEvolution from "./pages/Lineas/LineaEvolution";
import Decks from "./pages/Pisos/Decks";
import Zocalos from "./pages/Pisos/Zocalos";
import PisosInterior from "./pages/Pisos/PisosInterior";
import Novedades from "./pages/Novedades";
import Contacto from "./pages/Contacto";
import Tubulares from "./pages/Design/Tubulares";
import WallPanelInterior from "./pages/Design/WallPanelInterior";
import WallPanelExterior from "./pages/Design/WallPanelExterior";
import Revestimiento from "./pages/Design/Revestimiento";
import Noticia1 from "./pages/Novedades/Noticia1";
import Noticia2 from "./pages/Novedades/Noticia2";

function App() {
  return (
    <>
    <div className='wpp-button'>
      <a 
      href="https://wa.me/5491123269142?text=Hola%21%20Me%20gustar%C3%ADa%20hacer%20una%20consulta%20sobre%20las%20aberturas%20de%20N%C3%B6rlux." 
      target="_blank" 
      rel="noopener noreferrer">
        <i className="bi bi-whatsapp"></i>
      </a>
    </div>
    <Routes>
      <Route exact={true} path="/" element={<Home />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/por-que-pvc" element={<WhyPVC />} />
      <Route path="/FAQs" element={<FAQs />} />
      <Route path="/developer" element={<Developer />} />
      <Route path="/arquitect" element={<Arquitect />} />
      <Route path="/novedades" element={<Novedades />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/perfiles/doble-contacto" element={<DobleContacto />} />
      <Route path="/perfiles/corredizo" element={<Corredizo />} />
      <Route path="/perfiles/doble-contacto/linea-efficient" element={<LineaEfficient />} />
      <Route path="/perfiles/doble-contacto/puerta-pivotante" element={<PuertaPivotante />} />
      <Route path="/perfiles/corredizo/linea-advance" element={<LineaAdvance />} />
      <Route path="/perfiles/corredizo/linea-prime" element={<LineaPrime />} />
      <Route path="/perfiles/corredizo/linea-jumbo" element={<LineaJumbo />} />
      <Route path="/perfiles/corredizo/linea-evolution" element={<LineaEvolution />} />
      <Route path="/pisos/decks" element={<Decks />} />
      <Route path="/pisos/zocalos" element={<Zocalos />} />
      <Route path="/pisos/pisos-de-interior" element={<PisosInterior />} />
      <Route path="/in-out-design/tubulares" element={<Tubulares />} />
      <Route path="/in-out-design/wall-panel-interior" element={<WallPanelInterior />} />
      <Route path="/in-out-design/wall-panel-exterior" element={<WallPanelExterior />} />
      <Route path="/in-out-design/revestimientos" element={<Revestimiento />} />
      <Route path="/novedades/pvc-vs-aluminio" element={<Noticia1 />} />
      <Route path="/novedades/tipos-de-vidrio" element={<Noticia2 />} />
    </Routes>
    </>
  );
}

export default App;
