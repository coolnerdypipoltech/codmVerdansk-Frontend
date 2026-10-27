import React, { useEffect, useState } from "react";
import "./RegistrationForm.css";
import TerminosPDF from "../../assets/files/Termino_y_Condiciones_Señal_Verdansk.pdf";

import {
  registerPage_check_down,
  registerPage_check_up,
  registerPage_button,
  registerPage_title_completed,
  registerPage_error,
  registerPage_background_popUp,
  registerPage_close,
  registerPage_continue_button,
  registerPage_join_button,
  registerPage_title,
  registerPage_back_button,
  registerPage_next_button,
} from "../../assets/assetsDirectory";

import { useNavigate } from "react-router";
import { countries, mexicoStates } from "./locationData";


const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    country: "",
    state: "",
    ticketType: "",
    email: "",

    termsAndConditions: false,
  });

  const navigate = useNavigate();
  const [isFormCompleted, setIsFormCompleted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [popup, setPopup] = useState({
    show: false,
    type: "",
    message: "",
  });

  const openTerminosPDF = () => {
    window.open(TerminosPDF, "_blank", "noopener,noreferrer");
  };

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

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Solo letras (con acentos/ñ) y espacios
  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "El nombre es requerido";
    } else if (!nameRegex.test(formData.name)) {
      newErrors.name = "El nombre solo puede contener letras";
    }

    if (!formData.lastName) {
      newErrors.lastName = "Los apellidos son requeridos";
    } else if (!nameRegex.test(formData.lastName)) {
      newErrors.lastName = "Los apellidos solo pueden contener letras";
    }

    if (!formData.country) {
      newErrors.country = "El país es requerido";
    }

    if (formData.country === "México" && !formData.state) {
      newErrors.state = "El estado es requerido";
    }

    if (!formData.ticketType) {
      newErrors.ticketType = "Selecciona tu tipo de pase";
    }

    if (!formData.email) {
      newErrors.email = "El correo es requerido";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "El correo no es válido";
    }

    if (!formData.termsAndConditions) {
      newErrors.termsAndConditions =
        "Se necesita aceptar los términos y condiciones y las políticas de privacidad";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => {
      let updatedValue = type === "checkbox" ? checked : value;

      if (
        (name === "name" || name === "lastName") &&
        typeof updatedValue === "string"
      ) {
        updatedValue = updatedValue.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, "");
      }

      if (name === "country" && updatedValue !== "México") {
        return {
          ...prev,
          country: updatedValue,
          state: "",
        };
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
      });
    }

    setIsLoading(true);

    // Filtrar solo los campos no booleanos para enviar al servidor
    const dataToSend = {
      name: formData.name.trim(),
      lastName: formData.lastName.trim(),
      country: formData.country,
      state: formData.country === "México" ? formData.state : "",
      ticketType: Number(formData.ticketType),
      email: formData.email,
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
          });
        }

        setPopup({
          show: true,
          type: "success",
        });

        // Reset form
        setFormData({
          name: "",
          lastName: "",
          country: "",
          state: "",
          ticketType: "",
          email: "",
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
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    setIsFormCompleted(true);
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
              {popup.type === "success" && (
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
            {/* Name */}
            <div className="form-group">
              <label className="inter-font" htmlFor="name">
                Nombre*
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

            {/* Last name */}
            <div className="form-group">
              <label className="inter-font" htmlFor="lastName">
                Apellidos*
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder=""
                className={errors.lastName ? "error" : ""}
                autoComplete="off"
                spellCheck="false"
              />
              {errors.lastName && (
                <span className="error-message">{errors.lastName}</span>
              )}
            </div>

            {/* Country */}
            <div className="form-group">
              <label className="inter-font" htmlFor="country">
                País*
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={errors.country ? "error" : ""}
              >
                <option value="">Selecciona un país</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              {errors.country && (
                <span className="error-message">{errors.country}</span>
              )}
            </div>

            {/* State (only for México) */}
            {formData.country === "México" && (
              <div className="form-group">
                <label className="inter-font" htmlFor="state">
                  Estado*
                </label>
                <select
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className={errors.state ? "error" : ""}
                >
                  <option value="">Selecciona un estado</option>
                  {mexicoStates.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                {errors.state && (
                  <span className="error-message">{errors.state}</span>
                )}
              </div>
            )}

            {/* Ticket type */}
            <div className="form-group">
              <label className="inter-font" htmlFor="ticketType">
                Tipo de pase*
              </label>
              <select
                id="ticketType"
                name="ticketType"
                value={formData.ticketType}
                onChange={handleChange}
                className={errors.ticketType ? "error" : ""}
              >
                <option value="">Selecciona tu tipo de pase</option>
                <option value="1">1 - Single Ticket</option>
                <option value="2">2 - Pase Doble</option>
              </select>
              {errors.ticketType && (
                <span className="error-message">{errors.ticketType}</span>
              )}
              <p className="form-group-text">
                Si recibes tu boleto por correo, ya tienes tu entrada confirmada al evento.
              </p>
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
                      openTerminosPDF();
                    }}
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    Términos y Condiciones del Torneo
                  </span>{" "}
                  y las{" "}
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

              {Object.values(errors).some(Boolean) && (
                <span className="error-message">
                  Por favor completa los campos obligatorios marcados con * para
                  completar tu registro
                </span>
              )}
            </div>
          </form>

          <div
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
          </div>

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
                <strong>Nombre:</strong> {formData.name}
              </p>
              <p className="form-group-check">
                <strong>Apellidos:</strong> {formData.lastName}
              </p>
              <p className="form-group-check">
                <strong>País:</strong> {formData.country}
              </p>
              {formData.country === "México" && (
                <p className="form-group-check">
                  <strong>Estado:</strong> {formData.state}
                </p>
              )}
              <p className="form-group-check">
                <strong>Tipo de pase:</strong>{" "}
                {formData.ticketType === "2" ? "Pase Doble" : "Single Ticket"}
              </p>
              <p className="form-group-check">
                <strong>Correo:</strong> {formData.email}
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
