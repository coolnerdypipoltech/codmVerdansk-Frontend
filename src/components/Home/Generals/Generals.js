
import './Generals.css';

import {  mobil_bckg5, desktop_bckg_5, Mascots_title, mascots_infinix, mascots_snacking, mascots_square_1, mascots_square_2, mascots_square_3, mascots_square_4, mascots_square_5, mascots_square_6, mascots_square_7, mascots_square_8 } from '../../../assets/assetsDirectory';

import { useViewport } from "../../../context/ViewportContext";
import Reveal from "../../Reveal/Reveal";

import useNearViewport from "../../../hooks/useNearViewport";

const Generals = () => {
  const { isMobile } = useViewport();
  const [bgRef, bgNear] = useNearViewport();

  return (
    <>{isMobile ? (
      <div
        ref={bgRef}
        className="general-page"
        style={{
          minHeight: "763px",
          top: "-2px",
          maxHeight: isMobile ? "950px" : undefined,
          backgroundImage: bgNear ? `url(${mobil_bckg5})` : "none",
          justifyContent: 'flex-start'
        }}
      >
        <img src={Mascots_title} alt='title' className='Generals-title'></img>
        <p className='generals-text' style={{ fontWeight: 'bold' }}>¡ESTA VICTORIA TAMBIÉN ES SUYA! </p>
        <p className='generals-text'>Gracias a nuestros Generales de <br></br> Brigada por sumarse a la batalla  y <br></br> hacer de <span style={{ fontWeight: 'bold' }}> Señal Verdansk</span>  un evento <br></br> irrepetible con todo el caos de <br></br> Latinoamérica</p>

        <div className='generals-container'>
          <img src={mascots_square_8} alt='mascot' className='generals-mascot'></img>
          <img src={mascots_square_3} alt='mascot' className='generals-mascot'></img>
          <img src={mascots_square_7} alt='mascot' className='generals-mascot'></img>
          <img src={mascots_square_5} alt='mascot' className='generals-mascot'></img>
          
          <img src={mascots_square_6} alt='mascot' className='generals-mascot'></img>
          <img src={mascots_square_1} alt='mascot' className='generals-mascot'></img>
          <img src={mascots_square_4} alt='mascot' className='generals-mascot'></img>
          <img src={mascots_square_2} alt='mascot' className='generals-mascot'></img>
          
          
          
          
          
        </div>
        <div style={{display: 'flex', flexDirection: "row", height: "50px", marginTop: "20px", width: "100%", justifyContent: "center"}}><Reveal><img loading="lazy" src={mascots_snacking} alt="Mascots Snacking" className="mascots-snacking" /></Reveal>
        <Reveal><img loading="lazy" src={mascots_infinix} alt="Mascots Infinix" className="mascots-snacking" /></Reveal></div>
        

      </div>

    ) : (
      <div className="general-page-desktop" >
        <img
          loading="lazy"
          src={desktop_bckg_5}
          alt="Calendar Background"
          className="bckg-desktop"
          style={{minHeight: "100vh"}}
        />
        
        <img src={Mascots_title} alt='title' className='Generals-title-desktop'></img>
        <p className='generals-text-desktop' style={{ fontWeight: 'bold' }}>¡ESTA VICTORIA TAMBIÉN ES SUYA! </p>
        <p className='generals-text-desktop' style={{ top: '44%' }}>Gracias a nuestros Generales de Brigada por sumarse <br></br>  a la batalla y hacer de <span style={{ fontWeight: 'bold' }}> Señal Verdansk</span>  un evento <br></br> irrepetible con todo el caos de Latinoamérica</p>

        <div className='generals-container-desktop'>
          <img src={mascots_square_8} alt='mascot' className='generals-mascot-desktop'></img>
          <img src={mascots_square_3} alt='mascot' className='generals-mascot-desktop'></img>
          <img src={mascots_square_7} alt='mascot' className='generals-mascot-desktop'></img>
          <img src={mascots_square_5} alt='mascot' className='generals-mascot-desktop'></img>
          
          <img src={mascots_square_6} alt='mascot' className='generals-mascot-desktop'></img>
          <img src={mascots_square_1} alt='mascot' className='generals-mascot-desktop'></img>
          <img src={mascots_square_4} alt='mascot' className='generals-mascot-desktop'></img>
          <img src={mascots_square_2} alt='mascot' className='generals-mascot-desktop'></img>
          
          
          
          
          
        </div>
        <div style={{display: 'flex', flexDirection: "row"}}>
          <Reveal><img loading="lazy" src={mascots_snacking} alt="Mascots Snacking" className="mascots-snacking-desktop" style={{ left: '39%' }} /></Reveal>
        <Reveal><img loading="lazy" src={mascots_infinix} alt="Mascots Infinix" className="mascots-snacking-desktop" /></Reveal></div>
        

      </div>
    ) }</>
  );
};

export default Generals;
