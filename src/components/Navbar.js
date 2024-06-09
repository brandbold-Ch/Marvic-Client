import { NavLink } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from '../assets/images/marvic_logo.png';
import '../assets/styles/Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={Logo} alt="Logo empresa" width="55" height="55" className="d-inline-block align-text-top"/>
          </NavLink>
          <ul className="nav nav-underline ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link text-black" aria-current="page" to="/">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-black" to="/servicios">
                Servicios
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-black" to="/citas">
                Citas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-black" to="login">
                Iniciar sesión
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="singup">
                <button className="singup-button">
                  Registrate
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
