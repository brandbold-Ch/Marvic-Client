import { useRoutes } from "react-router";
import "./assets/styles/Navbar.css";
import Index from "./Pages/Index";
import Services from "./Pages/Services";
import Appointments from "./Pages/Appointments";
import SingUp from "./Pages/SingUp";
import { BrowserRouter } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";
import AboutUs from "./Pages/AboutUs";


const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Index /> },
    { path: "/singup", element: <SingUp /> },
    { path: "/aboutus", element: <AboutUs /> },
    { path: "/notFound", element: <NotFound /> },
    { path: "/login", element: <Login /> }
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

