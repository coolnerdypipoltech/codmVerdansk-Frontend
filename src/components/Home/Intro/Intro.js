import "./Intro.css";

import Reveal from "../../Reveal/Reveal";
import FrameAnimation from "../../FrameAnimation/FrameAnimation";
import {
  Intro_logo,
  Intro_hashtag,
  Intro_winner,
  Intro_bckg,
  Intro_bckg2,
  desktop_bckg_1,
  desktop_2,
  sticker_Disparo_f1,
  sticker_Disparo_f2,
  sticker_Disparo_f3,
  sticker_walkt_1,
  sticker_walkt_2,
  intro_confidencial,
  sticker_ghost_main_f1,
  sticker_ghost_main_f2,
  sticker_ghost_main_f3,
  videoMarcoDesktop,
  videoMarcoMobil
} from "../../../assets/assetsDirectory";

import { useViewport } from "../../../context/ViewportContext";
import { useNavigate } from "react-router-dom";
import Counter from "../Counter/Counter";

const Intro = () => {
  const { isMobile } = useViewport();
  const navigate = useNavigate();

  return (
    <>
      {isMobile ? (
        <div
          className="general-page"
          style={{
            minHeight: "800px",
            maxHeight: "768px",
            marginTop: "15vw",
            paddingTop: "0px",
            top: "2px",
            justifyContent: "flex-start",
          }}
        >
          <Reveal>
            <img
              loading="eager"
              fetchPriority="high"
              src={Intro_bckg}
              alt="Intro Background"
              className="intro-bckg"
            />
          </Reveal>
          

          <Reveal>
            <img
              loading="lazy"
              src={Intro_bckg2}
              alt="Intro Background 2"
              className="intro-bckg2"
            />
          </Reveal>


          <></>

          
                        <FrameAnimation
                loading="lazy"
                frames={[
                  sticker_Disparo_f1,
                  sticker_Disparo_f2,
                  sticker_Disparo_f3,
                ]}
                alt="Intro Ghost"
                fps={5}
                className="intro-ghost"
              />

          <Reveal>
              <img src={Intro_hashtag} alt="hashtag" className="intro-hashtag"></img>
          </Reveal>

          <Reveal>
              <img src={videoMarcoMobil} alt="hashtag" className="intro-video-marco"></img>
              
          </Reveal>

          <video controls muted autoPlay src="https://file.verdanskcodm.com/videos/9X16_MASTER_SENAL%20VERDANSK_AFTERMOVIE.mp4" className="intro-video-marco2"></video>

          
          <p className="intro-winner-text">
            <span style={{ color: "white" }}>La señal transmite<br></br>
            los </span>  nombres más TOP.
          </p>
          
          <Reveal>
            <div
              style={{
                position: "absolute",
                top: "780px",
                height: "500px",
                left: "86%",
                width: "1px",
              }}
            >
              <FrameAnimation
                loading="lazy"
                frames={[sticker_walkt_1, sticker_walkt_2]}
                alt="Intro Sticker 1"
                fps={3}
                className="intro-sticker1"
              />
            </div>
          </Reveal>
        </div>
      ) : (
        <div className="general-page-desktop" style={{           minHeight: "55vw",}}>
          <img
            loading="eager"
            fetchPriority="high"
            src={desktop_bckg_1}
            alt="Intro Background"
            className="bckg-desktop"
            style={{ marginTop: "70px" }}
          />

          <Reveal>
            <img loading="lazy"
              src={videoMarcoDesktop}
              alt="Intro Winner"
              className="intro-marco-desktop">
            
            </img>
          </Reveal>

            <video controls muted autoPlay src="https://file.verdanskcodm.com/videos/16X9_MASTER_SENAL%20VERDANSK_AFTERMOVIE.mp4" className="intro-marco-desktop2"></video>

          
                    <Reveal>
            <div className="intro-ghost-main-desktop">
              <FrameAnimation
                loading="lazy"
                frames={[
                  sticker_ghost_main_f1,
                  sticker_ghost_main_f2,
                  sticker_ghost_main_f3,
                ]}
                alt="Intro Ghost Main"
                fps={2}
                className="intro-ghost-main-desktop"
              />
            </div>
          </Reveal>

          <Reveal>
            <img
              loading="lazy"
              src={Intro_winner}
              alt="Intro Winner"
              className="intro-winner-desktop"
            />
          </Reveal>

          <p className="intro-winner-text-desktop">
            <span style={{color: "white"}}>La señal transmite <br></br>
            los</span> nombres más TOP.
          </p>

          <Reveal>
              <img src={Intro_hashtag} alt="hashtag" className="intro-hashtag-desktop"></img>
          </Reveal>




          <img
            loading="lazy"
            src={desktop_2}
            alt="Intro Background 2"
            className="bckg-desktop"
            style={{ position: "absolute", top: "67%", zIndex: "2", height: "90vh" }}
          />

          <Reveal>
            <div
              style={{
                position: "absolute",
                left: "58%",
                top: "105%",
                height: "300px",
                width: "1px",
              }}
            >
              <FrameAnimation
                loading="lazy"
                frames={[sticker_walkt_1, sticker_walkt_2]}
                alt="Intro Sticker 1"
                fps={3}
                className="intro-sticker1-desktop"
              />
            </div>
          </Reveal>

          <Reveal>
            <div className="intro-ghost-desktop-container">
              <FrameAnimation
                loading="lazy"
                frames={[
                  sticker_Disparo_f1,
                  sticker_Disparo_f2,
                  sticker_Disparo_f3,
                ]}
                alt="Intro Ghost"
                fps={5}
                className="intro-ghost-desktop"
              />
            </div>
          </Reveal>







        </div>
      )}{" "}
    </>
  );
};

export default Intro;
