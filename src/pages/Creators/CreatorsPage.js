import "./CreatorsPage.css";

import { useViewport } from "../../context/ViewportContext";
import { useNavigate } from "react-router-dom";
import {

  phase_left,
  faqs_bckg,
  commonWallpaperD,
  CreatorsPage_title,
  commonCreator,
  
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
        backgroundImage: `url(${isMobile ? faqs_bckg : commonWallpaperD})`,
        minHeight: "648px",
        marginTop: "0px",
        paddingTop: "120px",
        justifyContent: "flex-start",
        backgroundRepeat: "repeat-y",

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
