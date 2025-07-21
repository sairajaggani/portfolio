import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           
      
            I am currently employed as a software developer at Reality AI.
            <br />
            I have completed my Master's in Computer Science.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Learning New Tech
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Driven to create solutions that matter and experiences that last!"{" "}
          </p>
          <footer className="blockquote-footer, purple">-Sai Raj Aggani</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
