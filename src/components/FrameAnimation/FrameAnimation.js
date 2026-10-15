import { forwardRef, useEffect, useState } from "react";

// Reemplazo directo de <img> para animaciones cuadro por cuadro (sprite frames):
// le pasás un arreglo de imágenes y las va ciclando sola, como un GIF.
//
// Cómo evita gastar red: en vez de usar una sola <img> y cambiarle el `src` en
// cada cuadro (lo que hace que el navegador la "pida" de nuevo cada vez —se vea
// o no en el Network tab como tráfico real), se renderizan TODAS las imágenes
// apiladas una encima de otra desde el montaje, cada una con su `src` fijo para
// siempre, y lo único que cambia cuadro a cuadro es cuál tiene opacity:1.
//
// Importante: el cuadro activo se renderiza con tu className/style tal cual
// (así se sigue viendo y posicionando igual que antes). Los demás cuadros se
// fuerzan a position:absolute + opacity:0 para apilarse exactamente en el mismo
// lugar sin ocupar espacio propio — para que calcen bien, el cuadro activo debe
// estar dentro de un contenedor con `position` distinto de "static" (lo normal
// si tu clase ya usa position:absolute, como pasa con los stickers del Intro).
//
// Uso (igual que antes):
//   <FrameAnimation frames={[frame1, frame2, frame3]} fps={12} className="mi-clase" alt="" />
//
// Props propias:
//   frames   -> arreglo de src de imagen, en orden de reproducción. Requerido.
//   fps      -> cuadros por segundo (default 12).
//   loop     -> al llegar al último cuadro vuelve a empezar (default true).
//               false = se queda congelada en el último cuadro.
//   playing  -> prende/apaga la animación desde afuera (default true).
// Todo lo demás (className, style, alt, loading, onClick, etc.) se pasa tal cual al <img> activo.
const FrameAnimation = forwardRef(
  ({ frames = [], fps = 12, loop = true, playing = true, alt = "", className, style, ...imgProps }, ref) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
      setIndex(0);
      if (!playing || frames.length <= 1) return;

      const id = setInterval(() => {
        setIndex((current) => {
          const next = current + 1;
          return next < frames.length ? next : loop ? 0 : current;
        });
      }, 1000 / fps);

      return () => clearInterval(id);
      // Dependemos de frames.length (un número estable) y no de `frames` en sí:
      // si el componente padre vuelve a renderizar, `frames` suele ser un
      // arreglo nuevo con el mismo contenido, y si dependiéramos de esa
      // referencia el intervalo se reiniciaría sin necesidad en cada render.
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [playing, fps, loop, frames.length]);

    if (frames.length === 0) return null;

    if (frames.length === 1) {
      return (
        <img ref={ref} src={frames[0]} alt={alt} className={className} style={style} {...imgProps} />
      );
    }

    return (
      <>
        {frames.map((src, i) => {
          const isCurrent = i === index;
          return (
            <img
              key={src + i}
              ref={isCurrent ? ref : undefined}
              src={src}
              alt={isCurrent ? alt : ""}
              aria-hidden={isCurrent ? undefined : true}
              className={isCurrent ? className : className}
              {...imgProps}
              loading={isCurrent ? imgProps.loading : "eager"}
              style={
                isCurrent
                  ? style
                  : {...style, position: "absolute", margin: 0, opacity: 0, pointerEvents: "none"}
              }
            />
          );
        })}
      </>
    );
  }
);

export default FrameAnimation;
