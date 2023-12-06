import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { BsFillTrash3Fill } from "react-icons/bs";
import { BsEyeFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const PostItem = ({ posts }) => {
  console.log("aca", posts);
  const navigate = useNavigate();

  const handleDelete = async (postsID) => {
    return await fetch(`http://localhost:3000/post/${postsID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <>
      {posts.map((post) => (
        <div
          className="container-fluid d-flex  flex-colum justify-content-center align-items-center"
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
              <Button variant="outline-success" href="travelPage">
                <BsEyeFill />
              </Button>{" "}
              <Button variant="outline-danger">
                <BsFillTrash3Fill
                  onClick={() =>
                    handleDelete(post._id).then((res) => {
                      if (res.status != 200) alert("No se elimina");
                      else alert("Se elimina");
                      navigate("/");
                    })
                  }
                />
              </Button>{" "}
            </Card.Body>
          </Card>
        </div>
      ))}
    </>
  );
};

export default PostItem;
