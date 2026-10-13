
import './Calendar.css';

import {  calendar_bckg, calendar, EventButton, desktop_7, desktop_calendar } from '../../../assets/assetsDirectory';
import { trackEvent } from '../../../utils/analytics';
import { useViewport } from "../../../context/ViewportContext";
import Reveal from "../../Reveal/Reveal";

const Calendar = () => {
  const { isMobile } = useViewport();
  return (
    <>{isMobile ? (
      <div
        className="general-page"
        style={{
          minHeight: "713px",
          maxHeight: isMobile ? "950px" : undefined,
          backgroundImage: `url(${calendar_bckg})`,
        }}
      >
        <Reveal><img loading="lazy" src={calendar} alt="Calendar" className="calendar-image" /></Reveal>
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
        
        <Reveal><img loading="lazy" src={desktop_calendar} alt="Calendar" className="calendar-image-desktop" /></Reveal>
        <div className='calendar-desktop-holder'>
          <Reveal><img loading="lazy" src={EventButton} alt="Event Button" className="event-button" onClick={()=> { trackEvent('Calendar', 'Click', 'Event Button'); window.open("https://maps.app.goo.gl/DH9LjYsT1PjMnSCZ9"); }}/></Reveal>

        </div>

      </div>
    ) }</>
  );
};

export default Calendar;
