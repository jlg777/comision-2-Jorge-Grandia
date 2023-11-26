import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const ref = useRef(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const { avatar, email, username, password } = e.target.elements;

    const formData = new FormData(e.target);

    const avatar = formData.get("avatar");
    const email = formData.get("email");
    const username = formData.get("username");
    const password = formData.get("password");

    const user = {
      avatar,
      email,
      username,
      password,
    };

    const req = await fetch(`http://localhost:4000/api/auth/register`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (req.status !== 201) return alert("Error al registrar usuario");
    ref.current.reset();

    navigate("/login");
  };

  return (
    <Form onSubmit={handleSubmit} ref={ref}>
      <Form.Group className="mb-3" controlId="formRegisterAvatar">
        <Form.Control
          type="link"
          placeholder="www.my-avatar.com"
          name="avatar"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formRegisterEmail">
        <Form.Control type="email" placeholder="Email" name="email" autoComplete="email"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formRegisterUserName">
        <Form.Control type="text" placeholder="Jonh Doe" name="username" autoComplete="username"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formRegisterPassword">
        <Form.Control
          type="password"
          placeholder="******"
          autoComplete="current-password"
          name="password"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default RegisterForm;
