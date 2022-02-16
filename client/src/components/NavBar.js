import React from "react";
import { Navbar, Nav, Container, Button } from 'react-bootstrap';


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
        <div>
        <Navbar bg="light" expand="lg" id="navbar">
    <Container id="navbar">
        <Navbar.Brand href="#home">TRAILS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">Favorite Trails</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        <Navbar.Text id="navbar">
            {/* Logged in as: {user.username} */}
        </Navbar.Text>
        <Button variant="primary" onClick={handleLogoutClick}>
          Logout
        </Button>
    </Container>
    </Navbar>
        </div>
      </div>
    );
  }
  export default NavBar;