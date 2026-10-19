import React, { useEffect, useState } from "react";
import "./RegistrationForm.css";

import {
  registerPage_check_down,
  registerPage_check_up,
  registerPage_button,
  registerPage_title_completed,
  registerPage_title_locate,
  registerPage_accept_button,
  registerPage_background_popUp,
  registerPage_close,
  registerPage_continue_button,
  registerPage_create_button,
  registerPage_join_button,
} from "../../assets/assetsDirectory";

import { Captcha } from "recaptz";

import PopUp from "../PopUp/PopUp";

import { useNavigate } from "react-router";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    uid: "",
    platform: "",
    email: "",
    discord: "",
    country: "",
    age: "",
    passport: false,
    availabilityToTravel: false,
    termsAndConditions: false,
  });
  const navigate = useNavigate();
  const [forceReloadCaptcha, setForceReloadCaptcha] = useState(0);
  const [captchaError, setCaptchaError] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isFormCompleted, setIsFormCompleted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [popup, setPopup] = useState({
    show: true,
    type: "success-yesDiscord",
    message: "",
  });
  const firstRender = React.useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      setCaptchaError(false);
      setTimeout(changeText, 100);
    }
    if (isVerified && Object.keys(errors).length === 0 && !isFormCompleted) {
      setIsFormCompleted(true);
    }
  }, [isVerified]);

  useEffect(() => {
    const object = document.querySelector(".text-yellow-700");

    if (object) {
      //object.remove();
    }
  }, [captchaError]);

  useEffect(() => {
    const navbarElement = document.querySelector(".navbar-container");

    if (navbarElement) {
      if (isFormCompleted) {
        navbarElement.style.zIndex = "0";
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navbarElement.style.zIndex = "1000";
      }
    }
  }, [isFormCompleted]);

  const countries = [
    { value: "MEX", label: "México" },
    { value: "ARG", label: "Argentina" },
    { value: "ECU", label: "Ecuador" },
    { value: "COL", label: "Colombia" },
    { value: "CHL", label: "Chile" },
    { value: "PER", label: "Perú" },
  ];

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "El nombre completo es requerido";
    }

    if (!formData.username) {
      newErrors.username = "El nombre de usuario es requerido";
    }

    if (!formData.age) {
      newErrors.age = "La edad es requerida";
    } else if (Number(formData.age) < 16 || Number(formData.age) > 99) {
      newErrors.age = "Debes tener entre 16 y 99 años";
    }

    if (!formData.uid) {
      newErrors.uid = "El UID es requerido";
    }

    if (!formData.platform) {
      newErrors.platform = "La plataforma es requerida";
    }

    if (!formData.email) {
      newErrors.email = "El correo es requerido";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "El correo no es válido";
    }

    if (!formData.country) {
      newErrors.country = "El país es requerido";
    }

    if (!formData.termsAndConditions) {
      newErrors.termsAndConditions =
        "Se necesita aceptar los terminos y condiciones";
    }

    if (!formData.passport) {
      newErrors.passport =
        "Se necesita cumplir con los requisitos para viajar en tu país";
    }

    if (!formData.availabilityToTravel) {
      newErrors.availabilityToTravel = "Se necesita disponibilidad para viajar";
    }

    if (!isVerified) {
      setCaptchaError(true);
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const changeText = () => {
    const successElement = document.querySelector(
      "h3.text-lg.font-semibold.mb-1.text-green-700",
    );
    if (
      successElement &&
      successElement.textContent === "Verification Successful!"
    ) {
      successElement.textContent = "Captcha completado con éxito!";
    }
  };

  const handleVerifyDiscord = () => {
    // Implement Discord verification logic here
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => {
      const updatedValue = type === "checkbox" ? checked : value;

      return {
        ...prev,
        [name]: updatedValue,
      };
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const actualSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    // Google Analytics: track form submission attempt
    if (window.gtag) {
      window.gtag("event", "form_submit", {
        event_category: "Registration",
        event_label: "Registro Form Submit",
        country: formData.country,
      });
    }

    setForceReloadCaptcha((prev) => prev + 1);
    setIsLoading(true);

    let helperDiscord = "null";
    if (formData.discord.trim() !== "") {
      helperDiscord = formData.discord.trim();
    }

    // Filtrar solo los campos no booleanos para enviar al servidor
    const dataToSend = {
      email: formData.email,
      country: formData.country,
      uid: formData.uid,
      name: formData.name,
      username: formData.username,
      platform: formData.platform,
      discord: helperDiscord,
      age: formData.age,
    };

    try {
      const response = await fetch(
        "https://register.verdanskcodm.com/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        },
      );

      if (response.status === 200) {
        // Google Analytics: track successful registration
        if (window.gtag) {
          window.gtag("event", "registration_success", {
            event_category: "Registration",
            event_label: "Registro Exitoso",
            country: formData.country,
          });
        }
        setPopup({
          show: true,
          type: "success",
        });
        // Reset form
        setFormData({
          name: "",
          age: "",
          username: "",
          uid: "",
          platform: "",
          email: "",
          discord: "",
          country: "",
          passport: false,
          availabilityToTravel: false,
          termsAndConditions: false,
        });
      } else if (response.status === 400) {
        setPopup({
          show: true,
          type: "error",
          message:
            "Falta información requerida. Por favor verifica todos los campos.",
        });
      } else if (response.status === 409) {
        setPopup({
          show: true,
          type: "error",
          message: "Este email ya ha sido registrado anteriormente.",
        });
      } else if (response.status === 410) {
        setPopup({
          show: true,
          type: "error",
          message: "Este UID ya ha sido registrado anteriormente.",
        });
      } else if (response.status === 503) {
        setPopup({
          show: true,
          type: "error",
          message:
            "El servicio está temporalmente fuera de servicio. Intenta más tarde.",
        });
      } else {
        setPopup({
          show: true,
          type: "error",
          message: "Ocurrió un error inesperado. Intenta nuevamente.",
        });
      }
    } catch (error) {
      setPopup({
        show: true,
        type: "error",
        message:
          error.message || "Ocurrió un error de red. Intenta nuevamente.",
      });
    } finally {
      setIsFormCompleted(false);
      setIsLoading(false);
      setCaptchaError(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isVerified && !validateForm()) {
      setIsFormCompleted(false);
      return;
    }

    if (!isVerified) {
      const captchaButton = document.querySelector(
        ".my-custom-captcha button.bg-blue-600",
      );
      if (captchaButton) {
        captchaButton.click();
      }
    }

    if (!validateForm()) {
      return;
    }
    if (isVerified) {
      setIsFormCompleted(true);
    }
  };

  const closePopup = () => {
    setPopup({ show: false, type: "", message: "" });
  };

  return (
    <>
      <div className="registration-container">
        {/* Loading Overlay */}
        {isLoading && (
          <div className="loading-overlay">
            <div className="loading-spinner">
              <div className="spinner"></div>
              <p className="inter-font">Procesando registro...</p>
            </div>
          </div>
        )}

        {/* Result Popup */}
        {popup.show && (
          <div className="popup-overlay" onClick={closePopup}>
            <div
              className={`popup-content ${popup.type}`}
              
              onClick={(e) => e.stopPropagation()}
            >
              <img
                loading="lazy"
                src={registerPage_background_popUp}
                alt="back"
                className={popup.type === "instructions" ? "registerPage-background-popUp" : "registerPage-background-popUp2" }
                
              ></img>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  
                }}
              ></div>
              {popup.type === "success-yesDiscord" && (
                <>
                  <div style={{ padding: "10px 20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <img
                      loading="lazy"
                      src={registerPage_title_completed}
                      alt="back"
                      className="registerPage-title"
                    ></img>
                    <p className="form-group-popUp">
                      Te recomendamos
                      <span style={{ color: "#C19F33" }}>
                        {" "}
                        unirte al servidor oficial de Discord{" "}
                      </span>
                      para que estés enterado de todas las novedades y en caso
                      de quedar seleccionado para la siguiente fase puedas
                      recibir las instrucciones necesarias.
                    </p>
                  </div>
                  <div
                    onClick={closePopup}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      loading="lazy"
                      src={registerPage_join_button}
                      style={{ height: "64px", marginTop: "20px" }}
                      alt="Cerrar"
                    />
                  </div>
                  <div
                    onClick={closePopup}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      loading="lazy"
                      src={registerPage_continue_button}
                      style={{ height: "64px", marginTop: "20px" }}
                      alt="Cerrar"
                    />
                  </div>
                </>
              )}

              {popup.type === "success-noDiscord" && (
                <>
                  <div style={{ padding: "10px 20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <img
                      loading="lazy"
                      src={registerPage_title_completed}
                      alt="back"
                      className="registerPage-title"
                    ></img>
                    <p className="form-group-popUp">
                      En caso de quedar seleccionado
                      <span style={{ color: "#C19F33" }}>
                        {" "}
                        deberás contar con una cuenta de discord para continuar
                        participando,{" "}
                      </span>
                      ya que ahí se llevará a cabo la comunicación oficial del
                      torneo. En caso de no cumplir este requisito
                      <span style={{ color: "#AA261A" }}>
                        {" "}
                        serás descalificado.{" "}
                      </span>
                      Si no tienes cuenta puedes crear una de manera gratuita
                      aquí:
                    </p>
                  </div>
                  <div
                    onClick={closePopup}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      loading="lazy"
                      src={registerPage_create_button}
                      style={{ height: "64px", marginTop: "20px" }}
                      alt="Cerrar"
                    />
                  </div>
                  <div
                    onClick={closePopup}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      loading="lazy"
                      src={registerPage_continue_button}
                      style={{ height: "64px", marginTop: "20px" }}
                      alt="Cerrar"
                    />
                  </div>
                </>
              )}

              {popup.type === "instructions" && (
                <>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px 20px" }}>
                    <img
                      loading="lazy"
                      src={registerPage_title_locate}
                      alt="back"
                      className="registerPage-title"
                    ></img>
                    <p className="form-group-popUp" style={{ textAlign: "left"}}>
                      1. Inicia sesión en el juego <span style={{ color: "#C19F33" }}>desde tu dispositivo.</span>
                    </p>
                    <p className="form-group-popUp" style={{ textAlign: "left"}}>
                      2. Selecciona tu perfil en la <span style={{ color: "#C19F33" }}>esquina superior izquierda </span> de la pantalla principa
                    </p>
                    <p className="form-group-popUp" style={{ textAlign: "left"}}>
                      3. Verás una serie de opciones a la izquierda de la pantalla. selecciona la pestaña <span style={{ color: "#C19F33" }}>"básico".</span>
                    </p>
                    <p className="form-group-popUp" style={{ textAlign: "left"}}>
                      4. <span style={{ color: "#C19F33" }}> Debajo de tu nombre de usuario, </span> verás una serie de números ese es tu UID.
                    </p>
                    <p className="form-group-popUp" style={{ textAlign: "left"}}>
                      5. <span style={{ color: "#C19F33" }}>
 Haz clic en el botón de copiar </span> a la derecha del número para evitar errores al escribirlo.
                    </p>
                    
                  </div>
                  <div
                    onClick={closePopup}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      loading="lazy"
                      src={registerPage_accept_button}
                      style={{ height: "64px", marginTop: "20px" }}
                      alt="Cerrar"
                    />
                  </div>
                </>
              )}
              <div className= {popup.type === "instructions" ? "popUp_close" : "popUp_close2"} onClick={closePopup}>
                <img
                  loading="lazy"
                  src={registerPage_close}
                  alt="Cerrar"
                />
              </div>
            </div>
          </div>
        )}

        <div className="registration-form" onSubmit={handleSubmit}>
          <form onSubmit={handleSubmit}>
            {/* Full name */}
            <div className="form-group">
              <label className="inter-font" htmlFor="name">
                Nombre Completo*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder=""
                className={errors.name ? "error" : ""}
                autoComplete="off"
                spellCheck="false"
              />
              {errors.name && (
                <span className="error-message">{errors.name}</span>
              )}
            </div>

            {/* Username */}
            <div className="form-group">
              <label className="inter-font" htmlFor="username">
                CODM Username*
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder=""
                className={errors.username ? "error" : ""}
              />
              {errors.username && (
                <span className="error-message">{errors.username}</span>
              )}
            </div>

            {/* Age */}
            <div className="form-group">
              <label className="inter-font" htmlFor="age">
                Edad*
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder=""
                min="16"
                max="99"
                className={errors.age ? "error" : ""}
                autoComplete="off"
              />
              {errors.age && (
                <span className="error-message">{errors.age}</span>
              )}
            </div>

            {/* UID */}
            <div className="form-group">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <label className="inter-font" htmlFor="uid">
                  UID*
                </label>
              </div>

              <input
                type="text"
                id="uid"
                name="uid"
                value={formData.uid}
                onChange={handleChange}
                placeholder=""
                className={errors.uid ? "error" : ""}
              />
              <p
                onClick={() => navigate("/instructions")}
                className="inter-font"
                style={{
                  color: "white",
                  textDecoration: "underline",
                  textAlign: "left",
                  fontSize: "14px",
                  paddingTop: "10px",
                }}
              >
                ¿Cómo encontrar mi UID?
              </p>
              {errors.uid && (
                <span className="error-message">{errors.uid}</span>
              )}
            </div>

            {/* Platform */}
            <div className="form-group">
              <label className="inter-font" htmlFor="platform">
                Plataforma*
              </label>
              <select
                id="platform"
                name="platform"
                value={formData.platform}
                onChange={handleChange}
                className={errors.platform ? "error" : ""}
              >
                <option value="" style={{ color: "grey" }}>
                  Selecciona plataforma
                </option>
                <option value="ANDROID">Android</option>
                <option value="IOS">iOS</option>
              </select>
              {errors.platform && (
                <span className="error-message">{errors.platform}</span>
              )}
            </div>

            {/* Email */}
            <div className="form-group">
              <label className="inter-font" htmlFor="email">
                Correo Electrónico*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className={errors.email ? "error" : ""}
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            {/* Discord */}
            <div className="form-group">
              <label className="inter-font" htmlFor="discord">
                Discord Username (Opcional)
              </label>
              <input
                type="text"
                id="discord"
                name="discord"
                value={formData.discord}
                onChange={handleChange}
                placeholder=""
                className={errors.discord ? "error" : ""}
              />
              <p
                onClick={() => handleVerifyDiscord()}
                className="inter-font"
                style={{
                  color: "white",
                  textDecoration: "underline",
                  textAlign: "left",
                  fontSize: "14px",
                  paddingTop: "10px",
                }}
              >
                Verificar usuario
              </p>
              {errors.discord && (
                <span className="error-message">{errors.discord}</span>
              )}
            </div>

            <p className="form-group-text">
              ¿No encuentras tu usuario de Discord? Haz clic en Verificar
              usuario para rellenar el campo automáticamente. Esto no te une al
              servidor
            </p>

            {/* Country */}
            <div className="form-group">
              <label className="inter-font" htmlFor="country">
                Selecciona tu País*
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={errors.country ? "error" : ""}
              >
                <option className="inter-font" style={{ color: "grey" }}>
                  Selecciona país
                </option>
                {countries.map((country) => (
                  <option key={country.value} value={country.value}>
                    {country.label}
                  </option>
                ))}
              </select>
              {errors.country && (
                <span className="error-message">{errors.country}</span>
              )}
            </div>

            {/* Checkboxes */}
            <div className="checkbox-group">
              <label
                className="checkbox-label"
                style={{ marginBottom: "10px" }}
              >
                <input
                  type="checkbox"
                  name="termsAndConditions"
                  checked={formData.termsAndConditions}
                  onChange={handleChange}
                  className="inputDiamond"
                />
                <span
                  className="checkmark"
                  style={{
                    marginBottom: "0px",
                    backgroundImage: `url(${formData.termsAndConditions ? registerPage_check_up : registerPage_check_down})`,
                  }}
                  onClick={() =>
                    setFormData({
                      ...formData,
                      termsAndConditions: !formData.termsAndConditions,
                    })
                  }
                ></span>
                <p className="inputDiamond">
                  He leído y acepto los{" "}
                  <span
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      navigate("/terms");
                    }}
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    Términos y Condiciones
                  </span>{" "}
                  y{" "}
                  <span
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      navigate("/privacy");
                    }}
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    Políticas de Privacidad
                  </span>
                </p>
              </label>
              {errors.termsAndConditions && (
                <span className="error-message" style={{ marginBottom: "px" }}>
                  {errors.termsAndConditions}
                </span>
              )}

              <label
                className="checkbox-label"
                style={{ marginBottom: "10px" }}
              >
                <input
                  type="checkbox"
                  name="discordDisclousure"
                  checked={formData.discordDisclousure}
                  onChange={handleChange}
                  className="inputDiamond"
                />
                <span
                  className="checkmark"
                  style={{
                    marginBottom: "0px",
                    backgroundImage: `url(${formData.discordDisclousure ? registerPage_check_up : registerPage_check_down})`,
                  }}
                  onClick={() =>
                    setFormData({
                      ...formData,
                      discordDisclousure: !formData.discordDisclousure,
                    })
                  }
                ></span>
                <p className="inputDiamond">
                  Entiendo que no necesito unirme a Discord para registrarme,
                  pero si soy seleccionado para la siguiente fase deberé unirme
                  al servidor o quedaré descalificado.
                </p>
              </label>
              {errors.discordDisclousure && (
                <span className="error-message" style={{ marginBottom: "px" }}>
                  {errors.discordDisclousure}
                </span>
              )}

              {captchaError && (
                <span className="error-message">
                  Por favor completa la verificación CAPTCHA
                </span>
              )}

              {Object.keys(errors).length > 0 && (
                <span className="error-message">
                  Por favor completa los campos obligatorios marcados con * para
                  completar tu registro
                </span>
              )}
            </div>
          </form>

          <div
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <Captcha
              key={forceReloadCaptcha}
              type="mixed"
              className="my-custom-captcha"
              length={6}
              onValidate={setIsVerified}
              showSuccessAnimation
              enableAudio={false}
              autoFocus={false}
              disableSpaceToHear={true}
              i18n={{
                securityCheck: "Verificación de seguridad",
                listenToCaptcha: "Escuchar CAPTCHA",
                refreshCaptcha: "Actualizar CAPTCHA ",
                inputPlaceholder: "Ingrese el código",
                verifyButton: "Verificar",
                verificationSuccessful: "¡Éxito!",
                captchaRequired: "",
                captchaDoesNotMatch: "El CAPTCHA no coincide",
                error: " Error al cargar el CAPTCHA",
                pressSpaceToHearCode: "",
                enterToValidate: "",
                escToClear: "",
              }}
              onError={() => setCaptchaError(true)}
              onFail={() => setCaptchaError(true)}
            />
          </div>

          <button
            disabled={isLoading}
            onClick={handleSubmit}
            style={{
              height: "64px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              paddingTop: "20px",
            }}
          >
            <img
              loading="lazy"
              src={registerPage_button}
              style={{ height: "73px" }}
              alt="Continuar"
            />
          </button>

          <div style={{ minHeight: "30px" }}></div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "5px",
              justifyContent: "center",
            }}
          >
            <p className="inter-font">
              No se solicitan documentos en esta etapa
            </p>
          </div>
        </div>
      </div>
      {isFormCompleted && (
        <PopUp
          action={() => {
            actualSubmit();
          }}
          closePopUp={() => {
            setIsFormCompleted(false);
          }}
        >
          <div style={{ marginBottom: "15px" }}>
            <p
              style={{
                fontWeight: "bold",
                marginBottom: "10px",
                textAlign: "center",
              }}
            >
              Por favor revisa tu información:
            </p>
            <p>
              <strong>Nombre Completo:</strong> {formData.name}
            </p>
            <p>
              <strong>Nombre de usuario:</strong> {formData.username}
            </p>
            <p>
              <strong>Edad:</strong> {formData.age}
            </p>
            <p>
              <strong>UID:</strong> {formData.uid}
            </p>
            <p>
              <strong>Plataforma:</strong> {formData.platform}
            </p>
            <p>
              <strong>Correo:</strong> {formData.email}
            </p>
            <p>
              <strong>Discord:</strong> {formData.discord}
            </p>
            <p>
              <strong>País:</strong>{" "}
              {countries.find((c) => c.value === formData.country)?.label ||
                formData.country}
            </p>
          </div>
        </PopUp>
      )}
    </>
  );
};

export default RegistrationForm;
