import React, { useState } from "react";
import {Form, Button} from 'react-bootstrap'
import '../App.css'

function SignUpForm({onLogin}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
  
    function handleSubmit(e) {
      e.preventDefault();
      setErrors([]);
      setIsLoading(true);
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          password_confirmation: passwordConfirmation,
          image_url: imageUrl,
        }),
      }).then((resp) => {
        setIsLoading(false);
        if (resp.ok) {
          resp.json().then((user) => onLogin(user));
        } else {
          resp.json().then((err) => setErrors(err.errors));
        }
      });
    }
  
    return (
      <div className="form-container">
        <div className="d-grid age-100 justify-content-center align-items-center" id="form-container">
      <Form className="text-center rounded p-4 p-sm-3" onSubmit={handleSubmit} id="sign-in-form">
        <Form.Group className="mb-3">
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="password">Password Confirmation</Form.Label>
          <Form.Control
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="current-password"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="imageUrl">Profile Image</Form.Label>
          <Form.Control
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </Form.Group>  
        <Button type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
      </Form>
      </div>
      </div>
    );
}

export default SignUpForm