import React from "react";
import arturo from "/images/30 fotos/arturo.png";
import angie from "/images/30 fotos/angie.png";
import flor3 from "/images/flores/flor6.png";
import flor4 from "/images/flores/flor6.png";

function Amor() {
  return (
    <div
      id=""
      className="animate-box fh5co-section-gray"
      style={{
        position: "relative",
        overflow: "hidden",
        paddingTop: "70px",
        paddingBottom: "40px",
        background: "linear-gradient(180deg, #fff9f8 0%, #fbe8e6 100%)",
      }}
    >
      {/* 🌸 Flores decorativas */}

      <img
        src={flor3}
        alt="Flor inferior izquierda"
        style={{
          position: "absolute",
          bottom: "0px",
          left: "-65px",
          width: "300px",
          opacity: "0.70",
          transform: "rotate(-8deg)",
          filter: "drop-shadow(0 4px 5px rgba(0,0,0,0.1))",
          pointerEvents: "none",
        }}
      />

      <img
        src={flor4}
        alt="Flor inferior derecha"
        style={{
          position: "absolute",
          bottom: "-18px",
          right: "-60px",
          width: "300px",
          opacity: "0.70",
          transform: "rotate(15deg)",
          filter: "drop-shadow(0 4px 5px rgba(0,0,0,0.1))",
          pointerEvents: "none",
        }}
      />

      {/* 🌫 Blur móvil */}
      <div className="blur-overlay"></div>

      {/* 💞 Contenido */}
      <div className="container text-center" style={{ position: "relative", zIndex: 1 }}>
        <div className="pareja-linea">
          <div className="persona">
            <div className="foto-container">
              <img src={arturo} alt="Arturo" className="foto-pareja" />
              <div className="brillo"></div>
            </div>
            <h3 className="nombre">Arturo</h3>
          </div>

          <div className="corazon">
            <i
              className="icon-heart heartbeat"
              style={{
                color: "#e68a94",
                fontSize: "42px",
                animation: "pulse 1.6s infinite ease-in-out",
                textShadow: "0 2px 5px rgba(0,0,0,0.12)",
              }}
            ></i>
          </div>

          <div className="persona">
            <div className="foto-container">
              <img src={angie} alt="Angie" className="foto-pareja" />
              <div className="brillo"></div>
            </div>
            <h3 className="nombre">Angie</h3>
          </div>
        </div>

        {/* ✨ Texto inferior con menos espacio */}
        <div className="texto-inferior">
          <h2 className="">Dos caminos que se hicieron uno</h2>
          <p>
          </p>
        </div>
      </div>

      <style>{`
        .pareja-linea {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 40px;
          flex-wrap: nowrap;
          flex-direction: row;
        }

        .corazon {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .foto-container {
          position: relative;
          display: inline-block;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid #e8bfb8;
          box-shadow: 0 6px 18px rgba(0,0,0,0.08), 0 0 25px rgba(232,160,180,0.25);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .foto-pareja {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }

        .foto-container:hover {
          transform: scale(1.06);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1), 0 0 45px rgba(255,210,220,0.6);
        }

        .brillo {
          position: absolute;
          top: 0;
          left: -80%;
          width: 50%;
          height: 100%;
          background: linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0) 100%);
          transform: skewX(-25deg);
        }

        .foto-container:hover .brillo {
          animation: brillo-move 1.5s forwards;
        }

        @keyframes brillo-move {
          0% { left: -80%; }
          100% { left: 130%; }
        }

        .nombre {
          color: #a86c6c;
          font-size: 50px;
          margin-top: 10px;
          transition: text-shadow 0.3s ease, color 0.3s ease;
        }

        .persona:hover .nombre {
          color: #c07a85;
          text-shadow: 0 0 10px rgba(255,220,230,0.6);
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.85; }
          50% { transform: scale(1.25); opacity: 1; }
          100% { transform: scale(1); opacity: 0.85; }
        }

        /* 💬 Zona de texto inferior */
        .texto-inferior {
          margin-bottom: 10px;
        }

        .texto-inferior h2 {
          color: #8b4e4e;
          margin-bottom: 6px;
          font-weight: 600;
          font-size: 20px;
        }

        .texto-inferior p {
          color: #805b5b;
          font-style: italic;
          font-size: 15px;
        }

        /* 🌫 Blur cristal móvil */
        .blur-overlay {
          display: none;
        }

        @media (max-width: 900px) {
          .pareja-linea {
            gap: 25px;
            transform: scale(0.9);
          }
          .foto-container {
            width: 160px;
            height: 160px;
          }
          .nombre {
            font-size: 38px;
          }
          .texto-inferior {
            margin-top: 20px;
          }
        }

        @media (max-width: 600px) {
          .blur-overlay {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            backdrop-filter: blur(3px);
            background: rgba(255,247,249,0.65);
            z-index: 0;
          }

          .pareja-linea {
            gap: 15px;
            transform: scale(0.8);
          }
          .foto-container {
            width: 130px;
            height: 130px;
          }
          .nombre {
            font-size: 32px;
          }
          .texto-inferior {
            margin-top: 15px;
          }
            
        }
      `}</style>
    </div>
  );
}

export default Amor;
