import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { Button, Container } from 'react-bootstrap'
import bgImage from '../video/background.mp4'
import '../App.css'


function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (

    <div className="submit-container">
      <div className="d-flex justify-content-center align-items-center">
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <p>
          <Container id="sign_in">
            Don't have an account? &nbsp;
            <Button variant="primary" onClick={() => setShowLogin(false)}>
              Sign Up
            </Button>
            </Container>
          </p>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <p>
          <Container id="sign_in">
            Already have an account? &nbsp;
            <Button onClick={() => setShowLogin(true)}>
              Log In
            </Button>
            </Container>
          </p>
        </>
      )}
      </div>
      <div className="Video">
        <video autoPlay loop>
          <source src={bgImage} type="video/mp4" />
        </video>
    </div>
    </div>
  );
}

export default Login;