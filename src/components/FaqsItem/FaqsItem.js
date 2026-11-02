import "./FaqsItem.css";
import { forwardRef, useState, useRef, useLayoutEffect } from "react";
import { useViewport } from "../../context/ViewportContext";
import {
  faqs_arrow,
  faqsPage_num,
  desktop_faq_item,
  faqsPage_itemL,
} from "../../assets/assetsDirectory";

// Inserta puntos de quiebre invisibles (zero-width space) después de cada
// "/" en URLs largas, para que el navegador pueda partirlas en pantallas
// angostas sin desbordar el contenedor. A diferencia de insertar un espacio
// normal, esto no altera visualmente la URL.
const addUrlBreakOpportunities = (text) =>
  typeof text === "string"
    ? text.replace(/(https?:\/\/\S{20,})/g, (url) => url.replace(/\//g, "/​"))
    : text;

// Convierte los links escritos en faqsData.js con sintaxis [texto](url) en
// <a> reales, y además detecta URLs sueltas (sin corchetes) y las vuelve
// clickeables automáticamente. Así el contenido se edita como texto simple
// en faqsData.js sin necesitar JSX ni HTML crudo (que React escapa y
// muestra tal cual, en vez de renderizarlo).
const LINK_PATTERN = /\[([^\]]+)\]\((\S+?)\)|(https?:\/\/\S+)/g;

const renderWithLinks = (text) => {
  if (typeof text !== "string") return text;

  const nodes = [];
  let lastIndex = 0;
  let match;
  let key = 0;

  LINK_PATTERN.lastIndex = 0;
  while ((match = LINK_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    const [full, linkLabel, linkHref, bareUrl] = match;
    const href = linkHref || bareUrl;
    const label = linkLabel || bareUrl;

    nodes.push(
      <a
        key={`faq-link-${key++}`}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="faqsItem-link"
      >
        {addUrlBreakOpportunities(label)}
      </a>,
    );

    lastIndex = match.index + full.length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
};

const FaqsItem = forwardRef(
  ({ number, title, description, className = "", style }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const { isMobile } = useViewport();
    const titleRef = useRef(null);
    const [titleLines, setTitleLines] = useState(2);

    useLayoutEffect(() => {
      const el = titleRef.current;
      if (!el || !el.firstChild) return;

      // Cuenta las cajas de línea que realmente ocupa el texto. Es más
      // confiable que calcular altura/line-height: .faqsItem-title-text no
      // define line-height en el CSS, así que el navegador devuelve
      // "normal" (no un valor en px) y ese cálculo daba NaN.
      const measure = () => {
        const range = document.createRange();
        range.selectNodeContents(el);
        const lines = range.getClientRects().length;
        if (!lines) return;
        setTitleLines(lines);
      };

      measure();

      // El texto puede re-envolverse al cambiar el ancho de ventana (el
      // contenedor usa vw) o cuando termina de cargar la tipografía (FOUT).
      let ticking = false;
      const handleResize = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          ticking = false;
          measure();
        });
      };

      window.addEventListener("resize", handleResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(measure);
      }

      return () => window.removeEventListener("resize", handleResize);
    }, [title, isMobile]);

          let imgMinHeight = titleLines >= 3 ? "110px" : titleLines <= 1 ? "50px" : "70px";
    let titleTop = titleLines >= 3 ? "-100px" : titleLines <= 1 ? "-49px" : "-63px";

    let topOffset = titleLines >= 3 ? "-40px" : titleLines <= 1 ? "-67px" : "-67px";

    if(titleLines > 3) {
      imgMinHeight = "130px";
      titleTop = "-120px";
    }

    if(!isMobile) {
      topOffset = "-5.5vw";
    } 

    return (
      <div
        ref={ref}
        style={style}
        className={`faqsItem-container ${className}`.trim()}
      >
        <div className="faqsItem">
          <div className="faqsItem-num">
            <img
              loading="lazy"
              src={faqsPage_num}
              alt="Faqs Number"
              className="faqsItem-num-img"
            ></img>
            <div className="floater">
              {number > 9 && <p className="faqsItem-num-text2" style={{ top: topOffset }}>{number}.</p>}
              {number <= 9 && <p className="faqsItem-num-text" style={{ top: topOffset }}>{number}.</p>}
            </div>
          </div>

            <>
              <div
                className="faqsItem-text-container"
                onClick={() => setIsOpen(!isOpen)}
                style={{ minHeight: imgMinHeight }}
              >
                <img
                  loading="lazy"
                  src={isMobile ? faqsPage_itemL : desktop_faq_item}
                  alt="Faqs Item"
                  className="faqsItem-img"
                  style={{ minHeight: imgMinHeight}}
                ></img>
                <div className="floater">
                  <p ref={titleRef} className="faqsItem-title-text" style={{ top: titleTop }}>{title}</p>
                </div>
              </div>
            </>

          <img
            loading="lazy"
            src={faqs_arrow}
            alt="Faqs Arrow"
            className={`faqsItem-arrow ${!isOpen ? "faqItem-arrow-unselected" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          ></img>
        </div>
        {isOpen && (
          <div className="faqsItem-description-container">
            <p className="faqsItem-description-text" style={{ marginTop: "10px" }}>{renderWithLinks(description)}</p>
          </div>
        )}
      </div>
    );
  },
);

export default FaqsItem;
