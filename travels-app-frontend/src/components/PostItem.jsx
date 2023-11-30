import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const PostItem = ({
  title,
  description,
  autor,
  comments,
  image,
  CreatedAt,
}) => {
  return (
    <div className="container-fluid d-flex  flex-colum justify-content-center align-items-center">
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{autor}</ListGroup.Item>
          <ListGroup.Item>{comments}</ListGroup.Item>
          <ListGroup.Item>{CreatedAt}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button variant="outline-success">Ver</Button>{" "}
          <Button variant="outline-danger">Danger</Button>{" "}
        </Card.Body>
      </Card>
    </div>
  );
};

export default PostItem;
