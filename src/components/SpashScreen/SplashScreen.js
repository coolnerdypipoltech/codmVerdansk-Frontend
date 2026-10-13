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
  const isHome =
    location.pathname === "/" ||
    location.pathname === "/codmFrontend" ||
    location.pathname === "/codmFrontend/";

  const [phase, setPhase] = useState(isHome && !introShown ? "splash" : "done");
  const [splashFading, setSplashFading] = useState(false);
  const [muted, setMuted] = useState(true);

  // Splash phase: fade out at 3.5s, switch to video at 4s
  useEffect(() => {
    if (phase !== "splash") return;
    introShown = true;
    const fadeTimer = setTimeout(() => setSplashFading(true), 4500);
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
  const handleSkip = () => setPhase("done");
  const handleUnmute = () => {
    if (muted) {
      setMuted(false);
      if (videoRef.current) videoRef.current.muted = false;
    }
  };

  if (phase === "done") return children;

  return (
    <>
      {/* Preload video silently during splash so it's ready instantly */}
      {phase === "splash" && (
        <video
          src={videoFinal}
          preload="auto"
          muted
          playsInline
          style={{ display: "none" }}
        />
      )}

      {/* Splash overlay */}
      {phase === "splash" && (
        <div
          className={`splash-screen${splashFading ? " splash-fading" : ""}`}
          style={{
            backgroundPosition: "center",
            backgroundSize: "auto 100%",
          }}
        >
          <div
            style={{
              width: "100%",
              minHeight: "100px",
              position: "absolute",
              bottom: "100px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p
              className="guild-font loading-text"
              style={{
                position: "absolute",
                bottom: "20px",
                color: "white",
                fontSize: "20px",
              }}
            >
              CARGANDO
            </p>
          </div>
        </div>
      )}

      {/* Video intro overlay */}
      {phase === "video" && (
        <div className="video-intro" onClick={handleUnmute}>
          <video
            ref={videoRef}
            className="video-intro__player"
            autoPlay
            playsInline
            muted
            onEnded={handleVideoEnd}
          >
            <source src={videoFinal} type="video/mp4" />
          </video>

        </div>
      )}
    </>
  );
}

export default SplashScreen;
