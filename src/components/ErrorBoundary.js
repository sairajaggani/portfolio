import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "50vh",
            color: "var(--text-primary)",
            textAlign: "center",
            padding: "2rem",
          }}
        >
          <h2 style={{ marginBottom: "1rem" }}>Something went wrong.</h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
            Please refresh the page or try again later.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: "10px 24px",
              borderRadius: "8px",
              border: "2px solid var(--accent)",
              background: "transparent",
              color: "var(--accent)",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
