import { useEffect, useRef } from "react";
import Video from "/video/video-intro.mp4"; // Asegúrate de que la ruta sea correcta

function Portada() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      const tryPlay = async () => {
        try {
          await video.play();
        } catch (err) {
          const onUserAction = async () => {
            try {
              await video.play();
              document.removeEventListener("click", onUserAction);
              document.removeEventListener("touchstart", onUserAction);
            } catch { }
          };
          document.addEventListener("click", onUserAction);
          document.addEventListener("touchstart", onUserAction);
        }
      };
      tryPlay();
    }
  }, []);

  return (
    <div id="fh5co-wrapper">
      <div id="fh5co-page">
        <section id="home" className="fh5co-hero relative" data-section="home">
          {/* 🎥 Video de fondo */}
          <div className="video-container">
            <video
              ref={videoRef}
              src={Video}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="video-bg"
            />
          </div>

          {/* 🖤 Capa oscura sutil */}
          <div className="fh5co-overlay"></div>

          {/* 💍 Contenido centrado */}
          <div className="fh5co-cover text-center relative z-30">
            <div className="container h-100 d-flex flex-column justify-content-center align-items-center">
              <div className="animate-box text-white">
                <h2 className="fw-bold display-4 mb-3">Nuestra Boda</h2>
                <br />
                <h1 className="fw-light display-5 mb-4">Arturo &amp; Angie</h1>

                {/* 🌸 Separador + fecha */}
                <div className="separador">
                  <div className="linea"></div>
                  <p className="fecha">05 · Diciembre · 2025</p>
                  <div className="linea"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 🌷 Estilos */}
        <style>{`
          .video-container {
            position: absolute;
            inset: 0;
            overflow: hidden;
            z-index: 0;
          }

          .video-bg {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .fh5co-overlay {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.45);
            z-index: 10;
          }

          .fh5co-cover {
            position: relative;
            min-height: 100dvh;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 20;
          }

          .separador {
            margin-top: 25px;
            color: rgba(255, 255, 255, 0.9);
            text-shadow: 0 2px 6px rgba(0,0,0,0.25);
          }

          #home .linea {
            height: 1px;
            width: 60px;
            background: rgba(255, 255, 255, 0.7);
            margin: 0 auto 10px;
             margin: 7px auto 0;
          }

          .fecha {
            font-size: 1.5rem;
            font-style: italic;
            letter-spacing: 1px;
            margin: 0;
          }

          @media (max-width: 768px) {
          .hh1{
          font-size: 3rem !important;
          }
            .fh5co-cover h1 {
              font-size: 5rem !important;
            }
            .fh5co-cover h2 {
              font-size: 3rem !important;
               padding-top: 10px;
            }
            .fecha {
              font-size: 2rem;
            }
          }
        `}</style>
      </div>
    </div>
  );
}

export default Portada;
