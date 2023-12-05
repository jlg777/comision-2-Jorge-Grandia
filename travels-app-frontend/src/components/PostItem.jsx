import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { BsFillTrash3Fill } from "react-icons/bs";
import { BsEyeFill } from "react-icons/bs";

const PostItem = ({
  posts
  /*title,
  description,
  username,
  comments,
  image,
  createdAt,*/
}) => {
  return ( 
    <>   
    {posts.map(
      (post)=>(
        <div className="container-fluid d-flex  flex-colum justify-content-center align-items-center"
        key={post._id}
        >
        <Card style={{ width: "25rem" }}>
          <Card.Img variant="top" src={post.image} />
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{post.username}</ListGroup.Item>
            <ListGroup.Item>{post.comments}</ListGroup.Item>
            <ListGroup.Item>{post.createdAt}</ListGroup.Item>
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
      )
    )}      
    
    </>
  );
};

export default PostItem;
