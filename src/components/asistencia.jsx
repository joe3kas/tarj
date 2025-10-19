import React, { useState } from "react";

function Asistencia() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const telefono = e.target.telefono.value.trim();

    if (!name || !telefono) {
      alert("Por favor completa todos los campos.");
      return;
    }

    setLoading(true);
    setSent(false);

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzvbg4o0eCFztGkwgPuc5yUxTNRkrU-HhRL5ezHsa4_Pa_XISxLgm_5U3nTLsh1eOcj/exec";

    fetch(scriptURL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, telefono }),
    })
      .then(() => {
        setTimeout(() => {
          setLoading(false);
          setSent(true);
          e.target.reset();
          setTimeout(() => setSent(false), 2500);
        }, 1200);
      })
      .catch(() => {
        setLoading(false);
        alert("Hubo un problema al enviar tu confirmación 😔");
      });
  };

  return (
    <>
      {/* 🌸 Spinner elegante */}
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

      {/* 💌 Mensaje enviado */}
      {sent && (
        <div className="sent-overlay">
          <div className="sent-box text-center animate-box">
            <h4>💖 ¡Gracias por confirmar!</h4>
            <p>Nos alegra que nos acompañes</p>
          </div>
        </div>
      )}

      {/* 🕊️ Sección principal */}
      <div
        id="fh5co-started"
        className="animate-box  fh5co-bg text-center"
        style={{ backgroundImage: "url('images/30 fotos/E56.jpg')" }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>

        <div className="animate-box  container">
          <div className="row animate-box">
            <div className="col-md-8 col-md-offset-2 heading-section">
              <h2>¿Asistirás?</h2>
              <p>Por favor llena el formulario para confirmar tu asistencia.</p>
            </div>
          </div>

          <div className="row animate-box justify-content-center">
            <div className="col-md-10">
              <form className="form-inline" onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-4 col-sm-6">
                    <input
                      type="text"
                      className="form-control w-100"
                      id="name"
                      name="name"
                      placeholder="Nombre"
                      required
                    />
                  </div>

                  <div className="col-md-4 col-sm-6">
                    <input
                      type="tel"
                      className="form-control w-100"
                      id="telefono"
                      name="telefono"
                      placeholder="Numero de cupos"
                      required
                    />
                  </div>

                  <div className="col-md-4 col-sm-12">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block w-100"
                      style={{
                        textTransform: "lowercase",
                        fontSize: "18px",
                        padding: "10px 0",
                        borderRadius: "30px",
                        backgroundColor: "#d7a1a8",
                        border: "none",
                      }}
                    >
                      confirmar asistencia
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* 🌷 CSS del spinner */}
      <style>{`
        .loading-overlay {
          position: fixed;
          top: 0; left: 0;
          width: 100vw; height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: rgba(255, 240, 245, 0.9);
          z-index: 3000;
          backdrop-filter: blur(4px);
        }

        .heart-spinner {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          animation: fadeIn 0.3s ease-in;
        }

        .heart {
          width: 25px;
          height: 25px;
          background-color: #d7a1a8;
          position: relative;
          transform: rotate(45deg);
          animation: pulse 1.2s infinite ease-in-out;
        }

        .heart::before, .heart::after {
          content: "";
          position: absolute;
          width: 25px;
          height: 25px;
          background-color: #d7a1a8;
          border-radius: 50%;
        }

        .heart::before { top: -12px; left: 0; }
        .heart::after { left: -12px; top: 0; }

        .heart:nth-child(2) {
          animation-delay: 0.2s;
        }

        .heart:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes pulse {
          0%, 100% { transform: rotate(45deg) scale(1); opacity: 0.8; }
          50% { transform: rotate(45deg) scale(1.3); opacity: 1; }
        }

        .loading-text {
          margin-top: 20px;
          font-size: 18px;
          color: #a36c74;
          font-weight: 500;
          animation: fadeIn 0.5s ease-in-out;
        }

        .sent-overlay {
          position: fixed;
          top: 0; left: 0;
          width: 100vw; height: 100vh;
          display: flex; justify-content: center; align-items: center;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(2px);
          z-index: 2000;
        }

        .sent-box {
          background: white;
          padding: 2rem 3rem;
          border-radius: 16px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
          color: #a36c74;
          animation: fadeIn 0.6s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
}

export default Asistencia;
