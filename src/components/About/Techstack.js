import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaJava, FaAws ,FaDatabase } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { VscVscode } from "react-icons/vsc";
import { TbBrandReactNative, TbRobot} from "react-icons/tb";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiHtml5,

  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiSpringboot,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiFlask,
  SiFirebase,
  SiAndroidstudio,
  SiAndroid,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  //SiAmazondynamodb,
  SiSqlite,
  //SiAmazonaws,
  SiGooglecloud,
  SiDocker,
  SiGithubactions,
  SiJenkins,
  SiOpenai,
  SiClaude,
  SiN8N,
  SiGooglegemini,
  SiGit,
  SiGithub,
  SiPostman,
  SiApachemaven,
  //SiVisualstudiocode,
  SiLinux,
} from "react-icons/si";

// ── 1. Languages
const languageSkills = [
  { icon: <FaJava />, name: "Java", color: "#ED8B00" },
  { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
  { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
  { icon: <SiPython />, name: "Python", color: "#3776AB" },
  { icon: <SiCplusplus />, name: "C++", color: "#00599C" },
];

// ── 2. Frontend
const frontendSkills = [
  { icon: <SiReact />, name: "React", color: "#61DAFB" },
  { icon: <SiHtml5 />, name: "HTML5", color: "#E34F26" },
  { icon: <IoLogoCss3 />, name: "CSS3", color: "#1572B6" },
  { icon: <SiNextdotjs />, name: "Next.js", color: "var(--text-primary)" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "#06B6D4" },
  { icon: <SiBootstrap />, name: "Bootstrap", color: "#7952B3" },
];

// ── 3. Backend
const backendSkills = [
  { icon: <SiSpringboot />, name: "Spring Boot", color: "#6DB33F" },
  { icon: <SiNodedotjs />, name: "Node.js", color: "#339933" },
  { icon: <SiExpress />, name: "Express.js", color: "var(--text-primary)" },
  { icon: <SiDjango />, name: "Django", color: "#00653eff" },
  { icon: <SiFlask />, name: "Flask", color: "var(--text-primary)" },
];

// ── 4. Mobile
const mobileSkills = [
  { icon: <TbBrandReactNative />, name: "React Native", color: "#61DAFB" },
  { icon: <SiAndroid />, name: "Android", color: "#3DDC84" },
  { icon: <SiFirebase />, name: "Firebase", color: "#FFCA28" },
  { icon: <SiAndroidstudio />, name: "Android Studio", color: "#3DDC84" },
];

// ── 5. Databases
const databaseSkills = [
  { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
  { icon: <SiPostgresql />, name: "PostgreSQL", color: "#4169E1" },
  { icon: <SiMysql />, name: "MySQL", color: "#4479A1" },
  { icon: <FaDatabase />, name: "DynamoDB", color: "#FF9900" },
  { icon: <SiSqlite />, name: "SQLite", color: "#08648fff" },
];

// ── 6. Cloud & DevOps
const devopsSkills = [
  { icon: <FaAws />, name: "AWS", color: "#FF9900" },
  { icon: <SiGooglecloud />, name: "GCP", color: "#4285F4" },
  { icon: <SiDocker />, name: "Docker", color: "#2496ED" },
  { icon: <SiGithubactions />, name: "GitHub Actions", color: "#2088FF" },
  { icon: <SiJenkins />, name: "Jenkins", color: "#D24939" },
];

// ── 7. AI & Automation
const aiSkills = [
  { icon: <SiOpenai />, name: "OpenAI / GPT", color: "#412991" },
  { icon: <SiClaude />, name: "Claude Code", color: "#D97757" },
  { icon: <SiGooglegemini />, name: "Gemini", color: "#4285F4" },
  { icon: <TbRobot />, name: "AI Agents", color: "#6366f1" },
  { icon: <SiN8N />, name: "N8N Automation", color: "#FF6C37" },
];

// ── 8. Tools
const toolsSkills = [
  { icon: <SiGit />, name: "Git", color: "#F05032" },
  { icon: <SiGithub />, name: "GitHub", color: "var(--text-primary)" },
  { icon: <SiPostman />, name: "Postman", color: "#FF6C37" },
  { icon: <SiApachemaven />, name: "Maven", color: "#C71A36" },
  { icon: <VscVscode />, name: "VS Code", color: "#007ACC" },
  { icon: <SiLinux />, name: "Linux", color: "#ccbf08ff" },
];

const renderSkills = (skills, title) => (
  <div className="tech-stack-section">
    <h5>{title}</h5>
    <Row className="tech-stack-row">
      {skills.map((skill, idx) => (
        <Col xs="auto" className="tech-icon-col" key={idx}>
          <div
            className="tech-icon-wrapper"
            style={{ color: skill.color }}
            data-tooltip={skill.name}
            aria-label={skill.name}
          >
            {skill.icon}
          </div>
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
      {renderSkills(aiSkills, "AI & Automation")}
      {renderSkills(toolsSkills, "Tools")}
    </div>
  );
}

export default Techstack;
