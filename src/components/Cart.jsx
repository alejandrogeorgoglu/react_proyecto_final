import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { CartContext } from "../context/CartContext";
import "../components/Cart.css";

const initialValues = {
  name: "",
  phone: "",
  email: "",
};

export const Cart = () => {
  const [buyer, setBuyer] = useState(initialValues);
  const { clear, items, removeItem } = useContext(CartContext);

  const handleChange = (ev) => {
    const { name, value } = ev.target;

    setBuyer((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const total = items.reduce((acu, act) => acu + act.price * act.quantity, 0);

  const handleOrder = () => {
    const order = {
      buyer,
      items,
      total,
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then(({ id }) => {
      if (id) {
        alert(
          "Su orden: " +
            id +
            "ha sido completada!" +
            "Gracias por su compra." +
            "Nos contactaremos con ud. a la brevedad"
        );
      }
    });
  };

  return (
    <>
      <div className="cart">
        <h1 className="titulo-cart">Mi Carrito:</h1>
        <div className="table-cart">
          <table className="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th className="pq">Cantidad</th>
                <th className="pq">Precio</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td className="pq">{item.quantity}</td>
                  <td className="pq">{item.price}</td>
                  <td>
                    <Button
                      variant="primary"
                      onClick={() => removeItem(item.id)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <hr />
        <Button variant="primary" onClick={() => clear(total)}>
          Eliminar todos
        </Button>
        <hr />
        <hr />
        <h2 className="titulo-cart">Datos:</h2>
        <form>
          <div>
            <label className="nombre-contacto">Nombre:</label>
            <input
              className="nombre-contacto"
              type="text"
              value={buyer.name}
              name="name"
              onChange={handleChange}
            />
          </div>
          <hr />
          <div>
            <label className="nombre-contacto">Celular:</label>
            <input
              className="nombre-contacto"
              type="number"
              value={buyer.phone}
              name="phone"
              onChange={handleChange}
            />
          </div>
          <hr />
          <div>
            <label className="nombre-contacto">Email:</label>
            <input
              className="nombre-contacto"
              type="email"
              value={buyer.email}
              name="email"
              onChange={handleChange}
            />
          </div>
          <hr />
        </form>
        <Button variant="primary" type="button" onClick={handleOrder}>
          Comprar
        </Button>
      </div>
    </>
  );
};
