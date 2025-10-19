import Portada from './components/portada.jsx'
import './App.css'
import Amor from './components/amor.jsx'
import Contador from './components/contador.jsx'
import Asistencia from './components/asistencia.jsx'
import Historia from './components/historia.jsx'
import Footer from './components/footer.jsx'
import Galeria from './components/galeria.jsx'
import activarAnimaciones from "../src/animacion.js";
import { useEffect } from "react";
import Codigo from './components/codigo.jsx'
import Mapa from './components/mapa.jsx'

function App({ children }) {
  useEffect(() => {
    activarAnimaciones();
  }, []);

  return (
    <>
      <Portada />
      <Amor />
      <Contador />
      <Historia />
      <Mapa />
      <Codigo />
      <Galeria />
      <Asistencia />
      <Footer />
    </>
  )
}

export default App;
