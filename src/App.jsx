import { useEffect, useState, useRef } from "react";
import Portada from "./components/portada.jsx";
import Amor from "./components/amor.jsx";
import Contador from "./components/contador.jsx";
import Asistencia from "./components/asistencia.jsx";
import Historia from "./components/historia.jsx";
import Footer from "./components/footer.jsx";
import Galeria from "./components/galeria.jsx";
import Codigo from "./components/codigo.jsx";
import Mapa from "./components/mapa.jsx";
import Niños from "./components/niños.jsx";
import "./App.css";

function App() {
  const [reproduciendo, setReproduciendo] = useState(false);
  const audioRef = useRef(null);
  const [mostrarArriba, setMostrarArriba] = useState(false);
  const [imgUpError, setImgUpError] = useState(false);

  // 🎶 Inicializa música (useRef para evitar re-renders por el objeto Audio)
  useEffect(() => {
    const sonido = new Audio("/song/cancion.mp3");
    sonido.loop = true;
    sonido.volume = 0.5;
    audioRef.current = sonido;

    const intentarPlay = async () => {
      try {
        await sonido.play();
        setReproduciendo(true);
      } catch {
        // navegador bloquea autoplay
      }
    };

    document.addEventListener("click", intentarPlay, { once: true });
    return () => {
      sonido.pause();
      document.removeEventListener("click", intentarPlay);
    };
  }, []);

  // 🎵 Alternar música manualmente
  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (reproduciendo) {
      audio.pause();
      setReproduciendo(false);
    } else {
      audio.play().then(() => setReproduciendo(true)).catch(()=>{});
    }
  };

  // ⤴️ Subir al inicio
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 👀 Mostrar / ocultar el botón al hacer scroll
  useEffect(() => {
    const manejarScroll = () => {
      // más robusto: usar >= 400 y redondear
      setMostrarArriba(Math.round(window.scrollY) >= 400);
    };

    // check inicial por si la página ya está scrolleada
    manejarScroll();

    window.addEventListener("scroll", manejarScroll, { passive: true });
    return () => window.removeEventListener("scroll", manejarScroll);
  }, []);

  // fallback handler si la imagen no carga
  const handleUpImgError = () => {
    setImgUpError(true);
  };

  return (
    <>
      <Portada />
      <Amor />
      <Contador />
      <Historia />
      <Mapa />
      <Codigo />
      <Galeria />
      <Niños />
      <Asistencia />
      <Footer />

      {/* 🎶 Botones flotantes */}
      <div className="botones-flotantes" aria-hidden={false}>
        <button
          className="btn-musica"
          onClick={toggleMusic}
          title="Reproducir / Pausar música"
          aria-pressed={reproduciendo}
        >
          <img
            src={reproduciendo ? "/images/icon/mute.png" : "/images/icon/play.png"}
            alt={reproduciendo ? "Pausar música" : "Reproducir música"}
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
        </button>

        {/* RENDER CONDICIONAL: sólo aparece en DOM cuando mostrarArriba === true */}
        {mostrarArriba && (
          <button
            className="btn-arriba"
            onClick={scrollToTop}
            title="Volver arriba"
            aria-label="Volver arriba"
            role="button"
          >
            {imgUpError ? (
              // fallback textual si la imagen no carga
              <span className="up-fallback" aria-hidden={false}>↑</span>
            ) : (
              <img
                src="/images/icon/up.png"
                alt="Volver arriba"
                onError={handleUpImgError}
                style={{ display: imgUpError ? "none" : "block" }}
              />
            )}
          </button>
        )}
      </div>

      {/* ✨ Estilos */}
      <style>{`
        .botones-flotantes {
          position: fixed;
          bottom: 20px;
          right: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          z-index: 99999; /* FORZADO ALTO por si algo lo tapaba */
          pointer-events: none; /* por defecto inactivo, botones controlan su propio pointer-events */
        }

        .botones-flotantes button {
          pointer-events: auto; /* permite clics en botones */
          background: rgba(255, 255, 255, 0.9); /* más opaco para evitar confundirse con fondo */
          border: 1px solid rgba(214, 180, 163, 0.9);
          backdrop-filter: blur(6px);
          border-radius: 50%;
          width: 55px;
          height: 55px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 6px 20px rgba(0,0,0,0.18);
          transition: transform 0.22s ease, opacity 0.28s ease;
          outline: none;
          -webkit-tap-highlight-color: transparent;
        }

        .btn-musica:hover,
        .btn-arriba:hover {
          transform: translateY(-6px) scale(1.04);
        }

        .botones-flotantes img {
          width: 26px;
          height: 26px;
          pointer-events: none;
          display: block;
        }

        /* 🆙 Botón subir: visible sólo cuando se renderiza (ya no dependemos de opacity hack) */
        .btn-arriba {
          opacity: 1;
          transform: translateY(0);
          transition: transform 0.28s cubic-bezier(.2,.9,.2,1), opacity 0.28s ease;
        }

        .up-fallback {
          font-size: 22px;
          line-height: 1;
          font-weight: 700;
          color: #333;
          user-select: none;
        }

        /* Animación sutil flotante (para llamar la atención) */
        @keyframes flotar {
          0% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0); }
        }

        /* Mantener consistencia en móviles */
        @media (max-width: 600px) {
          .botones-flotantes {
            bottom: 16px;
            right: 16px;
            gap: 10px;
          }
          .botones-flotantes button {
            width: 48px;
            height: 48px;
          }
          .botones-flotantes img {
            width: 22px;
            height: 22px;
          }
        }
      `}</style>
    </>
  );
}

export default App;