import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import pdf from "../../Assets/Sai Raj Aggani Full Stack.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { FiFileText, FiChevronUp } from "react-icons/fi";

function ResumeNew() {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const iframeHeight = width > 786 ? "85vh" : "60vh";

  return (
    <Container fluid className="resume-section">
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Resume</strong>
        </h1>
        <p style={{ color: "var(--text-secondary)", marginBottom: "2.5rem" }}>
          A quick look at my experience and background.
        </p>

        <div className="resume-toggle-row">
          <button
            className={`resume-toggle-btn${isOpen ? " resume-toggle-btn--open" : ""}`}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? (
              <>
                <FiChevronUp /> Hide Resume
              </>
            ) : (
              <>
                <FiFileText /> View Resume
              </>
            )}
          </button>
          <a
            href={pdf}
            download="Sai_Raj_Aggani_Resume.pdf"
            className="resume-download-link"
            aria-label="Download Resume PDF"
          >
            <AiOutlineDownload /> Download PDF
          </a>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="resume-pdf"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              style={{ overflow: "hidden", marginTop: "2.5rem" }}
            >
              <div className="resume-iframe-wrapper">
                <iframe
                  src={pdf}
                  title="Sai Raj Aggani Resume"
                  width="100%"
                  style={{ height: iframeHeight, border: "none", borderRadius: "8px", display: "block" }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Container>
  );
}

export default ResumeNew;
