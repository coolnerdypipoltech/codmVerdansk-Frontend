
import './Footer.css';

import { footer_bckg, cod_logo, fb_icon, ig_icon, yt_icon } from '../../assets/assetsDirectory';

const Footer = () => {

  return (
    <div className="footer">
      <div className="footer-container" >
      <img src={cod_logo} alt="Cod Logo" className="footer-cod-logo" />
      <p className="footer-title">Síguenos para estar al día</p>
      <div className="footer-icons">
        <img src={fb_icon} alt="Facebook Icon" className="footer-icon" />
        <img src={ig_icon} alt="Instagram Icon" className="footer-icon" />
        <img src={yt_icon} alt="YouTube Icon" className="footer-icon" />
      </div>
      <p className="footer-text">Políticas de privacidad</p>
      <p className="footer-text">Términos y condiciones</p>
      <p className="footer-text">© 2024 Call of Duty Verdansk</p>
    </div>
    
    <div className="footer-bckg" style={{ backgroundImage: `url(${footer_bckg})` }}></div>
        
    </div>
  );
};

export default Footer;
