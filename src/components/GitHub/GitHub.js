import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GitHubCalendar from "react-github-calendar";
import { PERSONAL } from "../../config/constants";

function GitHub({ theme }) {
  return (
    <Container fluid className="github-section">
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">GitHub</strong> Contributions
        </h1>
        <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
          A snapshot of my open-source activity.
        </p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={9}>
            <div className="github-chart-wrapper">
              <GitHubCalendar
                username={PERSONAL.github}
                colorScheme={theme === "light" ? "light" : "dark"}
                blockSize={13}
                blockMargin={4}
                fontSize={14}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default GitHub;
