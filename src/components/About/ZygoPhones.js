import React from "react";
import { FaMobileAlt } from "react-icons/fa";

// ─── Drop your screenshots here ──────────────────────────────────────────────
// 1. Add the image files to src/Assets/  (e.g. zygo-screen1.png)
// 2. Uncomment the matching import below
// 3. Replace `null` with the imported variable
// ─────────────────────────────────────────────────────────────────────────────
// import screen1 from "../../Assets/zygo-screen1.png";
// import screen2 from "../../Assets/zygo-screen2.png";
// import screen3 from "../../Assets/zygo-screen3.png";

const screens = [
  { src: null,   label: "Home / Map",        hint: "zygo-screen1.png" },
  { src: null,   label: "Ride Listings",     hint: "zygo-screen2.png" },
  { src: null,   label: "Live Tracking",     hint: "zygo-screen3.png" },
];

function PhoneFrame({ src, label, hint, position }) {
  return (
    <div className={`zp-phone zp-${position}`}>
      <div className="zp-notch" />
      {src ? (
        <img src={src} alt={label} className="zp-screenshot" />
      ) : (
        <div className="zp-placeholder">
          <FaMobileAlt className="zp-ph-icon" />
          <span className="zp-ph-label">{label}</span>
          <span className="zp-ph-hint">{hint}</span>
        </div>
      )}
    </div>
  );
}

function ZygoPhones() {
  const positions = ["left", "center", "right"];
  return (
    <div className="zp-outer">
      {screens.map((s, i) => (
        <PhoneFrame key={s.label} {...s} position={positions[i]} />
      ))}
      <span className="zp-caption">ZYGO RIDE — App Preview</span>
    </div>
  );
}

export default ZygoPhones;
