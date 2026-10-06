
import './Faqs.css';

import { commonWallpaperD, commonWallpaperM, faqs_banner, faqs_button, faqs_title } from '../../../assets/assetsDirectory';
import { useViewport } from "../../../context/ViewportContext";

const Faqs = () => {
  const { isMobile } = useViewport();
  return (
    <div className="general-page" style={{ backgroundImage: `url(${isMobile ? commonWallpaperM : commonWallpaperD})`, minHeight: "714px", gap: "20px" }}>
      <div style={{height: "20px"}}></div>
      <img src={faqs_title} alt="Faqs Title" className="faqs-title" />
      <p className="faqs-description">Respuestas rápidas y precisas <br></br><span style={{color: 'white'}}>para gente con prisa.</span></p>
      <img src={faqs_banner} alt="Faqs Banner" className="faqs-banner" />
      <img src={faqs_button} alt="Faqs Button" className="faqs-button" />
    </div>
  );
};

export default Faqs;
