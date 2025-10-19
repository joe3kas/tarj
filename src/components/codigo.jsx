import traje from "/images/trajes.png";

function Vestimenta() {
  return (
    <>
      <section
        id="fh5co-vestimenta"
        className="relative text-center overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #fffaf9 0%, #fbe9e7 100%)",
          padding: "80px 20px",
          position: "relative",
          overflow: "visible", // 👈 permite que las imágenes se salgan verticalmente
        }}
      >
        {/* 🌸 Flores PNG Vintage en las esquinas */}
        <img
          src="/images/flores/flor14.png"
          alt="Flor esquina superior izquierda"
          style={{
            position: "absolute",
            top: "-40px",
            left: "0",
            width: "200px",
            opacity: "0.85",
            filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.1))",
            transform: "rotate(-5deg)",
            pointerEvents: "none",
          }}
        />

        <img
          src="/images/flores/flor12.png"
          alt="Flor esquina superior derecha"
          style={{
            position: "absolute",
            top: "-30px",
            right: "0",
            width: "200px",
            opacity: "0.85",
            filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.1))",
            transform: "rotate(8deg)",
            pointerEvents: "none",
          }}
        />

        <img
          src="/images/flores/flor15.png"
          alt="Flor inferior izquierda"
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "0",
            width: "210px",
            opacity: "0.9",
            transform: "rotate(-8deg)",
            filter: "drop-shadow(0 4px 5px rgba(0,0,0,0.1))",
            pointerEvents: "none",
          }}
        />

        <img
          src="/images/flores/flor1.png"
          alt="Flor inferior derecha"
          style={{
            position: "absolute",
            bottom: "-50px", // 👈 sobresale solo verticalmente
            right: "0",
            width: "180px",
            opacity: "0.30",
            transform: "rotate(4deg)",
            filter: "drop-shadow(0 4px 5px rgba(0,0,0,0.1))",
            pointerEvents: "none",
          }}
        />

        {/* 💎 Contenido con efecto cristal */}
        <div
          className="relative z-10 max-w-2xl mx-auto px-6"
          style={{
            color: "#7a4a4a",
            backdropFilter: "blur(6px)",
            background: "rgba(255, 255, 255, 0.18)",
            borderRadius: "16px",
            padding: "40px 25px",
            boxShadow: "0 6px 25px rgba(0,0,0,0.05)",
          }}
        >
          <h2
            style={{
              fontSize: "2.4rem",
              color: "#8b4e4e",
              fontWeight: "600",
              letterSpacing: "0.5px",
              marginBottom: "20px",
            }}
          >
            Código de Vestimenta
          </h2>

          <div className="flex justify-center mb-5">
            <img
              src={traje}
              alt="Código de vestimenta"
              style={{
                width: "180px",
                maxWidth: "65%",
                filter: "drop-shadow(0 2px 5px rgba(0,0,0,0.1))",
                animation: "floatImage 6s ease-in-out infinite",
              }}
            />
          </div>

          <p
            style={{
              fontSize: "1.25rem",
              fontStyle: "italic",
              color: "#7a4a4a",
              lineHeight: "1.7",
              maxWidth: "520px",
              margin: "0 auto",
            }}
          >
            “Vengan elegantes, pero cómodos.
            <br />
            Queremos que disfruten, bailen y celebren con nosotros sin
            preocupaciones”
          </p>

          <div
            style={{
              width: "70px",
              height: "2px",
              background:
                "linear-gradient(to right, #d6bba3 0%, #f0d8c2 50%, #d6bba3 100%)",
              margin: "25px auto 0",
              borderRadius: "3px",
            }}
          ></div>
        </div>

        {/* 🌷 Animaciones y responsive */}
        <style>{`
          @keyframes floatImage {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }

          @media (max-width: 768px) {
            #fh5co-vestimenta {
              padding: 60px 15px;
            }

            #fh5co-vestimenta h2 {
              font-size: 2rem;
            }

            #fh5co-vestimenta p {
              font-size: 1.1rem;
            }
          }
        `}</style>
      </section>

      {/* 🚫 Elimina scroll horizontal global */}
      <style>{`
        html, body {
          overflow-x: hidden !important;
        }

        /* 🧩 Evita que las imágenes empujen el ancho horizontal */
        #fh5co-vestimenta img[alt*="Flor"] {
          max-width: none !important;
          height: auto !important;
          display: block;
          overflow: visible !important;
          clip-path: inset(0 0 0 0 round 0); /* por seguridad */
        }
      `}</style>
    </>
  );
}

export default Vestimenta;
