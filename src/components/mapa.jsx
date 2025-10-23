import React from "react";

function Mapa() {
  return (
    <section
      id="fh5co-when-where"
      style={{
        background: "linear-gradient(180deg, #fffaf9 0%, #fbe9e7 100%)",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
        color: "#4a2e2e",
      }}
    >
      {/* 🌸 Flores decorativas */}
      <img
        src="/images/flores/flor4.png"
        alt="Flor inferior derecha"
        style={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          width: "200px",
          maxWidth: "30vw",
          opacity: 0.9,
          transform: "rotate(5deg)",
          filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.08))",
          pointerEvents: "none",
          zIndex: 0,
          animation: "floatSoft 7s ease-in-out infinite",
        }}
      />

      {/* 💒 CONTENIDO */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
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
          Lugares
        </h2>

        <p
        >
          Únete a nosotros en este día tan significativo. Aquí podrás encontrar los lugares
          donde celebraremos nuestra unión.
        </p>

        {/* 🏛️ GRID DE TARJETAS */}
        <div
          className="map-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "40px",
            justifyItems: "center",
          }}
        >
          {/* Ceremonia */}
          <div style={cardStyle}>
            <div
              style={{
                height: "240px",
                backgroundImage: "url('/images/30 fotos/iglesia.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div style={{ padding: "25px" }}>
              <h1 style={titleStyle}>Ceremonia de Boda</h1>
              <br />
              <p className="texto-mapa" style={{ fontWeight: 600, marginBottom: "8px" }}>
                Viernes, 5 de diciembre 2025 – 5:00 PM <br />
                Iglesia Divino Niño
              </p>
              <p className="texto-mapa" style={{ color: "#805b5b" }}>
                Calle 14a, Cra. 32, Barrio Galicia, Santa Marta
              </p>
              <a
                href="https://www.google.com/maps?q=Iglesia+Divino+Niño+Santa+Marta"
                target="_blank"
                rel="noopener noreferrer"
                className="link-mapa"
                style={linkStyle}
              >
                Ver ubicación 📍
              </a>
            </div>
          </div>

          {/* Fiesta */}
          <div style={cardStyle}>
            <div
              style={{
                height: "240px",
                backgroundImage: "url('/images/30 fotos/lugar.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div style={{ padding: "25px" }}>
              <h3 style={titleStyle}>Fiesta de Boda</h3>
              <br />
              <p className="texto-mapa" style={{ fontWeight: 600, marginBottom: "8px" }}>
                Viernes, 5 de diciembre 2025 – 7:00 PM <br />
                Cabaña El Rastrojito
              </p>
              <p className="texto-mapa" style={{ color: "#805b5b" }}>
                Santa Marta, Magdalena
              </p>
              <a
                href="https://maps.app.goo.gl/XEyiWb2AJzukXFGq8"
                target="_blank"
                rel="noopener noreferrer"
                className="link-mapa"
                style={linkStyle}
              >
                Ver ubicación 📍
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ✨ Estilos adicionales */}
      <style>{`
        /* 🌿 Fuente elegante y legible solo para párrafos y enlaces */
        .texto-mapa, .link-mapa {
          font-weight: 400;
          letter-spacing: 0.3px;
          color: #5c3c3c;
          font-size: clamp(1.8rem, 2.6vw, 1.3rem);
        }

        .link-mapa {
          font-weight: 600;
          letter-spacing: 0.4px;
        }

        html, body { overflow-x: hidden !important; }
        #fh5co-when-where { overflow: hidden !important; }

        @keyframes floatSoft {
          0%, 100% { transform: translateY(0) rotate(-3deg); }
          50% { transform: translateY(-6px) rotate(-4deg); }
        }

        @media (max-width: 900px) {
          .map-grid { gap: 30px; }
          #fh5co-when-where img { width: 150px !important; }
        }

        @media (max-width: 768px) {
          #fh5co-when-where { padding: 60px 15px; }
          .map-grid { grid-template-columns: 1fr; gap: 25px; }
          #fh5co-when-where img { width: 120px !important; }
        }

        @media (max-width: 480px) {
          #fh5co-when-where { padding: 50px 10px; }
          .map-grid { gap: 20px; }
          #fh5co-when-where img { width: 90px !important; }
        }
      `}</style>
    </section>
  );
}

const cardStyle = {
  width: "100%",
  maxWidth: "520px",
  borderRadius: "16px",
  overflow: "hidden",
  background: "rgba(255,255,255,0.8)",
  border: "1px solid rgba(214,180,163,0.35)",
  boxShadow: "0 8px 28px rgba(0,0,0,0.06)",
  backdropFilter: "blur(6px)",
  transition: "transform 220ms ease, box-shadow 220ms ease",
};

const titleStyle = {
  margin: "0 0 8px 0",
  color: "#8b4e4e",
  fontSize: "1.8rem",
};

const linkStyle = {
  display: "inline-block",
  marginTop: "15px",
  padding: "10px 25px",
  background: "rgba(255, 255, 255, 0.9)",
  border: "1px solid #d6bba3",
  borderRadius: "30px",
  color: "#8b4e4e",
  fontWeight: "600",
  textDecoration: "none",
  boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  transition: "background 0.3s ease, transform 0.2s ease",
};

export default Mapa;
