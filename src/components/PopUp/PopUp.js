import React from "react";
import {   registerPage_check_up } from '../../assets/assetsDirectory';


const PopUp = ({ text, children, closePopUp, action }) => {



  return (
    <div className="popup-overlay" onClick={closePopUp}>
      <div className={`popup-content`} onClick={(e) => e.stopPropagation()}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
        </div>
        <div className="inter-font" style={{ textAlign: "left", width: "100%", padding: "0 20px" }}>
          {children || <p>{text}</p>}
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div onClick={closePopUp} style={{maxHeight: "70px"}}>
            <img
              loading="lazy"
              src={registerPage_check_up}
              style={{ height: "64px" }}
              alt="Cerrar"
              
            />
            
            <p
              className="guild-font"
              style={{
                fontSize: "12px",
                color: "#EDCC00",
                position: "relative",
                top: "-43px",
              }}
            >
              CERRAR
            </p>
          </div>
          <div  onClick={action} style={{maxHeight: "70px"}}>
            <img
              loading="lazy"
              src={registerPage_check_up}
              style={{ height: "64px" }}
              alt="Cerrar"
             
            />
            
            <p
              className="guild-font"
              style={{
                fontSize: "12px",
                color: "#EDCC00",
                position: "relative",
                top: "-43px",
              }}
            >
              ACEPTAR
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
