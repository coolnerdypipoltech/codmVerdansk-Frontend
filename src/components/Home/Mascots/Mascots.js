
import './Mascots.css';

import { desktop_8, Mascots_bckg, Mascots_title, Mascots_banner, rulebook } from '../../../assets/assetsDirectory';
import { useViewport } from "../../../context/ViewportContext";

const Mascots = () => {
  const { isMobile } = useViewport();
  return (
    <>{isMobile ? (
      <div
        className="general-page"
        style={{
          minHeight: "776px",
          maxHeight: isMobile ? "1000px" : undefined,
          backgroundImage: `url(${Mascots_bckg})`,
        }}
      >
        <img loading="lazy" src={Mascots_title} alt="Mascots Title" className="mascots-title" />
        <p className="mascots-text">No preguntes como llegaron <br></br>
        al mapa, tú solo disfruta</p>
        <img loading="lazy" src={Mascots_banner} alt="Mascots Banner" className="mascots-banner" />
        <img loading="lazy" src={rulebook} alt="Rulebook" className="rulebook" />
      </div>
    ) : (
      <div className="general-page-desktop">
        <img
          loading="lazy"
          src={desktop_8}
          alt="Mascots Background"
          className="bckg-desktop"
        />
      </div>
    ) }</>
  );
};

export default Mascots;
