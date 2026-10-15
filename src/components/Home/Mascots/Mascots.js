
import './Mascots.css';

import { desktop_6, Mascots_bckg, Mascots_title, Mascots_banner, rulebook } from '../../../assets/assetsDirectory';
import { useViewport } from "../../../context/ViewportContext";
import Reveal from "../../Reveal/Reveal";
import { trackEvent } from '../../../utils/analytics';
import useNearViewport from "../../../hooks/useNearViewport";
const Mascots = () => {
  const { isMobile } = useViewport();
  const [bgRef, bgNear] = useNearViewport();
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
        <Reveal><p className="mascots-text">No preguntes como llegaron <br></br>
        al mapa, tú solo disfruta</p></Reveal>
        <Reveal><img loading="lazy" src={Mascots_banner} alt="Mascots Banner" className="mascots-banner" /></Reveal>
        <Reveal><img loading="lazy" src={rulebook} alt="Rulebook" className="rulebook" onClick={() => trackEvent('Rulebook', 'Click', 'Mascots Rulebook')} /></Reveal>
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
        <Reveal><p className="mascots-text-desktop">No preguntes como llegaron <br></br>
        al mapa, tú solo disfruta</p></Reveal>
        <Reveal><img loading="lazy" src={Mascots_banner} alt="Mascots Banner" className="mascots-banner-desktop" /></Reveal>
        <Reveal><img loading="lazy" src={rulebook} alt="Rulebook" className="rulebook-desktop" onClick={() => trackEvent('Rulebook', 'Click', 'Mascots Rulebook')} /></Reveal>
     


      </div>
    ) }</>
  );
};

export default Mascots;
