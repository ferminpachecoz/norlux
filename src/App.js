import {Routes, Route} from "react-router-dom"
import "./App.scss"
import "./Fonts.scss"
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import WhyPVC from "./pages/WhyPVC";

function App() {
  return (
    <Routes>
      <Route exact={true} path="/" element={<Home />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/por-que-pvc" element={<WhyPVC />} />
    </Routes>
  );
}

export default App;
