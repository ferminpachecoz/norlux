import {Routes, Route} from "react-router-dom"
import "./App.scss"
import "./Fonts.scss"
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route exact={true} path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
