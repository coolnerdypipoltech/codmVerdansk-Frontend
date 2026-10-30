import "./Phases.css";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FrameAnimation from "../../FrameAnimation/FrameAnimation";
import useNearViewport from "../../../hooks/useNearViewport";
import {
  phase_title,
  phase_left,
  phase_right,
  phase_info_1,
  phase_info_2,
  phase_info_3,
  phase_info_4,
  phase_bckg,
  desktop_5,
  sticker_truck_1,
  sticker_truck_2,
  sticker_truck_3,
  
} from "../../../assets/assetsDirectory";
import { useViewport } from "../../../context/ViewportContext";
import Reveal from "../../Reveal/Reveal";
import { trackEvent } from '../../../utils/analytics';
const phaseImages = [phase_info_1, phase_info_2, phase_info_3, phase_info_4];

const Phases = () => {
    const navigate = useNavigate();
  const { isMobile } = useViewport();
  const [currentPhase, setCurrentPhase] = useState(0);
  const [firstTime, setFirstTime] = useState(true);
  const direction = useRef("back");
  const [bgRef, bgNear] = useNearViewport();
  const autoAdvanceTimeoutRef = useRef(null);
  const resumeTimeoutRef = useRef(null);

  const scheduleAutoAdvance = () => {
    clearTimeout(autoAdvanceTimeoutRef.current);
    autoAdvanceTimeoutRef.current = setTimeout(() => {
      direction.current = "forward";
      setCurrentPhase((current) => (current + 1) % phaseImages.length);
      scheduleAutoAdvance();
    }, 8000);
  };

  // Al interactuar manualmente se detiene el auto-avance por 20s antes de retomarlo.
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

  const showPreviousPhase = () => {
    direction.current = "back";
    if(firstTime) {
      setFirstTime(false);
      trackEvent('Phases', 'Click', 'Phases');
    }
    setCurrentPhase((current) => (current - 1 + phaseImages.length) % phaseImages.length);
    pauseAutoAdvance();
  };

  const showNextPhase = () => {
    direction.current = "forward";
    if(firstTime) {
      setFirstTime(false);
      trackEvent('Phases', 'Click', 'Phases');
    }
    setCurrentPhase((current) => (current + 1) % phaseImages.length);
    pauseAutoAdvance();
  };

  const clickStuff = (phase) => {
    console.log(phase)
    if(phase === 0){
      navigate("/register");
      document.body.scrollTop = 0 // Replace "/some-path" with the actual path you want to navigate to
    }
  };

  return (
    <>{isMobile ? (<><div
      ref={bgRef}
      className="general-page"
      style={{
        backgroundImage: bgNear ? `url(${phase_bckg})` : "none",
        minHeight: "832px",
        maxHeight: isMobile ? "832px" : undefined,
      }}
    >
      <Reveal><img loading="lazy" src={phase_title} alt="Phase Title" className="phase-title" /></Reveal>
      <Reveal><p className="phase-text">
        ponte verdansk <br></br>y domina el mapa
      </p></Reveal>

      <div className="phase-carousel" aria-label="Fases de Verdansk">
        <button
          type="button"
          className="phase-carousel-control-left"
          onClick={showPreviousPhase}
          aria-label="Ver fase anterior"
        >
          <img loading="lazy" className="phase-carousel-control-img" src={phase_left} alt="" />
        </button>
        <div key={currentPhase} className={`phase-info-container`}>
          <img
          src={phaseImages[currentPhase]}
          onClick={() => clickStuff(currentPhase)}
          alt={`Información de la fase ${currentPhase + 1}`}
          className={`phase-info ${direction.current !== "forward" ? "phases-mobil--right-in" : "phases-mobil--left-in"}`}
        />
        </div>
        <button
          type="button"
          className="phase-carousel-control-right"
          onClick={showNextPhase}
          aria-label="Ver fase siguiente"
        >
          <img loading="lazy" className="phase-carousel-control-img" src={phase_right} alt="" />
        </button>
      </div>

      <div className="phase-carousel-indicators" aria-label="Seleccionar fase">
        {phaseImages.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`phase-carousel-indicator${currentPhase === index ? " is-active" : ""}`}
            onClick={() => setCurrentPhase(index)}
            aria-label={`Ir a la fase ${index + 1}`}
            aria-current={currentPhase === index ? "true" : undefined}
          />
        ))}
      </div>
      <Reveal><div className="phase-sticker-trigger" aria-hidden="true"></div></Reveal>
      <div className="phase-sticker-container">
        <FrameAnimation loading="lazy" fps={6} frames={[sticker_truck_1, sticker_truck_2, sticker_truck_3]} alt="Phase Sticker" className="phase-sticker" />
   
      </div>
 </div></>) : (<><div
      className="general-page-desktop"
    >
      <img
        loading="lazy"
        src={desktop_5}
        alt="Intro Background"
        className="bckg-desktop"
      />

      <Reveal><img loading="lazy" src={phase_title} alt="Phase Title" className="phase-title-desktop" /></Reveal>
      <Reveal><p className="phase-text-desktop">
        ponte verdansk <br></br>y domina el mapa
      </p></Reveal>


      <div className="phases-information-desktop">
        <div className="phase-carousel" aria-label="Fases de Verdansk">
        <button
          type="button"
          className="phase-carousel-control-left"
          onClick={showPreviousPhase}
          aria-label="Ver fase anterior"
        >
          <img loading="lazy" className="phase-carousel-control-img" src={phase_left} alt="" />
        </button>
        <div key={currentPhase} className={`phase-info-container`}>
          <img
          src={phaseImages[currentPhase]}
          alt={`Información de la fase ${currentPhase + 1}`}
          className={`phase-info ${direction.current !== "forward" ? "phases-mobil--right-in" : "phases-mobil--left-in"}`}
        />
        </div>
        <button
          type="button"
          className="phase-carousel-control-right"
          onClick={showNextPhase}
          aria-label="Ver fase siguiente"
        >
          <img loading="lazy" className="phase-carousel-control-img" src={phase_right} alt="" />
        </button>
      </div>

      <div className="phase-carousel-indicators" aria-label="Seleccionar fase">
        {phaseImages.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`phase-carousel-indicator${currentPhase === index ? " is-active" : ""}`}
            onClick={() => setCurrentPhase(index)}
            aria-label={`Ir a la fase ${index + 1}`}
            aria-current={currentPhase === index ? "true" : undefined}
          />
        ))}
      </div>
      </div>
      <div className="phase-sticker-container">
        <FrameAnimation loading="lazy" fps={6} frames={[sticker_truck_1, sticker_truck_2, sticker_truck_3]} alt="Phase Sticker" className="phase-sticker-desktop" />
   
      </div>
    </div></>) }</>
    
  );
};

export default Phases;
