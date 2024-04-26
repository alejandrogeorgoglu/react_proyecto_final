import { Link } from "react-router-dom";
import { CardWidge } from "./CardWidge";

export const NavBar = () => (
  <>
    <Link to="/">
      <div className="div1">PhotoExpress </div>
    </Link>
    <ul className="nav-links">
      <li>
        {" "}
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/category/Playa">Playa</Link>
      </li>
      <li>
        <Link to="/category/Montañas">Montañas</Link>
      </li>
      <li>
        <Link to="/category/Barcos">Barcos</Link>
      </li>
      <li>
        <Link to="/src/components/Contacto.jsx">Contacto</Link>
      </li>
      <li>
        <Link to="/src/components/Login.jsx">Login</Link>
      </li>
    </ul>
    <CardWidge />
  </>
);
