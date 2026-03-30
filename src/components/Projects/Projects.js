import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

// Project images
import testcase from "../../Assets/Projects/testcase.png";
import news from "../../Assets/Projects/news.png";
import aichef from "../../Assets/Projects/aichef.png";
import android from "../../Assets/Projects/android.png";
import makelab from "../../Assets/Projects/makelab.png";
import customer from "../../Assets/Projects/Customer.jpg";
import autojobs from "../../Assets/Projects/jobsauto.png";
import ollama from "../../Assets/Projects/ollama.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
          Here are some of the projects I've worked on.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={autojobs}
              isBlog={false}
              title="Automated Job Application System"
              ghLink="https://github.com/sairajaggani/AutomateJobMail"
              description="Parses job description PDFs, uses an LLM to generate a tailored cover letter and recruiter email, auto-selects the most relevant resume, and sends via Gmail API — reducing per-application time from ~15 min to under 60 seconds. Supports batch mode with a web UI pipeline manager."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aichef}
              isBlog={false}
              title="AI Fridge Chef"
              description="Web app that accepts ingredient input and calls Google Gemini API to generate personalized recipes with step-by-step instructions. Built with a Flask REST backend and React frontend, leveraging Gemini's multimodal capabilities with persistent user favourites."
              ghLink="https://github.com/sairajaggani/AI-Fridge-Chef"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ollama}
              isBlog={false}
              title="Local LLM Coding Agent"
              description="Fully offline AI coding agent using Ollama and the open-source Qwen 14B model to generate boilerplate code and automatically write and execute unit and integration tests. Zero external API dependency, designed for rapid scaffolding and test coverage generation."
               />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={makelab}
              isBlog={false}
              title="Missouri S&T MAKE Lab Website"
              demoLink="https://make.mst.edu/"
              description="University platform for Make lab for tool browsing, student login, appointment booking, and automated scored tests on canvas, students unlock equipment access by meeting score thresholds. React.js + Spring Boot REST API backend on AWS RDS/EC2 with GitHub Actions CI/CD."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={testcase}
              isBlog={false}
              title="Text Converter"
              description="A React-based app to convert, format, and manipulate text easily. Includes features like upper/lowercase conversion, trimming, word count, and copy functionality. Perfect for quick text transformations and formatting needs. Built with React and Bootstrap for a responsive design."
              ghLink="https://github.com/sairajaggani/TestCaseConverter"
              demoLink="https://testcaseconverter.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="Fast & Facts — Online Newspaper"
              description="Full-stack MERN application where users can publish and read articles. Features admin dashboard, user authentication, CRUD operations, live search, and real-time news via NewsAPI."
              ghLink="https://github.com/sairajaggani/FAST-AND-FACTS--NEWSPAPER"
              demoLink="https://fast-and-facts-newspaper.netlify.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={android}
              isBlog={false}
              title="Password Encryption App"
              description="Android application for encrypting and securely storing user passwords using AES-256 encryption and biometric lock. Zero-knowledge local architecture — all data encrypted at rest, no cloud sync."
              ghLink="https://github.com/sairajaggani/PasswordManager"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={customer}
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
