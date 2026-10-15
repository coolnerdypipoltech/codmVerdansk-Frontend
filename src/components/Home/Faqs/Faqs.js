import "./Faqs.css";


import {
  faqs_bckg,
  faqs_button,
  faqs_title,
  desktop_9,
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
