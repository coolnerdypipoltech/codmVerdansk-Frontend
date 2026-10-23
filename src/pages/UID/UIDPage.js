import "./UIDPage.css";


import { useViewport } from "../../context/ViewportContext";
import { useNavigate } from "react-router-dom";
import {

  registerPage_background,
  registerPage_title_locate,
  uid_step_1,
  uid_step_2,
  uid_step_3,
  phase_left,

  
} from "../../assets/assetsDirectory";

const UIDPage = () => {
  const { isMobile } = useViewport();
  const navigate = useNavigate();

  return (
    <div className="register-page" style={{backgroundImage: `url(${registerPage_background})`}}>
        <div style={{height: "130px"}}></div>
        <div className="phase-left-container">
        <img
          src={phase_left}
          alt="back"
          className="phase-left"
          
          onClick={() => {
            navigate("/register");
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          }}
        ></img>
      </div>
            <img src={registerPage_title_locate} className="uid-title-image" alt="Locate UID Title" />
      <p className="uid-instruction">Inicia sesión en el juego <span className="uid-highlight">desde tu dispositivo.</span></p>
      <p className="uid-instruction">Selecciona tu perfil en la <span className="uid-highlight">esquina superior izquierda</span> de la pantalla principal.</p>
      <img src={uid_step_1} alt="UID Step 1" className="uid-step-image" />
      <p className="uid-instruction">Verás una serie de opciones a la izquierda de la pantalla. selecciona la pestaña <span className="uid-highlight">"básico"</span>.</p>
      <img src={uid_step_2} alt="UID Step 2" className="uid-step-image" />
      <p className="uid-instruction"><span className="uid-highlight">Debajo de tu nombre de usuario,</span> verás una serie de números ese es tu UID.</p>
      <img src={uid_step_3} alt="UID Step 3" className="uid-step-image" />
      <p className="uid-instruction"><span className="uid-highlight">Haz clic en el botón de copiar</span> a la derecha del número para evitar errores al escribirlo.</p>
      <div className="uid-spacer"></div>

    </div>


  );
};

export default UIDPage;
