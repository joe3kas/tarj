import React from "react";

function Mapa() {
  return (
    <section
      id="fh5co-when-where"
      aria-label="Lugares"
      style={{
        background: "linear-gradient(180deg, #fffaf9 0%, #fbe9e7 100%)",
        padding: "80px 20px",
        position: "relative",
        overflow: "hidden", // evita scroll en ambos ejes
        boxSizing: "border-box",
        color: "#4a2e2e", // 🎨 color uniforme de texto
      }}
    >
      {/* FLORES */}
      <img
        src="/images/flores/flor15.png"
        alt="Flor superior izquierda"
        style={{
          position: "absolute",
          top: "-40px",
          left: "8px",
          width: "200px",
          maxWidth: "28vw",
          opacity: 0.82,
          transform: "rotate(-5deg)",
          filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.08))",
          pointerEvents: "none",
          zIndex: 0,
          animation: "floatSlow 6s ease-in-out infinite",
        }}
      />
      <img
        src="/images/flores/flor12.png"
        alt="Flor inferior derecha"
        style={{
          position: "absolute",
          bottom: "-40px",
          right: "8px",
          width: "220px",
          maxWidth: "32vw",
          opacity: 0.9,
          transform: "rotate(6deg)",
          filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.08))",
          pointerEvents: "none",
          zIndex: 0,
          animation: "floatSlow 7s ease-in-out infinite",
        }}
      />

      {/* CONTENIDO */}
      <div
        className="mapa-inner"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1100px",
          margin: "0 auto",
          width: "100%",
          boxSizing: "border-box",
          padding: "0 12px",
        }}
      >
        {/* Encabezado */}
        <div
          className="heading"
          style={{
            textAlign: "center",
            marginBottom: "36px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <h2
            style={{
              margin: 0,
              color: "#8b4e4e", // 🎨 títulos destacados
              fontSize: "clamp(2rem, 4.6vw, 3rem)",
              fontWeight: 400,
              lineHeight: 1,
            }}
          >
            Lugares
          </h2>

          <p
            style={{
              margin: 0,
              color: "#4a2e2e", // 🎨 texto uniforme
              fontSize: "clamp(0.98rem, 2.6vw, 1.15rem)",
              maxWidth: "720px",
              textAlign: "center",
              lineHeight: 1.6,
            }}
          >
            Acompáñanos en este día tan especial. Aquí podrás encontrar los
            lugares donde celebraremos nuestra unión.
          </p>

          <div
            style={{
              width: "86px",
              height: "3px",
              borderRadius: "3px",
              marginTop: "14px",
              background:
                "linear-gradient(90deg, rgba(214,187,163,1) 0%, rgba(240,216,194,1) 50%, rgba(214,187,163,1) 100%)",
            }}
          />
        </div>

        {/* GRID */}
        <div
          className="locations-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(260px, 1fr))",
            gap: "32px",
            alignItems: "start",
            justifyItems: "center",
          }}
        >
          {/* CARD CEREMONIA */}
          <div className="card" style={cardStyle}>
            <div
              className="media"
              style={{
                height: "240px",
                backgroundImage: "url('/images/30 fotos/iglesia.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div style={{ padding: "24px" }}>
              <h3 style={titleStyle}>Ceremonia de boda</h3>
              <p style={{ margin: "0 0 8px 0", fontWeight: 600, color: "#4a2e2e" }}>
                Viernes, 5 de diciembre 2025 – 5:00 PM <br />
                Iglesia Divino Niño
              </p>
              <p style={{ margin: 0, color: "#4a2e2e" }}>
                Calle 14a, Cra. 32, Barrio Galicia, Santa Marta
              </p>

              <a href="https://www.google.com/maps?q=Iglesia+Divino+Niño+Santa+Marta"
                 target="_blank"
                 rel="noreferrer noopener"
                 style={btnStyle}>
                Ver ubicación 📍
              </a>
            </div>
          </div>

          {/* CARD FIESTA */}
          <div className="card" style={cardStyle}>
            <div
              className="media"
              style={{
                height: "240px",
                backgroundImage: "url('/images/30 fotos/lugar.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div style={{ padding: "24px" }}>
              <h3 style={titleStyle}>Fiesta de boda</h3>
              <p style={{ margin: "0 0 8px 0", fontWeight: 600, color: "#4a2e2e" }}>
                Viernes, 5 de diciembre 2025 – 7:00 PM <br />
                Cabaña El Rastrojito
              </p>
              <p style={{ margin: 0, color: "#4a2e2e" }}>
                Santa Marta, Magdalena
              </p>

              <a href="https://maps.app.goo.gl/XEyiWb2AJzukXFGq8"
                 target="_blank"
                 rel="noreferrer noopener"
                 style={btnStyle}>
                Ver ubicación 📍
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatSlow {
          0% { transform: translateY(0) rotate(-5deg); }
          50% { transform: translateY(-10px) rotate(-6deg); }
          100% { transform: translateY(0) rotate(-5deg); }
        }
        .card:hover { transform: translateY(-6px); box-shadow: 0 18px 40px rgba(0,0,0,0.08); }
        @media (max-width: 900px) {
          .locations-grid { grid-template-columns: 1fr; gap: 22px; }
          .heading { margin-bottom: 26px; }
        }
        @media (max-width: 480px) {
          section#fh5co-when-where { padding: 50px 12px; }
          .media { height: 180px !important; }
          .card { border-radius: 12px; }
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
  background: "rgba(255,255,255,0.78)",
  border: "1px solid rgba(214,180,163,0.35)",
  boxShadow: "0 8px 28px rgba(0,0,0,0.06)",
  backdropFilter: "blur(6px)",
  transition: "transform 220ms ease, box-shadow 220ms ease",
};

const titleStyle = {
  margin: "0 0 8px 0",
  fontFamily: "'Great Vibes', cursive",
  color: "#8b4e4e",
  fontSize: "1.6rem",
};

const btnStyle = {
  display: "inline-block",
  marginTop: "14px",
  padding: "10px 22px",
  borderRadius: "30px",
  border: "1px solid #d6bba3",
  background: "rgba(255,255,255,0.9)",
  color: "#4a2e2e", // uniforme
  textDecoration: "none",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 600,
  boxShadow: "0 6px 14px rgba(0,0,0,0.04)",
  transition: "transform 180ms ease, box-shadow 180ms ease",
};

export default Mapa;