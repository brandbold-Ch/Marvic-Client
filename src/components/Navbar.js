import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import Logo from '../assets/images/marvic_logo.png';
import '../assets/styles/Navbar.css';


const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="aboutus" smooth={true}>
            <img src={Logo} alt="Logo empresa" width="55" height="55" className="d-inline-block align-text-top"/>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-black" aria-current="page" to="aboutus" smooth={true} duration={50} offset={-50}>
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black" to="services" smooth={true} duration={50} offset={-40}>
                  Servicios
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black" to="appointments" smooth={true} duration={50} offset={-40}>
                  Citas
                </Link>
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
        </div>
      </nav>
    </>
  );
};

export default Navbar;
