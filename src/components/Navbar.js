import React, { useState, useEffect, useCallback } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import {
  AiOutlineHome,
  AiOutlineLaptop,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { MdWork, MdLightMode, MdDarkMode } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";
import { SOCIAL_LINKS } from "../config/constants";

const NAV_SECTIONS = ["home", "about", "projects", "github", "resume", "contact"];

function NavBar({ theme, toggleTheme }) {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollHandler = useCallback(() => {
    updateNavbar(window.scrollY >= 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [scrollHandler]);

  // Intersection Observer for active section highlighting
  useEffect(() => {
    const observers = [];
    NAV_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    updateExpanded(false);
  };

  const navItems = [
    { id: "home", label: "Home", icon: <AiOutlineHome style={{ marginBottom: "2px" }} /> },
    { id: "about", label: "Work", icon: <MdWork style={{ marginBottom: "2px" }} /> },
    { id: "projects", label: "Projects", icon: <AiOutlineLaptop style={{ marginBottom: "2px" }} /> },
    { id: "github", label: "GitHub", icon: <AiFillGithub style={{ marginBottom: "2px" }} /> },
    { id: "resume", label: "Resume", icon: <CgFileDocument style={{ marginBottom: "2px" }} /> },
    { id: "contact", label: "Contact", icon: <AiOutlineMail style={{ marginBottom: "2px" }} /> },
  ];

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="Sai Raj Aggani logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            {navItems.map((item) => (
              <Nav.Item key={item.id}>
                <Nav.Link
                  className={activeSection === item.id ? "nav-active" : ""}
                  onClick={() => scrollTo(item.id)}
                >
                  {item.icon} {item.label}
                </Nav.Link>
              </Nav.Item>
            ))}

            <Nav.Item className="d-flex align-items-center ms-2">
              <button
                className="theme-toggle-btn"
                onClick={toggleTheme}
                aria-label={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
                title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {theme === "dark" ? (
                  <MdLightMode size={18} />
                ) : (
                  <MdDarkMode size={18} />
                )}
              </button>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href={SOCIAL_LINKS.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="fork-btn-inner"
                aria-label="LinkedIn Profile"
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
