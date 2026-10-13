import { Children, cloneElement, isValidElement, useEffect, useRef, useState } from "react";
import { useViewport } from "../../context/ViewportContext";

// Envuelve un único elemento y le agrega una animación de entrada/salida cada vez que
// entra o sale del viewport al hacer scroll. `variant` elige la clase base: "fade" (default)
// usa .reveal, cualquier otro valor usa .reveal-<variant> (definida aparte en CSS).
const Reveal = ({ children, delay = 0, threshold = 0, variant = "fade" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const { isMobile } = useViewport();
  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(node);

    // Red de seguridad: si durante un resize el layout cambia (ej. las imágenes
    // de fondo desktop con width:100%/height:auto cambian de alto), a veces el
    // IntersectionObserver no entrega un nuevo resultado a tiempo y el elemento
    // se queda "colgado" en opacity:0. Al terminar de redimensionar, recalculamos
    // la posición a mano con getBoundingClientRect y corregimos el estado.
    let resizeTimer;
    const recheckAfterResize = () => {
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const vw = window.innerWidth || document.documentElement.clientWidth;
      const intersects = rect.bottom > 0 && rect.right > 0 && rect.top < vh && rect.left < vw;
      setVisible(intersects);
    };
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(recheckAfterResize, 150);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, [threshold, isMobile]);

  // Si el JSX dejó espacios/saltos de línea sueltos entre <Reveal> y su hijo
  // (ej. "<Reveal>  <Img ... /></Reveal>"), React los cuenta como hijos de
  // texto y `children` deja de ser un único elemento. Nos quedamos solo con
  // el elemento real e ignoramos cualquier texto/espacio alrededor.
  const element = Children.toArray(children).find(isValidElement);
  if (!element) return null;

  const existingClassName = element.props.className || "";
  const existingStyle = element.props.style || {};
  const baseClass = variant === "fade" ? "reveal" : `reveal-${variant}`;

  return cloneElement(element, {
    key: element.key,
    ref,
    className: `${existingClassName} ${baseClass}${visible ? " reveal-visible" : ""}`.trim(),
    style: { ...existingStyle, transitionDelay: delay ? `${delay}ms` : undefined },
  });
};

export default Reveal;
