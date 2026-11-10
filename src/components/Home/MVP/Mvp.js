
import './Mvp.css';

import {  calendar_bckg, desktop_7, mvp_banner, mvp_title, mvp_title_box, mvp_banner_desktop } from '../../../assets/assetsDirectory';

import { useViewport } from "../../../context/ViewportContext";
import Reveal from "../../Reveal/Reveal";

import SquadItem from '../../SquadItem/SquadItem';

import useNearViewport from "../../../hooks/useNearViewport";

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
          backgroundImage: bgNear ? `url(${calendar_bckg})` : "none",
          justifyContent: 'flex-start'
        }}
      >
        <img src={mvp_title} alt='title' className='mvp-title'></img>
        <p className='mvp-text'>Hizo temblar Verdansk. </p>

        <img src={mvp_banner} alt='winner' className='mvp-banner'></img>
        <img src={mvp_title_box} alt='winner' className='mvp-box'></img>
        <div className='mvp-text-container'>
          <p className='mvp-text-box'>Winner 01</p>
        </div>


</div>
    ) : (
      <div className="general-page-desktop">
        <img
          loading="lazy"
          src={desktop_7}
          alt="Calendar Background"
          className="bckg-desktop"
        />
                
        <img src={mvp_title} alt='title' className='mvp-title-desktop'></img>
        <p className='mvp-text-desktop'>Hizo temblar Verdansk. </p>

        <img src={mvp_banner_desktop} alt='winner' className='mvp-banner-desktop'></img>
        <img src={mvp_title_box} alt='winner' className='mvp-box-desktop'></img>
        <p className='mvp-text-box-desktop'>Winner 01</p>


      </div>
    ) }</>
  );
};

export default Mvp;
