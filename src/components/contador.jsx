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
    <section id="contador" className="relative text-center seccion-contador">
      {/* 🌸 Flores decorativas */}
      <img
        src="/images/flores/flor3.png"
        alt="Flor superior izquierda"
        className="flor-izq"
      />
      <img
        src="/images/flores/flor1.png"
        alt="Flor inferior derecha"
        className="flor-der"
      />

      {/* 💕 Contenido principal */}
      <div className="contenido-contador">
        <h2 className="titulo-contador">¡Estás invitado!</h2>

        <p className="texto-contador">
          Nos encantaría que formaras parte de este momento tan especial para
          nosotros.
        </p>

        {/* ⏳ Bloques del contador */}
        <div className="bloques-contador">
          {[
            ["DÍAS", formato(tiempoRestante.dias)],
            ["HORAS", formato(tiempoRestante.horas)],
            ["MINUTOS", formato(tiempoRestante.minutos)],
            ["SEGUNDOS", formato(tiempoRestante.segundos)],
          ].map(([label, value]) => (
            <div key={label} className="bloque">
              <h3>{value}</h3>
              <p>{label}</p>
            </div>
          ))}
        </div>

        {/* 🌸 Línea decorativa */}
        <div className="linea" />
      </div>

      {/* 🎨 Estilos */}
      <style>{`
        .seccion-contador {
          position: relative;
          background: linear-gradient(180deg, rgba(255,249,248,0.95) 0%, rgba(251,232,230,0.85) 100%);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          padding: 100px 20px;
          overflow: hidden;
          z-index: 0;
        }

        .flor-izq,
        .flor-der {
          position: absolute;
          width: 200px;
          opacity: 0.9;
          filter: drop-shadow(0 3px 5px rgba(0,0,0,0.1));
          pointer-events: none;
          z-index: 0;
        }

        .flor-izq {
          top: -60px;
          left: -40px;
          transform: rotate(-5deg);
        }

        .flor-der {
          bottom: -60px;
          right: -40px;
          transform: rotate(5deg);
        }

        .contenido-contador {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 5;
          color: #7a4a4a;
        }

        .titulo-contador {
          font-size: clamp(2.8rem, 6vw, 3.6rem);
          color: #b76e79;
          margin-bottom: 20px;
        }

        .texto-contador {
          font-size: 1.8rem;
          color: #805b5b;
          max-width: 600px;
          margin: 0 auto 40px;
          line-height: 1.2;
        }

        .bloques-contador {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 16px;
        }

        .bloque {
          flex: 1 1 100px;
          min-width: 70px;
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(214, 180, 163, 0.35);
          border-radius: 14px;
          padding: 14px 10px;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.06);
          backdrop-filter: blur(6px);
        }

        .bloque h3 {
          font-size: clamp(2.8rem, 4.5vw, 2.8rem);
          margin: 0;
          color: #a86c6c;
          font-weight: 700;
          line-height: 1.1;
        }

        .bloque p {
          margin: 4px 0 0;
          font-size: clamp(1.2rem, 2vw, 1rem);
          color: #805b5b;
          font-style: italic;
        }

        .linea {
          width: 70px;
          height: 2px;
          background: #d6bba3;
          margin: 40px auto 0;
          border-radius: 3px;
        }

        @media (max-width: 768px) {
          .seccion-contador {
            padding: 70px 20px;
          }
          .flor-izq, .flor-der {
            width: 140px;
            opacity: 0.85;
          },
 
        }

        @media (max-width: 480px) {
          .seccion-contador {
            padding: 60px 15px;
          }
          .flor-izq, .flor-der {
            width: 100px;
            opacity: 0.8;
          }
        }
      `}</style>
    </section>
  );
}

export default CuentaRegresiva;
