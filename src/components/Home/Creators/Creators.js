
import './Creators.css';

import { creators_bckg, creators_banner, creators_button, creators_title, desktop_10  } from '../../../assets/assetsDirectory';
import { useViewport } from "../../../context/ViewportContext";
import {  useNavigate } from 'react-router-dom';

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
        <img loading="lazy" src={creators_title} alt="Creators Title" className="creators-title" />
        <img loading="lazy" src={creators_banner} alt="Creators Banner" className="creators-banner" />
        <img loading="lazy" src={creators_button} alt="Creators Button" className="creators-button" onClick={() => { navigate("/creators"); window.scrollTo(0, 0); }} />
      </div>
    ) : (
      <div className="general-page-desktop">
        <img
          loading="lazy"
          src={desktop_10}
          alt="Creators Background"
          className="bckg-desktop"
        />
        <div className='creators-desktop-holder'>
                  <img loading="lazy" src={creators_button} alt="Creators Button" className="creators-button" onClick={() => { navigate("/creators"); window.scrollTo(0, 0); }} />
        </div>
      </div>
    ) }</>
  );
};

export default Creators;
