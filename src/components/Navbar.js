import { NavLink } from "react-router-dom";
import Logo from '../assets/images/marvic_logo.png';
import '../assets/styles/Navbar.css';


const Navbar = () => {
  return (
    <>
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src={Logo} alt="Logo empresa" width="40" height="40" className="d-inline-block align-text-top"/>
        </NavLink>
        <ul className="nav nav-underline justify-content-center">
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
            <NavLink className="nav-link text-black" to="/contactanos">
              contactanos
            </NavLink>
          </li>
        </ul>
        <ul className="nav nav-underline justify-content-end">
          <li className="nav-item">
            <NavLink className="nav-link text-black" to="login">
              Iniciar sesión
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-black" to="singup">
              <button className="btn btn-primary">
                Resgistrate
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
