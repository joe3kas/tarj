import flor1 from "/images/flores/flor6.png";
import flor3 from "/images/flores/flor6.png";

function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(180deg, rgba(255, 246, 248, 0.95) 0%, rgba(253, 235, 238, 1) 100%)",
        borderTop: "1px solid rgba(214, 180, 163, 0.3)",
        padding: "100px 0 30px", // 🔹 antes era 90px abajo, reducido para quitar espacio
        textAlign: "center",
      }}
    >
      {/* 🌸 Flores PNG Vintage en las esquinas */}
      <img
        src={flor3}
        alt="Flor esquina superior izquierda"
        style={{
          position: "absolute",
          top: "-40px",
          left: "-40px",
          width: "200px",
          opacity: "0.50",
          filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.1))",
          transform: "rotate(-5deg)",
          pointerEvents: "none",
        }}
      />

      <img
        src={flor3}
        alt="Flor esquina superior derecha"
        style={{
          position: "absolute",
          top: "-30px",
          right: "-30px",
          width: "200px",
          opacity: "0.50",
          filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.1))",
          transform: "rotate(8deg)",
          pointerEvents: "none",
        }}
      />

      <img
        src={flor3}
        alt="Flor inferior izquierda"
        style={{
          position: "absolute",
          bottom: "-60px",
          left: "-60px",
          width: "210px",
          opacity: "0.50",
          transform: "rotate(-8deg)",
          filter: "drop-shadow(0 4px 5px rgba(0,0,0,0.1))",
          pointerEvents: "none",
        }}
      />

      <img
        src={flor1}
        alt="Flor inferior derecha"
        style={{
          position: "absolute",
          bottom: "-70px",
          right: "-50px",
          width: "220px",
          opacity: "0.50",
          transform: "rotate(5deg)",
          filter: "drop-shadow(0 4px 5px rgba(0,0,0,0.1))",
          pointerEvents: "none",
        }}
      />

      {/* 🌫 Panel de desenfoque (solo visible en móviles) */}
      <div className="blur-overlay"></div>

      {/* 💞 Contenido principal */}
      <div
        className="animate-box container footer-content"
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "750px",
          margin: "0 auto",
        }}
      >
        <h3
          style={{
            color: "#8b5e6a",
            fontSize: "22px",
            fontWeight: "400",
            letterSpacing: "0.6px",
            marginBottom: "12px",
          }}
        >
         Agradecemos que nos acompañes en esta fecha memorable.
        </h3>

        <br />

        <h2
          style={{
            color: "#a85f72",
            fontSize: "46px",
            marginTop: "10px",
            textShadow: "0 3px 10px rgba(0,0,0,0.08)",
          }}
        >
          Arturo &amp; Angie
        </h2>
<br /><br /><br />
        <p
          style={{
            color: "#9a6d76",
            fontStyle: "italic",
            marginTop: "-18px",
            lineHeight: "1.2",
          }}
        >
          “El amor verdadero no tiene final feliz,  
          porque el amor verdadero nunca termina.”
        </p>

        <div
          style={{
            width: "70px",
            height: "2px",
            background: "#d6bba3",
            margin: "25px auto 0", // 🔹 quitamos margen inferior extra
            borderRadius: "3px",
          }}
        ></div>

        <p
          style={{
            color: "#b56d7d",
            fontSize: "14px",
            fontStyle: "italic",
            marginTop: "10px", // 🔹 ajustado para cerrar sin espacio sobrante
          }}
        >
          © {new Date().getFullYear()} joe3kas stillo. All rights reserved.
        </p>
      </div>

      {/* 💫 Estilos adicionales */}
      <style>{`
        .blur-overlay {
          display: none;
        }

        /* 📱 En móviles, agrega fondo difuminado detrás del texto */
        @media (max-width: 768px) {
          .blur-overlay {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            backdrop-filter: blur(14px);
            background: rgba(255, 247, 249, 0.65);
            z-index: 0;
          }

          .footer-content {
            padding: 0 20px;
          }

          footer {
            padding: 80px 0 40px !important; /* 🔹 menos padding inferior */
          }

          footer h2 {
            font-size: 25px !important;
          }

          footer h3 {
            font-family: 'Crimson Text', serif;
          }

          footer p {
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
