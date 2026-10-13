
import './FaqsItem.css';
import { forwardRef, useState } from 'react';
import { useViewport } from "../../context/ViewportContext";
import { faqs_arrow, faqsPage_item, faqsPage_num, desktop_faq_item } from "../../assets/assetsDirectory";

const FaqsItem = forwardRef(({ number, title, description, className = '', style }, ref) => {

  const [isOpen, setIsOpen] = useState(false);
  const { isMobile } = useViewport();

  return (
   <div ref={ref} style={style} className={`faqsItem-container ${className}`.trim()}>
    <div className="faqsItem">
      <div className="faqsItem-num">
        <img loading="lazy" src={faqsPage_num} alt="Faqs Number" className="faqsItem-num-img"></img>
        <div className="floater">
          <p className="faqsItem-num-text">{number}.</p>
        </div>
      </div>

      <div className="faqsItem-text-container" onClick={() => setIsOpen(!isOpen)}>
        <img loading="lazy" src={isMobile ? faqsPage_item : desktop_faq_item} alt="Faqs Item" className="faqsItem-img"></img>
        <div className="floater">
          <p className="faqsItem-title-text">{title}</p>
        </div>
      </div>

      

      <img loading="lazy" src={faqs_arrow} alt="Faqs Arrow" className={`faqsItem-arrow ${!isOpen ? 'faqItem-arrow-unselected' : ''}`} onClick={() => setIsOpen(!isOpen)}></img>
    </div>
          {isOpen && (
        <div className="faqsItem-description-container">
          <p className="faqsItem-description-text">{description}</p>
        </div>
      )}</div>
  );
});

export default FaqsItem;
