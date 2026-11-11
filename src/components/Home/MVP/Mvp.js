
import './Mvp.css';

import {  mobil_bckg3, desktop_bckg_3, mvp_banner, mvp_title, mvp_title_box, mvp_banner_desktop, mvp_banner_2, mvp_banner_3, mvp_banner_desktop_2, mvp_banner_desktop_3 } from '../../../assets/assetsDirectory';

import { useViewport } from "../../../context/ViewportContext";
import Reveal from "../../Reveal/Reveal";



import SquadItem from '../../SquadItem/SquadItem';

import useNearViewport from "../../../hooks/useNearViewport";
import FrameAnimation from '../../FrameAnimation/FrameAnimation';

const Mvp = () => {
  const { isMobile } = useViewport();
  const [bgRef, bgNear] = useNearViewport();

  const winners = ["users1", "users2", "users3", "users4"]

  return (
    <>{isMobile ? (
      <div
        ref={bgRef}
        className="general-page"
        style={{
          minHeight: "713px",
          maxHeight: isMobile ? "950px" : undefined,
          backgroundImage: bgNear ? `url(${mobil_bckg3})` : "none",
          justifyContent: 'flex-start'
        }}
      >
        <img src={mvp_title} alt='title' className='mvp-title'></img>
        <p className='mvp-text'>Hizo temblar Verdansk. </p>

        <FrameAnimation frames={[mvp_banner, mvp_banner_2, mvp_banner_3]} fps={4} alt='winner' className='mvp-banner'></FrameAnimation>
        <img src={mvp_title_box} alt='winner' className='mvp-box'></img>
        <div className='mvp-text-container'>
          <p className='mvp-text-box'>Winner 01</p>
        </div>


</div>
    ) : (
      <div className="general-page-desktop">
        <img
          loading="lazy"
          src={desktop_bckg_3}
          alt="Calendar Background"
          className="bckg-desktop"
        />
                
        <img src={mvp_title} alt='title' className='mvp-title-desktop'></img>
        <p className='mvp-text-desktop'>Hizo temblar Verdansk. </p>

        <FrameAnimation frames={[mvp_banner_desktop, mvp_banner_desktop_2, mvp_banner_desktop_3]} fps={4} alt='winner' className='mvp-banner-desktop'></FrameAnimation>
        <img src={mvp_title_box} alt='winner' className='mvp-box-desktop'></img>
        <p className='mvp-text-box-desktop'>Winner 01</p>


      </div>
    ) }</>
  );
};

export default Mvp;
