
import './Video.css';

import { vide_bckg, desktop_3 } from '../../../assets/assetsDirectory';
import { useViewport } from "../../../context/ViewportContext";

const Video = () => {
  const { isMobile } = useViewport();
  return (
    <div
      className="general-page"
      style={{
        backgroundImage: `url(${isMobile ? vide_bckg : desktop_3})`,
        minHeight: "647px",
        maxHeight: isMobile ? "647px" : undefined,
      }}
    >
      <iframe
        className="home-video"
        style={{ height: "627px" }}
        src="https://www.youtube.com/embed/DLzxrickFCyOs?si=4SfLygFOsMbj7bZl"
        title="Video de Verdansk"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
};

export default Video;
