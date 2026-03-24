import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { EDUCATION } from "../../config/constants";

function Education() {
  return (
    <section className="education-section">
      <h1 className="project-heading">
        <strong className="purple">Education</strong>
      </h1>

      <div className="education-card">
        <div className="education-icon">
          <FaGraduationCap />
        </div>
        <div className="education-details">
          <h3 className="education-degree">{EDUCATION.degree}</h3>
          <p className="education-school">{EDUCATION.school}</p>
          <p className="education-meta">
            {EDUCATION.location} · {EDUCATION.date}
          </p>
          <div className="education-coursework">
            {EDUCATION.coursework.map((course) => (
              <span className="tech-badge" key={course}>
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
