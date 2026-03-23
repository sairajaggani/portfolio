import React from "react";
import {
  FaCarSide, FaLeaf, FaLock, FaShieldAlt, FaStar, FaCheckCircle,
} from "react-icons/fa";
import {
  TbHexagon, TbMapPin, TbBell, TbKey,
} from "react-icons/tb";
import {
  BsChatDotsFill, BsBarChartFill, BsPeopleFill, BsExclamationTriangleFill,
} from "react-icons/bs";
import {
  MdTravelExplore, MdAdminPanelSettings, MdSpeed, MdVerified,
} from "react-icons/md";

const userFeatures = [
  { icon: <FaCarSide />,         text: "Post & book rides with route, seats & pricing" },
  { icon: <MdTravelExplore />,   text: "Smart ride suggestions based on trip match" },
  { icon: <BsChatDotsFill />,    text: "In-app driver ↔ passenger messaging" },
  { icon: <FaStar />,            text: "Two-way ride rating system" },
  { icon: <FaCheckCircle />,     text: "Approve or cancel incoming ride requests" },
  { icon: <FaShieldAlt />,       text: "Conflict-free seat booking logic" },
  { icon: <FaShieldAlt />, text: "End-to-end encryption for user data" },
];

const techFeatures = [
  { icon: <TbHexagon />,   text: "Uber H3 hex grid proximity geo-search" },
  { icon: <TbMapPin />,    text: "Live tracking via Firebase Realtime DB" },
  { icon: <TbBell />,      text: "FCM push notifications" },
  { icon: <TbKey />,       text: "E mail verification + Google OAuth2" },
  { icon: <MdSpeed />,     text: "Rate limiting & abuse prevention" },
  { icon: <MdVerified />,  text: "ID verification flow" },

  { icon: <TbKey />,       text: "Testing and Deployment" },
];

const adminFeatures = [
  { icon: <BsPeopleFill />,                  text: "User management & account control" },
  { icon: <BsBarChartFill />,               text: "Ride statistics & analytics dashboard" },
  { icon: <BsExclamationTriangleFill />,    text: "Flag & resolve ride disputes" },
];

const techPills = [
  { label: "React Native",    color: "#61dafb" },
  { label: "Firebase RTDB",   color: "#FFCA28" },
  { label: "Google Maps API", color: "#4285F4" },
  { label: "Uber H3",         color: "#94a3b8" },
  { label: "OAuth 2.0 + OTP", color: "#ea4335" },
  { label: "FCM",             color: "#FF6D00" },
  { label: "Next.js Admin",   color: "var(--text-secondary)" },
];

function FeaturedProject() {
  return (
    <div className="featured-project-card">

      {/* ── Header ── */}
      <div className="fp-header">
        <div className="fp-title-row">
          <div className="fp-name-group">
            <FaLeaf className="fp-leaf-icon" />
            <h2 className="fp-app-name">ZYGO RIDE</h2>
          </div>
          <span className="fp-badge">Live Soon</span>
        </div>
        <p className="fp-role">Architect · Frontend Developer · iOS & Android</p>
        <p className="fp-tagline">
          Eco-friendly community carpooling — share rides, cut costs, reduce emissions.{" "}
          <span className="fp-sub">Think BlaBlaCar, built from scratch with a 100% serverless backend.</span>
        </p>
      </div>

      {/* ── Highlights ── */}
      <div className="fp-highlights">
        {["iOS & Android", "100% Serverless", "Real-time Tracking", "Next.js Admin Portal"].map((h) => (
          <span className="fp-highlight" key={h}>{h}</span>
        ))}
      </div>

      {/* ── Feature Grid ── */}
      <div className="fp-grid">
        <div className="fp-grid-col">
          <p className="fp-col-title">User Features</p>
          {userFeatures.map((f, i) => (
            <div className="fp-feature-item" key={i}>
              <span className="fp-feature-icon">{f.icon}</span>
              <span className="fp-feature-text">{f.text}</span>
            </div>
          ))}
        </div>
        <div className="fp-grid-col">
          <p className="fp-col-title">Technical</p>
          {techFeatures.map((f, i) => (
            <div className="fp-feature-item" key={i}>
              <span className="fp-feature-icon">{f.icon}</span>
              <span className="fp-feature-text">{f.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Admin Portal ── */}
      <div className="fp-admin-section">
        <p className="fp-col-title">
          <MdAdminPanelSettings style={{ marginRight: 6 }} />
          Next.js Admin Portal
        </p>
        <div className="fp-admin-grid">
          {adminFeatures.map((f, i) => (
            <div className="fp-admin-item" key={i}>
              <span className="fp-feature-icon">{f.icon}</span>
              <span className="fp-feature-text">{f.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="fp-footer">
        <div className="fp-pills">
          {techPills.map((p) => (
            <span key={p.label} className="fp-pill" style={{ "--pill-color": p.color }}>
              {p.label}
            </span>
          ))}
        </div>
        {/* <span className="fp-private">
          <FaLock style={{ marginRight: 5 }} /> Private Repo
        </span> */}
      </div>

    </div>
  );
}

export default FeaturedProject;
