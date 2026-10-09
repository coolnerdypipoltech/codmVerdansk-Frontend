
import './Calendar.css';

import {  calendar_bckg, calendar, EventButton, desktop_9 } from '../../../assets/assetsDirectory';
import { useViewport } from "../../../context/ViewportContext";

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
        <img loading="lazy" src={calendar} alt="Calendar" className="calendar-image" />
        <img loading="lazy" src={EventButton} alt="Event Button" className="event-button" onClick={()=> window.open("https://maps.app.goo.gl/DH9LjYsT1PjMnSCZ9")}/>
      </div>
    ) : (
      <div className="general-page-desktop">
        <img
          loading="lazy"
          src={desktop_9}
          alt="Calendar Background"
          className="bckg-desktop"
        />
        <div className='calendar-desktop-holder'>
                  <img loading="lazy" src={EventButton} alt="Event Button" className="event-button" onClick={()=> window.open("https://maps.app.goo.gl/DH9LjYsT1PjMnSCZ9")}/>
    
        </div>

      </div>
    ) }</>
  );
};

export default Calendar;
