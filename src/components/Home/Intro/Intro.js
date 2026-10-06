
import './Intro.css';
import Counter from '../Counter/Counter';

import { commonWallpaperD, Intro_date_banner, 
     Intro_hashtag, Intro_logo, Intro_banner, commonWallpaperM } from '../../../assets/assetsDirectory';

import { useViewport } from "../../../context/ViewportContext";

const Intro = () => {

  const { isMobile } = useViewport();
  

  return (
    <div className="general-page" style={{ backgroundImage: `url(${isMobile ? commonWallpaperM : commonWallpaperD})`, minHeight: "714px", marginTop: "75px", paddingTop: "20px" }}>
      <img src={Intro_logo} alt="Intro Logo" className="intro-logo" />

      <img src={Intro_banner} alt="Intro Banner" className="intro-banner" />
      <Counter></Counter>
      <p className="intro-description">Para que te registres al <br></br>
evento más chingón del año.</p>
      
      <img src={Intro_date_banner} alt="Intro Date Banner" className="intro-date-banner" />
      <img src={Intro_hashtag} alt="Intro Hashtag" className="intro-hashtag" />
    </div>
  );
};

export default Intro;
