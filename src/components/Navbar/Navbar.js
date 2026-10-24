
import './Navbar.css';
import { useEffect, useState } from "react";
import { NavBar_Logo, NavBar_Menu, NavBar_Header, NavBar_bckg, desktop_menu, fb_icon, ig_icon, yt_icon, phase_left, tk_icon } from "../../assets/assetsDirectory";
import { useViewport } from "../../context/ViewportContext";
import { useNavigate, useLocation  } from "react-router-dom";
import { trackEvent } from "../../utils/analytics";
const Navbar = () => {

  const [open, setOpen] = useState(false);
  const { isMobile } = useViewport();
  const navigate = useNavigate();
  const location = useLocation();
  const menuOptions = {
    option1: { label: "INICIO", target: "inicio" },
    option2: { label: "¿QUÉ ES SEÑAL VERDANSK?", target: "informacion" },
    option3: { label: "4 FASES", target: "fases" },
    option4: { label: "LO QUE DEBES SABER", target: "toknow" },
    option5: { label: "BOTARGAS", target: "botargas" },
    option6: { label: "CALENDARIO", target: "calendario" },
    option7: { label: "LÍDERES DE ESCUADRÓN", target: "creadores" },
    option8: { label: "PREGUNTAS FRECUENTES", target: "faqs2" }
  }

  const handleNavigate = (event, target) => {
    
    if( location.pathname !== "/" ){
      navigate("/");
    }
    setOpen(false);
    // Espera a que el menú se desmonte para calcular la posición real
    setTimeout(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  };

  useEffect(() => {
    if(open){
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  const [showInfinixBar, setShowInfinixBar] = useState(true);

  useEffect(() => {
    // lastScrollY vive en una ref (no en state): así leerla/escribirla en
    // cada scroll no dispara un re-render, y este efecto no necesita
    // reinstalar el listener en cada tick (antes dependía de lastScrollY
    // como state, así que CADA evento de scroll quitaba y volvía a poner
    // el listener de scroll entero — eso es lo que trababa el scroll).
    let lastScrollY = window.scrollY;
    let ticking = false;

    const update = () => {
      ticking = false;
      const currentScrollY = window.scrollY;

      // Si estamos en la página de registro, siempre ocultar la barra de Infinix
      if (location.pathname.includes("registro")) {
        setShowInfinixBar(false);
        lastScrollY = currentScrollY;
        return;
      }

      if (currentScrollY < 400) {
        setShowInfinixBar(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setShowInfinixBar(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setShowInfinixBar(true);
      }

      lastScrollY = currentScrollY;
    };

    // El evento "scroll" puede disparar muchas veces por frame; con esto
    // solo hacemos el trabajo (y el posible setState) una vez por frame.
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);



  return (
    <>
    <div className="navbar-container" style={{ backgroundImage: `url(${NavBar_Header})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: "repeat-x", opacity: showInfinixBar ? 1 : 0 }}>
      <img loading="lazy" src={NavBar_Logo} alt="Navbar Logo" className="navbar-logo" onClick={() => {navigate("/"); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}}></img>
      <img loading="lazy" src={NavBar_Menu} alt="Navbar Menu" className="navbar-menu" onClick={() => setOpen(!open)}></img>
    </div>
    {open && (
      <div className="navbar-menu-content"  style={{ backgroundImage: `url(${isMobile ? NavBar_bckg : desktop_menu})` }}>
              <div className="phase-left-container" style={{position: "absolute", top: "5vh"}} onClick={() => setOpen(false)}>
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
        {Object.values(menuOptions).map((option, index) => (
          <p key={index} onClick={(e) => handleNavigate(e, option.target)}>{option.label}</p>
        ))}
              <div className="footer-icons">
        <img loading="lazy" src={fb_icon} onClick={() => { window.open("https://www.facebook.com/LATAMCallOfDutyMobile", "_blank"); trackEvent("Social Media", "Click", "Facebook"); }} alt="Facebook Icon" className="footer-icon" />
        <img loading="lazy" src={ig_icon} onClick={() => { window.open("https://www.instagram.com/callofdutymobilelatam/", "_blank"); trackEvent("Social Media", "Click", "Instagram"); }} alt="Instagram Icon" className="footer-icon" />
        <img loading="lazy" src={yt_icon} onClick={() => { window.open("https://www.youtube.com/@LATAMCallOfDutyMobile", "_blank"); trackEvent("Social Media", "Click", "YouTube"); }} alt="YouTube Icon" className="footer-icon" />
        <img loading="lazy" src={tk_icon} onClick={() => { window.open("https://www.tiktok.com/@callofdutymobile_latam", "_blank"); trackEvent("Social Media", "Click", "TikTok"); }} alt="TikTok Icon" className="footer-icon" />
      </div>

      </div>
    )}
    </>
  );
};

export default Navbar;
