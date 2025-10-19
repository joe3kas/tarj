import React, { useState } from "react";

function Galeria() {
  const fotos = [
    "images/30 fotos/E1.jpg",
    "images/30 fotos/E56.jpg",
    "images/30 fotos/E51.jpg",
    "images/30 fotos/E46.jpg",
    "images/30 fotos/E13.jpg",
    "images/30 fotos/E37.jpg",
    "images/30 fotos/E12.jpg",
    "images/30 fotos/E7.jpg",
    "images/30 fotos/E30.jpg",
     "images/30 fotos/E9.jpg",
    "images/30 fotos/E43.jpg",
     "images/30 fotos/E21.jpg",
    "images/30 fotos/E32.jpg",
    "images/30 fotos/E41.jpg",
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [indexActual, setIndexActual] = useState(0);

  const abrirLightbox = (index) => {
    setIndexActual(index);
    setLightboxOpen(true);
  };

  const cerrarLightbox = () => setLightboxOpen(false);
  const siguiente = (e) => {
    e.stopPropagation();
    setIndexActual((prev) => (prev + 1) % fotos.length);
  };
  const anterior = (e) => {
    e.stopPropagation();
    setIndexActual((prev) => (prev - 1 + fotos.length) % fotos.length);
  };

  return (
    <div
      id="fh5co-gallery"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "60px 0",
      }}
    >
      {/* 💐 Título */}
      <div
        className="animate-box text-center"
        style={{
          position: "relative",
          zIndex: 1,
          marginBottom: "40px",
        }}
      >
        <h2
          style={{
            color: "#b56d7d",
            fontSize: "42px",
            textShadow: "0 2px 6px rgba(0,0,0,0.08)",
          }}
        >
          Nuestra Galería
        </h2>
        <p
          style={{
            color: "#7a5c60",
            fontStyle: "italic",
            fontSize: "17px",
            marginTop: "5px",
          }}
        >
          Momentos que guardaremos por siempre 💞
        </p>
      </div>

      {/* 🖼️ Masonry Layout */}
      <div
        className="container"
        style={{
          columnCount: 3,
          columnGap: "18px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {fotos.map((src, i) => (
          <div
            key={i}
            className="animate-box"
            style={{
              marginBottom: "18px",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 6px 16px rgba(0, 0, 0, 0.1)",
              breakInside: "avoid",
              cursor: "pointer",
              transition: "transform 0.4s ease, box-shadow 0.4s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.02)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onClick={() => abrirLightbox(i)}
          >
            <img
              src={src}
              alt={`gallery-${i}`}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: "12px",
                transition: "opacity 0.3s ease",
              }}
            />
          </div>
        ))}
      </div>

      {/* 🌹 Lightbox Elegante */}
      {lightboxOpen && (
        <div
          onClick={cerrarLightbox}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(255, 240, 245, 0.96)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            backdropFilter: "blur(8px)",
            animation: "fadeIn 0.4s ease",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
              padding: "20px",
            }}
          >
            <img
              src={fotos[indexActual]}
              alt="foto"
              style={{
                maxWidth: "95%",
                maxHeight: "95%",
                borderRadius: "10px",
                objectFit: "contain",
                boxShadow:
                  "0 10px 35px rgba(0, 0, 0, 0.25), 0 0 50px rgba(245, 180, 190, 0.25)",
                border: "1px solid rgba(240, 200, 210, 0.5)",
              }}
            />

            {/* ✕ Botón cerrar — plano y elegante */}
            <button
              onClick={cerrarLightbox}
              style={{
                position: "absolute",
                top: "40px",
                right: "50px",
                background: "transparent",
                border: "none",
                color: "#8b5e6a",
                fontSize: "36px",
                cursor: "pointer",
                transition: "color 0.3s ease",
                textShadow: "0 2px 4px rgba(0,0,0,0.15)",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#b86b7b")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#8b5e6a")}
            >
              ×
            </button>

            {/* Flechas laterales sutiles */}
            <button onClick={anterior} style={botonFlecha("left")}>
              ‹
            </button>
            <button onClick={siguiente} style={botonFlecha("right")}>
              ›
            </button>
          </div>

          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
          `}</style>
        </div>
      )}

      {/* 📱 Responsive */}
      <style>{`
        @media (max-width: 992px) {
          .container {
            column-count: 2 !important;
          }
        }
        @media (max-width: 600px) {
          .container {
            column-count: 1 !important;
          }
        }
      `}</style>
    </div>
  );
}

/* 🌸 Flechas delicadas sin fondo */
const botonFlecha = (lado) => ({
  position: "absolute",
  top: "50%",
  [lado]: "60px",
  transform: "translateY(-50%)",
  fontSize: "56px",
  background: "transparent",
  border: "none",
  color: "#8b5e6a",
  cursor: "pointer",
  textShadow: "0 2px 6px rgba(0,0,0,0.2)",
  transition: "color 0.3s ease, transform 0.2s ease",
  lineHeight: "1",
  userSelect: "none",
  zIndex: 2,
  padding: "5px 10px",
  fontWeight: "300",
  opacity: 0.9,
  outline: "none",
  ':hover': {
    color: "#b86b7b",
    transform: "translateY(-50%) scale(1.1)",
  },
});

export default Galeria;
