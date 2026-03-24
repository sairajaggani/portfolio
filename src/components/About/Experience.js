import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Full Stack Developer (Contract)",
    company: "Reality AI Lab",
    date: "Dec 2024 – May 2025",
    location: "New York, NY — Remote",
    description: [
      "Built a web-based AI tool discovery platform using React.js frontend and Spring Boot backend with JWT + Spring Security for role-based access control.",
      "Designed MongoDB-backed microservices for personalized tool recommendations; containerized with Docker and deployed to AWS EC2 with S3 for static asset storage.",
      "Configured AWS CloudWatch monitoring and SNS alerting for production failures; implemented IAM roles following least-privilege access policy.",
      "Delivered a fully automated CI/CD pipeline via GitHub Actions — build, test, and deploy on every push, reducing manual deployment effort by ~60%.",
    ],
    tech: ["React", "Spring Boot", "MongoDB", "Docker", "AWS EC2", "JWT", "GitHub Actions", "CloudWatch"],
  },
  {
    title: "Student Web Developer",
    company: "Missouri S&T — MAKE Lab",
    date: "Aug 2023 – Dec 2024",
    location: "Rolla, Missouri",
    description: [
      "Led full-stack development of the official MAKE Lab website: React.js frontend, Spring Boot REST API backend, MySQL on AWS RDS, hosted on EC2 with Amplify.",
      "Built lab tool browsing, student login, appointment booking, and an automated scored training test system — students earn equipment access by passing threshold scores.",
      "Implemented API rate limiting via Spring AOP; authored Dockerfiles and GitHub Actions CI/CD workflows for automated testing and zero-downtime deployments.",
    ],
    tech: ["React", "Spring Boot", "MySQL", "AWS RDS", "AWS EC2", "Docker", "GitHub Actions"],
  },
  {
    title: "Software Developer Intern",
    company: "T-Hub",
    date: "Apr 2022 – Aug 2023",
    location: "Hyderabad, India",
    description: [
      "Built an Android tool (Java, Android Studio) for bulk generation, scanning, and validation of 10,000+ QR codes for physical key assets — fully replacing a manual process.",
      "Developed a Learning Analytics Dashboard with React.js and Spring Boot; hybrid data model using PostgreSQL for relational data and MongoDB for unstructured user logs.",
      "Built internal tools that improved operational efficiency across multiple teams with scheduled background jobs, data visualization, and REST APIs.",
      "Deployed via Docker Compose + Jenkins CI/CD on AWS EC2.",
    ],
    tech: ["Java", "Android", "Spring Boot", "React", "PostgreSQL", "MongoDB", "Docker", "Jenkins", "AWS"],
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 36, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const ExperienceSection = () => {
  return (
    <section>
      <h1 className="project-heading">
        Professional <strong className="purple"> Experience</strong>
      </h1>

      <motion.div
        className="experience-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
        variants={container}
      >
        {experiences.map((exp, index) => (
          <motion.div className="experience-card" key={index} variants={cardVariant}>
            <h3 className="experience-role">{exp.title}</h3>
            <p className="experience-company">
              {exp.company}{" — "}
              <span className="experience-date">{exp.date}</span>
            </p>
            <ul className="experience-bullets">
              {exp.description.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
            <div>
              {exp.tech.map((tech, i) => (
                <span className="tech-badge" key={i}>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
