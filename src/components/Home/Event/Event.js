import "./Event.css";

import {
  desktop_5_5,
  toknow_bckg,
  EventButton,
  event_title,
} from "../../../assets/assetsDirectory";

import { useViewport } from "../../../context/ViewportContext";
import Reveal from "../../Reveal/Reveal";
import { trackEvent } from "../../../utils/analytics";
import { useState } from "react";
const Event = () => {
  const { isMobile } = useViewport();

  return (
    <>
      {isMobile ? (
        <div
          className="general-page"
          style={{
            backgroundImage: `url(${isMobile ? toknow_bckg : desktop_5_5})`,
            minHeight: "720px",
            maxHeight: isMobile ? "647px" : undefined,
            gap: "20px",
            justifyContent: "flex-start",
          }}
        >
          <Reveal>
            <img
              loading="lazy"
              src={event_title}
              alt="Event Button"
              className="event-title-img"
              onClick={() => {
                trackEvent("Calendar", "Click", "Event Button");
                window.open("https://maps.app.goo.gl/DH9LjYsT1PjMnSCZ9");
              }}
            />
          </Reveal>
          <div>
            <Reveal>
              <p className="event-title">15 de noviembre, mesones 72, CDMX.</p>
            </Reveal>
            <Reveal>
              <p className="event-text">
                Verdansk se muda a downtown de la CDMX con una experiencia
                única, irrepetible, latina y muy caótica.
              </p>
            </Reveal>
          </div>
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
        </div>
      ) : (
        <div className="general-page-desktop" style={{}}>          <Reveal>
            <img
              loading="lazy"
              src={event_title}
              alt="Event Button"
              className="event-title-img-desktop"
              onClick={() => {
                trackEvent("Calendar", "Click", "Event Button");
                window.open("https://maps.app.goo.gl/DH9LjYsT1PjMnSCZ9");
              }}
            />
          </Reveal>
          <div >
            <Reveal>
              <p className="event-title-desktop">15 de noviembre, mesones 72, CDMX.</p>
            </Reveal>
            <Reveal>
              <p className="event-text-desktop">
                Verdansk se muda a downtown de la CDMX con una experiencia
                única, irrepetible, latina y muy caótica.
              </p>
            </Reveal>
                      <Reveal>
            <img
              loading="lazy"
              src={EventButton}
              alt="Event Button"
              className="event-button2-desktop"
              onClick={() => {
                trackEvent("Calendar", "Click", "Event Button");
                window.open("https://maps.app.goo.gl/DH9LjYsT1PjMnSCZ9");
              }}
            />
          </Reveal>
          </div>
</div>
      )}{" "}
    </>
  );
};

export default Event;
