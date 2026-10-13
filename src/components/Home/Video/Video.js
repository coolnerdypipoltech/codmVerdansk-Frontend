
import './Video.css';

import { vide_bckg, desktop_3 } from '../../../assets/assetsDirectory';
import { useViewport } from "../../../context/ViewportContext";
import Reveal from "../../Reveal/Reveal";
import { trackEvent } from '../../../utils/analytics';
const Video = () => {
  const { isMobile } = useViewport();
  return (
    <>{isMobile ? (<div
      className="general-page"
      onClick={() => trackEvent('Video', 'Click', 'Home Video')}
      style={{
        backgroundImage: `url(${isMobile ? vide_bckg : desktop_3})`,
        minHeight: "647px",
        maxHeight: isMobile ? "647px" : undefined,
      }}
    >
      <Reveal><iframe
        className="home-video"
        style={{ height: "627px" }}
        src="https://www.youtube.com/embed/DLzxrickFCyOs?si=4SfLygFOsMbj7bZl"
        title="Video de Verdansk"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      /></Reveal>
    </div>) : (<div
      className="general-page"
      style={{
        minHeight: "0px",
        maxHeight: "0px",
      }}
      onClick={() => trackEvent('Video', 'Click', 'Home Video')}
    >
      <Reveal><iframe
        className="home-video-desktop "
        src="https://www.youtube.com/embed/DLzxrickFCyOs?si=4SfLygFOsMbj7bZl"
        title="Video de Verdansk"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      /></Reveal>
    </div>)} </>
  );
};

export default Video;
