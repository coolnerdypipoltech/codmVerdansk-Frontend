import "./CreatorsPage.css";

import { useViewport } from "../../context/ViewportContext";
import { useNavigate } from "react-router-dom";
import {

  phase_left,
  commonWallpaperD,
  CreatorsPage_title,
  commonCreator,
  CreatorsPage_bckg,
} from "../../assets/assetsDirectory";

const items = [
  commonCreator,
  commonCreator,
  commonCreator,
  commonCreator,
  commonCreator,
  commonCreator,
  commonCreator,
  commonCreator,
  commonCreator,
  commonCreator,
  commonCreator,
  commonCreator,
  commonCreator,
  commonCreator,
  commonCreator,
  commonCreator,
  commonCreator,
  commonCreator,
  commonCreator,
  commonCreator,
  commonCreator,
  commonCreator,
  commonCreator,
  commonCreator,
  
];

const CreatorsPage = () => {
  const { isMobile } = useViewport();
  const navigate = useNavigate();

  return (
    <div
      className="general-page"
      style={{
        backgroundImage: `url(${isMobile ? CreatorsPage_bckg : commonWallpaperD})`,
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
        <img
          src={phase_left}
          alt="back"
          className="phase-left"
          onClick={() => {
            navigate("/");
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          }}
        ></img>
      </div>
      <img loading="lazy" src={CreatorsPage_title} alt="back" className="CreatorsPage-title"></img>
      <div className="creators-items-container">
          {items.map((item, index) => (
            <img key={index} src={item} alt={`Creator ${index}`} className="creator-item" />
          ))}
      </div>
    </div>
  );
};

export default CreatorsPage;
