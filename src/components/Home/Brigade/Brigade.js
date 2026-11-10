
import './Brigade.css';

import {  calendar_bckg, desktop_7, brigade_red, brigade_title, mvp_banner, squad_winner } from '../../../assets/assetsDirectory';

import { useViewport } from "../../../context/ViewportContext";
import Reveal from "../../Reveal/Reveal";

import SquadItem from '../../SquadItem/SquadItem';

import useNearViewport from "../../../hooks/useNearViewport";

const Brigade = () => {
  const { isMobile } = useViewport();
  const [bgRef, bgNear] = useNearViewport();

  const winnersSquad = [{title: "SQUAD 1", winners: ["users1", "users2", "users3", "users4"], influencer: {text: "something", img: squad_winner}},
{title: "SQUAD 2", winners: ["users1", "users2", "users3", "users4"], influencer: {text: "something", img: squad_winner}}, {title: "SQUAD 3", winners: ["users1", "users2", "users3", "users4"], influencer: {text: "something", img: squad_winner}}
]

  return (
    <>{isMobile ? (
      <div
        ref={bgRef}
        className="general-page"
        style={{
          minHeight: "713px",

          backgroundImage: bgNear ? `url(${calendar_bckg})` : "none",
          justifyContent: 'flex-start'
        }}
      >
        <img src={brigade_title} alt='title' className='brigade-title'></img>
        <p className='brigade-text'>El bando que dominó la señal.</p>
        <img src={mvp_banner} alt='title' className='brigade-banner'></img>
        <>
        {winnersSquad.map((items, index) => (
          <div key={items.title} className="brigade-squad-group">
           <div className='brigade-red-container'>
              <img src={brigade_red} alt='title' className='brigade-red'></img>
             <p className="brigade-squad-title">{items.title}</p>
           </div>
           <SquadItem text={items.influencer.text} character={items.influencer.img}></SquadItem>
            {items.winners.map((items2, index2) => (
              <SquadItem key={items2} number={"0" + String(index2 + 1)} text={items2}></SquadItem>
            ))}
          </div>
        ))}
        </>

</div>
    ) : (
      <div className="general-page-desktop">
        <img
          loading="lazy"
          src={desktop_7}
          alt="Calendar Background"
          className="bckg-desktop"
        />
        

                <img src={brigade_title} alt='title' className='brigade-title-desktop'></img>
        <p className='brigade-text-desktop'>El bando que dominó la señal.</p>
        <img src={mvp_banner} alt='title' className='brigade-banner-desktop'></img>
        <img src={mvp_banner} alt='title' className='brigade-banner-desktop2'></img>
        <div className='brigade-squad-container'>
        {winnersSquad.map((items, index) => (
          <div key={items.title} className="brigade-squad-group-desktop">
           <div className='brigade-red-container-desktop'>
              <img src={brigade_red} alt='title' className='brigade-red-desktop'></img>
             <p className="brigade-squad-title-desktop">{items.title}</p>
           </div>
           <SquadItem text={items.influencer.text} character={items.influencer.img}></SquadItem>
            {items.winners.map((items2, index2) => (
              <SquadItem key={items2} number={"0" + String(index2 + 1)} text={items2}></SquadItem>
            ))}
          </div>
        ))}
        </div>


      </div>
    ) }</>
  );
};

export default Brigade;
