
import './Faqs.css';

import {  faqs_bckg, faqs_banner, faqs_button, faqs_title, desktop_11, desktop_12 } from '../../../assets/assetsDirectory';
import { useViewport } from "../../../context/ViewportContext";
import { useNavigate } from "react-router-dom";

const Faqs = () => {
  const { isMobile } = useViewport();
  const navigate = useNavigate();
  return (
    <>{isMobile ? (
      <div
        className="general-page"
        style={{
          minHeight: "688px",
          maxHeight: isMobile ? "688px" : undefined,
          backgroundImage: `url(${faqs_bckg})`,
          gap: "20px"
        }}
      >

      <img loading="lazy" src={faqs_title} alt="Faqs Title" className="faqs-title" />
      <p className="faqs-description">Respuestas rápidas y precisas <br></br><span style={{color: 'white'}}>para gente con prisa.</span></p>
      <img loading="lazy" src={faqs_banner} alt="Faqs Banner" className="faqs-banner" />
      <img loading="lazy" src={faqs_button} alt="Faqs Button" className="faqs-button" onClick={() => {navigate('/faqs'); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}}/>
    </div>
    ) : (
      <div className="general-page-desktop">
        <img
          loading="lazy"
          src={desktop_11}
          alt="Faqs Background"
          className="bckg-desktop"
        />
        <img
          loading="lazy"
          src={desktop_12}
          alt="Faqs Foreground"
          className="foreground-desktop"
        />
        <div className='faqs-desktop-holder'>
                  <img loading="lazy" src={faqs_button} alt="Faqs Button" className="faqs-button" onClick={() => {navigate('/faqs'); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}}/>
        </div>
      </div>
    ) }</>
  );
};

export default Faqs;
