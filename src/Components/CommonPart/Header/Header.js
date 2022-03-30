import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import CustomLink from "../../CustomLink/CustomLink";
import "./Header.css";
import logo from "../../../images/logo-small.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 nav-menu"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <CustomLink to="/home">Home</CustomLink>
              <CustomLink to="/about">About</CustomLink>
              <CustomLink to="/meals">Meals</CustomLink>
              <CustomLink to="/contact">Link</CustomLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
