import React from "react";
import { Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import { AiFillAndroid } from "react-icons/ai";
import { TbBrandReactNative } from "react-icons/tb";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
  DiMongodb,
  DiJenkins,
  DiLinux,
} from "react-icons/di";
import {
  SiSpringboot,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiDocker,
  SiAmazonaws,
  SiTailwindcss,
  //SiRedux,
  SiVisualstudiocode,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiSqlite,
  SiPostman,
  SiCplusplus,
  SiTypescript,
  SiDjango,
  // SiMicrosoftazure,
  SiGooglecloud,
  // SiTerraform,
  // SiKubernetes,
  // SiJira,
  // SiSelenium,
  SiApachemaven,
  //SiGradle,
  SiAmazondynamodb,
  SiGithubactions,
  SiNextdotjs,
  SiFlask,
  SiBootstrap,
  SiExpress,
  SiAndroidstudio,
} from "react-icons/si";

// ── 1. Languages
const languageSkills = [
  { icon: <DiJava />, name: "Java", color: "#f89820" },
  { icon: <DiJavascript1 />, name: "JavaScript", color: "#f0db4f" },
  { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
  { icon: <DiPython />, name: "Python", color: "#306998" },
  { icon: <SiCplusplus />, name: "C++", color: "#00599C" },


];

// ── 2. Frontend
const frontendSkills = [
  { icon: <DiReact />, name: "React", color: "#61DBFB" },
    { icon: <SiHtml5 />, name: "HTML5", color: "#e34c26" },
  { icon: <SiCss3 />, name: "CSS3", color: "#264de4" },
  { icon: <SiNextdotjs />, name: "Next.js", color: "var(--text-primary)" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "#38B2AC" },
  { icon: <SiBootstrap />, name: "Bootstrap", color: "#7952B3" },
];

// ── 3. Backend
const backendSkills = [
  { icon: <SiSpringboot />, name: "Spring Boot", color: "#6DB33F" },
  { icon: <DiNodejs />, name: "Node.js", color: "#3C873A" },
  { icon: <SiExpress />, name: "Express.js", color: "var(--text-primary)" },
  { icon: <SiDjango />, name: "Django", color: "#44b78b" },
  { icon: <SiFlask />, name: "Flask", color: "var(--text-primary)" },
];

// ── 4. Mobile
const mobileSkills = [
  { icon: <TbBrandReactNative />, name: "React Native", color: "#61DBFB" },
  { icon: <AiFillAndroid />, name: "Android", color: "#A4C639" },
  { icon: <SiFirebase />, name: "Firebase", color: "#FFCA28" },
  { icon: <SiAndroidstudio />, name: "Android Studio", color: "#3DDC84" },

];

// ── 5. Databases
const databaseSkills = [
  { icon: <DiMongodb />, name: "MongoDB", color: "#47A248" },
  { icon: <SiPostgresql />, name: "PostgreSQL", color: "#336791" },
  { icon: <SiMysql />, name: "MySQL", color: "#00758F" },
  { icon: <SiAmazondynamodb />, name: "DynamoDB", color: "#FF9900" },
  { icon: <SiSqlite />, name: "SQLite", color: "#349ecf" },
];

// ── 6. Cloud & DevOps
const devopsSkills = [
  { icon: <SiAmazonaws />, name: "AWS", color: "#FF9900" },
  { icon: <SiGooglecloud />, name: "GCP", color: "#4285F4" },
  { icon: <SiDocker />, name: "Docker", color: "#2496ED" },
  { icon: <SiGithubactions />, name: "GitHub Actions", color: "#2088FF" },
  { icon: <DiJenkins />, name: "Jenkins", color: "#D24939" },
];

// ── 7. Tools
const toolsSkills = [
  { icon: <DiGit />, name: "Git", color: "#F1502F" },
  { icon: <SiGithub />, name: "GitHub", color: "var(--text-primary)" },
  { icon: <SiPostman />, name: "Postman", color: "#FF6C37" },
  { icon: <SiApachemaven />, name: "Maven", color: "#C71A36" },
  { icon: <SiVisualstudiocode />, name: "VS Code", color: "#007ACC" },
  { icon: <DiLinux />, name: "Linux", color: "var(--text-secondary)" },

];

const renderSkills = (skills, title) => (
  <div className="tech-stack-section">
    <h5>{title}</h5>
    <Row className="tech-stack-row">
      {skills.map((skill, idx) => (
        <Col xs="auto" className="tech-icon-col" key={idx}>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id={`tooltip-${title}-${idx}`}>{skill.name}</Tooltip>}
          >
            <div className="tech-icon-wrapper" style={{ color: skill.color }}>
              {skill.icon}
            </div>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  </div>
);

function Techstack() {
  return (
    <div className="tech-stack-container">
      {renderSkills(languageSkills, "Languages")}
      {renderSkills(frontendSkills, "Frontend")}
      {renderSkills(backendSkills, "Backend")}
      {renderSkills(mobileSkills, "Mobile")}
      {renderSkills(databaseSkills, "Databases")}
      {renderSkills(devopsSkills, "Cloud & DevOps")}
      {renderSkills(toolsSkills, "Tools")}
    </div>
  );
}

export default Techstack;
