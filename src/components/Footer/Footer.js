
import './Footer.css';

import { footer_bckg, cod_logo, fb_icon, ig_icon, yt_icon, tk_icon } from '../../assets/assetsDirectory';
import { trackEvent } from '../../utils/analytics';
import TerminosPDF from '../../assets/files/Termino_y_Condiciones_Señal_Verdansk.pdf';

  const openTerminosPDF = () => {
    trackEvent("footer", "Click", "Términos y condiciones");
    window.open(TerminosPDF, "_blank", "noopener,noreferrer");
  };
const Footer = () => {

  return (
    <div className="footer">
      <div className="footer-container" >
      <img loading="lazy" src={cod_logo} alt="Cod Logo" className="footer-cod-logo" />
      <p className="footer-title">Síguenos para estar al día</p>
      <div className="footer-icons">
        <img loading="lazy" src={fb_icon} onClick={() => { window.open("https://www.facebook.com/LATAMCallOfDutyMobile", "_blank"); trackEvent("social_media", "Click", "Facebook"); }} alt="Facebook Icon" className="footer-icon" />
        <img loading="lazy" src={ig_icon} onClick={() => { window.open("https://www.instagram.com/callofdutymobilelatam/", "_blank"); trackEvent("social_media", "Click", "Instagram"); }} alt="Instagram Icon" className="footer-icon" />
        <img loading="lazy" src={yt_icon} onClick={() => { window.open("https://www.youtube.com/@LATAMCallOfDutyMobile", "_blank"); trackEvent("social_media", "Click", "YouTube"); }} alt="YouTube Icon" className="footer-icon" />
        <img loading="lazy" src={tk_icon} onClick={() => { window.open("https://www.tiktok.com/@callofdutymobile_latam", "_blank"); trackEvent("social_media", "Click", "TikTok"); }} alt="TikTok Icon" className="footer-icon" />
      </div>
      <p className="footer-text" onClick={() => { window.open("https://www.activision.com/mx/es/legal/privacy-policy", "_blank"); trackEvent("footer", "Click", "Políticas de privacidad"); }}>Políticas de privacidad</p>
      <p className="footer-text" onClick={openTerminosPDF}>Términos y condiciones del Torneo</p>
      {/* <p className="footer-text" onClick={openTerminosPDF}>Términos y condiciones de la Rifa de premios.</p> */}
      <p className="footer-text" style={{ cursor: "default" }}>© 2026 Call of Duty Verdansk</p>
      <div style={{height: "20px"}}></div>
    </div>
    
    <div className="footer-bckg" style={{ backgroundImage: `url(${footer_bckg})` }}></div>
        
    </div>
  );
};

export default Footer;
