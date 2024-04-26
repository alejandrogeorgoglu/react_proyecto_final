import { ItemCount } from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../components/ItemDetail.css";

export const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);

  const add = (quantity) => addItem(product, quantity);

  return (
    <>
      <div className="product-detail">
        <img
          className="product-image"
          src={product?.imageURL}
          alt={product?.imageURL}
        />
        <div className="product-title">{product.title}</div>
        <div className="product-description">{product.description}</div>
        <div className="product-price">{product.price}</div>

        <div className="product-stock">Stock: {product.stock}</div>
        <ItemCount onAdd={add} stock={product.stock} />
      </div>
    </>
  );
};
