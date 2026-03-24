import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Experience from "./Experience";
import FeaturedProject from "./FeaturedProject";
import ZygoPhones from "./ZygoPhones";
import ScrollReveal from "../ScrollReveal";

function About() {
  return (
    <Container fluid className="about-section" id="about">
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
              Featured <strong className="purple">Project</strong>
            </h1>
            <div className="about-bio-strip">
              <span className="about-bio-degree">M.S. Computer Science</span>
              <span className="about-bio-dot">·</span>
              <span>Full Stack &amp; Mobile Developer</span>
            </div>
            <p className="about-bio-interests">
              Outside of coding —{" "}
              <span className="purple">learning new tech</span>, playing games, music &amp; travelling.
            </p>
            <FeaturedProject />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "60px", paddingBottom: "50px", marginTop: "200px" }}
            className="about-img"
          >
            <ZygoPhones />
          </Col>
        </Row>

        <ScrollReveal>
          <Experience />
        </ScrollReveal>

        <ScrollReveal>
          <br />
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>
          <Techstack />
        </ScrollReveal>
      </Container>
    </Container>
  );
}

export default About;
