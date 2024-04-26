import { Link } from "react-router-dom";
import { NavBar } from "./NavBar";

export const Header = () => (
  <>
    <div className="logo">
      <Link to="/">
        <img
          src="https://www.zapmaszap.es/wp-content/uploads/2017/11/camara-fotos-antigua-decoracion.jpg"
          alt=""
        />
      </Link>
      <NavBar />
    </div>
  </>
);
