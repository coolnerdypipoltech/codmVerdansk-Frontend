import "./Intro.css";
import Counter from "../Counter/Counter";
import Reveal from "../../Reveal/Reveal";
import FrameAnimation from "../../FrameAnimation/FrameAnimation"
import {
  Intro_date_banner,
  Intro_hashtag,
  Intro_logo,
  Intro_banner,
  Intro_bckg,
  Intro_ghost,
  Intro_bckg2, Intro_ghost_main,
  desktop_1,
  desktop_2,
  desktop_info,
  sticker_walkt_1,
  sticker_walkt_2
} from "../../../assets/assetsDirectory";

import { useViewport } from "../../../context/ViewportContext";

const Intro = () => {
  const { isMobile } = useViewport();

  return (
    <>{isMobile ? (<div
      className="general-page"
      style={{
        minHeight: "800px",
        maxHeight: "768px",
        marginTop: "75px",
        paddingTop: "0px",
        top: "2px",
        justifyContent: "flex-start",
      }}
    >
      <Reveal><img
        loading="lazy"
        src={Intro_bckg}
        alt="Intro Background"
        className="intro-bckg"
      /></Reveal>

      <Reveal><img
        loading="lazy"
        src={Intro_bckg2}
        alt="Intro Background 2"
        className="intro-bckg2"
      /></Reveal>
      <Reveal><img
        loading="lazy"
        src={Intro_ghost_main}
        alt="Intro Ghost Main"
        className="intro-ghost-main"
      /></Reveal>

      <Reveal><img
        loading="lazy"
        src={Intro_logo}
        alt="Intro Logo"
        className="intro-logo"
      /></Reveal>

      <Reveal><img
        loading="lazy"
        src={Intro_banner}
        alt="Intro Banner"
        className="intro-banner"
      /></Reveal>
      <Reveal><img
        loading="lazy"
        src={Intro_ghost}
        alt="Intro Ghost"
        className="intro-ghost"
      /></Reveal>
      <Counter></Counter>
      <Reveal><p className="intro-description">
        Para que te registres al <br></br>
        evento más chingón del año.
      </p></Reveal>

      <Reveal><img
        loading="lazy"
        src={Intro_date_banner}
        alt="Intro Date Banner"
        className="intro-date-banner"
      /></Reveal>
      <Reveal><img
        loading="lazy"
        src={Intro_hashtag}
        alt="Intro Hashtag"
        className="intro-hashtag"
      /></Reveal>

      <Reveal><FrameAnimation
        loading="lazy"
        frames={[sticker_walkt_1, sticker_walkt_2]}
        alt="Intro Sticker 1"
        fps={6}
        className="intro-sticker1"
      /></Reveal>
    </div>) : (<div
      className="general-page-desktop"
    >
      <img
        loading="lazy"
        src={desktop_1}
        alt="Intro Background"
        className="bckg-desktop"
        style={{marginTop: "90px"}}
      />
            <Reveal><img
        loading="lazy"
        src={Intro_ghost_main}
        alt="Intro Ghost Main"
        className="intro-ghost-main-desktop"
      /></Reveal>

            <Reveal><img
        loading="lazy"
        src={Intro_logo}
        alt="Intro Logo"
        className="intro-logo-desktop"
      /></Reveal>


      <Reveal><img
        loading="lazy"
        src={desktop_info}
        alt="Intro Banner"
        className="intro-banner-desktop"
      /></Reveal>

      <Reveal><div className="counter-desktop">
        <Counter></Counter>
      </div></Reveal>

 

      <img
        loading="lazy"
        src={desktop_2}
        alt="Intro Background 2"
        className="bckg-desktop"
        style={{position: "absolute",
          top: "78%",
          zIndex: "2"
        }}
      />

           <Reveal><p className="intro-description-desktop">
        Para que te registres al <br></br>
        evento más chingón del año.
      </p></Reveal>

      <Reveal><img
        loading="lazy"
        src={Intro_date_banner}
        alt="Intro Date Banner"
        className="intro-date-banner-desktop"
      /></Reveal>
      <Reveal><img
        loading="lazy"
        src={Intro_hashtag}
        alt="Intro Hashtag"
        className="intro-hashtag-desktop"
      /></Reveal>
      
      <Reveal><FrameAnimation
        loading="lazy"
        frames={[sticker_walkt_1, sticker_walkt_2]}
        alt="Intro Sticker 1"
        fps={6}
        className="intro-sticker1-desktop"
      /></Reveal>


           <Reveal><img
        loading="lazy"
        src={Intro_ghost}
        alt="Intro Ghost"
        className="intro-ghost-desktop"
      /></Reveal>
    </div>)  } </>
  );
};

export default Intro;
