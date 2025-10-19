import React, { useEffect, useState } from "react";

function CuentaRegresiva() {
  const [tiempoRestante, setTiempoRestante] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    const fechaBoda = new Date("2025-12-05T17:00:00").getTime();

    const actualizar = () => {
      const ahora = Date.now();
      const distancia = fechaBoda - ahora;

      if (distancia <= 0) {
        setTiempoRestante({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
        return;
      }

      const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
      const horas = Math.floor((distancia / (1000 * 60 * 60)) % 24);
      const minutos = Math.floor((distancia / (1000 * 60)) % 60);
      const segundos = Math.floor((distancia / 1000) % 60);

      setTiempoRestante({ dias, horas, minutos, segundos });
    };

    actualizar();
    const intervalo = setInterval(actualizar, 1000);
    return () => clearInterval(intervalo);
  }, []);

  const formato = (n) => String(n ?? 0).padStart(2, "0");

  return (
    <section
      id="contador"
      className="relative text-center"
      style={{
        background: "linear-gradient(180deg, #fff9f8 0%, #fbe8e6 100%)",
        padding: "80px 20px",
        position: "relative",
        overflow: "visible", // 👈 Permite ver las flores fuera sin romper layout
      }}
    >
      {/* 🌸 Flores decorativas detrás del contenido */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "visible",
          pointerEvents: "none",
          zIndex: 0, // 👈 detrás del contenido
        }}
      >
        <img
          src="/images/flores/flor15.png"
          alt="Flor superior izquierda"
          style={{
            position: "absolute",
            top: "-60px", // sobresale sin expandir el section
            left: "-40px",
            width: "200px",
            opacity: "0.85",
            transform: "rotate(-5deg)",
            filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.1))",
          }}
        />
        <img
          src="/images/flores/flor12.png"
          alt="Flor inferior derecha"
          style={{
            position: "absolute",
            bottom: "-60px", // sobresale hacia abajo
            right: "-40px",
            width: "220px",
            opacity: "0.9",
            transform: "rotate(5deg)",
            filter: "drop-shadow(0 4px 5px rgba(0,0,0,0.1))",
          }}
        />
      </div>

      {/* 💕 Contenido principal */}
      <div
        className="relative"
        style={{
          maxWidth: "980px",
          margin: "0 auto",
          color: "#7a4a4a",
          position: "relative",
          zIndex: 5, // 👈 garantiza que el texto esté sobre las flores
        }}
      >
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 600,
            marginBottom: "20px",
            color: "#b76e79",
            letterSpacing: "1px",
          }}
        >
          ¡Estás invitado!
        </h2>

        <p
          style={{
            fontSize: "clamp(1.1rem, 3.4vw, 1.6rem)",
            color: "#805b5b",
            lineHeight: 1.6,
            marginBottom: "35px",
            maxWidth: "600px",
            marginInline: "auto",
          }}
        >
          Nos encantaría que formaras parte de este momento tan especial para
          nosotros. <br />
          <span style={{ fontWeight: "500" }}>Ya faltan...</span>
        </p>

        {/* ⏳ Contador */}
        <div
          className="contador-row"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "stretch",
            flexWrap: "nowrap",
            gap: "12px",
            width: "100%",
          }}
        >
          {[
            ["DÍAS", formato(tiempoRestante.dias)],
            ["HORAS", formato(tiempoRestante.horas)],
            ["MINUTOS", formato(tiempoRestante.minutos)],
            ["SEGUNDOS", formato(tiempoRestante.segundos)],
          ].map(([label, value]) => (
            <div
              key={label}
              className="contador-bloque"
              style={{
                flex: "1 1 0",
                minWidth: "60px",
                background: "rgba(255,255,255,0.85)",
                border: "1px solid rgba(214,180,163,0.35)",
                borderRadius: "12px",
                padding: "12px 8px",
                boxShadow: "0 6px 15px rgba(0,0,0,0.05)",
              }}
            >
              <h3
                style={{
                  fontSize: "clamp(1.4rem, 6vw, 2.6rem)",
                  margin: "0 0 6px 0",
                  color: "#a86c6c",
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                {value}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "clamp(0.8rem, 2.5vw, 1rem)",
                  color: "#805b5b",
                  fontStyle: "italic",
                }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* 🌸 Línea decorativa */}
        <div
          style={{
            width: "70px",
            height: "2px",
            background: "#d6bba3",
            margin: "40px auto 0",
            borderRadius: "3px",
          }}
        />
      </div>

      {/* 🎨 CSS global de control */}
      <style>{`
        html, body {
          overflow-x: hidden !important; /* 🚫 sin scroll horizontal */
        }

        #contador {
          position: relative;
          overflow: visible !important; /* 👈 permite que las flores salgan visualmente */
          z-index: 0;
        }

        /* 🌸 Ajuste móvil */
        @media (max-width: 768px) {
          #contador img[alt="Flor superior izquierda"] {
            width: 130px !important;
            top: -40px !important;
            left: -20px !important;
            opacity: 0.9 !important;
          }
          #contador img[alt="Flor inferior derecha"] {
            width: 150px !important;
            bottom: -40px !important;
            right: -20px !important;
            opacity: 0.9 !important;
          }
        }

        @media (max-width: 480px) {
          #contador {
            padding: 50px 15px;
          }
          #contador img[alt="Flor superior izquierda"],
          #contador img[alt="Flor inferior derecha"] {
            width: 100px !important;
            opacity: 0.8 !important;
          }
        }
      `}</style>
    </section>
  );
}

export default CuentaRegresiva;
