import React, { useEffect, useState } from "react";
import "./RegistrationForm.css";
import { trackEvent } from '../../utils/analytics';
import TerminosPDF2 from '../../assets/files/Terminos_y_Condiciones_de_las_Recompensas.pdf';
import TerminosPDF from '../../assets/files/Términos_y_condiciones_del_Torneo_Señal_Verdansk.pdf';
import {
  registerPage_check_down,
  registerPage_check_up,
  registerPage_button,
  registerPage_title_completed,
  registerPage_title_locate,
  registerPage_accept_button,
  registerPage_error,
  registerPage_background_popUp,
  registerPage_close,
  registerPage_continue_button,
  registerPage_create_button,
  registerPage_join_button,
  registerPage_title, 
  registerPage_back_button,
  registerPage_next_button,
  chevron_down,
} from "../../assets/assetsDirectory";

import { Captcha } from "recaptz";

import { useNavigate } from "react-router";


const DISCORD_AUTH_URL =
  "https://register.verdanskcodm.com/auth/discord";

// Para no perder lo que el usuario ya escribió al navegar a Discord y volver
// (es una redirección de página completa, React se vuelve a montar de cero).
const REGISTRATION_DRAFT_STORAGE_KEY = "codm_registration_draft";

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
    show: false,
    type: "",
    message: "",
  });
  const firstRender = React.useRef(true);

  const openTerminosPDF = () => {
    trackEvent("footer", "Click", "Términos y condiciones");
    window.open(TerminosPDF, "_blank", "noopener,noreferrer");
  };

    const openTerminosPDF2 = () => {
    trackEvent("footer", "Click", "Términos y condiciones");
    window.open(TerminosPDF2, "_blank", "noopener,noreferrer");
  };

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

  // Restaura lo que el usuario ya había escrito antes de ir a Discord y,
  // si viene de /auth/discord/callback (ver comentario de DISCORD_AUTH_URL),
  // aplica el discord_username de la URL por encima (y limpia esos params).
  // Todo en un solo efecto, protegido con un ref: leer la URL y limpiarla no
  // es idempotente, así que bajo StrictMode (que duplica efectos en dev) la
  // segunda pasada ya no encontraría el query param y pisaría el valor con
  // el del draft guardado.
  const didRestoreDraft = React.useRef(false);


  useEffect(() => {
    if (didRestoreDraft.current) return;
    didRestoreDraft.current = true;

    let restored = {};
    try {
      const saved = sessionStorage.getItem(REGISTRATION_DRAFT_STORAGE_KEY);
      if (saved) restored = JSON.parse(saved);
    } catch (e) {
      // sessionStorage no disponible o JSON corrupto: seguimos con el form vacío.
    }

    const params = new URLSearchParams(window.location.search);
    const discordKeys = [
      "discord_username",
      "discord_id",
      "discord_email",
      "discord_avatar",
      "discord_error",
    ];
    const hasDiscordParams = discordKeys.some((key) => params.has(key));
    const discordUsername = params.get("discord_username");

    if (Object.keys(restored).length > 0 || discordUsername) {
      setFormData((prev) => ({
        ...prev,
        ...restored,
        ...(discordUsername ? { discord: discordUsername } : {}),
      }));
    }

    if (hasDiscordParams) {
      discordKeys.forEach((key) => params.delete(key));
      const newSearch = params.toString();
      window.history.replaceState(
        {},
        "",
        window.location.pathname +
          (newSearch ? `?${newSearch}` : "") +
          window.location.hash,
      );
    }
  }, []);

  const countries = [
    { value: "BEL", label: "Belice" },
    { value: "CRI", label: "Costa Rica" },
    { value: "SLV", label: "El Salvador" },
    { value: "GTM", label: "Guatemala" },
    { value: "HND", label: "Honduras" },
    { value: "MEX", label: "México" },
    { value: "NIC", label: "Nicaragua" },
    { value: "PAN", label: "Panamá" },
    { value: "CUB", label: "Cuba" },
    { value: "HTI", label: "Haití" },
    { value: "DOM", label: "República Dominicana" },
    { value: "ARG", label: "Argentina" },
    { value: "BOL", label: "Bolivia" },
    { value: "CHL", label: "Chile" },
    { value: "COL", label: "Colombia" },
    { value: "ECU", label: "Ecuador" },
    { value: "PRY", label: "Paraguay" },
    { value: "PER", label: "Perú" },
    { value: "URY", label: "Uruguay" },
    { value: "VEN", label: "Venezuela" },
  ];

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Solo letras (con acentos/ñ) y espacios
  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "El nombre completo es requerido";
    } else if (!nameRegex.test(formData.name)) {
      newErrors.name = "El nombre solo puede contener letras";
    }

    if (!formData.username) {
      newErrors.username = "El nombre de usuario es requerido";
    }

    if (!formData.age) {
      newErrors.age = "La edad es requerida";
    } else if (Number(formData.age) < 0) {
      newErrors.age = "La edad no puede ser negativa";
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
    try {
      sessionStorage.setItem(
        REGISTRATION_DRAFT_STORAGE_KEY,
        JSON.stringify(formData),
      );
    } catch (e) {
      // sessionStorage no disponible: seguimos igual, solo no se restaura el draft.
    }
    window.location.href = DISCORD_AUTH_URL;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => {
      let updatedValue = type === "checkbox" ? checked : value;

      if (name === "name" && typeof updatedValue === "string") {
        updatedValue = updatedValue.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, "");
      }

      if (name === "uid" && typeof updatedValue === "string") {
        updatedValue = updatedValue.replace(/[^A-Za-z0-9]/g, "").slice(0, 20);
      }

      if (name === "age" && typeof updatedValue === "string") {
        updatedValue = updatedValue.replace(/[^0-9]/g, "");
      }

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
      age: Number(formData.age),
    };

    try {

      const response = await fetch(
        "https://register.verdanskcodm.com/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.REACT_APP_API_KEY,
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

        if (formData.discord.trim() !== "") {
          // Implement Discord verification logic here if needed
          setPopup({
            show: true,
            type: "success-yesDiscord",
          });
        } else {
          setPopup({
            show: true,
            type: "success-noDiscord",
          });
        }

        try {
          sessionStorage.removeItem(REGISTRATION_DRAFT_STORAGE_KEY);
        } catch (e) {
          // sessionStorage no disponible: no hay nada que limpiar.
        }

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
          termsAndConditions: false,
        });
      } else if (response.status === 400) {
        setPopup({
          show: true,
          type: "error",
          message:
            "Falta información requerida. Por favor verifica todos los campos."
            ,
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
    setIsFormCompleted(false);
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
                className={
                  popup.type === "instructions"
                    ? "registerPage-background-popUp"
                    : "registerPage-background-popUp2"
                }
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
                  <div
                 
                    style={{
                      padding: "10px 20px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      marginTop: "100px",
                    }}
                  >
                    <img
                      loading="lazy"
                      src={registerPage_title_completed}
                      alt="back"
                      className="registerPage-title"
                    ></img>
                    <p className="form-group-popUp" >
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
                    onClick={() => window.open("https://discord.gg/U2qBFySbbW", "_blank")}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      loading="lazy"
                      src={registerPage_join_button}
                      className="registerPage-end-button"
                      alt="Cerrar"
                    />
                  </div>
                  <div
                    onClick={() => navigate("/")}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      loading="lazy"
                      src={registerPage_continue_button}
                      className="registerPage-end-button"
                      alt="Cerrar"
                    />
                  </div>
                </>
              )}

              {popup.type === "success-noDiscord" && (
                <>
                  <div
                    style={{
                      padding: "10px 20px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      marginTop: "90px"
                    }}
                  >
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
                    onClick={() => window.open("https://discord.com/register", "_blank")}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      loading="lazy"
                      src={registerPage_create_button}
                      className="registerPage-end-button"
                      alt="Cerrar"
                    />
                  </div>
                  <div
                    onClick={() => navigate("/")}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      loading="lazy"
                      src={registerPage_continue_button}
                      className="registerPage-end-button"
                      alt="Cerrar"
                    />
                  </div>
                </>
              )}

              {popup.type === "error" && (
                <div                     style={{
                      padding: "20px 20px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      marginTop: "90px"
                    }}>
                                    <img
                      loading="lazy"
                      src={registerPage_error}
                      alt="back"
                      className="registerPage-title"
                    ></img>
                  <p className="form-group-popUp" style={{ minHeight: "50vw", marginTop: "40px" }}>{popup.message}</p>
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
                      src={registerPage_back_button}
                      className="registerPage-end-button"
                      alt="Cerrar"
                    />
                  </div>
                </div>
              )}

              <div
                className={
                  popup.type === "instructions" ? "popUp_close" : "popUp_close2"
                }
                onClick={closePopup}
              >
                <img loading="lazy" src={registerPage_close} alt="Cerrar" onClick={closePopup} />
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
                onClick={() => {navigate("/uid"); document.body.scrollTop = 0; document.documentElement.scrollTop = 0; }}
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
                style={{ backgroundImage: `url(${chevron_down})` }}
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
                style={{ backgroundImage: `url(${chevron_down})` }}
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
                                    onClick={() =>
                    setFormData({
                      ...formData,
                      termsAndConditions: !formData.termsAndConditions,
                    })
                  }
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
                      openTerminosPDF();
                    }}
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    Términos y Condiciones del Torneo, 
                  </span>
                  {" "}
                    <span
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      openTerminosPDF2();
                    }}
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                     Términos y Condiciones de la Rifa de premios.
                  </span>
                   {" "} y {" "}
 
                  <span
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      window.open("https://www.activision.com/mx/es/legal/privacy-policy", "_blank");
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
                  Entiendo que en caso de ser seleccionado para la siguiente fase debo estar en el servidor de Discord para participar en las clasificatorias, de lo contrario perderé mi lugar.
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
        </div>
      </div>

      {isFormCompleted && (
        <div className="popup-overlay" onClick={closePopup}>
          <div
            className={`popup-content ${popup.type}`}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              loading="lazy"
              src={registerPage_background_popUp}
              alt="back"
              className={
                "registerPage-background-popUp"
              }
            ></img>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            ></div>

            <img
                      loading="lazy"
                      src={registerPage_title}
                      alt="back"
                      className="registerPage-title"
                    ></img>

            <div className="form-group-popUp" style={{ marginBottom: "15px", width: "100%" }}>
              <p
                style={{
                  fontWeight: "bold",
                  marginBottom: "10px",
                  textAlign: "center",
                }}
              >
                Por favor revisa tu información:
              </p>
              <p className="form-group-check">
                <strong>Nombre Completo:</strong> {formData.name}
              </p>
              <p className="form-group-check">
                <strong>Nombre de usuario:</strong> {formData.username}
              </p>
              <p className="form-group-check">
                <strong>Edad:</strong> {formData.age}
              </p>
              <p className="form-group-check">
                <strong>UID:</strong> {formData.uid}
              </p>
              <p className="form-group-check">
                <strong>Plataforma:</strong> {formData.platform}
              </p>
              <p className="form-group-check">
                <strong>Correo:</strong> {formData.email}
              </p>
              <p className="form-group-check">
                <strong>Discord:</strong> {formData.discord}
              </p>
              <p className="form-group-check">
                <strong>País:</strong>{" "}
                {countries.find((c) => c.value === formData.country)?.label ||
                  formData.country}
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
              onClick={closePopup}
                loading="lazy"
                src={registerPage_back_button}
                className="registerPage-end-button"
                alt="Cerrar"
              />
            </div>

            <div
              onClick={actualSubmit}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                loading="lazy"
                src={registerPage_next_button}
                className="registerPage-end-button"
                alt="Crear"
              />
            </div>

            <div
              className={
                "popUp_close"
              }
              onClick={closePopup}
            >
              <img onClick={closePopup} loading="lazy" src={registerPage_close} alt="Cerrar" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RegistrationForm;
