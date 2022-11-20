import React from "react";
import { Button, Card } from "react-bootstrap";

const CardMario = (props) => {
  const { name } = props;
  return (
    <div className="p-2">
      <Card>
        <Card.Img
          variant="top"
          className="w-100"
          src="https://cdn.elperiodico.com.gt/wp-content/uploads/2021/09/24173805/MBMAePF1.jpg"
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="danger">Leer mas</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardMario;
