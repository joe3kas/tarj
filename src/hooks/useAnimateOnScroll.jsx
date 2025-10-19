// animations.js
import { useEffect } from "react";
import "/public/css/animate.css"; // tu archivo CSS

export default function useScrollAnimations() {
  useEffect(() => {
    const animatedElements = document.querySelectorAll(".animate-box");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated", "fadeInUp");
            entry.target.style.opacity = 1;
          } else {
            entry.target.classList.remove("animated", "fadeInUp");
            entry.target.style.opacity = 0;
          }
        });
      },
      { threshold: 0.2 } // solo cuando el 20% del elemento sea visible
    );

    animatedElements.forEach((el) => {
      el.style.opacity = 0;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
