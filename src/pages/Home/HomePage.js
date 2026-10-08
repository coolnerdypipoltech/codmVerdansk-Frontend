
import './HomePage.css';
import Intro from '../../components/Home/Intro/Intro';
import Video from '../../components/Home/Video/Video';
import Creators from '../../components/Home/Creators/Creators';
import Faqs from '../../components/Home/Faqs/Faqs';
import Information from '../../components/Home/Information/Information';
import Mascots from '../../components/Home/Mascots/Mascots';
import Calendar from '../../components/Home/Calendar/Calendar';
import Phases from '../../components/Home/Phases/Phases';
import { useViewport } from "../../context/ViewportContext";

const HomePage = () => {

  const { isMobile } = useViewport();
  

  return (
    <div className="home-page" >
      <div id="inicio"><Intro /></div>
      <Video></Video>
      <div id="informacion"><Information></Information></div>
      <div id="fases"><Phases></Phases></div>
      <div id="botargas"><Mascots></Mascots></div>
      <div id="calendario"><Calendar></Calendar></div>
      <div id="creadores"><Creators></Creators></div>
      <div id="faqs"><Faqs></Faqs></div>
    </div>
  );
};

export default HomePage;
