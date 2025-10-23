import React from "react";

function Ninos() {
  return (
    <section
      id="fh5co-ninos"
      className="relative text-center"
      style={{
        backgroundImage: `
          url('/images/flores/textura.png'),
          linear-gradient(180deg, #fff9f8 0%, #fbe9e7 100%)
        `,
        padding: "80px 40px",
        position: "relative",
        overflow: "hidden",
        width: "100%",
      }}
    >
      {/* 💎 Contenedor principal tipo cristal */}
      <div
        className="contenido-cristal relative z-10"
        style={{
          maxWidth: "980px",
          margin: "0 auto",
          color: "#7a4a4a",
          background: "rgba(255,255,255,0.6)",
          borderRadius: "16px",
          padding: "60px 30px",
          backdropFilter: "blur(10px)",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
        }}
      >
        {/* 🌸 Flores dentro del cristal */}
        <img
          src="/images/flores/izq.png"
          alt="Flor superior izquierda"
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            width: "160px",
            opacity: "0.85",
            transform: "rotate(-5deg)",
            filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.1))",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        <img
          src="/images/flores/der.png"
          alt="Flor inferior derecha"
          style={{
            position: "absolute",
            bottom: "10px",
            right: "10px",
            width: "160px",
            opacity: "0.9",
            transform: "rotate(4deg)",
            filter: "drop-shadow(0 3px 4px rgba(0,0,0,0.1))",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        {/* 🌷 Contenido */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <h2
            style={{
              fontFamily: "var(--font-primaria)",
              fontSize: "2.8rem",
              fontWeight: 400,
              color: "#8b4e4e",
              marginBottom: "20px",
              letterSpacing: "0.5px",
            }}
          >
            Noche para los adultos
          </h2>

          <p
            style={{
         
              fontSize: "clamp(1.8rem, 2.5vw, 2rem)", // 👈 ahora fluido y siempre legible
              color: "#7a4a4a",
              lineHeight: "1.2",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Sabemos cuánto aman a sus pequeños, pero en esta ocasión queremos
            regalarles una noche solo para ustedes.
          </p>

          {/* 🌸 Línea decorativa */}
          <div
            style={{
              width: "70px",
              height: "2px",
              background:
                "linear-gradient(to right, #d6bba3 0%, #f0d8c2 50%, #d6bba3 100%)",
              margin: "35px auto 0",
              borderRadius: "3px",
            }}
          ></div>
        </div>
      </div>

      {/* 🎨 CSS extra */}
      <style>{`
        html, body {
          overflow-x: hidden !important;
        }

        #fh5co-ninos {
          overflow-x: hidden !important;
          overflow-y: hidden !important;
          background-size: cover !important;
        }

        /* 📱 Responsive ajustes */
        @media (max-width: 992px) {
          .contenido-cristal img[alt*="Flor"] {
            width: 130px !important;
            opacity: 0.85 !important;
          }
        }

        @media (max-width: 768px) {
          .contenido-cristal {
            padding: 40px 25px !important;
          }

          .contenido-cristal img[alt*="Flor"] {
            width: 110px !important;
            opacity: 0.8 !important;
          }

          #fh5co-ninos h2 {
            font-size: 2.2rem !important;
          }
        }

        @media (max-width: 480px) {
          #fh5co-ninos {
            padding: 50px 20px !important;
          }

          .contenido-cristal img[alt*="Flor"] {
            width: 90px !important;
            opacity: 0.75 !important;
          }

          #fh5co-ninos h2 {
            font-size: 1.9rem !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Ninos;