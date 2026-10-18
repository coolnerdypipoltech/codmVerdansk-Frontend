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

    const imgMinHeight = titleLines >= 3 ? "120px" : titleLines <= 1 ? "50px" : "70px";
    const titleTop = titleLines >= 3 ? "-110px" : titleLines <= 1 ? "-49px" : "-63px";

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
              {number > 9 && <p className="faqsItem-num-text2">{number}.</p>}
              {number <= 9 && <p className="faqsItem-num-text">{number}.</p>}
            </div>
          </div>

            <>
              <div
                className="faqsItem-text-container"
                onClick={() => setIsOpen(!isOpen)}
              >
                <img
                  loading="lazy"
                  src={isMobile ? faqsPage_itemL : desktop_faq_item}
                  alt="Faqs Item"
                  className="faqsItem-img"
                  style={{ minHeight: imgMinHeight }}
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
            <p className="faqsItem-description-text" style={{ marginTop: titleLines >= 3 ? "60px" : "10px" }}>{addUrlBreakOpportunities(description)}</p>
          </div>
        )}
      </div>
    );
  },
);

export default FaqsItem;
