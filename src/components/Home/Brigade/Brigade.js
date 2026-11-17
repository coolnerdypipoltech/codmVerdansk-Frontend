
import './Brigade.css';

import {  mobil_bckg4, brigade_red, brigade_title, brigade_winner2, brigade_winner3, desktop_bckg_4, brigade_winner, brigade_winner_2, sheik, jacquez, growan, topher } from '../../../assets/assetsDirectory';

import { useViewport } from "../../../context/ViewportContext";
import Reveal from "../../Reveal/Reveal";

import SquadItem from '../../SquadItem/SquadItem';

import useNearViewport from "../../../hooks/useNearViewport";
import FrameAnimation from '../../FrameAnimation/FrameAnimation';

const Brigade = () => {
  const { isMobile } = useViewport();
  const [bgRef, bgNear] = useNearViewport();

  const winnersSquad = [{title: "SQUAD 1", winners: ["JuanchoZz", "M~Marcus", "Pingueta", "TPSToÑo"], influencer: {text: "Growan", img: growan}},  
{title: "SQUAD 2", winners: ["Mufasacod", "Isurino", "HYoneiker", "Dolphin"], influencer: {text: "xSheik", img: sheik}}, 
{title: "SQUAD 3", winners: ["Dekiriku", "dekenza", "Milan", "AoirizUS"], influencer: {text: "Jacquez", img: jacquez} }, 
{title: "SQUAD 4", winners: ["Koreoиova", "Sr.Mxra", "Goat.Werty", "BlackKaiser"], influencer: {text: "Topher", img: topher}}, 
]

  return (
    <>{isMobile ? (
      <div
        ref={bgRef}
        className="general-page"
        style={{
          minHeight: "893px",

          backgroundImage: bgNear ? `url(${mobil_bckg4})` : "none",
          justifyContent: 'flex-start'
        }}
      >
        <img src={brigade_title} alt='title' className='brigade-title'></img>
        <p className='brigade-text'>El bando que dominó la señal.</p>
        <FrameAnimation fps={4}  frames={[brigade_winner, brigade_winner2, brigade_winner3]} alt='title' className='brigade-banner'></FrameAnimation>
        <img src={brigade_winner_2} alt='title' className='brigade-banner-2'></img>
        <>
        <div style={{minHeight: "100px"}}></div>
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
          src={desktop_bckg_4}
          alt="Calendar Background"
          className="bckg-desktop"
          
        />
        

                <img src={brigade_title} alt='title' className='brigade-title-desktop'></img>
        <p className='brigade-text-desktop'>El bando que dominó la señal.</p>
        <FrameAnimation fps={4}  frames={[brigade_winner, brigade_winner2, brigade_winner3]} alt='title' className='brigade-banner-desktop'></FrameAnimation>
        <img src={brigade_winner_2} alt='title' className='brigade-banner-desktop2'></img>
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
