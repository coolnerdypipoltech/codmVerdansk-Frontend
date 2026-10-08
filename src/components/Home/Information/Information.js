import "./Information.css";

import {
  commonWallpaperD,
  Information_banner,
  Information_bckg,
  Information_ghost,
  Information_granade,  
} from "../../../assets/assetsDirectory";
import { useViewport } from "../../../context/ViewportContext";

const Information = () => {
  const { isMobile } = useViewport();

  return (
    <div
      className="general-page"
      style={{

        minHeight: "635px",
        maxHeight: isMobile ? "635px" : undefined,
        justifyContent: "flex-start",
        backgroundImage: `url(${isMobile ? Information_bckg : commonWallpaperD})`,
      }}
    >
      <div style={{ height: "50px" }}></div>
      <img
        src={Information_banner}
        alt="Information Banner"
        className="information-banner"
      />
      <p className="information-text1">
        Es la evolución del Battle <br></br>
        Royale y la jugamos
      </p>
      <p className="information-text2">
        con todo el caos de la <br></br>
        cultura pop latina
      </p>
      <img
        src={Information_ghost}
        alt="Information Ghost"
        className="information-ghost"
      />
      <img
        src={Information_granade}
        alt="Information Granade"
        className="information-granade"
      />
    </div>
  );
};

export default Information;
