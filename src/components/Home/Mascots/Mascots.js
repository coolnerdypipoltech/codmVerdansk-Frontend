
import './Mascots.css';

import { useEffect, useRef, useState } from 'react';
import { desktop_6, Mascots_bckg, mascots_snacking, Mascots_title, rulebook, mascots_marco, mascots_slider_1, mascots_slider_2, phase_left, phase_right } from '../../../assets/assetsDirectory';
import { useViewport } from "../../../context/ViewportContext";
import Reveal from "../../Reveal/Reveal";
import { trackEvent } from '../../../utils/analytics';
import useNearViewport from "../../../hooks/useNearViewport";
import rulebookPdf from '../../../assets/files/ReglamentoOficial.pdf';

const openRulebook = () => {
  trackEvent('Rulebook', 'Click', 'Mascots Rulebook');
  window.open(rulebookPdf, '_blank', 'noopener,noreferrer');
};

const mascotsSlides = [
  mascots_slider_1, mascots_slider_2,
];

const Mascots = () => {
  const { isMobile } = useViewport();
  const [bgRef, bgNear] = useNearViewport();

  // Carrusel con efecto de stack de fotos: mismo patrón de control y
  // auto-avance (con pausa de 20s al interactuar) que el de Phases.js.
  const [currentSlide, setCurrentSlide] = useState(0);
  const [firstSlideInteraction, setFirstSlideInteraction] = useState(true);
  const slideDirection = useRef("back");
  const autoAdvanceTimeoutRef = useRef(null);
  const resumeTimeoutRef = useRef(null);

  const scheduleAutoAdvance = () => {
    clearTimeout(autoAdvanceTimeoutRef.current);
    autoAdvanceTimeoutRef.current = setTimeout(() => {
      slideDirection.current = "forward";
      setCurrentSlide((current) => (current + 1) % mascotsSlides.length);
      scheduleAutoAdvance();
    }, 8000);
  };

  const pauseAutoAdvance = () => {
    clearTimeout(autoAdvanceTimeoutRef.current);
    clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(scheduleAutoAdvance, 20000);
  };

  useEffect(() => {
    scheduleAutoAdvance();
    return () => {
      clearTimeout(autoAdvanceTimeoutRef.current);
      clearTimeout(resumeTimeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showPreviousSlide = () => {
    slideDirection.current = "back";
    if (firstSlideInteraction) {
      setFirstSlideInteraction(false);
      trackEvent('Mascots', 'Click', 'Mascots Slider');
    }
    setCurrentSlide((current) => (current - 1 + mascotsSlides.length) % mascotsSlides.length);
    pauseAutoAdvance();
  };

  const showNextSlide = () => {
    slideDirection.current = "forward";
    if (firstSlideInteraction) {
      setFirstSlideInteraction(false);
      trackEvent('Mascots', 'Click', 'Mascots Slider');
    }
    setCurrentSlide((current) => (current + 1) % mascotsSlides.length);
    pauseAutoAdvance();
  };

  const goToSlide = (index) => {
    slideDirection.current = index > currentSlide ? "forward" : "back";
    setCurrentSlide(index);
    pauseAutoAdvance();
  };

  const mascotsStack = (
    <>
      <div className="mascots-stack" aria-label="Galería de botargas">
        <button
          type="button"
          className="mascots-stack-control-left"
          onClick={showPreviousSlide}
          aria-label="Ver botarga anterior"
        >
          <img loading="lazy" className="mascots-stack-control-img" src={phase_left} alt="" />
        </button>

        <div className="mascots-stack-cards">
          {[0, 1, 2].map((depth) => {
            const index = (currentSlide + depth) % mascotsSlides.length;
            const isFront = depth === 0;
            return (
              <div
                key={isFront ? `front-${currentSlide}` : `depth-${depth}`}
                aria-hidden={isFront ? undefined : true}
                className={`mascots-stack-card mascots-stack-card-depth-${depth}${
                  isFront
                    ? ` ${slideDirection.current !== "forward" ? "mascots-stack--right-in" : "mascots-stack--left-in"}`
                    : ""
                }`}
              >
                <video
                  loading="eager"
                  src={mascotsSlides[index]}
                  alt={isFront ? `Botarga ${currentSlide + 1}` : ""}
                  className="mascots-stack-card-photo"
                  muted
                  autoPlay
                  loop
                  playsInline
                />
                <img loading="lazy" src={mascots_marco} alt="Mascots Marco" className="mascots-stack-card-photo-cover" />
              </div>
            );
          })}
        </div>

        <button
          type="button"
          className="mascots-stack-control-right"
          onClick={showNextSlide}
          aria-label="Ver botarga siguiente"
        >
          <img loading="lazy" className="mascots-stack-control-img" src={phase_right} alt="" />
        </button>
      </div>

      <div className="mascots-stack-indicators" aria-label="Seleccionar botarga">
        {mascotsSlides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`mascots-stack-indicator${currentSlide === index ? " is-active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir a la botarga ${index + 1}`}
            aria-current={currentSlide === index ? "true" : undefined}
          />
        ))}
      </div>
    </>
  );

  return (
    <>{isMobile ? (
      <div
        ref={bgRef}
        className="general-page"
        style={{
          minHeight: "776px",
          maxHeight: isMobile ? "1000px" : undefined,
          backgroundImage: bgNear ? `url(${Mascots_bckg})` : "none",
        }}
      >
        <Reveal><img loading="lazy" src={Mascots_title} alt="Mascots Title" className="mascots-title" /></Reveal>

       
        <Reveal><div className="mascots-stack-wrapper">{mascotsStack}</div></Reveal>
        <Reveal><img loading="lazy" src={mascots_snacking} alt="Mascots Snacking" className="mascots-snacking" /></Reveal>
        <Reveal><img loading="lazy" src={rulebook} alt="Rulebook" className="rulebook" onClick={openRulebook} /></Reveal>
      </div>
    ) : (
      <div className="general-page-desktop">
        <img
          loading="lazy"
          src={desktop_6}
          alt="Mascots Background"
          className="bckg-desktop"
        />

        <Reveal><img loading="lazy" src={Mascots_title} alt="Mascots Title" className="mascots-title-desktop" /></Reveal>
        <Reveal><div className="mascots-stack-wrapper-desktop">{mascotsStack}</div></Reveal> 

        <Reveal><img loading="lazy" src={mascots_snacking} alt="Mascots Snacking" className="mascots-snacking-desktop" /></Reveal>
        <Reveal><img loading="lazy" src={rulebook} alt="Rulebook" className="rulebook-desktop" onClick={openRulebook} /></Reveal>



      </div>
    ) }</>
  );
};

export default Mascots;
