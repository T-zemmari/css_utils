import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Componentes/LandingPage/LandingPage";
import BoxShadowGeneretor from "./Componentes/BoxShadowGenerator/BoxShadowGeneretor";
import BackgroundGenerator from "./Componentes/BackgroundGenerator/BackgroundGenerator";
import Navbar from "./Componentes/Navbar/Navbar";


function App() {
  return (
    <>
      <Router>
        <div className="contenedor_app">
          <Navbar />
          <Routes>
            <Route path="/" exact element={<LandingPage />} />
            <Route
              path="/box-shadow-generator"
              exact
              element={<BoxShadowGeneretor />}
            />
            <Route
              path="/background-generator"
              exact
              element={<BackgroundGenerator />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
