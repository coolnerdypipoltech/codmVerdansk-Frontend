
import './FaqsItem.css';
import { useState, useEffect } from 'react';
import { faqs_arrow, faqsPage_item, faqsPage_num } from "../../assets/assetsDirectory";

const FaqsItem = ({ number, title, description }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
   <div className="faqsItem-container">
    <div className="faqsItem">
      <div className="faqsItem-num">
        <img loading="lazy" src={faqsPage_num} alt="Faqs Number" className="faqsItem-num-img"></img>
        <div className="floater">
          <p className="faqsItem-num-text">{number}.</p>
        </div>
      </div>

      <div className="faqsItem-text-container" onClick={() => setIsOpen(!isOpen)}>
        <img loading="lazy" src={faqsPage_item} alt="Faqs Item" className="faqsItem-img"></img>
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
};

export default FaqsItem;
