
import './Navbar.css';

import { NavBar_Logo, NavBar_Menu, NavBar_Header } from "../../assets/assetsDirectory";


const Navbar = () => {

  return (
    <div className="navbar-container" style={{ backgroundImage: `url(${NavBar_Header})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <img src={NavBar_Logo} alt="Navbar Logo" className="navbar-logo"></img>
        <img src={NavBar_Menu} alt="Navbar Menu" className="navbar-menu"></img>
    </div>
  );
};

export default Navbar;
