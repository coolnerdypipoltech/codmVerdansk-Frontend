
import './HomePage.css';
import Intro from '../../components/Home/Intro/Intro';
import Video from '../../components/Home/Video/Video';
import Creators from '../../components/Home/Creators/Creators';
import Faqs from '../../components/Home/Faqs/Faqs';
import Information from '../../components/Home/Information/Information';
import Mascots from '../../components/Home/Mascots/Mascots';
import Calendar from '../../components/Home/Calendar/Calendar';
import { useViewport } from "../../context/ViewportContext";

const HomePage = () => {

  const { isMobile } = useViewport();
  

  return (
    <div className="home-page" >
      <Intro />
      <Video></Video>
      <Information></Information> 
      <Mascots></Mascots>
      <Calendar></Calendar>
      <Creators></Creators>
      <Faqs></Faqs>
    </div>
  );
};

export default HomePage;
