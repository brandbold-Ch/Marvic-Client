import { Link } from "react-router-dom";
import Logo from '../assets/images/marvic_logo.png';
import '../assets/styles/Navbar.css';


const Navbar = () => {
  return (
    <nav>
      <img to="" alt="logo" src={Logo}/>

      <div>

        <ul>

          <li>
            <Link to="">Inicio</Link>
          </li>

          <li>
            <Link to="">Servicios</Link>
          </li>

          <li>
            <Link to="">Contactos</Link>
          </li>

          <li>
            <Link to="">Inicio</Link>
          </li>

          <li>
            <Link to="">Registrar </Link>
          </li>

        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
