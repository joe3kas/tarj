// src/animacion.js
export default function activarAnimaciones() {
  const elementos = document.querySelectorAll(".animate-box");

  if (!elementos.length) return;

  const observer = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          const el = entrada.target;
          const efecto = el.dataset.animateEffect || "fadeInUp";

          el.classList.add("animated", efecto);
          observer.unobserve(el); // evita repetir la animación
        }
      });
    },
    { threshold: 0.15 }
  );

  elementos.forEach((el) => observer.observe(el));
}
