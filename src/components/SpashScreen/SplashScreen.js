import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./SplashScreen.css";
import { videoMobile, videoDesktop } from "../../assets/assetsDirectory";
import { useViewport } from "../../context/ViewportContext";

let introShown = false;

// phase: 'splash' | 'video' | 'done'
function SplashScreen({ children }) {
  const location = useLocation();
  const { isMobile } = useViewport();
  const videoRef = useRef(null);
  const videoFinal = isMobile ? videoMobile : videoDesktop;
  const basePath = process.env.PUBLIC_URL || "";
  const isHome =
    location.pathname === "/" ||
    location.pathname === basePath ||
    location.pathname === `${basePath}/`;

  const [phase, setPhase] = useState(isHome && !introShown ? "video" : "done");
  const [splashFading, setSplashFading] = useState(false);
  const [muted, setMuted] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      handleVideoEnd();
    }, 4000);

    setTimeout(() => {
      videoRef.current && videoRef.current.play();
    }, 2000);
  }, []);

  // Splash phase: fade out at 3.5s, switch to video at 4s
  useEffect(() => {
    if (phase !== "splash") return;
    introShown = true;
    const fadeTimer = setTimeout(() => setSplashFading(true), 3000);
    const switchTimer = setTimeout(() => {
      setSplashFading(false);
      setPhase("video");
    }, 4000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(switchTimer);
    };
  }, [phase]);

  const handleVideoEnd = () => setPhase("done");

  const handleUnmute = () => {
    if (muted) {
      setMuted(false);
      if (videoRef.current) videoRef.current.muted = false;
    }
  };

  if (phase === "done") return children;
console.log(phase);
  return (
    <>

<div className="video-intro" onClick={handleUnmute}>
          <video
            ref={videoRef}
            className="video-intro__player"
            autoPlay
            playsInline
            muted
            onEnded={handleVideoEnd}
            loading= "eager"
          >
            <source src={videoFinal} type="video/mp4" />
          </video>

        </div>
    </>
  );
}

export default SplashScreen;
