import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Asistencia() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [asistire, setAsistire] = useState("si");

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const mensaje =
      asistire === "no"
        ? "No asistiré, pero les deseo lo mejor 💌"
        : e.target.mensaje.value.trim();

    if (!name) {
      alert("Por favor completa tu nombre.");
      return;
    }

    setLoading(true);
    setSent(false);

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbyN1avhatdVcBYnuknaiIa7E2gCcmXWs826OaE3m34mK69Ow97TcRaP4OnLokNVBiKP/exec";

    fetch(scriptURL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, mensaje, asistire }),
    })
      .then(() => {
        setTimeout(() => {
          setLoading(false);
          setSent(true);
          e.target.reset();
          setAsistire("si");
          setTimeout(() => setSent(false), 2500);
        }, 1000);
      })
      .catch(() => {
        setLoading(false);
        alert("Hubo un problema al enviar tu confirmación 😔");
      });
  };

  return (
    <>
      {/* Modal de envío */}
      {loading && (
        <div className="loading-overlay">
          <div className="heart-spinner">
            <div className="heart"></div>
            <div className="heart"></div>
            <div className="heart"></div>
          </div>
          <p className="loading-text">Enviando tu confirmación...</p>
        </div>
      )}

      {/* Modal de confirmación */}
      {sent && (
        <div className="sent-overlay">
          <div className="sent-box text-center animate-box">
            <h4>💖 ¡Gracias por confirmar!</h4>
            <p>Nos alegra tu respuesta</p>
          </div>
        </div>
      )}

      {/* Sección principal */}
      <section
        id="asistencia"
        className="asistencia-section text-center"
        style={{
          backgroundImage: "url('images/30 fotos/E56.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Lluvia de sobres cubriendo todo */}
        <div className="lluvia-total">
          {[...Array(20)].map((_, i) => (
            <span key={i}>💌</span>
          ))}
        </div>

        <div className="asistencia-container">
          <h2 className="titulo">Confirmar Asistencia</h2>
          <p className="subtitulo">Cuéntanos si podrás acompañarnos 💫</p>

          <form onSubmit={handleSubmit} className="asistencia-form">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nombre y apellido"
              required
            />

            <div className="asistencia-checks">
              <label>
                <input
                  type="radio"
                  name="asistire"
                  value="si"
                  checked={asistire === "si"}
                  onChange={() => setAsistire("si")}
                />{" "}
                Asistiré 💖
              </label>
              <label>
                <input
                  type="radio"
                  name="asistire"
                  value="no"
                  checked={asistire === "no"}
                  onChange={() => setAsistire("no")}
                />{" "}
                No asistiré 💌
              </label>
            </div>

            <textarea
              id="mensaje"
              name="mensaje"
              placeholder={
                asistire === "no"
                  ? "Gracias por avisarnos 💖"
                  : "Número de personas confirmadas o mensaje 💌"
              }
              rows="3"
              required={asistire === "si"}
              disabled={asistire === "no"}
            ></textarea>

            <button type="submit" className="btn-asistencia">
              Confirmar asistencia
            </button>
          </form>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&family=Crimson+Text:wght@400;600&display=swap');

        .asistencia-section {
          position: relative;
          min-height: 80vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 60px 15px;
          color: #fff;
          overflow: hidden;
        }

        .asistencia-container {
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 25px;
          padding: 40px 30px;
          max-width: 600px;
          width: 100%;
          margin: auto;
          box-shadow: 0 8px 30px rgba(0,0,0,0.2);
          backdrop-filter: blur(15px);
          position: relative;
          z-index: 5;
        }

        .titulo {
          color: #ffffff;
          margin-bottom: 10px;
          text-shadow: 0 2px 5px rgba(0,0,0,0.4);
          font-size: 3rem;
        }

        .subtitulo {
          color: #f6f6f6;
          margin-bottom: 30px;
          font-size: 1.8rem;
          text-shadow: 0 1px 3px rgba(0,0,0,0.3);
        }

        .asistencia-form input,
        .asistencia-form textarea {
          width: 100%;
          margin-bottom: 15px;
          border: 1px solid rgba(255,255,255,0.4);
          border-radius: 12px;
          padding: 12px 16px;
          font-size: 1.6rem;
          background: rgba(255,255,255,0.25);
          color: #fff;
          outline: none;
          transition: all 0.3s ease;
          text-align: center;
        }

        .asistencia-form input::placeholder,
        .asistencia-form textarea::placeholder {
          color: rgba(255,255,255,0.7);
        }

        .asistencia-form input:focus,
        .asistencia-form textarea:focus {
          border-color: #fff;
          background: rgba(255,255,255,0.35);
        }

        .asistencia-checks {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 15px;
          font-family: 'Crimson Text', serif;
          color: #fff;
          font-size: 1.6rem;
        }

        .btn-asistencia {
          background-color: #ffb6c1;
          border: 1px solid rgba(255,255,255,0.5);
          color: #fff;
          border-radius: 25px;
          padding: 12px 40px;
          font-size: 1.5rem;
          transition: all 0.3s ease;
          cursor: pointer;
          backdrop-filter: blur(10px);
        }

        .btn-asistencia:hover {
          background-color: rgba(255,255,255,0.35);
        }

        /* Lluvia total */
        .lluvia-total {
          position: absolute;
          top: 0; left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
        }

        .lluvia-total span {
          position: absolute;
          top: -40px;
          font-size: 22px;
          opacity: 0.85;
          animation: caer 8s linear infinite;
        }

        .lluvia-total span:nth-child(1) { left: 5%; animation-delay: 0s; }
        .lluvia-total span:nth-child(2) { left: 15%; animation-delay: 2s; }
        .lluvia-total span:nth-child(3) { left: 25%; animation-delay: 4s; }
        .lluvia-total span:nth-child(4) { left: 35%; animation-delay: 1s; }
        .lluvia-total span:nth-child(5) { left: 45%; animation-delay: 3s; }
        .lluvia-total span:nth-child(6) { left: 55%; animation-delay: 5s; }
        .lluvia-total span:nth-child(7) { left: 65%; animation-delay: 2.5s; }
        .lluvia-total span:nth-child(8) { left: 75%; animation-delay: 4.5s; }
        .lluvia-total span:nth-child(9) { left: 85%; animation-delay: 3.5s; }
        .lluvia-total span:nth-child(10) { left: 95%; animation-delay: 5.5s; }

        @keyframes caer {
          0% { transform: translateY(-50px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }

      /* Spinner */
.loading-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.heart-spinner {
  display: flex;
  gap: 12px;
  animation: pulse 1.2s infinite ease-in-out;
}

.heart {
  width: 18px;
  height: 18px;
  position: relative;
  background-color: #ffb6c1;
  transform: rotate(45deg);
  animation: beat 1s infinite;
}

.heart::before,
.heart::after {
  content: '';
  position: absolute;
  width: 18px;
  height: 18px;
  background-color: #ffb6c1;
  border-radius: 50%;
}

.heart::before {
  top: -9px;
  left: 0;
}

.heart::after {
  left: -9px;
  top: 0;
}

@keyframes beat {
  0%, 100% { transform: scale(1) rotate(45deg); }
  50% { transform: scale(1.3) rotate(45deg); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

.loading-text {
  margin-top: 12px;
  color: #fff;
  font-family: 'Crimson Text', serif;
  font-size: 1.1rem;
}

        @keyframes beat {
          0%, 100% { transform: scale(1) rotate(45deg); }
          50% { transform: scale(1.3) rotate(45deg); }
        }

        .loading-text {
          margin-top: 10px;
          color: #fff;
          font-family: 'Crimson Text', serif;
        }

        .sent-overlay {
          position: fixed;
          inset: 0;
          background: rgba(255,255,255,0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .sent-box {
          background: #fff;
          padding: 30px 50px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        @media (max-width: 768px) {
          .asistencia-container {
            padding: 30px 20px;
          }
          .titulo { font-size: 2.8rem; }
        }
      `}</style>
    </>
  );
}

export default Asistencia;
