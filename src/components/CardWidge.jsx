import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../components/ItemDetail.css";

export const CardWidge = () => {
  const { items } = useContext(CartContext);

  const total = items.reduce(
    (acumulador, valorActual) => acumulador + valorActual.quantity,
    0
  );

  if (!total) return null;

  return (
    <Link to="/cart">
      <div id="cart-widget">
        <img
          className="carrito"
          src="https://cdn-icons-png.flaticon.com/512/5087/5087847.png"
          alt="carrito de compras"
        />
        <span className="totalCart">{total}</span>
      </div>
    </Link>
  );
};
