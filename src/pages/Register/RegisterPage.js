
import './RegisterPage.css';

import { useNavigate } from "react-router-dom";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import {
  registerPage_title,
  phase_left,
registerPage_background,
  
} from "../../assets/assetsDirectory";

const RegisterPage = () => {
  const navigate = useNavigate();


  

  return (
    <div className="register-page" style={{backgroundImage: `url(${registerPage_background})`,}}>
        <div style={{height: "130px"}}></div>
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
      <img loading="lazy" src={registerPage_title} alt="back" className="registerPage-title"></img>
      <RegistrationForm></RegistrationForm>
    </div>




  );
};

export default RegisterPage;
