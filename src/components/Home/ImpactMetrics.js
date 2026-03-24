import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Container } from "react-bootstrap";
import { IMPACT_METRICS } from "../../config/constants";

function AnimatedCounter({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const numericStr = value.replace(/[^0-9]/g, "");
    const suffix = value.replace(/[0-9]/g, "");
    const target = parseInt(numericStr, 10);
    if (isNaN(target)) {
      setDisplay(value);
      return;
    }
    const duration = 1400;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * target) + suffix);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, value]);

  return (
    <span ref={ref} className="impact-value">
      {display}
    </span>
  );
}

function ImpactMetrics() {
  return (
    <Container fluid className="impact-section">
      <div className="impact-grid">
        {IMPACT_METRICS.map((metric) => (
          <div className="impact-card" key={metric.label}>
            <AnimatedCounter value={metric.value} />
            <span className="impact-label">{metric.label}</span>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default ImpactMetrics;
