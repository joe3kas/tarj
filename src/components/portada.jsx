import { useEffect, useRef } from "react";
import Video from "/video/video-intro.mp4"; // ruta correcta a tu video

function Portada() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      const tryPlay = async () => {
        try {
          await video.play();
        } catch (err) {
          // Si el navegador bloquea autoplay, espera una interacción del usuario
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
        <div id="home" className="fh5co-hero relative" data-section="home">
          {/* 🎥 Video de fondo */}
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src={Video}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />

          {/* 🖤 Capa oscura */}
          <div className="fh5co-overlay absolute inset-0 z-10 opacity-60 bg-black"></div>

          {/* 💍 Contenido */}
          <div
            className="fh5co-cover text-center relative flex items-center justify-center z-30"
            style={{ height: "100dvh" }}
            data-stellar-background-ratio="0.5"
          >
            <div className="display-t w-full">
              <div className="display-tc align-middle">
                <div className="container">
                  <div className="col-md-10 col-md-offset-1">
                    <div
                      className="animate-box"
                      style={{ color: "white", position: "relative", zIndex: 50 }}
                    >
                      <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Nuestra Boda
                      </h1>
                      <h2 className="text-2xl md:text-4xl mb-2 font-light">
                        Arturo &amp; Angie
                      </h2>
                      <div
                        style={{
                          marginTop: "35px",
                          color: "rgba(255, 255, 255, 0.9)",
                          textShadow: "0 2px 6px rgba(0,0,0,0.25)",
                        }}
                      >
                        <div
                          style={{
                            height: "1px",
                            width: "60px",
                            background: "rgba(255, 255, 255, 0.6)",
                            margin: "0 auto 12px",
                          }}
                        ></div>

                        <p
                          style={{
                            fontSize: "1.6rem",
                            fontStyle: "italic",
                            letterSpacing: "1px",
                          }}
                        >
                          05 · Diciembre · 2025
                        </p>

                        <div
                          style={{
                            height: "1px",
                            width: "60px",
                            background: "rgba(255, 255, 255, 0.6)",
                            margin: "12px auto 0",
                          }}
                        ></div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portada;
