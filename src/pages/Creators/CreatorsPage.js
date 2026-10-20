import "./CreatorsPage.css";

import { useViewport } from "../../context/ViewportContext";
import { useNavigate } from "react-router-dom";
import {

  phase_left,
  desktop_tile_1,
  creators_title,
  commonCreator,
  CreatorsPage_bckg,
    Creador_0,
  Creador_1,
  Creador_2,
  Creador_3,
  Creador_4,
  Creador_5,
  Creador_6,
  Creador_7,
  Creador_8,
  Creador_9,
  Creador_10,
  Creador_11,
  Creador_12,
  Creador_13,
  Creador_14,
  Creador_15,
  Creador_16,
  Creador_17,
  Creador_18,
  Creador_19,
  Creador_20,
  Creador_21,
  Creador_22,
  Creador_23,
  Creador_24,
} from "../../assets/assetsDirectory";
import Reveal from "../../components/Reveal/Reveal";

const items = [
  Creador_0,
  Creador_1,
  Creador_2,
  Creador_3,
  Creador_4,
  Creador_5,
  Creador_6,
  Creador_7,
  Creador_8,
  Creador_9,
  Creador_10,
  Creador_11,
  Creador_12,
  Creador_13,
  Creador_14,
  Creador_15,
  Creador_16,
  Creador_17,
  Creador_18,
  Creador_19,
  Creador_20,
  Creador_21,
  Creador_22,
  Creador_23,
  Creador_24,


  
];

const CreatorsPage = () => {
  const { isMobile } = useViewport();
  const navigate = useNavigate();

  return (
    <div
      className="general-page"
      style={{
        backgroundImage: `url(${isMobile ? CreatorsPage_bckg : desktop_tile_1})`,
        minHeight: "648px",
        marginTop: "0px",
        paddingTop: "120px",
        justifyContent: "flex-start",
        backgroundRepeat: "repeat-y",

                backgroundPosition: "top",
        backgroundSize: "100% auto",
      }}
    >
      <div className="phase-left-container">
        <Reveal><img
          src={phase_left}
          alt="back"
          className="phase-left"
          onClick={() => {
            navigate("/");
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          }}
        ></img></Reveal>
      </div>
      <Reveal><img loading="lazy" src={creators_title} alt="back" className="CreatorsPage-title"></img></Reveal>
      <div className="creators-items-container">
          {items.map((item, index) => (
            <Reveal key={index}><img src={item} alt={`Creator ${index}`} className="creator-item" /></Reveal>
          ))}
      </div>
    </div>
  );
};

export default CreatorsPage;
