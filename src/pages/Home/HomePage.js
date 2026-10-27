
import './HomePage.css';
import Intro from '../../components/Home/Intro/Intro';

import Creators from '../../components/Home/Creators/Creators';
import Faqs from '../../components/Home/Faqs/Faqs';
import Information from '../../components/Home/Information/Information';
import Mascots from '../../components/Home/Mascots/Mascots';
import Calendar from '../../components/Home/Calendar/Calendar';
import Phases from '../../components/Home/Phases/Phases';
import GrandFinal from '../../components/Home/GrandFinal/GrandFinal';
import Event from '../../components/Home/Event/Event';

import {

  sticker_paracaidasBlanco_f1,
  sticker_paracaidasBlanco_f2,
  sticker_paracaidasBlanco_flip_f1,
  sticker_paracaidasBlanco_flip_f2,
} from "../../assets/assetsDirectory";
import FrameAnimation from '../../components/FrameAnimation/FrameAnimation';
const HomePage = () => {


  

  return (
    <div className="home-page" >
      <div id="inicio"><Intro /></div>
      <div id="grandfinal"><GrandFinal></GrandFinal></div>


      <div ><Information></Information></div>

      <div id="fases"><Phases></Phases></div>
      <div id="botargas"><Mascots></Mascots></div>
      <div id="calendario"><Calendar></Calendar></div>
      <div id="creadores"><Creators></Creators></div>
      <div id="faqs2"><Faqs></Faqs></div>
      
      
      
                <div
            className="intro-sticker-paracaidas-container"
            style={{
              top: "85%",
              left: "19%",
              height: "10vw",
              zIndex: 0,
            }}
          >
            <FrameAnimation
              loading="lazy"
              frames={[
                sticker_paracaidasBlanco_f1,
                sticker_paracaidasBlanco_f2,
              ]}
              alt="Intro Sticker Paracaidas"
              fps={2}
              className="intro-sticker-paracaidas"
            />
          </div>

          <div
            className="intro-sticker-paracaidas-container"
            style={{
              top: "85%",
              left: "89%",
              height: "10vw",
              zIndex: 0,
              animationDelay: "5s",
            }}
          >
            <FrameAnimation
              loading="lazy"
              frames={[
                sticker_paracaidasBlanco_flip_f1,
                sticker_paracaidasBlanco_flip_f2,
              ]}
              alt="Intro Sticker Paracaidas"
              fps={2}
              className="intro-sticker-paracaidas"
            />
          </div>
      
      
      </div>




  );
};

export default HomePage;
