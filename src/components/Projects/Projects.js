import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import news from "../../Assets/Projects/news.png";
import testcase from "../../Assets/Projects/testcase.png";
import android from "../../Assets/Projects/android.jpg";
import chatify from "../../Assets/Projects/chatify.png";
import netbank from "../../Assets/Projects/netbank.png";
import customer from "../../Assets/Projects/Customer.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={testcase} // import this image
              isBlog={false}
              title="Text Converter"
              description="A React-based app to convert, format, and manipulate text easily. Includes features like upper/lowercase conversion, trimming, word count, and copy functionality."
              ghLink="https://github.com/sairajaggani/TestCaseConverter"
              demoLink="https://testcaseconverter.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news} // import this image
              isBlog={false}
              title="Online Newspaper"
              description="A full-stack MERN application where users can publish and read articles. Features admin dashboard, user authentication, CRUD operations, and live search."
              ghLink="https://github.com/sairajaggani/FAST-AND-FACTS--NEWSPAPER"
              demoLink="https://fast-and-facts-newspaper.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify} // import this image
              isBlog={false}
              title="Chat App"
              description="Cross-platform real-time messaging app built using React Native and Firebase. Includes authentication, notifications, and image sharing."
              ghLink="https://github.com/sairajaggani/ChatApp"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={android} // import this image
              isBlog={false}
              title="Password Encryption App"
              description="Android application for encrypting and securely storing user passwords using AES encryption and biometric lock. Built with Java and Android Studio."
           ghLink="https://github.com/sairajaggani/PasswordManager"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netbank} // import this image
              isBlog={false}
              title="Banking Portal"
              description="Java-based banking system that supports user registration, login, money transfer, balance inquiry, and transaction history with secure backend logic."
          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={customer} // import this image
              isBlog={false}
              title="Customer Segmentation"
              description="Used machine learning (K-Means, RFM) to segment customers for targeted marketing. Built using Python, Pandas, and scikit-learn with visualizations in Matplotlib."
              ghLink="https://github.com/sairajaggani/customer-segmentation"

            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}


export default Projects;
