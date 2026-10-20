import "./Creators.css";

import {
  creators_bckg,
  creators_button,
  creators_title,
  desktop_8,
  sticker_creadores_F1,
  sticker_creadores_F2,
  sticker_creadores_F3,
  sticker_ghost_F1,
  sticker_ghost_F2,
  sticker_ghost_F3,
  sticker_rayos_f1,
  sticker_rayos_f2,

} from "../../../assets/assetsDirectory";
import { useViewport } from "../../../context/ViewportContext";
import { useNavigate } from "react-router-dom";
import Reveal from "../../Reveal/Reveal";
import FrameAnimation from "../../FrameAnimation/FrameAnimation";
import { trackEvent } from "../../../utils/analytics";
import useNearViewport from "../../../hooks/useNearViewport";
const Creators = () => {
  const { isMobile } = useViewport();
  const navigate = useNavigate();
  const [bgRef, bgNear] = useNearViewport();
  return (
    <>
      {isMobile ? (
        <div
          ref={bgRef}
          className="general-page"
          style={{
            minHeight: "768px",
            maxHeight: isMobile ? "768px" : undefined,
            backgroundImage: bgNear ? `url(${creators_bckg})` : "none",
            gap: "20px",
            justifyContent: "flex-start",
          }}
        >
          <Reveal>
            <img
              loading="lazy"
              src={creators_title}
              alt="Creators Title"
              className="creators-title"
            />
          </Reveal>
          <Reveal>
            <div className="creators-banner">
              <FrameAnimation
              loading="lazy"
              alt="Creators Banner"
              className="creators-banner"
              fps={4}
              frames={[sticker_ghost_F1, sticker_ghost_F2, sticker_ghost_F3]}
            />
            </div>
          </Reveal>

                  <FrameAnimation
        loading="lazy"
        frames={[sticker_rayos_f1, sticker_rayos_f2]}
        alt="Intro Sticker 2"
        fps={3}
        className="creator-rayos"
      ></FrameAnimation>


      <FrameAnimation
        loading="lazy"
        frames={[sticker_rayos_f1, sticker_rayos_f2]}
        alt="Intro Sticker 2"
        fps={3}
        className="creator-rayos2"
      ></FrameAnimation>
          <Reveal>
            <img
              loading="lazy"
              src={creators_button}
              alt="Creators Button"
              className="creators-button"
              onClick={() => {
                trackEvent("Creators", "Click", "Creators Button");
                navigate("/creators");
                window.scrollTo(0, 0);
              }}
            />
          </Reveal>
        </div>
      ) : (
        <div className="general-page-desktop">
          <img
            loading="lazy"
            src={desktop_8}
            alt="Creators Background"
            className="bckg-desktop"
          />
          <Reveal>
            <img
              loading="lazy"
              src={creators_title}
              alt="Creators Title"
              className="creators-title-desktop"
            />
          </Reveal>


          <Reveal>
            <div className="creators-banner-desktop">
              <FrameAnimation
                loading="lazy"
                alt="Creators Banner"
                  className="creators-banner-desktop"
                fps={4}
                frames={[
                  sticker_creadores_F1,
                  sticker_creadores_F2,
                  sticker_creadores_F3,
                ]}
              />
            </div>
          </Reveal>

                
                  <FrameAnimation
        loading="lazy"
        frames={[sticker_rayos_f1, sticker_rayos_f2]}
        alt="Intro Sticker 2"
        fps={3}
        className="creator-rayos-desktop"
      ></FrameAnimation>


      <FrameAnimation
        loading="lazy"
        frames={[sticker_rayos_f1, sticker_rayos_f2]}
        alt="Intro Sticker 2"
        fps={3}
        className="creator-rayos2-desktop"
      ></FrameAnimation>

          <div className="creators-desktop-holder">
            <Reveal>
              <img
                loading="lazy"
                src={creators_button}
                alt="Creators Button"
                className="creators-button"
                onClick={() => {
                  trackEvent("Creators", "Click", "Creators Button");
                  navigate("/creators");
                  window.scrollTo(0, 0);
                }}
              />
            </Reveal>
          </div>
        </div>
      )}
    </>
  );
};

export default Creators;
