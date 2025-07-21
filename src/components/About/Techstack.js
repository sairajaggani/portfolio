import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
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
  SiRedux,
  SiVisualstudiocode,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiSqlite,
  SiPostman,
  SiCplusplus,
} from "react-icons/si";

const frontendSkills = [
  { icon: <DiJavascript1 color="#f0db4f" />, name: "JavaScript" },
  { icon: <DiReact color="#61DBFB" />, name: "React" },
  { icon: <SiRedux color="#764ABC" />, name: "Redux" },
  { icon: <SiHtml5 color="#e34c26" />, name: "HTML5" },
  { icon: <SiCss3 color="#264de4" />, name: "CSS3" },
  { icon: <SiTailwindcss color="#38B2AC" />, name: "Tailwind CSS" },
  
];

const backendSkills = [
  { icon: <DiJava color="#f89820" />, name: "Java" },
  { icon: <SiSpringboot color="#6DB33F" />, name: "Spring Boot" },
  { icon: <DiPython color="#306998" />, name: "Python" },
  { icon: <SiCplusplus color="#00599C" />, name: "C++" },
  { icon: <DiNodejs size="50px" color="#3C873A" />, name: "Node.js" },

  
];

const databaseSkills = [  
  { icon: <DiMongodb color="#47A248" />, name: "MongoDB" },
  { icon: <SiPostgresql color="#336791" />, name: "PostgreSQL" },
  { icon: <SiMysql color="#00758F" />, name: "MySQL" },
  { icon: <SiFirebase color="#FFCA28" />, name: "Firebase" },
  { icon: <SiSqlite color="#349ecfff" />, name: "SQLite" },
];

const devopsSkills = [
  { icon: <SiAmazonaws color="#FF9900" />, name: "AWS" },
  { icon: <SiDocker color="#2496ED" />, name: "Docker" },
  { icon: <DiJenkins color="#D24939" />, name: "Jenkins" },
  { icon: <DiGit color="#F1502F" />, name: "Git" },
  { icon: <SiGithub color="#ffffffff" />, name: "GitHub" },
];

const toolsSkills = [

  { icon: <SiVisualstudiocode color="#007ACC" />, name: "VS Code" },
  { icon: <SiPostman color="#FF6C37" />, name: "Postman" },
  { icon: <AiFillAndroid color="#A4C639" />, name: "Android" },
  { icon: <TbBrandReactNative color="#61DBFB" />, name: "React Native" },
  { icon: <DiLinux color="#d7d2b3ff" />, name: "Linux" },
];

const renderSkills = (skills, title) => (
  <div className="tech-stack-section tech-icon-wrapper">
    <h5>{title}</h5>
    <Row className="justify-content-center tech-stack-row">
      {skills.map((skill, idx) => (
        <Col xs={1} md={1} className="tech-icon-col" key={idx}>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id={`tooltip-${title}-${idx}`}>{skill.name}</Tooltip>}
          >
            <div className="tech-icon-wrapper">{skill.icon}</div>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  </div>
);

function Techstack() {
  return (
    <div className="tech-stack-container">
      {renderSkills(frontendSkills, "Frontend")}
      {renderSkills(backendSkills, "Backend")}
      {renderSkills(databaseSkills, "Databases")}
      {renderSkills(devopsSkills, "DevOps & Cloud")}
      {renderSkills(toolsSkills, "Tools & Technologies")}
    </div>
  );
}

export default Techstack;

