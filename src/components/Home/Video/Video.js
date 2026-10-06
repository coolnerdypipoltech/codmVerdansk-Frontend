
import './Video.css';

import { commonWallpaperD, commonWallpaperM } from '../../../assets/assetsDirectory';
import { useViewport } from "../../../context/ViewportContext";

const Video = () => {
  const { isMobile } = useViewport();
  return (
    <div className="general-page" style={{ backgroundImage: `url(${isMobile ? commonWallpaperM : commonWallpaperD})`, minHeight: "714px" }}>
      
    </div>
  );
};

export default Video;
