import React, { useState } from "react";
import { Alert, Button, Card, Form, InputGroup } from "react-bootstrap";
import EmpDataServices from "../services/emp.services";
import { FiEyeOff, FiEye } from "react-icons/fi";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });
  const [passwordShown, setPasswordShown] = useState(false);
  const [ConfirmpasswordShown, setConfirmPasswordShown] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("");
    if (email === "" || password === "" || confirmPassword === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
    } else {
      console.log("register called from emp.services");
      const firebaseMsg = await EmpDataServices.register(email, password);
      if (firebaseMsg) {
        setMessage({ error: true, msg: firebaseMsg });
      } else {
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setMessage({ error: false, msg: "successfully registed..." });
      }
    }
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const togglePassword1 = () => {
    setConfirmPasswordShown(!ConfirmpasswordShown);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 mx-auto">
          <Card style={{ width: "30rem" }} className="mx-auto p-4 mt-5">
            <Card.Title>Register</Card.Title>

            {message?.msg && (
              <Alert
                variant={message?.error ? "danger" : "success"}
                dismissible
                onClick={() => setMessage("")}
              >
                {message?.msg}
              </Alert>
            )}
            <Form className="text-start" onSubmit={handleRegister}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <InputGroup className="mb-3">
                <Form.Control
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={passwordShown ? "text" : "password"}
                  placeholder="Password"
                />
                <InputGroup.Text>
                  {passwordShown ? (
                    <FiEyeOff type="button" onClick={togglePassword} />
                  ) : (
                    <FiEye type="button" onClick={togglePassword} />
                  )}
                </InputGroup.Text>
              </InputGroup>

              <InputGroup className="mb-3">
                <Form.Control
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type={ConfirmpasswordShown ? "text" : "password"}
                  placeholder="Confirm Password"
                />
                <InputGroup.Text>
                  {ConfirmpasswordShown ? (
                    <FiEyeOff type="button" onClick={togglePassword1} />
                  ) : (
                    <FiEye type="button" onClick={togglePassword1} />
                  )}
                </InputGroup.Text>
              </InputGroup>
              <Button variant="dark" type="submit">
                Register
              </Button>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
};
