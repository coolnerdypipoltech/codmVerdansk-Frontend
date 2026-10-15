
import './Video.css';

import { vide_bckg, desktop_3, video_marco_mobil, video_marco_desktop } from '../../../assets/assetsDirectory';
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

      
      <Reveal>
        <img src={video_marco_mobil} alt="Video Marco Mobil" className="video-marco-mobil" />
      </Reveal>

    </div>) : (<div
      className="general-page"
      style={{
        minHeight: "0px",
        maxHeight: "0px",
      }}
      onClick={() => trackEvent('Video', 'Click', 'Home Video')}
    >

            <Reveal>
              <img src={video_marco_mobil} alt="Video Marco Mobil" className="video-marco-desktop" />
            </Reveal>

    </div>)} </>
  );
};

export default Video;
