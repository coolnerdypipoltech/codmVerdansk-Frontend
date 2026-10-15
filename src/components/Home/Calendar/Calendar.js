
import './Calendar.css';

import {  calendar_bckg, sticker_calendario_f1, sticker_calendario_f2, EventButton, desktop_7, sticker_web_calendario_f1, sticker_web_calendario_f2 } from '../../../assets/assetsDirectory';
import { trackEvent } from '../../../utils/analytics';
import { useViewport } from "../../../context/ViewportContext";
import Reveal from "../../Reveal/Reveal";

import FrameAnimation from "../../FrameAnimation/FrameAnimation";
import useNearViewport from "../../../hooks/useNearViewport";

const Calendar = () => {
  const { isMobile } = useViewport();
  const [bgRef, bgNear] = useNearViewport();
  return (
    <>{isMobile ? (
      <div
        ref={bgRef}
        className="general-page"
        style={{
          minHeight: "713px",
          maxHeight: isMobile ? "950px" : undefined,
          backgroundImage: bgNear ? `url(${calendar_bckg})` : "none",
        }}
      >
        <Reveal className="reveal-handler"><div className="calendar-image" >
          <FrameAnimation frames={[sticker_calendario_f1, sticker_calendario_f2]} fps={2} className="calendar-image"/></div></Reveal>
        <Reveal><img loading="lazy" src={EventButton} alt="Event Button" className="event-button" onClick={()=> { trackEvent('Calendar', 'Click', 'Event Button'); window.open("https://maps.app.goo.gl/DH9LjYsT1PjMnSCZ9"); }}/></Reveal>
      </div>
    ) : (
      <div className="general-page-desktop">
        <img
          loading="lazy"
          src={desktop_7}
          alt="Calendar Background"
          className="bckg-desktop"
        />
        
        <Reveal><div className="reveal-handler">
          <FrameAnimation frames={[sticker_web_calendario_f1, sticker_web_calendario_f2]} fps={2} className="calendar-image-desktop" /></div></Reveal>
        <div className='calendar-desktop-holder'>
          <Reveal><img loading="lazy" src={EventButton} alt="Event Button" className="event-button" onClick={()=> { trackEvent('Calendar', 'Click', 'Event Button'); window.open("https://maps.app.goo.gl/DH9LjYsT1PjMnSCZ9"); }}/></Reveal>

        </div>

      </div>
    ) }</>
  );
};

export default Calendar;
