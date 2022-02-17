import React, { useState } from "react";
import {Form, Button} from 'react-bootstrap'
import '../App.css'

function LoginForm({onLogin, setShowLogin}){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }


  return (
    <div className="form-container">
      <div className="d-grid age-100 justify-content-center align-items-center" id="form-container">
        <Form className="text-center rounded p-4 p-sm-3"onSubmit={handleSubmit} id="sign-in-form">
          <Form.Group className="mb-3">
            <Form.Label htmlFor="username">Username</Form.Label>
            <Form.Control
              type="text"
              id="username"
              placeholder="Enter Username"
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button color="black" variant="primary" type="submit" style={{marginTop: '10px', marginBottom: '2rem'}}>
              {isLoading ? "Loading..." : "Login"}
          </Button>
              <p>Don't have an account?</p>
          <Button variant="primary" onClick={() => setShowLogin(false)}>
              Sign Up
          </Button>
        </Form>
      </div>
    </div>
    );
};

export default LoginForm;