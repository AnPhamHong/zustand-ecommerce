import { useEffect, useState } from "react";

export default function UnsupportedDeviceWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isTooSmall, setIsTooSmall] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsTooSmall(window.innerWidth < 360);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  if (isTooSmall) {
    return (
      <div style={styles.wrapper}>
        <div style={styles.card}>
          <div style={styles.emoji}>📵</div>
          <h1 style={styles.title}>Oops! This device is not supported</h1>
          <p style={styles.text}>
            This website requires a screen width larger than 360px to display
            correctly.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={styles.button}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

const styles = {
  wrapper: {
    width: "100vw",
    height: "100vh",
    background: "#f5f5f5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
    textAlign: "center" as const,
  },
  card: {
    background: "white",
    padding: "2rem",
    borderRadius: "1rem",
    boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
    maxWidth: "360px",
  },
  emoji: {
    fontSize: "3rem",
    marginBottom: "1rem",
  },
  title: {
    fontSize: "20px",
    fontWeight: 600,
    marginBottom: "0.5rem",
  },
  text: {
    fontSize: "16px",
    color: "#666",
    marginBottom: "1.5rem",
  },
  button: {
    padding: "0.5rem 1rem",
    background: "#007aff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};
