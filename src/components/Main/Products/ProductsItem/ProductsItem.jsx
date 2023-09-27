import React from "react";
import "./ProductsItem.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProductsItem({ img, name, price, addToCart, product }) {
  
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Card style={{ width: "21rem", height: "100%" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body className="d-flex text-center flex-column mt-5">
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price}</Card.Text>
        <Button onClick={handleAddToCart} variant="primary" className="mt-auto">
          Add To Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductsItem;
