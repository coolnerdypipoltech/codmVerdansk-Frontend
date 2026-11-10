
import './HomePage.css';
import Intro from '../../components/Home/Intro/Intro';
import Squads from "../../components/Home/Squads/Squads"
import Mvp from '../../components/Home/MVP/Mvp';
import Brigade from '../../components/Home/Brigade/Brigade';
import Generals from "../../components/Home/Generals/Generals";

const HomePage = () => {


  

  return (
    <div className="home-page" >
      <div id="inicio"><Intro /></div>
      <div id='squad'><Squads/></div>
      <div id='mvp'><Mvp/></div>
      <div id='brigade'><Brigade/></div>
      <div id="mascots"><Generals/></div>


      
      </div>




  );
};

export default HomePage;
