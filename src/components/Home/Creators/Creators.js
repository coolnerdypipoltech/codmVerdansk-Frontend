
import './Creators.css';

import { commonWallpaperD, commonWallpaperM, creators_banner, creators_button, creators_title  } from '../../../assets/assetsDirectory';
import { useViewport } from "../../../context/ViewportContext";

const Creators = () => {
  const { isMobile } = useViewport();
  return (
    <div className="general-page" style={{ backgroundImage: `url(${isMobile ? commonWallpaperM : commonWallpaperD})`, minHeight: "714px", gap: "20px" }}>
      <div style={{height: "20px"}}></div>
      <img src={creators_title} alt="Creators Title" className="creators-title" />
      <img src={creators_banner} alt="Creators Banner" className="creators-banner" />
      <img src={creators_button} alt="Creators Button" className="creators-button" />
      
    </div>
  );
};

export default Creators;
