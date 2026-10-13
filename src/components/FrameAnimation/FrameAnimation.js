import { forwardRef, useEffect, useState } from "react";

// Reemplazo directo de <img> para animaciones cuadro por cuadro (sprite frames):
// le pasás un arreglo de imágenes y las va ciclando sola, como un GIF.
//
// Uso:
//   import frame1 from "../../assets/x/frame1.png";
//   import frame2 from "../../assets/x/frame2.png";
//   ...
//   <FrameAnimation frames={[frame1, frame2, frame3]} fps={12} className="mi-clase" alt="" />
//
// Props propias:
//   frames   -> arreglo de src de imagen, en orden de reproducción. Requerido.
//   fps      -> cuadros por segundo (default 12).
//   loop     -> al llegar al último cuadro vuelve a empezar (default true).
//               false = se queda congelada en el último cuadro.
//   playing  -> prende/apaga la animación desde afuera (default true).
// Todo lo demás (className, style, alt, loading, onClick, etc.) se pasa tal cual al <img>.
const FrameAnimation = forwardRef(
  ({ frames = [], fps = 12, loop = true, playing = true, alt = "", ...imgProps }, ref) => {
    const [index, setIndex] = useState(0);
    const [ready, setReady] = useState(frames.length <= 1);

    // Precarga todos los cuadros antes de animar, para que no "parpadee" la
    // primera vez que cada imagen se descarga.
    useEffect(() => {
      let cancelled = false;
      setIndex(0);

      if (frames.length <= 1) {
        setReady(true);
        return;
      }

      setReady(false);
      Promise.all(
        frames.map(
          (src) =>
            new Promise((resolve) => {
              const img = new Image();
              img.onload = resolve;
              img.onerror = resolve;
              img.src = src;
            })
        )
      ).then(() => {
        if (!cancelled) setReady(true);
      });

      return () => {
        cancelled = true;
      };
    }, [frames]);

    useEffect(() => {
      if (!playing || !ready || frames.length <= 1) return;

      const id = setInterval(() => {
        setIndex((current) => {
          const next = current + 1;
          return next < frames.length ? next : loop ? 0 : current;
        });
      }, 1000 / fps);

      return () => clearInterval(id);
    }, [playing, ready, fps, loop, frames]);

    if (frames.length === 0) return null;

    return <img ref={ref} src={frames[index]} alt={alt} {...imgProps} />;
  }
);

export default FrameAnimation;
