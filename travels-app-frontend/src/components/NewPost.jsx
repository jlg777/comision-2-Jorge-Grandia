import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  //const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const ref = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    //   console.log({ title });

    const formData = new FormData(e.target);

    const title = formData.get("title");
    const description = formData.get("description");
    const imageURL = formData.get("imageURL");

    const post = {
      title,
      description,
      imageURL,
    };

    fetch(`http://localhost:3000/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    }).then((res) => {
      if (res.status !== 201) return alert("Error creating post");
      // ref.current.reset();
      navigate("/post");

      //setTitle("");
    });
  };

  return (
    <>
      <div>NewPost</div>
      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3 w-50 m-auto">
          <Form.Control
            className=""
            placeholder="Crear nuevo Post"
            aria-label="Crear nuevo Post"
            aria-describedby="basic-addon2"
            name="title"
          />

          <Form.Control
            className=""
            placeholder="Descripcion"
            aria-label="Descripcion"
            aria-describedby="basic-addon2"
            name="description"
          />

          <Form.Control
            className=""
            placeholder="Imagen"
            aria-label="Imagen"
            aria-describedby="basic-addon2"
            name="imageURL"
          />

          <Button variant="outline-success" id="button-addon2" type="submit">
            Crear
          </Button>
        </InputGroup>
      </Form>
    </>
  );
};

export default NewPost;
