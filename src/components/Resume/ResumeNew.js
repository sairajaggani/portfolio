import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import pdf from "../../Assets/Sai Raj Aggani Full Stack.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { FiFileText, FiChevronUp } from "react-icons/fi";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getScale = () => {
    if (width > 1200) return 1.7;
    if (width > 786) return 1.3;
    if (width > 500) return 0.8;
    return 0.6;
  };

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
              style={{ overflow: "hidden" }}
            >
              <Row className="resume pdf-viewer-row" style={{ marginTop: "2.5rem" }}>
                {loading && !error && (
                  <div className="resume-loading">
                    <div className="resume-skeleton" />
                    <p style={{ color: "var(--text-secondary)", marginTop: "1rem" }}>
                      Loading resume...
                    </p>
                  </div>
                )}

                {error && (
                  <div className="resume-loading">
                    <p style={{ color: "var(--text-secondary)" }}>
                      Failed to load resume.{" "}
                      <a
                        href={pdf}
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "var(--accent)" }}
                      >
                        Download it directly
                      </a>
                      .
                    </p>
                  </div>
                )}

                <Document
                  file={pdf}
                  onLoadSuccess={({ numPages }) => {
                    setNumPages(numPages);
                    setLoading(false);
                  }}
                  onLoadError={() => {
                    setError(true);
                    setLoading(false);
                  }}
                  className="d-flex flex-column align-items-center"
                  loading=""
                >
                  {numPages &&
                    Array.from({ length: numPages }, (_, index) => (
                      <div key={index + 1} className="resume-page-wrapper">
                        <Page
                          pageNumber={index + 1}
                          scale={getScale()}
                          renderTextLayer={false}
                          renderAnnotationLayer={false}
                        />
                      </div>
                    ))}
                </Document>
              </Row>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Container>
  );
}

export default ResumeNew;
