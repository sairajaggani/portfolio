import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Experience from "./Experience";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";


function About() {
  return (
    <Container fluid className="about-section" id="about">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              More about <strong className="purple">Me and my Work</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <Experience />

        <br />
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        
        <Techstack />

        
      </Container>
    </Container>
  );
}

export default About;
