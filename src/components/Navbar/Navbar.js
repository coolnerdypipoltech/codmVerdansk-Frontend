
import './Navbar.css';
import { useEffect, useState } from "react";
import { NavBar_Logo, NavBar_Menu, NavBar_Header, NavBar_bckg, commonWallpaperM, commonWallpaperD, fb_icon, ig_icon, yt_icon, phase_left } from "../../assets/assetsDirectory";
import { useViewport } from "../../context/ViewportContext";
import { useNavigate, useLocation  } from "react-router-dom";
const Navbar = () => {

  const [open, setOpen] = useState(false);
  const { isMobile } = useViewport();
  const navigate = useNavigate();
  const location = useLocation();
  const menuOptions = {
    option1: { label: "INICIO", target: "inicio" },
    option2: { label: "¿QUÉ ES SEÑAL VERDANSK?", target: "informacion" },
    option3: { label: "5 FASES", target: "fases" },
    option4: { label: "BOTARGAS", target: "botargas" },
    option5: { label: "CALENDARIO", target: "calendario" },
    option6: { label: "CREADORES", target: "creadores" },
    option7: { label: "PREGUNTAS FRECUENTES", target: "faqs" }
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
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Si estamos en la página de registro, siempre ocultar la barra de Infinix
      if (location.pathname.includes("registro")) {
        setShowInfinixBar(false);
        setLastScrollY(currentScrollY);
        return;
      }
      
      if(currentScrollY < 400) {
        if(!showInfinixBar){
          setShowInfinixBar(true);
          return;
        }
      }

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setShowInfinixBar(false);
      } else {
        // Scrolling up
        setShowInfinixBar(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, location.pathname]);



  return (
    <>
    <div className="navbar-container" style={{ backgroundImage: `url(${NavBar_Header})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', opacity: showInfinixBar ? 1 : 0 }}>
      <img loading="lazy" src={NavBar_Logo} alt="Navbar Logo" className="navbar-logo" onClick={() => {navigate("/"); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}}></img>
      <img loading="lazy" src={NavBar_Menu} alt="Navbar Menu" className="navbar-menu" onClick={() => setOpen(!open)}></img>
    </div>
    {open && (
      <div className="navbar-menu-content"  style={{ backgroundImage: `url(${isMobile ? NavBar_bckg : commonWallpaperD})` }}>
              <div className="phase-left-container" style={{paddingTop: "5vh", paddingBottom: "10vh"}} onClick={() => setOpen(false)}>
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
        <img loading="lazy" src={fb_icon} alt="Facebook Icon" className="footer-icon" />
        <img loading="lazy" src={ig_icon} alt="Instagram Icon" className="footer-icon" />
        <img loading="lazy" src={yt_icon} alt="YouTube Icon" className="footer-icon" />
      </div>

      </div>
    )}
    </>
  );
};

export default Navbar;
