import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    // <Navbar bg="light" expand="lg">
    //   <Container>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link to="/home">Home</Nav.Link>
    //         <Nav.Link to="/reviews">Reviews</Nav.Link>
    //         <Nav.Link to="/dashboard">Dashboard</Nav.Link>
    //         <Nav.Link to="/blogs">Blogs</Nav.Link>
    //         <Nav.Link to="/about">About</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>

    <div>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
};

export default Header;
