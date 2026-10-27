import "./GrandFinal.css";

import {
  desktop_5_5,
  toknow_bckg,
  grandFinal_title,
  fb_icon,
  EventButton,
  yt_icon,
  tk_icon,
} from "../../../assets/assetsDirectory";
import Counter from "../Counter/Counter";
import { useViewport } from "../../../context/ViewportContext";
import Reveal from "../../Reveal/Reveal";
import { trackEvent } from "../../../utils/analytics";
import { useState } from "react";
const GrandFinal = () => {
  const { isMobile } = useViewport();

  return (
    <>
      {isMobile ? (
        <div
          className="general-page"
          style={{
            backgroundImage: `url(${isMobile ? toknow_bckg : desktop_5_5})`,
            minHeight: "900px",
            maxHeight: isMobile ? "850px" : undefined,
            gap: "20px",
            justifyContent: "flex-start",
          }}
        >
          <div className="grandfinal-content">
        <>

          <div

          >
            <div className="grandfinal-content">
              <Reveal>
                <img
                  src={grandFinal_title}
                  alt="Grand Final Title"
                  className="grandfinal-title-img"
                />
              </Reveal>

              <Reveal>
                <p className="grandfinal-text">
                  Ya falta menos para celebrar la Gran Final Señal Verdansk.
                </p>
              </Reveal>
              <Reveal>
                <p className="grandfinal-title">
                  14 de noviembre, mesones 72, CDMX.
                </p>
              </Reveal>
              <Reveal>
                <Counter />
              </Reveal>
              <Reveal>
                <p className="grandfinal-text">
                  El caos invade el centro de la CDMX: una experiencia
                  irrepetible con auténtica vibra latina.
                </p>
              </Reveal>

              <Reveal>
                <img
                  loading="lazy"
                  src={EventButton}
                  alt="Event Button"
                  className="event-button2"
                  onClick={() => {
                    trackEvent("Calendar", "Click", "Event Button");
                    window.open("https://maps.app.goo.gl/DH9LjYsT1PjMnSCZ9");
                  }}
                />
              </Reveal>
              <Reveal>
                <p className="grandfinal-title">
                  Links oficiales de streaming
                </p>
              </Reveal>
              <Reveal>
                <p className="grandfinal-text">
                  Si estás en CDMX puedes asistir a la gran final IRL o seguirla
                  en vivo por la señal en streaming
                </p>
              </Reveal>

              <div></div>

              <Reveal>
                <div className="footer-icons">
                  <img
                    loading="lazy"
                    src={fb_icon}
                    onClick={() => {
                      window.open(
                        "https://www.facebook.com/LATAMCallOfDutyMobile",
                        "_blank",
                      );
                      trackEvent("social_media", "Click", "Facebook");
                    }}
                    alt="Facebook Icon"
                    className="footer-icon"
                  />
                  <img
                    loading="lazy"
                    src={yt_icon}
                    onClick={() => {
                      window.open(
                        "https://www.youtube.com/@LATAMCallOfDutyMobile",
                        "_blank",
                      );
                      trackEvent("social_media", "Click", "YouTube");
                    }}
                    alt="YouTube Icon"
                    className="footer-icon"
                  />
                  <img
                    loading="lazy"
                    src={tk_icon}
                    onClick={() => {
                      window.open(
                        "https://www.tiktok.com/@callofdutymobile_latam",
                        "_blank",
                      );
                      trackEvent("social_media", "Click", "TikTok");
                    }}
                    alt="TikTok Icon"
                    className="footer-icon"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </>
          </div>
        </div>
      ) : (
        <>
          <img src={desktop_5_5} className="desktop-5"></img>
          <div
            className="general-page-desktop"
            style={{ zIndex: 10, marginTop: "15vh" }}
          >
            <div className="grandfinal-content">
              <Reveal>
                <img
                  src={grandFinal_title}
                  alt="Grand Final Title"
                  className="grandfinal-title-img-desktop"
                />
              </Reveal>

              <Reveal>
                <p className="grandfinal-text-desktop">
                  Ya falta menos para celebrar la Gran Final Señal Verdansk.
                </p>
              </Reveal>
              <Reveal>
                <p className="grandfinal-title-desktop">
                  14 de noviembre, mesones 72, CDMX.
                </p>
              </Reveal>
              <Reveal>
                <Counter />
              </Reveal>
              <Reveal>
                <p className="grandfinal-text-desktop">
                  El caos invade el centro de la CDMX: una experiencia
                  irrepetible con auténtica vibra latina.
                </p>
              </Reveal>

              <Reveal>
                <img
                  loading="lazy"
                  src={EventButton}
                  alt="Event Button"
                  className="event-button2"
                  onClick={() => {
                    trackEvent("Calendar", "Click", "Event Button");
                    window.open("https://maps.app.goo.gl/DH9LjYsT1PjMnSCZ9");
                  }}
                />
              </Reveal>
              <Reveal>
                <p className="grandfinal-title-desktop">
                  Links oficiales de streaming
                </p>
              </Reveal>
              <Reveal>
                <p className="grandfinal-text-desktop">
                  Si estás en CDMX puedes asistir a la gran final IRL o seguirla
                  en vivo por la señal en streaming
                </p>
              </Reveal>

              <div></div>

              <Reveal>
                <div className="footer-icons">
                  <img
                    loading="lazy"
                    src={fb_icon}
                    onClick={() => {
                      window.open(
                        "https://www.facebook.com/LATAMCallOfDutyMobile",
                        "_blank",
                      );
                      trackEvent("social_media", "Click", "Facebook");
                    }}
                    alt="Facebook Icon"
                    className="footer-icon"
                  />
                  <img
                    loading="lazy"
                    src={yt_icon}
                    onClick={() => {
                      window.open(
                        "https://www.youtube.com/@LATAMCallOfDutyMobile",
                        "_blank",
                      );
                      trackEvent("social_media", "Click", "YouTube");
                    }}
                    alt="YouTube Icon"
                    className="footer-icon"
                  />
                  <img
                    loading="lazy"
                    src={tk_icon}
                    onClick={() => {
                      window.open(
                        "https://www.tiktok.com/@callofdutymobile_latam",
                        "_blank",
                      );
                      trackEvent("social_media", "Click", "TikTok");
                    }}
                    alt="TikTok Icon"
                    className="footer-icon"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </>
      )}{" "}
    </>
  );
};

export default GrandFinal;
