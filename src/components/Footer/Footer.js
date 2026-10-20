
import './Footer.css';
import { useNavigate } from 'react-router-dom';

import { footer_bckg, cod_logo, fb_icon, ig_icon, yt_icon } from '../../assets/assetsDirectory';
import { trackEvent } from '../../utils/analytics';
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <div className="footer-container" >
      <img loading="lazy" src={cod_logo} alt="Cod Logo" className="footer-cod-logo" />
      <p className="footer-title">Síguenos para estar al día</p>
      <div className="footer-icons">
        <img loading="lazy" src={fb_icon} onClick={() => { window.open("https://www.facebook.com/LATAMCallOfDutyMobile", "_blank"); trackEvent("social_media", "Click", "Facebook"); }} alt="Facebook Icon" className="footer-icon" />
        <img loading="lazy" src={ig_icon} onClick={() => { window.open("https://www.instagram.com/callofdutymobilelatam/", "_blank"); trackEvent("social_media", "Click", "Instagram"); }} alt="Instagram Icon" className="footer-icon" />
        <img loading="lazy" src={yt_icon} onClick={() => { window.open("https://www.youtube.com/@LATAMCallOfDutyMobile", "_blank"); trackEvent("social_media", "Click", "YouTube"); }} alt="YouTube Icon" className="footer-icon" />
      </div>
      {/* <p className="footer-text">Políticas de privacidad</p>
      <p className="footer-text">Términos y condiciones</p> */}
      <p className="footer-text">© 2024 Call of Duty Verdansk</p>
      
    </div>
    
    <div className="footer-bckg" style={{ backgroundImage: `url(${footer_bckg})` }}></div>
        
    </div>
  );
};

export default Footer;
