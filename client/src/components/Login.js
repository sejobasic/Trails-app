import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { Button, Container } from 'react-bootstrap'
import bgImage from '../video/background.mp4'
import logo1  from '../assets/logo4.png';
import '../App.css'


function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (

    <div className="submit-container">
      <div className="logo-img">
        <img src={logo1}/>
      </div>
      <div className="d-flex justify-content-center align-items-center">
      {showLogin ? (
        <LoginForm onLogin={onLogin} setShowLogin={setShowLogin} />
      ) : (
        <SignUpForm onLogin={onLogin} setShowLogin={setShowLogin} />
      )}
      </div>
      
      {/* logo image and background vid below */}
      <div className="Video">
        <video autoPlay loop>
          <source src={bgImage} type="video/mp4" />
        </video>
    </div>
    </div>
  );
}

export default Login;