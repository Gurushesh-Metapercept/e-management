import React, { useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import EmpDataServices from "../services/emp.services";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });

  const navigate = useNavigate();

  // Login Function
  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");
    if (email === "" || password === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
    } else {
      console.log("login called from emp.services");
      const firebaseMsg = await EmpDataServices.login(email, password);
      if (firebaseMsg) {
        setMessage({ error: true, msg: firebaseMsg });
      } else {
        navigate("/employees");
      }
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 mx-auto">
          <Card style={{ width: "30rem" }} className="mx-auto p-4 mt-5">
            <Card.Title>Login</Card.Title>
            {message?.msg && (
              <Alert
                variant={message?.error ? "danger" : "sucess"}
                dismissible
                onClick={() => setMessage("")}
              >
                {message?.msg}
              </Alert>
            )}
            <Form className="text-start" onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Button variant="dark" type="submit">
                Login
              </Button>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
};
