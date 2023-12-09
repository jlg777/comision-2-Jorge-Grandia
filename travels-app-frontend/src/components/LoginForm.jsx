import React, { useContext, useRef, useId } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { SiYourtraveldottv } from "react-icons/si";


const LoginForm = () => {
  const ref = useRef(null);

  const emailRef = useId(null);
  const passwordRef = useId(null);

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = e.target.elements;

    try {
      const req = await fetch(`http://localhost:3000/api/auth/login`, {
        method: "POST",
        body: JSON.stringify({
          email: email.value,
          password: password.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (req.status !== 200) {
        ref.current.reset();
        return alert("Error al iniciar sesión");
      }

      const res = await req.json();

      login(res);

      ref.current.reset();

      navigate("/");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <Form className="w-50 m-auto" onSubmit={handleSubmit} ref={ref}>
<SiYourtraveldottv />
      <h1 className="h3 mb-3 fw-normal">LOGIN</h1>

      <Form.Group className="mb-3" controlId={emailRef}>
        <Form.Control
          type="email"
          placeholder="Email"
          name="email"
          autoComplete="email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId={passwordRef}>
        <Form.Control
          type="password"
          placeholder="******"
          autoComplete="current-password"
          name="password"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
