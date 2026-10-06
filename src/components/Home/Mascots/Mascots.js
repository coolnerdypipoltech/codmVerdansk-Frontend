
import './Mascots.css';

import { commonWallpaperD, commonWallpaperM, Mascots_title, Mascots_banner, rulebook } from '../../../assets/assetsDirectory';
import { useViewport } from "../../../context/ViewportContext";

const Mascots = () => {
  const { isMobile } = useViewport();
  return (
    <div className="general-page" style={{ backgroundImage: `url(${isMobile ? commonWallpaperM : commonWallpaperD})`, minHeight: "714px" }}>
      <img src={Mascots_title} alt="Mascots Title" className="mascots-title" />
      <p className="mascots-text">No preguntes como llegaron <br></br>
al mapa, tú solo disfruta</p>
      <img src={Mascots_banner} alt="Mascots Banner" className="mascots-banner" />
      <img src={rulebook} alt="Rulebook" className="rulebook" />
    </div>
  );
};

export default Mascots;
