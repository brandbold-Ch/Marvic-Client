import { useRoutes } from "react-router";
import "./assets/styles/Navbar.css";
import Index from "./Pages/Index";
import Servicios from "./Pages/Servicios";
import Contactanos from "./Pages/Contactanos";
import LogIn from "./Pages/LogIn";
import SingUp from "./Pages/SingUp";
import { BrowserRouter } from "react-router-dom";
import NotFound from "./Pages/NotFound";


const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Index /> },
    { path: "/servicios", element: <Servicios /> },
    { path: "/contactanos", element: <Contactanos /> },
    { path: "/login", element: <LogIn /> },
    { path: "/singup", element: <SingUp /> },
    { path: "/notFound", element: <NotFound /> }
  ])
  return routes
}

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;

