import "./Faqs.css";
import FrameAnimation from "../../FrameAnimation/FrameAnimation";

import {
  faqs_bckg,
  faqs_button,
  faqs_title,
  desktop_9,
  sticker_paracaidasBlanco_f1,
  sticker_paracaidasBlanco_f2,
  sticker_paracaidasBlanco_flip_f1,
  sticker_paracaidasBlanco_flip_f2,
} from "../../../assets/assetsDirectory";
import { useViewport } from "../../../context/ViewportContext";
import { useNavigate } from "react-router-dom";
import Reveal from "../../Reveal/Reveal";
import { trackEvent } from "../../../utils/analytics";
import Rive from "@rive-app/react-canvas";

import rive_ani from "../../../assets/faqs/radio_verdanks.riv";
const Faqs = () => {
  const { isMobile } = useViewport();
  const navigate = useNavigate();
  return (
    <>
      {isMobile ? (
        <div
          className="general-page"
          style={{
            minHeight: "688px",
            maxHeight: isMobile ? "688px" : undefined,
            backgroundImage: `url(${faqs_bckg})`,
            gap: "20px",
            position: "inherit",
          }}
        >
          <Reveal>
            <img
              loading="lazy"
              src={faqs_title}
              alt="Faqs Title"
              className="faqs-title"
            />
          </Reveal>
          <Reveal>
            <p className="faqs-description">
              Respuestas rápidas y precisas <br></br>
              <span style={{ color: "white" }}>para gente con prisa.</span>
            </p>
          </Reveal>
          <Reveal>
            <div className="faqs-banner">
              <Rive src={rive_ani} style={{ width: "100%", height: "100%" }} />
            </div>
          </Reveal>

          <div
            className="intro-sticker-paracaidas-container"
            style={{
              top: "5300px",
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
              top: "5300px",
              left: "89%",
              height: "10vw",
              zIndex: 0,
              animationDelay: "5s",
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

          <Reveal>
            <img
              loading="lazy"
              src={faqs_button}
              alt="Faqs Button"
              className="faqs-button"
              onClick={() => {
                trackEvent("Faqs", "Click", "Faqs Button");
                navigate("/faqs");
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
              }}
            />
          </Reveal>
        </div>
      ) : (
        <div className="general-page-desktop">
          <img
            loading="lazy"
            src={desktop_9}
            alt="Faqs Background"
            className="bckg-desktop"
          />

          <Reveal>
            <img
              loading="lazy"
              src={faqs_title}
              alt="Faqs Title"
              className="faqs-title-desktop"
            />
          </Reveal>
          <Reveal>
            <p className="faqs-description-desktop">
              Respuestas rápidas y precisas <br></br>
              <span style={{ color: "white" }}>para gente con prisa.</span>
            </p>
          </Reveal>
          <Reveal>
            <div className="faqs-banner-desktop">
              <Rive src={rive_ani} style={{ width: "100%", height: "100%" }} />
            </div>
          </Reveal>

          <>
            <div
              className="intro-sticker-paracaidas-container"
              style={{
                top: "5%",
                left: "19%",
                height: "5vw",
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
                top: "5%",
                left: "89%",
                height: "5vw",
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
          </>

          <div className="faqs-desktop-holder">
            <Reveal>
              <img
                loading="lazy"
                src={faqs_button}
                alt="Faqs Button"
                className="faqs-button"
                onClick={() => {
                  trackEvent("Faqs", "Click", "Faqs Button");
                  navigate("/faqs");
                  document.body.scrollTop = 0;
                  document.documentElement.scrollTop = 0;
                }}
              />
            </Reveal>
          </div>
        </div>
      )}
    </>
  );
};

export default Faqs;
