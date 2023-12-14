import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { BsFillTrash3Fill } from "react-icons/bs";
import { BsEyeFill } from "react-icons/bs";
import { AuthContext } from "../providers/AuthProvider";
import CommentItem from "../components/CommentItem";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const TravelPage = () => {
  const { postlistId } = useParams();
  const { isLogin, auth } = useContext(AuthContext);

  if (auth && auth.user && auth.user._id) {
    const autor = auth.user._id;
  }
  const navigate = useNavigate();

  const handleDelete = async (postsID) => {
    return await fetch(`http://localhost:3000/post/${postlistId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const handleCommentButtonClick = () => {
    const formData = new FormData(document.getElementById("commentForm"));
    const description = formData.get("Comment");
    const newComment = {
      autor: auth.user._id,
      description,
      postId: postlistId,
    };
    //console.log(newComment);
    fetch(`http://localhost:3000/travel/${postlistId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    }).then((res) => {
      if (res.status !== 201) return alert("Error creating comment");
    });
    document.getElementById("commentForm").reset();
    getPost();
  };

  const [post, setPost] = useState({
    imageURL: "",
    title: "",
    description: "",
    username: "",
    comments: "",
    createdAt: "",
  });

  const getPost = () => {
    fetch(`http://localhost:3000/travel/${postlistId}`, {
      headers: {},
    })
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPost();
  }, [postlistId, auth]);

  return (
    <>
      <div className="container-fluid d-flex  flex-colum justify-content-center align-items-center">
        <Card style={{ width: "75rem" }}>
          <Card.Img variant="top" src={post.imageURL} />
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{post.comments._id}</ListGroup.Item>
            <ListGroup.Item>{post.comments.description}</ListGroup.Item>
          </ListGroup>
          <ListGroup className="list-group-flush">
          <ListGroup.Item>Creado: {new Date(post.createdAt).toLocaleString()}</ListGroup.Item>
          </ListGroup>
          <CommentItem post={post} />
          <Card.Body>
            
          </Card.Body>
          <ListGroup className="list-group-flush">
            <Form id="commentForm">
              <InputGroup className="mb-3 w-50 m-auto">
                <Form.Control
                  className=""
                  placeholder="Escribir comentario ..."
                  aria-label="Escribir comentario ..."
                  aria-describedby="basic-addon2"
                  name="Comment"
                />
                <Button
                  variant="outline-success"
                  id="button-addon2"
                  onClick={handleCommentButtonClick}
                >
                  Comentar
                </Button>
              </InputGroup>
            </Form>
          </ListGroup>
        </Card>
      </div>
    </>
  );
};

export default TravelPage;
