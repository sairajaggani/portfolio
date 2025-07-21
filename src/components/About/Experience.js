import React from "react";


const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Reality AI Lab",
    date: "Dec 2024 - Present",
    description: [
      "Designed and implemented a personalized Tools Discovery Page using React, Node.js, and MongoDB, improving tool access and usability for internal teams.",
      "Built search and advanced filtering logic with dynamic backend queries to serve context-aware recommendations.",
      "Integrated AWS services for scalable deployment and improved performance under real-time usage."
    ],
    tech: ["React", "Node.js", "MongoDB", "Tailwind", "AWS", "Firebase"],
  },
  {
    title: "Student Assistant Technical",
    company: "Missouri S&T",
    date: "Aug 2023 - Dec 2024",
    description: [
      "Developed and launched the official MAKE Lab website for university using the MongoDB, React, Express and Node.Js stack, improving lab resource access and engagement for 1000+ students.",
      "Built a responsive, mobile-optimized UI, integrated RESTful APIs, and implemented backend services with Node.js and Express.",
      "Assisted in maintaining lab infrastructure, providing day-to-day tech support, and improving student onboarding workflows."
    ],
    tech: ["React", "Node.js", "Express","REST API", "Git"],
  },
  {
    title: "Software Developer - Intern",
    company: "T-Hub",
    date: "Jan 2023 - July 2023",
    description:
      ["Built a scalable Android app using Java to generate and export 10,000+ unique product keys as QR codes in customizable sizes and layouts. ",
    "Integrated ZXing for bulk QR generation and PDFBox for print-ready PDF export. ",
    "Used by an organization to automate product labeling and improve key traceability. ",
    "Optimized for performance and consistency across devices and print formats."
  ],
    tech: ["Java", "Android", "ZXing", "PDFBox", "Git"],
  },
  {
    title: "Java Full Stack Developer - Intern",
    company: "Hyper Thread Solutions",
    date: "Jul 2022 - Dec 2022",
    description:
[
  "A secure backend system for managing products, stock, and suppliers with real-time API access.",
  "Built RESTful APIs using Spring Boot, Spring Data JPA, and MySQL for efficient inventory tracking.",
  "Implemented JWT authentication with role-based access (Admin, Manager, Viewer).",
  "Deployed with Docker on AWS EC2, and integrated Swagger for API documentation."
], 
    tech: ["Java", "Spring Boot","RESTful APIs", "MySQL", "Docker", "AWS EC2"],

  },

];

const ExperienceSection = () => {
  return (
    <section className="experience-section">
              <h1 className="project-heading">
          Professional <strong className="purple"> Experience</strong>
        </h1>
        
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <h3 className="experience-role">{exp.title}</h3>
            <p className="experience-company">{exp.company} {" - "}<span className="experience-date">{exp.date}</span></p>
            <p className="experience-description">{exp.description}</p> 
            <div>
              {exp.tech.map((tech, i) => (
                <span className="tech-badge" key={i}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
