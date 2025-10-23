import React from "react";

function Historia() {
  return (
    <div
      id="fh5co-groom-bride"
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "16px",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
        padding: "20px 0",
        background: "transparent", // 🌿 fondo completamente limpio
      }}
    >
      {/* 🌸 SVG decorativo - esquinas */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {/* Superior izquierda */}
        <svg
          viewBox="0 0 100 100"
          style={{
            position: "absolute",
            top: "-10px",
            left: "-10px",
            width: "120px",
            opacity: 0.35,
          }}
        >
          <circle cx="30" cy="30" r="15" fill="#f8c6d3" />
          <circle cx="55" cy="25" r="8" fill="#f3a9c0" />
          <circle cx="40" cy="50" r="10" fill="#ffd6e0" />
          <path
            d="M10 60 C20 40, 50 40, 60 10"
            stroke="#f1b0c5"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        {/* Superior derecha */}
        <svg
          viewBox="0 0 100 100"
          style={{
            position: "absolute",
            top: "-10px",
            right: "-10px",
            width: "120px",
            opacity: 0.35,
            transform: "scaleX(-1)",
          }}
        >
          <circle cx="30" cy="30" r="15" fill="#f8c6d3" />
          <circle cx="55" cy="25" r="8" fill="#f3a9c0" />
          <circle cx="40" cy="50" r="10" fill="#ffd6e0" />
          <path
            d="M10 60 C20 40, 50 40, 60 10"
            stroke="#f1b0c5"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        {/* Inferior izquierda */}
        <svg
          viewBox="0 0 100 100"
          style={{
            position: "absolute",
            bottom: "-10px",
            left: "-10px",
            width: "120px",
            opacity: 0.35,
            transform: "scaleY(-1)",
          }}
        >
          <circle cx="30" cy="30" r="15" fill="#f8c6d3" />
          <circle cx="55" cy="25" r="8" fill="#f3a9c0" />
          <circle cx="40" cy="50" r="10" fill="#ffd6e0" />
          <path
            d="M10 60 C20 40, 50 40, 60 10"
            stroke="#f1b0c5"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        {/* Inferior derecha */}
        <svg
          viewBox="0 0 100 100"
          style={{
            position: "absolute",
            bottom: "-10px",
            right: "-10px",
            width: "120px",
            opacity: 0.35,
            transform: "scale(-1)",
          }}
        >
          <circle cx="30" cy="30" r="15" fill="#f8c6d3" />
          <circle cx="55" cy="25" r="8" fill="#f3a9c0" />
          <circle cx="40" cy="50" r="10" fill="#ffd6e0" />
          <path
            d="M10 60 C20 40, 50 40, 60 10"
            stroke="#f1b0c5"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* 💌 Contenido */}
      <div
        className="animate-box row padding"
        style={{ position: "relative", zIndex: 1, background: "transparent" }}
      >
        <div className="couple-wrap" style={{ background: "transparent" }}>
          {/* 📸 Imagen */}
          <div className="col-md-6 nopadding animate-box" style={{ background: "transparent" }}>
            <div className="img-wrapper">
              <img
                src="images/30 fotos/E43.jpg"
                className="img-responsive couple-photo"
                alt="foto"
              />
            </div>
          </div>

          {/* 💬 Texto */}
          <div className="col-md-6 nopadding animate-box" style={{ background: "transparent" }}>
            <div className="couple-desc" style={{ background: "transparent" }}>
              <br /><br />
              <h1 style={{
                fontSize: "clamp(2.5rem, 5vw, 3.2rem)",
                fontWeight: 600,
                marginBottom: "20px",
                color: "#b76e79",
                letterSpacing: "1px",
                textAlign: "center"
              }}
              >Nosotros</h1>
              <p className="tamaño">
                Esta no es la típica historia de amor de los cuentos de hadas.
                Somos la historia de dos personas diferentes que, contra toda lógica, encontraron en sus diferencias la forma perfecta de encajar.
                Con paciencia, ternura y un amor que no deja de crecer, hemos aprendido a construir un “para siempre” que se alimenta de lo cotidiano, de las risas y de los sueños compartidos.
                Y más allá de todo, queremos seguir siendo dos novios enamorados que nunca dejan de elegirse.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 💅 CSS */}
      <style>{`
        .img-wrapper {
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          position: relative;
          border-radius: 12px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.08);
          background: transparent;
        }

        .couple-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.5s ease;
        }

        .couple-photo:hover {
          transform: scale(1.04);
        }

        .couple-desc h3 {
          color: #c97a93;
          margin-bottom: 10px;
        }

        .couple-desc p {
          color: #6e4a53;
          font-size: clamp(1.8rem, 4.5vw, 1.8rem);
        }

        @media (max-width: 768px) {
          .img-wrapper {
            aspect-ratio: 4 / 3;
          }
        }
      `}</style>
    </div>
  );
}

export default Historia;
