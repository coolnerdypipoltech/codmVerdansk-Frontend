
import './Mascots.css';

import { commonWallpaperD, Mascots_bckg, Mascots_title, Mascots_banner, rulebook } from '../../../assets/assetsDirectory';
import { useViewport } from "../../../context/ViewportContext";

const Mascots = () => {
  const { isMobile } = useViewport();
  return (
    <div className="general-page" style={{ backgroundImage: `url(${isMobile ? Mascots_bckg : commonWallpaperD})`, minHeight: "776px", maxHeight: isMobile ? "776px" : undefined }}>
      <img loading="lazy" src={Mascots_title} alt="Mascots Title" className="mascots-title" />
      <p className="mascots-text">No preguntes como llegaron <br></br>
al mapa, tú solo disfruta</p>
      <img loading="lazy" src={Mascots_banner} alt="Mascots Banner" className="mascots-banner" />
      <img loading="lazy" src={rulebook} alt="Rulebook" className="rulebook" />
    </div>
  );
};

export default Mascots;
