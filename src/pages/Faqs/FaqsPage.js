import "./FaqsPage.css";

import { useViewport } from "../../context/ViewportContext";
import { useNavigate } from "react-router-dom";
import {
  faqsPage_title,
  phase_left,
  faqsPage_bckg,
  
  desktop_tile_2,
  
} from "../../assets/assetsDirectory";
import FaqsItem from "../../components/FaqsItem/FaqsItem";
import Reveal from "../../components/Reveal/Reveal";

const FaqsPage = () => {
  const { isMobile } = useViewport();
  const navigate = useNavigate();

  return (
    <div
      className="general-page"
      style={{
        backgroundImage: `url(${isMobile ? faqsPage_bckg : desktop_tile_2})`,
        minHeight: "648px",
        marginTop: "0px",
        paddingTop: "100px",
        justifyContent: "flex-start",
        backgroundRepeat: "repeat-y",
        backgroundPosition: "top",
        backgroundSize: "100% auto",
      }}
    >
      <div className="phase-left-container">
        <Reveal><img
          src={phase_left}
          alt="back"
          className="phase-left"
          
          onClick={() => {
            navigate("/");
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          }}
        ></img></Reveal>
      </div>
      <Reveal><img loading="lazy" src={faqsPage_title} alt="back" className="faqsPage-title"></img></Reveal>
      <div className="faqs-items-container">
        <Reveal><FaqsItem
          number={1}
          title="What is Verdansk?"
          description="Verdansk is a fictional city used in the Call of Duty series."
        ></FaqsItem></Reveal>
        <Reveal><FaqsItem
          number={2}
          title="How to play?"
          description="You can play Verdansk by joining a match in Call of Duty."
        ></FaqsItem></Reveal>
        <Reveal><FaqsItem
          number={3}
          title="What is Verdansk?"
          description="Verdansk is a fictional city used in the Call of Duty series."
        ></FaqsItem></Reveal>
        <Reveal><FaqsItem
          number={4}
          title="How to play?"
          description="You can play Verdansk by joining a match in Call of Duty."
        ></FaqsItem></Reveal>
        <Reveal><FaqsItem
          number={5}
          title="What is Verdansk?"
          description="Verdansk is a fictional city used in the Call of Duty series."
        ></FaqsItem></Reveal>
        <Reveal><FaqsItem
          number={6}
          title="How to play?"
          description="You can play Verdansk by joining a match in Call of Duty."
        ></FaqsItem></Reveal>
        <Reveal><FaqsItem
          number={7}
          title="What is Verdansk?"
          description="Verdansk is a fictional city used in the Call of Duty series."
        ></FaqsItem></Reveal>
        <Reveal><FaqsItem
          number={8}
          title="How to play?"
          description="You can play Verdansk by joining a match in Call of Duty."
        ></FaqsItem></Reveal>
        <Reveal><FaqsItem
          number={9}
          title="What is Verdansk?"
          description="Verdansk is a fictional city used in the Call of Duty series."
        ></FaqsItem></Reveal>
      </div>
    </div>
  );
};

export default FaqsPage;
