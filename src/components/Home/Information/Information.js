import "./Information.css";

import {
  Information_banner,
  Information_bckg,
  sticker_ghost_1,
  sticker_ghost_2,
  desktop_3,
  desktop_4,
  sticker_granade_1,
  sticker_granade_2,
  sticker_granade_3,
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
        id="informacion"
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
      <Reveal><div className="information-ghost" style={{ top: "50%" }}>
        <FrameAnimation
        alt="Information Ghost"
        className="information-ghost"
        loading="lazy"
        fps={2}
        frames={[sticker_ghost_1, sticker_ghost_2]}
      /></div></Reveal>
      <Reveal><div>
        <FrameAnimation
        loading="lazy"
        fps={4}
        frames={[sticker_granade_1, sticker_granade_2, sticker_granade_3]}
        alt="Information Granade Sticker"
        className="information-granade"
      /></div></Reveal>
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
              id="informacion"
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
      <Reveal><div className="information-ghost-desktop" style={{ top:"67%"}}>
        <FrameAnimation
        alt="Information Ghost"
        className="information-ghost-desktop"
        loading="lazy"
        fps={2}
        frames={[sticker_ghost_1, sticker_ghost_2]}
      /></div></Reveal>
      <Reveal><div style={{ position: "absolute", left: "80%", top: "70%", height: "300px" }}>
        <FrameAnimation
        loading="lazy"
        fps={4}
        frames={[sticker_granade_1, sticker_granade_2, sticker_granade_3]}
        alt="Information Granade Sticker"
        className="information-granade-desktop"
      /></div></Reveal>


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
