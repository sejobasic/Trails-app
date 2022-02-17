import React from "react";
import { Navbar, Nav, Container, Button, Form, FormControl } from 'react-bootstrap';
import logo1  from '../assets/logo4.png';
import '../App.css'


function NavBar({ user, setUser }) {

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
    }
  
  return (
    <div>
      <Navbar bg="light" expand="lg" id="navbar">
        <Container id="navbar">
          <Navbar.Brand className="nav-logo" href="#home">
            <img src={logo1}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
             <Nav.Link href="#home">Home</Nav.Link>
             <Nav.Link href="#home">Favorite Trails</Nav.Link>
          </Nav>
          </Navbar.Collapse>
          <Navbar.Text id="navbar">
             Logged in as: {user.username}
          </Navbar.Text>
          <Button variant="primary" onClick={handleLogoutClick}>
             Logout
          </Button>
        </Container>
      </Navbar>
    </div>
    );
  }
  export default NavBar;