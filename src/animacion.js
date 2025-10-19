export default function activarAnimaciones() {
  const elementos = document.querySelectorAll(".animate-box");

  const observer = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("animated", "fadeInUp");
        observer.unobserve(entrada.target);
      }
    });
  });

  elementos.forEach((el) => observer.observe(el));
}
