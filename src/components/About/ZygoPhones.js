import { useState, useEffect, useRef, useCallback } from "react";
import { FaMobileAlt } from "react-icons/fa";

// ─── Drop your screenshots here ───────────────────────────────────────────────
// 1. Add image files to src/Assets/  (e.g. zygo-screen1.png)
// 2. Uncomment the matching import below
// 3. Replace the matching `null` with the imported variable
// 4. Add a label and hint for each screen in the `screens` array
// ─────────────────────────────────────────────────────────────────────────────
import screen1 from "../../Assets/zygo-screen1.png";
import screen2 from "../../Assets/zygo-screen2.png";
import screen3 from "../../Assets/zygo-screen3.png";
import screen4 from "../../Assets/zygo-screen4.png";
import screen5 from "../../Assets/zygo-screen5.png";

const screens = [
  { src: screen1, label: "Home / Map",    hint: "zygo-screen1.png" },
  { src: screen2, label: "Ride Listings", hint: "zygo-screen2.png" },
  { src: screen3, label: "Book a Ride",   hint: "zygo-screen3.png" },
  { src: screen4, label: "Live Tracking", hint: "zygo-screen4.png" },
  { src: screen5, label: "In-app Chat",   hint: "zygo-screen5.png" },
];

const N     = screens.length;
const ANGLE = 360 / N;            // 72° per card
const AUTO_INTERVAL = 3000;       // ms between auto-rotations
const RESUME_DELAY  = 4500;       // ms of inactivity before auto resumes
const WHEEL_THROTTLE = 550;       // ms between wheel-triggered rotations

function ZygoPhones() {
  const [rotation, setRotation] = useState(0);
  const [auto, setAuto]         = useState(true);
  const resumeTimer = useRef(null);
  const lastWheel   = useRef(0);
  const wrapperRef  = useRef(null);

  /* ── auto-rotate ── */
  useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => setRotation(r => r - ANGLE), AUTO_INTERVAL);
    return () => clearInterval(t);
  }, [auto]);

  /* ── pause auto + schedule resume ── */
  const pauseAuto = useCallback(() => {
    setAuto(false);
    clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setAuto(true), RESUME_DELAY);
  }, []);

  /* ── mouse-wheel handler (throttled, non-passive) ── */
  const handleWheel = useCallback((e) => {
    e.preventDefault();
    const now = Date.now();
    if (now - lastWheel.current < WHEEL_THROTTLE) return;
    lastWheel.current = now;
    setRotation(r => r + (e.deltaY > 0 ? -ANGLE : ANGLE));
    pauseAuto();
  }, [pauseAuto]);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [handleWheel]);

  /* ── active index from rotation ── */
  const activeIdx =
    ((Math.round(-rotation / ANGLE) % N) + N) % N;

  return (
    <div className="zp-wrapper" ref={wrapperRef}>
      {/* 3-D ring */}
      <div className="zp-carousel">
        <div
          className="zp-ring"
          style={{ transform: `rotateY(${rotation}deg)` }}
        >
          {screens.map((s, i) => (
            <div
              className="zp-phone"
              key={i}
              style={{
                transform: `rotateY(${i * ANGLE}deg) translateZ(var(--zp-radius))`,
              }}
            >
              <div className="zp-notch" />
              {s.src ? (
                <img src={s.src} alt={s.label} className="zp-screenshot" />
              ) : (
                <div className="zp-placeholder">
                  <FaMobileAlt className="zp-ph-icon" />
                  <span className="zp-ph-label">{s.label}</span>
                  <span className="zp-ph-hint">{s.hint}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* active screen name */}
      <span className="zp-active-label">{screens[activeIdx].label}</span>

      {/* dot nav */}
      <div className="zp-dots">
        {screens.map((_, i) => (
          <button
            key={i}
            className={`zp-dot${i === activeIdx ? " zp-dot-active" : ""}`}
            onClick={() => { setRotation(-i * ANGLE); pauseAuto(); }}
            aria-label={`Screen ${i + 1}`}
          />
        ))}
      </div>

      <span className="zp-caption">ZYGO RIDE — App Preview</span>
    </div>
  );
}

export default ZygoPhones;
