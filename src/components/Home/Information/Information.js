import "./Information.css";

import {
  commonWallpaperD,
  commonWallpaperM,
  Information_banner,
} from "../../../assets/assetsDirectory";
import { useViewport } from "../../../context/ViewportContext";

const Information = () => {
  const { isMobile } = useViewport();

  return (
    <div
      className="general-page"
      style={{
        backgroundImage: `url(${isMobile ? commonWallpaperM : commonWallpaperD})`,
        minHeight: "714px",
        justifyContent: "flex-start",
        
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
    </div>
  );
};

export default Information;
