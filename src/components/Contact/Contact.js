import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const EMAIL = "sairaj.yad22@gmail.com";

function Contact() {
  return (
    <Container fluid className="contact-section" id="contact">
      <Container className="contact-inner">
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h1 className="contact-heading">
              Get In <span className="purple">Touch</span>
            </h1>
            <p className="contact-subtext">
              Have a project idea, job opportunity, or just want to say hello?
              My inbox is always open — I'll get back to you as soon as possible.
            </p>

            <a
              href={`mailto:${EMAIL}`}
              className="contact-email-btn"
            >
              <AiOutlineMail className="contact-email-icon" />
              Say Hello
            </a>

            <p className="contact-email-label">{EMAIL}</p>

            <div className="contact-social-links">
              <a
                href="https://github.com/sairajaggani"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-icon"
                title="GitHub"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/sai-raj-a4817a2a1"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-icon"
                title="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="contact-social-icon"
                title="Email"
              >
                <AiOutlineMail />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
