import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
//import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const [title, setTitle] = useState("");

  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title });

    fetch(`http://localhost:3000/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: title.trim() }),
    }).then((res) => {
      if (res.status !== 201) return alert("Error creating playlist");

      // navigate("/playlist");

      setTitle("");
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
