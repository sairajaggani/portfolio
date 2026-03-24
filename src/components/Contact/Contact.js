import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { PERSONAL, SOCIAL_LINKS } from "../../config/constants";

const FORMSPREE_ID = process.env.REACT_APP_FORMSPREE_ID;

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!FORMSPREE_ID) {
      // Fallback to mailto if Formspree is not configured
      window.location.href = `mailto:${PERSONAL.email}?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

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

            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="contact-input"
                aria-label="Your name"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="contact-input"
                aria-label="Your email"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="contact-input contact-textarea"
                aria-label="Your message"
              />
              <button
                type="submit"
                className="contact-email-btn"
                disabled={status === "sending"}
              >
                <AiOutlineMail className="contact-email-icon" />
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="contact-status contact-status--success">
                  Message sent successfully! I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="contact-status contact-status--error">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>

            <p className="contact-email-label">{PERSONAL.email}</p>

            <div className="contact-social-links">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-icon"
                aria-label="GitHub"
              >
                <AiFillGithub />
              </a>
              <a
                href={SOCIAL_LINKS.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-icon"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href={SOCIAL_LINKS.email}
                className="contact-social-icon"
                aria-label="Email"
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
