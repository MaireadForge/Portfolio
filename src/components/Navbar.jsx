import { motion } from "framer-motion";

export default function Navbar() {
  const linkStyle = {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 13,
    fontWeight: 400,
    color: "#555",
    textDecoration: "none",
    padding: "6px 14px",
    borderRadius: 999,
    transition: "background 0.2s, color 0.2s",
  };

  const hover = (e) => {
    e.target.style.background = "#f1f5f9";
    e.target.style.color = "#0f172a";
  };

  const leave = (e) => {
    e.target.style.background = "transparent";
    e.target.style.color = "#555";
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: "fixed",
        top: 16,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        gap: 8,
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(16px)",
        borderRadius: 999,
        padding: "10px 10px 10px 16px",
        border: "1px solid rgba(0,0,0,0.08)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        whiteSpace: "nowrap",
      }}
    >
      <span style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 14,
        fontWeight: 700,
        color: "#0f172a",
        marginRight: 8,
        letterSpacing: "-0.3px",
      }}>
        Anshita
      </span>

      <div style={{ width: 1, height: 16, background: "#e5e5e5", margin: "0 4px" }} />

      <a href="#projects" style={linkStyle} onMouseEnter={hover} onMouseLeave={leave}>
        Projects
      </a>
      <a href="#about" style={linkStyle} onMouseEnter={hover} onMouseLeave={leave}>
        About
      </a>
      <a href="#experience" style={linkStyle} onMouseEnter={hover} onMouseLeave={leave}>
        Experience
      </a>
      <a href="#oss" style={linkStyle} onMouseEnter={hover} onMouseLeave={leave}>
        OSS
      </a>

      <motion.a
        href="#contact"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 13,
          fontWeight: 600,
          color: "#fff",
          textDecoration: "none",
          background: "#0f172a",
          borderRadius: 999,
          padding: "8px 18px",
          marginLeft: 4,
          cursor: "none",
        }}
      >
        Contact
      </motion.a>
    </motion.nav>
  );
}