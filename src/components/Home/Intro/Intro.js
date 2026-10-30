import "./Intro.css";

import Reveal from "../../Reveal/Reveal";
import FrameAnimation from "../../FrameAnimation/FrameAnimation";
import {
  Intro_date_banner,
  Intro_hashtag,
  Intro_logo,
  Intro_banner,
  Intro_bckg,
  grandFinal_title,
  Intro_bckg2,
  desktop_1,
  desktop_2,
  sticker_ghost_main_f1,
  sticker_ghost_main_f2,
  sticker_ghost_main_f3,
  sticker_Disparo_f1,
  sticker_Disparo_f2,
  sticker_Disparo_f3,
  sticker_walkt_1,
  sticker_walkt_2,
  sticker_rayos_f1,
  sticker_rayos_f2,
  sticker_paracaidas_1,
  sticker_paracaidas_2,
  sticker_paracaidas_flip_1,
  sticker_paracaidas_flip_2,
  Intro_register,
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
            marginTop: "75px",
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
          <FrameAnimation
            loading="lazy"
            frames={[sticker_rayos_f1, sticker_rayos_f2]}
            alt="Intro Sticker 2"
            fps={3}
            className="intro-sticker2"
          ></FrameAnimation>
          <div
            className="intro-sticker-paracaidas-container"
            style={{
              top: "10%",
              left: "19%",
              height: "10vw",
              animation: "fall-fade2 7s linear infinite",
              animationDelay: "3s",
              zIndex: 0,
            }}
          >
            <FrameAnimation
              loading="lazy"
              frames={[sticker_paracaidas_1, sticker_paracaidas_2]}
              alt="Intro Sticker Paracaidas"
              fps={2}
              className="intro-sticker-paracaidas"
            />
          </div>
          <div
            className="intro-sticker-paracaidas-container"
            style={{
              top: "5%",
              left: "73%",
              height: "15vw",
              animationDelay: "3s",
              zIndex: 0,
            }}
          >
            <FrameAnimation
              loading="lazy"
              frames={[sticker_paracaidas_flip_1, sticker_paracaidas_flip_2]}
              alt="Intro Sticker Paracaidas"
              fps={2}
              className="intro-sticker-paracaidas"
            />
          </div>
          <Reveal>
            <img
              loading="lazy"
              src={Intro_bckg2}
              alt="Intro Background 2"
              className="intro-bckg2"
            />
          </Reveal>
          <Reveal>
            <div className="intro-ghost-main">
              <FrameAnimation
                loading="lazy"
                frames={[
                  sticker_ghost_main_f1,
                  sticker_ghost_main_f2,
                  sticker_ghost_main_f3,
                ]}
                alt="Intro Ghost Main"
                fps={2}
                className="intro-ghost-main"
              />
            </div>
          </Reveal>
          <Reveal>
            <img
              loading="lazy"
              src={Intro_logo}
              alt="Intro Logo"
              className="intro-logo"
            />
          </Reveal>
          <></>
          <Reveal>
            <img
              loading="lazy"
              src={grandFinal_title}
              alt="Intro Banner"
              className="intro-banner"
            />
          </Reveal>
          <p className="intro-text-title">EVENTO PRESENCIAL CDMX</p>
          <p className="intro-text-subtitle">
            Calle de Mesones 72, Centro Histórico, <br></br> Cuauhtémoc, 06080,
            Ciudad de México
          </p>
          <Reveal>
            <Counter />
          </Reveal>

          <Reveal>
            <div
              style={{
                position: "absolute",
                top: "580px",
                height: "500px",
                left: "90%",
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
        <div className="general-page-desktop">
          <img
            loading="eager"
            fetchPriority="high"
            src={desktop_1}
            alt="Intro Background"
            className="bckg-desktop"
            style={{ marginTop: "70px" }}
          />

          <FrameAnimation
            loading="lazy"
            frames={[sticker_rayos_f1, sticker_rayos_f2]}
            alt="Intro Sticker 2"
            fps={3}
            className="intro-sticker2-desktop"
          ></FrameAnimation>

          <div
            className="intro-sticker-paracaidas-container"
            style={{
              top: "25%",
              left: "19%",
              height: "3vw",
              animation: "fall-fade2 7s linear infinite",
              animationDelay: "3s",
            }}
          >
            <FrameAnimation
              loading="lazy"
              frames={[sticker_paracaidas_1, sticker_paracaidas_2]}
              alt="Intro Sticker Paracaidas"
              fps={2}
              className="intro-sticker-paracaidas"
            />
          </div>

          <div className="intro-sticker-paracaidas-container">
            <FrameAnimation
              loading="lazy"
              frames={[sticker_paracaidas_flip_1, sticker_paracaidas_flip_2]}
              alt="Intro Sticker Paracaidas"
              fps={2}
              className="intro-sticker-paracaidas"
            />
          </div>

          <div
            className="intro-sticker-paracaidas-container"
            style={{ top: "25%", left: "37%", animationDelay: "2s" }}
          >
            <FrameAnimation
              loading="lazy"
              frames={[sticker_paracaidas_1, sticker_paracaidas_2]}
              alt="Intro Sticker Paracaidas"
              fps={2}
              className="intro-sticker-paracaidas"
            />
          </div>

          <Reveal>
            {" "}
            <div className="intro-ghost-main-desktop">
              <FrameAnimation
                loading="lazy"
                frames={[
                  sticker_ghost_main_f1,
                  sticker_ghost_main_f2,
                  sticker_ghost_main_f3,
                ]}
                fps={2}
                alt="Intro Ghost Main"
                className="intro-ghost-main-desktop"
              />
            </div>
          </Reveal>

          <Reveal>
            <img
              loading="lazy"
              src={Intro_logo}
              alt="Intro Logo"
              className="intro-logo-desktop"
            />
          </Reveal>

          <Reveal>
            <img
              loading="lazy"
              src={grandFinal_title}
              alt="Grand Final Title"
              className="intro-title-desktop"
            />
          </Reveal>

          <p className="intro-text-title" style={{position: "absolute", top: "70%", left: "50%", transform: "translateX(-50%)"}}>EVENTO PRESENCIAL CDMX</p>
          <p className="intro-text-subtitle" style={{position: "absolute", top: "77%", left: "50%", transform: "translateX(-50%)"}}>
            Calle de Mesones 72, Centro Histórico, <br></br> Cuauhtémoc, 06080,
            Ciudad de México
          </p>
          <Reveal>
            <Counter  />
          </Reveal>

          <img
            loading="lazy"
            src={desktop_2}
            alt="Intro Background 2"
            className="bckg-desktop"
            style={{ position: "absolute", top: "60%", zIndex: "2" }}
          />

          <Reveal>
            <div
              style={{
                position: "absolute",
                left: "85%",
                top: "90%",
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
