
import './Calendar.css';

import { commonWallpaperD, calendar_bckg, calendar, EventButton } from '../../../assets/assetsDirectory';
import { useViewport } from "../../../context/ViewportContext";

const Calendar = () => {
  const { isMobile } = useViewport();
  return (
    <div className="general-page" style={{ backgroundImage: `url(${isMobile ? calendar_bckg : commonWallpaperD})`, minHeight: "713px", maxHeight: isMobile ? "950px" : undefined }}>
      <img loading="lazy" src={calendar} alt="Calendar" className="calendar-image" />
      <img loading="lazy" src={EventButton} alt="Event Button" className="event-button" onClick={()=> window.open("https://maps.app.goo.gl/DH9LjYsT1PjMnSCZ9")}/>
    </div>
  );
};

export default Calendar;
