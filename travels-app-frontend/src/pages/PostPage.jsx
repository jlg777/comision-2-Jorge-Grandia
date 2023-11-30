import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PostItem from "../components/PostItem";

const PostPage = () => {
  return (
    <>
      <div>PostPage</div>
      <Form className="container-fluid d-flex  flex-colum justify-content-center align-items-center">
        <Row>
          <Col xs="auto">
            <Button variant="outline-success" href="NewPostPage">
              Create
            </Button>{" "}
          </Col>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" variant="outline-primary">
              Primary
            </Button>{" "}
          </Col>
        </Row>
      </Form>
      <PostItem
        title={"Titulo"}
        description={"Descripcion"}
        autor={"Autor"}
        comments={"Comentarios"}
        image={"./reserva.jpg"}
        CreatedAt={"Creacion"}
      />
    </>
  );
};

export default PostPage;
