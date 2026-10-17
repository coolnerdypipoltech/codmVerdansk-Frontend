import "./FaqsItem.css";
import { forwardRef, useState, useRef, useLayoutEffect, useEffect } from "react";
import { useViewport } from "../../context/ViewportContext";
import {
  faqs_arrow,
  faqsPage_num,
  desktop_faq_item,
  faqsPage_itemL,
} from "../../assets/assetsDirectory";

const FaqsItem = forwardRef(
  ({ number, title, description, className = "", style }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const { isMobile } = useViewport();
    const titleRef = useRef(null);
    const [isSingleLine, setIsSingleLine] = useState(false);

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
        setIsSingleLine(lines <= 1);
        
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

    const [helper17, setHelper17] = useState(description);
    const [helper1, setHelper1] = useState(description);

    useEffect(() => {
      const update = () => {
        const width = window.innerWidth;
        setHelper17(
          width > 670
            ? description
            : "No te preocupes, envíanos un mensaje por nuestro Instagram oficial: https://www.instagram.com/ callofdutymobilelatam",
        );
        setHelper1(
          width > 460
            ? description
            : "Debes ingresar al registro en https://verdanskcodm.com/ register. Regístrate durante el periodo de reclutamiento del 23 al 31 de octubre 6pm [CST -6]. ",
        );
      };

      update();
      window.addEventListener("resize", update);
      return () => window.removeEventListener("resize", update);
    }, [description]);

    const isTripleLine = isMobile && number === 16;
    const imgMinHeight = isTripleLine ? "120px" : isSingleLine ? "50px" : "70px";
    const titleTop = isTripleLine ? "-110px" : isSingleLine ? "-49px" : "-63px";


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
            <p className="faqsItem-description-text" style={{ marginTop: isMobile && number === 16 ? "60px" : "20px" }}>{number === 17 ? helper17 : number === 1 ? helper1 : description}</p>
          </div>
        )}
      </div>
    );
  },
);

export default FaqsItem;
