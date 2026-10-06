
import './Calendar.css';

import { commonWallpaperD, commonWallpaperM, calendar, EventButton } from '../../../assets/assetsDirectory';
import { useViewport } from "../../../context/ViewportContext";

const Calendar = () => {
  const { isMobile } = useViewport();
  return (
    <div className="general-page" style={{ backgroundImage: `url(${isMobile ? commonWallpaperM : commonWallpaperD})`, minHeight: "714px" }}>
      <img src={calendar} alt="Calendar" className="calendar-image" />
      <img src={EventButton} alt="Event Button" className="event-button" />
    </div>
  );
};

export default Calendar;
