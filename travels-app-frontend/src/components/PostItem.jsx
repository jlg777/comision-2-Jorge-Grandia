import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { BsFillTrash3Fill } from "react-icons/bs";
import { BsEyeFill } from "react-icons/bs";

const PostItem = ({
  title,
  description,
  username,
  comments,
  image,
  createdAt,
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
          <ListGroup.Item>{username}</ListGroup.Item>
          <ListGroup.Item>{comments}</ListGroup.Item>
          <ListGroup.Item>{createdAt}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button variant="outline-success">
            <BsEyeFill />
          </Button>{" "}
          <Button variant="outline-danger">
            <BsFillTrash3Fill />
          </Button>{" "}
        </Card.Body>
      </Card>
    </div>
  );
};

export default PostItem;
