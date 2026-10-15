import { useEffect, useRef, useState } from "react";

// Devuelve un ref para poner en el contenedor de una sección y un booleano
// que pasa a true recién cuando ese contenedor está cerca del viewport.
// Sirve para no disparar la carga de fondos (CSS backgroundImage no soporta
// loading="lazy" nativo) ni de recursos pesados (ej. Rive) hasta que haga falta.
//
// Usa IntersectionObserver, con un respaldo por scroll/resize + getBoundingClientRect
// porque en este proyecto ya se vio que IntersectionObserver a veces no dispara
// su callback de forma confiable.
const useNearViewport = (rootMarginPx = 800) => {
  const ref = useRef(null);
  const [isNear, setIsNear] = useState(false);

  useEffect(() => {
    if (isNear) return;
    const el = ref.current;
    if (!el) return;

    const checkPosition = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight + rootMarginPx && rect.bottom >= -rootMarginPx) {
        setIsNear(true);
      }
    };

    let observer;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) setIsNear(true);
        },
        { rootMargin: `${rootMarginPx}px` }
      );
      observer.observe(el);
    }

    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        checkPosition();
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    checkPosition();

    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isNear, rootMarginPx]);

  return [ref, isNear];
};

export default useNearViewport;
