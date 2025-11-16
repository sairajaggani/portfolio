import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import {
 
  AiOutlineHome,
  
  AiOutlineLaptop,
 
  AiFillLinkedin,
  
} from "react-icons/ai";
import { MdWork } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand"  />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">


            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  document
                    .getElementById("home")
                    ?.scrollIntoView({ behavior: "smooth" });
                  updateExpanded(false);
                }}
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>


            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" });
                  updateExpanded(false);
                }}
              >
                <MdWork  style={{ marginBottom: "2px" }} /> Work
              </Nav.Link>
            </Nav.Item>


                     

            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                  updateExpanded(false);
                }}
              >
                <AiOutlineLaptop style={{ marginBottom: "2px" }} /> Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  document
                    .getElementById("resume")
                    ?.scrollIntoView({ behavior: "smooth" });
                  updateExpanded(false);
                }}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://www.linkedin.com/in/sai-raj-a4817a2a1"
                target="_blank"
                className="fork-btn-inner"
              >
                <AiFillLinkedin style={{ fontSize: "1.3em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
