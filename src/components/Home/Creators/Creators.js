
import './Creators.css';

import { commonWallpaperD, creators_bckg, creators_banner, creators_button, creators_title  } from '../../../assets/assetsDirectory';
import { useViewport } from "../../../context/ViewportContext";
import {  useNavigate } from 'react-router-dom';

const Creators = () => {
  const { isMobile } = useViewport();
  const navigate = useNavigate();
  return (
    <div className="general-page" style={{ backgroundImage: `url(${isMobile ? creators_bckg : commonWallpaperD})`, minHeight: "768px", maxHeight: isMobile ? "768px" : undefined, gap: "20px", justifyContent: "flex-start" }}>

      <img loading="lazy" src={creators_title} alt="Creators Title" className="creators-title" />
      <img loading="lazy" src={creators_banner} alt="Creators Banner" className="creators-banner" />
      <img loading="lazy" src={creators_button} alt="Creators Button" className="creators-button" onClick={() => { navigate("/creators"); window.scrollTo(0, 0); }} />
      
    </div>
  );
};

export default Creators;
