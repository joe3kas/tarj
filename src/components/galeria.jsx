import React, { useState } from "react";

function Galeria() {
  const fotos = [
    "images/30 fotos/E52.jpg",
    "images/30 fotos/E56.jpg",
    "images/30 fotos/E55.jpg",
    "images/30 fotos/E53.jpg",
    "images/30 fotos/E13.jpg",
    "images/30 fotos/E51.jpg",
    "images/30 fotos/E49.jpg",
    "images/30 fotos/E48.jpg",
    "images/30 fotos/E46.jpg",
    "images/30 fotos/E43.jpg",
    "images/30 fotos/E41.jpg",
    "images/30 fotos/E40.jpg",
    "images/30 fotos/E39.jpg",
    "images/30 fotos/E38.jpg",
    "images/30 fotos/E37.jpg",
    "images/30 fotos/E32.jpg",
    "images/30 fotos/E30.jpg",
    "images/30 fotos/E26.jpg",
    "images/30 fotos/E21.jpg",
    "images/30 fotos/E19.jpg",
    "images/30 fotos/E18.jpg",
    "images/30 fotos/E15.jpg",
    "images/30 fotos/E13.jpg",
    "images/30 fotos/E1.jpg",
    "images/30 fotos/E7.jpg",
    "images/30 fotos/E9.jpg",
    "images/30 fotos/E12.jpg",
  ];

  const [indexActual, setIndexActual] = useState(null);

  const cerrarModal = () => setIndexActual(null);
  const siguiente = () =>
    setIndexActual((prev) => (prev + 1) % fotos.length);
  const anterior = () =>
    setIndexActual((prev) => (prev - 1 + fotos.length) % fotos.length);

  return (
    <div
      id="fh5co-gallery"
      style={{ position: "relative", overflow: "hidden", padding: "60px 0" }}
    >
      {/* 💐 Encabezado */}
      <div
        className="animate-box text-center"
        style={{ position: "relative", zIndex: 1, marginBottom: "50px" }}
      >
        <h1
          style={{
            color: "#b56d7d",
            textShadow: "0 2px 6px rgba(0,0,0,0.08)",
          }}
        >
          Nuestra Galería
        </h1>

        <div
          style={{
            position: "relative",
            display: "inline-block",
            marginTop: "10px",
          }}
        >
          <p
            style={{
              color: "#7a4a4a",
              fontStyle: "italic",
              fontSize: "1.8rem",
              marginTop: "8px",
              marginBottom: "16px",
              lineHeight: "1.5",
              background:
                "linear-gradient(90deg, rgba(245, 190, 200, 0.1) 0%, rgba(255, 240, 245, 0.6) 50%, rgba(245, 190, 200, 0.1) 100%)",
              borderRadius: "12px",
              padding: "8px 18px",
              display: "inline-block",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              backdropFilter: "blur(4px)",
              border: "1px solid rgba(214,180,163,0.25)",
              position: "relative",
            }}
          >
            Momentos que guardaremos por siempre
            {/* 🌸 Flores decorativas en las esquinas */}
            <img
              src="/images/flores/flor1.png"
              alt="Flor izquierda"
              className="flor-esquina flor-izquierda"
            />
            <img
              src="/images/flores/flor1.png"
              alt="Flor derecha"
              className="flor-esquina flor-derecha"
            />
          </p>

          {/* ✨ Cenefa floral decorativa */}
          <div
            style={{
              position: "absolute",
              bottom: "-20px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "180px",
              height: "2px",
              background:
                "linear-gradient(90deg, #d6bba3 0%, #f3cbd1 50%, #d6bba3 100%)",
              borderRadius: "2px",
              boxShadow: "0 2px 8px rgba(240,200,210,0.4)",
            }}
            className="cenefa-floral"
          ></div>
        </div>
      </div>

      {/* 🖼️ Galería */}
      <div
        className="galeria-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "18px",
          padding: "0 30px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {fotos.map((src, i) => (
          <div
            key={i}
            className="galeria-item animate-box"
            onClick={() => setIndexActual(i)}
            style={{
              cursor: "pointer",
              overflow: "hidden",
              borderRadius: "12px",
              boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
              background: "rgba(255,255,255,0.3)",
              backdropFilter: "blur(4px)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.02)";
              e.currentTarget.style.boxShadow =
                "0 8px 20px rgba(0,0,0,0.15)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 6px 16px rgba(0,0,0,0.1)";
            }}
          >
            <img
              src={src}
              alt={`foto-${i}`}
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                aspectRatio: "auto",
                borderRadius: "12px",
                transition: "all 0.3s ease",
              }}
              onLoad={(e) => {
                const img = e.target;
                const isVertical = img.naturalHeight > img.naturalWidth;
                img.parentElement.style.gridRowEnd = isVertical
                  ? "span 2"
                  : "span 1";
              }}
            />
          </div>
        ))}
      </div>

      {/* 🖼️ Modal para ver imágenes */}
      {indexActual !== null && (
        <div className="modal-fondo" onClick={cerrarModal}>
          <button className="boton-cerrar" onClick={cerrarModal}>
            ✕
          </button>
          <button
            className="boton-nav izquierda"
            onClick={(e) => {
              e.stopPropagation();
              anterior();
            }}
          >
            ‹
          </button>
          <img
            src={fotos[indexActual]}
            alt="Ampliada"
            className="imagen-modal"
          />
          <button
            className="boton-nav derecha"
            onClick={(e) => {
              e.stopPropagation();
              siguiente();
            }}
          >
            ›
          </button>
        </div>
      )}

      <style>{`
  /* 🌼 Flores decorativas */
  .flor-esquina {
    position: absolute;
    width: 70px;
    bottom: -60px;
    pointer-events: none;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
    transition: all 0.3s ease;
  }
  .flor-izquierda { left: -60px; transform: rotate(-15deg); }
  .flor-derecha { right: -60px; transform: rotate(15deg); }

  /* 📱 Responsividad */
  @media (max-width: 768px) {
    .flor-esquina {
      width: 55px;
      bottom: -50px;
    }
    .flor-izquierda { left: -25px; }
    .flor-derecha { right: -25px; }
  }
  @media (max-width: 480px) {
    .flor-esquina {
      width: 48px;
      bottom: -50px;
    }
    .flor-izquierda { left: -12px; }
    .flor-derecha { right: -12px; }
  }

  /* 🌙 Modal de imagen */
  .modal-fondo {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.8);
    display: flex; justify-content: center; align-items: center;
    z-index: 9999;
  }
  .imagen-modal {
    max-width: 90%; max-height: 80vh;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.4);
  }
  .boton-cerrar {
    position: absolute; top: 20px; right: 30px;
    font-size: 30px; color: white;
    background: none; border: none; cursor: pointer;
  }
  .boton-nav {
    position: absolute; top: 50%;
    transform: translateY(-50%);
    font-size: 60px; color: white;
    background: none; border: none; cursor: pointer;
    padding: 0 20px;
  }
  .izquierda { left: 10px; }
  .derecha { right: 10px; }
`}</style>
    </div>
  );
}

export default Galeria;