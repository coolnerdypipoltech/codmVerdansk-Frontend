
import './Creators.css';

import { creators_bckg, creators_banner, creators_button, creators_title, desktop_8, desktop_ghost_banner  } from '../../../assets/assetsDirectory';
import { useViewport } from "../../../context/ViewportContext";
import {  useNavigate } from 'react-router-dom';
import Reveal from "../../Reveal/Reveal";
import { trackEvent } from '../../../utils/analytics';
const Creators = () => {
  const { isMobile } = useViewport();
  const navigate = useNavigate();
  return (
    <>{isMobile ? (
      <div
        className="general-page"
        style={{
          minHeight: "768px",
          maxHeight: isMobile ? "768px" : undefined,
          backgroundImage: `url(${creators_bckg})`,
          gap: "20px",
          justifyContent: "flex-start"
        }}
      >
        <Reveal><img loading="lazy" src={creators_title} alt="Creators Title" className="creators-title" /></Reveal>
        <Reveal><img loading="lazy" src={creators_banner} alt="Creators Banner" className="creators-banner" /></Reveal>
        <Reveal><img loading="lazy" src={creators_button} alt="Creators Button" className="creators-button" onClick={() => { trackEvent('Creators', 'Click', 'Creators Button'); navigate("/creators"); window.scrollTo(0, 0); }} /></Reveal>
      </div>
    ) : (
      <div className="general-page-desktop">
        <img
          loading="lazy"
          src={desktop_8}
          alt="Creators Background"
          className="bckg-desktop"
        />
        <Reveal><img loading="lazy" src={creators_title} alt="Creators Title" className="creators-title-desktop" /></Reveal>
        <Reveal><img loading="lazy" src={desktop_ghost_banner} alt="Creators Banner" className="creators-banner-desktop" /></Reveal>
        <div className='creators-desktop-holder'>
                  <Reveal><img loading="lazy" src={creators_button} alt="Creators Button" className="creators-button" onClick={() => { trackEvent('Creators', 'Click', 'Creators Button'); navigate("/creators"); window.scrollTo(0, 0); }} /></Reveal>
        </div>
      </div>
    ) }</>
  );
};

export default Creators;
