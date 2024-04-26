import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../components/item.css";

export const Item = ({ product }) => {
  return (
    <Card className="complete-card">
      <Card.Img variant="top" src={product.imageURL} />
      <Card.Body className="complete-card">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text className="descrition">{product.description}</Card.Text>
        <Card.Text className="price">{product.price}</Card.Text>
        <Card.Text className="category">{product.categoryID}</Card.Text>

        <Link to={`/item/${product.id}`}>
          <Button variant="primary">Ver más</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
