import "./FaqsPage.css";

import { useViewport } from "../../context/ViewportContext";
import { useNavigate } from "react-router-dom";
import {
  faqsPage_title,
  phase_left,
  faqs_bckg,
  commonWallpaperD,
  
} from "../../assets/assetsDirectory";
import FaqsItem from "../../components/FaqsItem/FaqsItem";

const FaqsPage = () => {
  const { isMobile } = useViewport();
  const navigate = useNavigate();

  return (
    <div
      className="general-page"
      style={{
        backgroundImage: `url(${isMobile ? faqs_bckg : commonWallpaperD})`,
        minHeight: "648px",
        marginTop: "0px",
        paddingTop: "100px",
        justifyContent: "flex-start",
        backgroundRepeat: "repeat-y",
                backgroundSize: " 100% 100%",
      }}
    >
      <div className="phase-left-container">
        <img
          src={phase_left}
          alt="back"
          className="phase-left"
          onClick={() => {
            navigate("/");
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          }}
        ></img>
      </div>
      <img loading="lazy" src={faqsPage_title} alt="back" className="faqsPage-title"></img>
      <div className="faqs-items-container">
        <FaqsItem
          number={1}
          title="What is Verdansk?"
          description="Verdansk is a fictional city used in the Call of Duty series."
        ></FaqsItem>
        <FaqsItem
          number={2}
          title="How to play?"
          description="You can play Verdansk by joining a match in Call of Duty."
        ></FaqsItem>
        <FaqsItem
          number={3}
          title="What is Verdansk?"
          description="Verdansk is a fictional city used in the Call of Duty series."
        ></FaqsItem>
        <FaqsItem
          number={4}
          title="How to play?"
          description="You can play Verdansk by joining a match in Call of Duty."
        ></FaqsItem>
        <FaqsItem
          number={5}
          title="What is Verdansk?"
          description="Verdansk is a fictional city used in the Call of Duty series."
        ></FaqsItem>
        <FaqsItem
          number={6}
          title="How to play?"
          description="You can play Verdansk by joining a match in Call of Duty."
        ></FaqsItem>
        <FaqsItem
          number={7}
          title="What is Verdansk?"
          description="Verdansk is a fictional city used in the Call of Duty series."
        ></FaqsItem>
        <FaqsItem
          number={8}
          title="How to play?"
          description="You can play Verdansk by joining a match in Call of Duty."
        ></FaqsItem>
        <FaqsItem
          number={9}
          title="What is Verdansk?"
          description="Verdansk is a fictional city used in the Call of Duty series."
        ></FaqsItem>
      </div>
    </div>
  );
};

export default FaqsPage;
