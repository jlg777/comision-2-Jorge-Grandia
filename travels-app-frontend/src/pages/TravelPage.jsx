import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { BsFillTrash3Fill } from "react-icons/bs";
import { BsEyeFill } from "react-icons/bs";
import { AuthContext } from "../providers/AuthProvider";

const TravelPage = () => {
  const { postlistId } = useParams();
  const { isLogin, auth } = useContext(AuthContext);

  if (auth && auth.user && auth.user._id) {
    console.log('contexto',auth.user._id);
  }
  const navigate = useNavigate();

  const handleDelete = async (postsID) => {
    return await fetch(`http://localhost:3000/post/${postsID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const [post, setPost] = useState({
    imageURL: "",
    title: "",
    description: "",
    username: "",
    comments: "",
    createdAt: "",
  });

  useEffect(() => {
    fetch(`http://localhost:3000/travel/${postlistId}`, {
      headers: {},
    })
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.log(err));
  }, [postlistId]);
  console.log(post.autor);
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
            <ListGroup.Item>{post.comments}</ListGroup.Item>
            <ListGroup.Item>{post.createdAt}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button variant="outline-success" href={`travel/${post._id}`}>
              <BsEyeFill />
            </Button>{" "}

            <Button
              variant="outline-danger"
              className={`${isLogin && auth.user._id == post.autor ? "visible" : "invisible"}`}
            >
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
    </>
  );
};

export default TravelPage;
