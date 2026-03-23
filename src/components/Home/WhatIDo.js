import React from "react";
import { FaLayerGroup, FaMobileAlt, FaCloud } from "react-icons/fa";

const areas = [
  {
    icon: <FaLayerGroup />,
    title: "Full Stack Web",
    desc: "End-to-end apps from UI to deployment",
    tags: ["React", "Spring Boot", "Node.js", "Next.js"],
    color: "#61dafb",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Development",
    desc: "Cross-platform native apps for iOS & Android",
    tags: ["React Native", "Firebase", "Google Maps"],
    color: "#4ade80",
  },
  {
    icon: <FaCloud />,
    title: "Cloud & Serverless",
    desc: "Scalable backends on Firebase, AWS & GCP",
    tags: ["Firebase", "AWS", "GCP", "Docker"],
    color: "#fb923c",
  },
];

function WhatIDo() {
  return (
    <div className="wid-container">
      {areas.map((area, i) => (
        <div
          className="wid-card"
          key={area.title}
          style={{ animationDelay: `${i * 0.18}s` }}
        >
          <span className="wid-icon" style={{ color: area.color }}>
            {area.icon}
          </span>
          <div className="wid-body">
            <h6 className="wid-title">{area.title}</h6>
            <p className="wid-desc">{area.desc}</p>
            <div className="wid-tags">
              {area.tags.map((t) => (
                <span className="wid-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WhatIDo;
