import "./Information.css";

import {
  Information_banner,
  Information_bckg,
  Information_ghost,
  desktop_3,
  desktop_4,
  sticker_granade_1,
  sticker_granade_2
} from "../../../assets/assetsDirectory";
import { useViewport } from "../../../context/ViewportContext";
import Reveal from "../../Reveal/Reveal";
import FrameAnimation from "../../FrameAnimation/FrameAnimation";

const Information = () => {
  const { isMobile } = useViewport();

  return (
    <>{isMobile ? (<div
      className="general-page"
      style={{

        minHeight: "635px",
        maxHeight: isMobile ? "635px" : undefined,
        justifyContent: "flex-start",
        backgroundImage: `url(${isMobile ? Information_bckg : desktop_3})`,
      }}
    >
      <div style={{ height: "50px" }}></div>
      <Reveal><img
        src={Information_banner}
        alt="Information Banner"
        className="information-banner"
      /></Reveal>
      <Reveal><p className="information-text1">
        Es la evolución del Battle <br></br>
        Royale y la jugamos
      </p></Reveal>
      <Reveal><p className="information-text2">
        con todo el caos de la <br></br>
        cultura pop latina
      </p></Reveal>
      <Reveal><img
        src={Information_ghost}
        alt="Information Ghost"
        className="information-ghost"
      /></Reveal>
      <Reveal><FrameAnimation
        loading="lazy"
        fps={4}
        frames={[sticker_granade_1, sticker_granade_2]}
        alt="Information Granade Sticker"
        className="information-granade"
      /></Reveal>
    </div>) : (
      <div
        className="general-page-desktop"
        style={{
          position: "relative",

        }}
      >
        <img
          src={desktop_3}
          alt="Information Background"
          className="bckg-desktop"
          
        />


              <Reveal><img
        src={Information_banner}
        alt="Information Banner"
        className="information-banner-desktop"
      /></Reveal>
      <Reveal><p className="information-text1-desktop">
        Es la evolución del Battle
        Royale y la jugamos
      </p></Reveal>
      <Reveal><p className="information-text2-desktop">
        con todo el caos de la 
        cultura  <br></br> pop latina
      </p></Reveal>
      <Reveal><img
        src={Information_ghost}
        alt="Information Ghost"
        className="information-ghost-desktop"
      /></Reveal>
      <Reveal><FrameAnimation
        loading="lazy"
        fps={4}
        frames={[sticker_granade_1, sticker_granade_2]}
        alt="Information Granade Sticker"
        className="information-granade-desktop"
      /></Reveal>


        <img
          src={desktop_4}
          alt="Information Background"
          className="bckg-desktop"
          
        />


      </div>
    ) } </>
  );
};

export default Information;
