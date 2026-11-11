import "./Squads.css";

import {
  calendar_bckg,
  desktop_bckg_2,
  squad_title,
  squad_winner,
  squad_banner,
  mobil_bckg2,
} from "../../../assets/assetsDirectory";

import { useViewport } from "../../../context/ViewportContext";
import Reveal from "../../Reveal/Reveal";

import SquadItem from "../../SquadItem/SquadItem";

import useNearViewport from "../../../hooks/useNearViewport";

const Squads = () => {
  const { isMobile } = useViewport();
  const [bgRef, bgNear] = useNearViewport();

  const winners = ["users1", "users2", "users3", "users4"];

  return (
    <>
      {isMobile ? (
        <div
          ref={bgRef}
          className="general-page"
          style={{
            minHeight: "513px",
            marginTop: "240px",
            maxHeight: isMobile ? "950px" : undefined,
            backgroundImage: bgNear ? `url(${mobil_bckg2})` : "none",
            justifyContent: "flex-start",
          }}
        >
          <img src={squad_title} alt="title" className="squad-title"></img>
          <p className="squad-text">
            Convirtieron cada partida <br></br>
            en territorio propio.
          </p>
          <img src={squad_winner} alt="winner" className="squad-winner"></img>
          <div className="squad-banner-container">
            <img src={squad_banner} alt="winner" className="squad-banner"></img>
            <p className="squad-banner-txt">CREADOR 01</p>
          </div>
          <div className="squad-items-container">
            {winners.map((winner, index) => (
              <SquadItem
                key={winner}
                number={"0" + String(index + 1)}
                text={winner}
              ></SquadItem>
            ))}
          </div>
        </div>
      ) : (
        <div className="general-page-desktop">
          <img
            loading="lazy"
            src={desktop_bckg_2}
            alt="Calendar Background"
            className="bckg-desktop"
          />

          <img src={squad_title} alt="title" className="squad-title-desktop"></img>
          <p className="squad-text-desktop">
            Convirtieron cada partida <br></br>
            en territorio propio.
          </p>
          <img src={squad_winner} alt="winner" className="squad-winner-desktop"></img>
          <div className="squad-banner-container-desktop">
            <img src={squad_banner} alt="winner" className="squad-banner-desktop"></img>
            <p className="squad-banner-txt-desktop">CREADOR 01</p>
          </div>
          <div className="squad-items-container-desktop">
            {winners.map((winner, index) => (
              <SquadItem
                key={winner}
                number={"0" + String(index + 1)}
                text={winner}
              ></SquadItem>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Squads;
