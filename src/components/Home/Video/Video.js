
import './Video.css';

import { useEffect, useRef } from 'react';
import { vide_bckg, desktop_3, video_marco_mobil, video_marco_desktop_right, video_marco_desktop_left } from '../../../assets/assetsDirectory';
import { useViewport } from "../../../context/ViewportContext";
import Reveal from "../../Reveal/Reveal";
import { trackEvent } from '../../../utils/analytics';
const Video = () => {
  const { isMobile } = useViewport();
  const videoRef = useRef(null);

  const link = "https://file.verdanskcodm.com/videos/SV_01_Teaser_OK_v1.webm";

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    // iOS Safari solo autoreproduce inline si el elemento ya está muted
    // como propiedad del DOM (el atributo muted del JSX a veces no alcanza
    // a aplicarse a tiempo) y si tiene playsInline.
    el.muted = true;
    const playPromise = el.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {});
    }
  }, [isMobile]);

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
      <video ref={videoRef} className="actual-video-mobil" controls autoPlay muted playsInline loop>
        <source src={link} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      
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
        <img src={video_marco_desktop_right} alt="Video Marco Desktop Right" className="video-marco-desktop" style={{  left: "-3%", top: "0vh", width: "40vw" }} />
      </Reveal>


      <Reveal>
        <img src={video_marco_desktop_left} alt="Video Marco Desktop Left" className="video-marco-desktop" style={{  right: "-2%", top: "0vh", width: "40vw"   }}  />
      </Reveal>


      <video ref={videoRef} className="actual-video-desktop" controls autoPlay muted playsInline loop>
        <source src={link} type="video/webm" />
        Your browser does not support the video tag.
      </video>


            <Reveal>
              <img src={video_marco_mobil} alt="Video Marco Mobil" className="video-marco-desktop" />
            </Reveal>

    </div>)} </>
  );
};

export default Video;
