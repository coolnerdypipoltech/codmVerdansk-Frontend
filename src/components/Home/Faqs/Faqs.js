
import './Faqs.css';

import { commonWallpaperD, faqs_bckg, faqs_banner, faqs_button, faqs_title } from '../../../assets/assetsDirectory';
import { useViewport } from "../../../context/ViewportContext";
import { useNavigate } from "react-router-dom";

const Faqs = () => {
  const { isMobile } = useViewport();
  const navigate = useNavigate();
  return (
    <div className="general-page" style={{ backgroundImage: `url(${isMobile ? faqs_bckg : commonWallpaperD})`, minHeight: "688px", maxHeight: isMobile ? "688px" : undefined, gap: "20px" }}>

      <img loading="lazy" src={faqs_title} alt="Faqs Title" className="faqs-title" />
      <p className="faqs-description">Respuestas rápidas y precisas <br></br><span style={{color: 'white'}}>para gente con prisa.</span></p>
      <img loading="lazy" src={faqs_banner} alt="Faqs Banner" className="faqs-banner" />
      <img loading="lazy" src={faqs_button} alt="Faqs Button" className="faqs-button" onClick={() => {navigate('/faqs'); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}}/>
    </div>
  );
};

export default Faqs;
