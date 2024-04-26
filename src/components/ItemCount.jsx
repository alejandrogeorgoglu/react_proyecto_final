import Button from "react-bootstrap/Button";
import { useState } from "react";
import "../components/ItemDetail.css";

export const ItemCount = ({ onAdd, stock }) => {
  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    if (stock > count) setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleAdd = () => {
    setCount(1);
    onAdd(count);
  };

  return (
    <div>
      <div className="counter">
        <mark className="sum" onClick={handleDecrease}>
          -
        </mark>
        <input className="count" value={count} readOnly />
        <mark className="sum" onClick={handleIncrease}>
          +
        </mark>
      </div>
      <div className="buttonAdd">
        <Button variant="primary" onClick={handleAdd}>
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
};
