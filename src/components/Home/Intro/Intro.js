import "./Intro.css";
import Counter from "../Counter/Counter";

import {
  Intro_date_banner,
  Intro_hashtag,
  Intro_logo,
  Intro_banner,
  Intro_bckg,
  Intro_ghost,
  Intro_sticker1,
  Intro_bckg2, Intro_ghost_main,
  desktop_1,
  desktop_2
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
      <img
        loading="lazy"
        src={Intro_bckg}
        alt="Intro Background"
        className="intro-bckg"
      />

      <img
        loading="lazy"
        src={Intro_bckg2}
        alt="Intro Background 2"
        className="intro-bckg2"
      />
      <img
        loading="lazy"
        src={Intro_ghost_main}
        alt="Intro Ghost Main"
        className="intro-ghost-main"
      />

      <img
        loading="lazy"
        src={Intro_logo}
        alt="Intro Logo"
        className="intro-logo"
      />

      <img
        loading="lazy"
        src={Intro_banner}
        alt="Intro Banner"
        className="intro-banner"
      />
      <img
        loading="lazy"
        src={Intro_ghost}
        alt="Intro Ghost"
        className="intro-ghost"
      />
      <Counter></Counter>
      <p className="intro-description">
        Para que te registres al <br></br>
        evento más chingón del año.
      </p>

      <img
        loading="lazy"
        src={Intro_date_banner}
        alt="Intro Date Banner"
        className="intro-date-banner"
      />
      <img
        loading="lazy"
        src={Intro_hashtag}
        alt="Intro Hashtag"
        className="intro-hashtag"
      />
      <img
        loading="lazy"
        src={Intro_sticker1}
        alt="Intro Sticker 1"
        className="intro-sticker1"
      />
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
      <div className="counter-desktop">
        <Counter></Counter>
      </div>
      <img
        loading="lazy"
        src={desktop_2}
        alt="Intro Background 2"
        className="bckg-desktop"
      />
    </div>)  } </>
  );
};

export default Intro;
