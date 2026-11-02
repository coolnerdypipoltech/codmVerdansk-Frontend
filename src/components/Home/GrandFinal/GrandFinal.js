import "./GrandFinal.css";

import {
  desktop_3,
  grandFinal_bckg,
  Intro_date_banner,
  grandFinal_tickets,
  grandFinal_banner,
  grandFinal_subTitle,
  fb_icon,
  yt_icon,
  tk_icon,
  grandFinal_black,
} from "../../../assets/assetsDirectory";
import { useViewport } from "../../../context/ViewportContext";
import Reveal from "../../Reveal/Reveal";
import { trackEvent } from "../../../utils/analytics";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const GrandFinal = () => {
  const { isMobile } = useViewport();
  const navigate = useNavigate();

  return (
    <>
      {isMobile ? (
        <div
          className="general-page"
          style={{
            backgroundImage: `url(${isMobile ? grandFinal_bckg : desktop_3})`,
            minHeight: "1150px",
            maxHeight: isMobile ? "850px" : undefined,
            gap: "20px",
            justifyContent: "flex-start",
          }}
        >
          <div className="grandfinal-content">
            <>
              <div>
                <div className="grandfinal-content">
                  <Reveal>
                    <img
                      loading="lazy"
                      src={grandFinal_subTitle}
                      alt="Grand Final Title"
                      className="grandfinal-title-img"
                    ></img>
                  </Reveal>

                  <Reveal>
                    <div className="grandfinal-black-container">
                      <img
                        loading="lazy"
                        src={grandFinal_black}
                        alt="Grand Final Tickets"
                        className="grandfinal-black"
                      ></img>
                      <p
                        className="grandfinal-title"
                        style={{ paddingTop: "10px", marginTop: "40px" }}
                      >
                        FINALISTAS
                      </p>
                      <p className="grandfinal-text">
                        Jugadores{" "}
                        <span className="grandfinal-text-highlight">
                          compiten en línea
                        </span>{" "}
                        desde el resto de Latinoamérica
                      </p>
                      <p className="grandfinal-title">Espectadores</p>
                      <p className="grandfinal-text">
                        Vive la final:
                      </p>
                      <p className="grandfinal-text">
                        1.{" "}
                        CDMX: asiste al evento en Mesones 72
                      </p>
                      <p className="grandfinal-text">
                        2. En línea: velo en vivo a través de: 
                      </p>
                    </div>
                  </Reveal>

                  <Reveal>
                    <div className="footer-icons2" style={{ zIndex: 3 }}>
                      <img
                        loading="lazy"
                        src={tk_icon}
                        onClick={() => {
                          window.open(
                            "https://www.tiktok.com/@callofdutymobile_latam",
                            "_blank",
                          );
                          trackEvent("Social Media", "Click", "TikTok");
                        }}
                        alt="TikTok Icon"
                        className="footer-icon2"
                      />

                      <img
                        loading="lazy"
                        src={fb_icon}
                        onClick={() => {
                          window.open(
                            "https://www.facebook.com/LATAMCallOfDutyMobile",
                            "_blank",
                          );
                          trackEvent("Social Media", "Click", "Facebook");
                        }}
                        alt="Facebook Icon"
                        className="footer-icon2"
                      />
                      <img
                        loading="lazy"
                        src={yt_icon}
                        onClick={() => {
                          window.open(
                            "https://www.youtube.com/@LATAMCallOfDutyMobile",
                            "_blank",
                          );
                          trackEvent("Social Media", "Click", "YouTube");
                        }}
                        alt="YouTube Icon"
                        className="footer-icon2"
                      />
                    </div>
                  </Reveal>

                  <Reveal>
                    <img
                      loading="lazy"
                      src={grandFinal_banner}
                      alt="Grand Final Banner"
                      className="grandfinal-banner"
                    ></img>
                  </Reveal>

                  <Reveal>
                    <img
                      loading="lazy"
                      src={grandFinal_tickets}
                      alt="Grand Final Banner"
                      onClick={() => {
                        navigate("/register"); document.documentElement.scrollTop = 0 ;
                      }}
                      className="grandfinal-tickets"
                    ></img>
                  </Reveal>

                  <Reveal>
                    <img
                      loading="lazy"
                      src={Intro_date_banner}
                      alt="Grand Final Banner"
                      className="grandfinal-date"
                    ></img>
                  </Reveal>
                </div>
              </div>
            </>
          </div>
        </div>
      ) : (
        <>
          <div
            className="general-page-desktop"
            style={{ zIndex: 10, marginTop: "20vh" }}
          >

          </div>
          <div className="desktop-container">
            <img src={desktop_3} className="desktop-5" alt="bckg"></img>





          </div>
        </>
      )}{" "}
    </>
  );
};

export default GrandFinal;
