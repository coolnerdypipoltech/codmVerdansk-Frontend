
import './Toknow.css';


import {  desktop_5_5, toknow_banner, toknow_banner_2, toknow_button, toknow_title_1, toknow_title_2, toknow_bckg, registerPage_background_popUp,
  registerPage_close, } from '../../../assets/assetsDirectory';
import { useViewport } from "../../../context/ViewportContext";
import Reveal from "../../Reveal/Reveal";
import { trackEvent } from '../../../utils/analytics';
import { useState } from 'react';
const Toknow = () => {
  const { isMobile } = useViewport();
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  return (
    <>{isMobile ? (<div
      className="general-page"
      style={{
        backgroundImage: `url(${isMobile ? toknow_bckg : desktop_5_5})`,
        minHeight: "720px",
        maxHeight: isMobile ? "647px" : undefined,
        gap: "20px",
        justifyContent: "flex-start"
      }}
    >
      <Reveal><img src={toknow_title_1} alt="Toknow Title 1" className="toknow-title-1"></img></Reveal>
      <Reveal><img src={toknow_banner} alt="Toknow Banner" className="toknow-banner" ></img></Reveal>
<Reveal>      <p className="toknow-text" style={{textAlign: "center", lineHeight: "1.2"}}>Antes de continuar, revisa algunos <br></br> <span style={{color: "#FFCE34", fontWeight: "bold"}}>detalles importantes</span> que pueden <br></br> afectar tu participación</p>
</Reveal>
      <Reveal><img src={toknow_button} alt="Toknow Button" className="toknow-button" onClick={() => setIsButtonClicked(true)}></img></Reveal>

      {isButtonClicked && <>
      
      <div className="toknow-overlay" onClick={() => setIsButtonClicked(false)}>
        <div className='toknow-popup'>
          <><img src={registerPage_background_popUp} alt="Background PopUp" className="toknow-background-popUp"></img></>
          <img src={toknow_title_2} alt="Toknow Title 2" className="toknow-title-2"></img>
          <p className="toknow-text">El registro será del <span style={{color: "#C9A73C", fontWeight: "bold"}}>23 de octubre </span> 12:00 PM [UTC -6] <span style={{color: "#C9A73C", fontWeight: "bold"}}>al 31 de octubre </span> 
            a las 6:00 PM [UTC-6]</p>

          <p className="toknow-text">Aunque la selección de jugadores será aleatoria, el orden de registro dará prioridad en el proceso de selección para la <span style={{color: "#C9A73C", fontWeight: "bold"}}>PRIMERA RONDA DE CLASIFICATORIAS</span>.</p>

          <p className="toknow-text" style={{width: "100%"}}>Registrarte no garantiza tu participación en las siguientes fases. </p>

          <p className="toknow-text">Si resultas seleccionado, deberás unirte al servidor oficial de <span style={{color: "#C9A73C", fontWeight: "bold"}}>Discord de Señal Verdansk</span>. Ahí recibirás las instrucciones, fechas, horarios y el seguimiento necesario para continuar en la competencia.</p>
          <img src={toknow_banner_2} alt="Toknow Banner 2" className="toknow-banner-2"></img>
          <img src={registerPage_close} alt="Close Button" className="toknow-close-button" onClick={() => setIsButtonClicked(false)}></img>
        </div>
      </div>
      
      </>}


    </div>) : (<div
      className="general-page-desktop"
      style={{
      }}
      
    >
      <img src={desktop_5_5} alt="Background" className="bckg-desktop" />
            <Reveal><img src={toknow_title_1} alt="Toknow Title 1" className="toknow-title-1-desktop"></img></Reveal>
      <Reveal><img src={toknow_banner} alt="Toknow Banner" className="toknow-banner-desktop" ></img></Reveal>
<Reveal>      <p className="toknow-text-desktop" style={{textAlign: "center"}}>Antes de continuar, revisa algunos <br></br> <span style={{color: "#FFCE34", fontWeight: "bold"}}>detalles importantes</span> que pueden <br></br> afectar tu participación</p>
</Reveal>
      <Reveal><img src={toknow_button} alt="Toknow Button" className="toknow-button-desktop" onClick={() => setIsButtonClicked(true)}></img></Reveal>

      {isButtonClicked && <>
      
      <div className="toknow-overlay" onClick={() => setIsButtonClicked(false)}>
        <div className='toknow-popup'>
          <><img src={registerPage_background_popUp} alt="Background PopUp" className="toknow-background-popUp"></img></>
          <img src={toknow_title_2} alt="Toknow Title 2" className="toknow-title-2"></img>
          <p className="toknow-text" style={{textAlign: "left", width: "100%"}}>El registro será del <span style={{color: "#C9A73C", fontWeight: "bold"}}>23 de octubre </span> 12:00 PM [UTC -6] <span style={{color: "#C9A73C", fontWeight: "bold"}}>al 31 de octubre </span> 
            a las 6:00 PM [UTC-6]</p>

          <p className="toknow-text">Aunque la selección de jugadores será aleatoria, el orden de registro dará prioridad en el proceso de selección para la <span style={{color: "#C9A73C", fontWeight: "bold"}}>PRIMERA RONDA DE CLASIFICATORIAS</span>.</p>

          <p className="toknow-text" style={{width: "100%"}}>Registrarte no garantiza tu participación en las siguientes fases. </p>

          <p className="toknow-text">Si resultas seleccionado, deberás unirte al servidor oficial de <span style={{color: "#C9A73C", fontWeight: "bold"}}>Discord de Señal Verdansk</span>. Ahí recibirás las instrucciones, fechas, horarios y el seguimiento necesario para continuar en la competencia.</p>
          <img src={toknow_banner_2} alt="Toknow Banner 2" className="toknow-banner-2"></img>
          <img src={registerPage_close} alt="Close Button" className="toknow-close-button" onClick={() => setIsButtonClicked(false)}></img>
        </div>
        </div>
        </>}

    </div>)} </>
  );
};

export default Toknow;
