import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import myImg from "../../Assets/profile.png";
import Tilt from "react-parallax-tilt";
import Type from "./Type";
import WhatIDo from "./WhatIDo";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaGraduationCap } from "react-icons/fa";
import { SOCIAL_LINKS, EDUCATION } from "../../config/constants";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const itemRight = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut", delay: 0.2 } },
};

function Home2() {
  return (
    <Container fluid className="home-about-section" id="home">
      <Container className="home-content">
        <Row className="align-items-center">
          <Col md={7} className="home-header">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={container}
            >
              <motion.h1 className="heading" variants={item}>
                Hi There!{" "}
                <span className="wave" role="img" aria-label="waving hand">
                  👋🏻
                </span>
              </motion.h1>

              <motion.h1 className="heading-name" variants={item}>
                I'M
                <strong className="main-name"> SAI RAJ AGGANI</strong>
              </motion.h1>

              <motion.div className="typewriter-wrapper" variants={item}>
                <Type />
              </motion.div>

              <motion.div className="hero-cta-row" variants={item}>
                <button
                  className="hero-cta-btn hero-cta-primary"
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  View Projects
                </button>
                <a
                  href={SOCIAL_LINKS.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className="hero-cta-btn hero-cta-secondary"
                >
                  <FaLinkedinIn /> Connect
                </a>
              </motion.div>
            </motion.div>
          </Col>

          <Col md={5} className="d-flex justify-content-center" style={{ paddingBottom: 20 }}>
            <motion.div initial="hidden" animate="visible" variants={itemRight}>
              <Tilt>
                <img
                  src={myImg}
                  className="img-fluid"
                  alt="Sai Raj Aggani — Full Stack Developer"
                  style={{ maxHeight: "450px", borderRadius: "12px" }}
                />
              </Tilt>
            </motion.div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming, and ever since, I have been
              exploring the world of tech — one bug at a time.
              <br />
              <br />I am fluent in languages like
              <i>
                <b className="purple"> Java, JavaScript, and Python. </b> and I
                enjoy building full-stack web and mobile applications.
              </i>
              <br />
              <br />
              My interests lie in creating modern
              <i>
                <b className="purple"> Web products, Cloud-based solutions </b>
                and also diving into{" "}
                <b className="purple">mobile and data-driven projects.</b>
              </i>
              <br />
              <br />
              Whenever possible, I love crafting applications with{" "}
              <b className="purple">Spring Boot, React, Node.js, </b> and
              <i>
                <b className="purple"> exploring tools like Docker, AWS</b>
              </i>
              &nbsp; to bring ideas to life.
            </p>

            <div className="intro-education">
              <FaGraduationCap className="intro-education-icon" />
              <div>
                <span className="intro-education-degree">{EDUCATION.degree}</span>
                <span className="intro-education-school">
                  {EDUCATION.school} · {EDUCATION.date}
                </span>
              </div>
            </div>
          </Col>

          <Col md={4} className="wid-col">
            <WhatIDo />
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="GitHub Profile"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={SOCIAL_LINKS.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
