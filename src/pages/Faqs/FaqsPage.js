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
import { faqsData } from "../../utils/faqsData";

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
        paddingTop: isMobile ? "100px" : "150px",
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
      {(() => {
        let itemNumber = 0;
        return faqsData.map((group) => (
          <div key={group.category} className="faqs-category">
            <Reveal><p className="faqs-category-title">{group.category}</p></Reveal>
            <div className="faqs-items-container">
              {group.items.map((item) => {
                itemNumber += 1;
                return (
                  <Reveal key={item.title}><FaqsItem
                    number={itemNumber}
                    title={item.title}
                    description={item.description}
                  ></FaqsItem></Reveal>
                );
              })}
            </div>
          </div>
        ));
      })()}
    </div>
  );
};

export default FaqsPage;
