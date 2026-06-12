import React from "react";

const NAV_LINKS = [
  { label: "Projects", target: "#projects" },
  { label: "Experience", target: "#experience" },
  { label: "Tech Stack", target: "#skills" },
  { label: "Achievements", target: "#achievements" },
  { label: "Contact", target: "#contact", isButton: true }
];

export default function Navbar() {
  const handleScroll = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav style={{
      position: "fixed",
      top: "30px",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 1000,
      background: "rgba(255, 255, 255, 0.85)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderRadius: "99px",
      padding: "6px 8px 6px 24px",
      display: "flex",
      alignItems: "center",
      gap: "28px",
      boxShadow: "0 20px 40px rgba(15, 23, 42, 0.06), 0 1px 3px rgba(15, 23, 42, 0.02)",
      border: "1px solid rgba(255, 255, 255, 0.6)"
    }}>
      {/* Brand Label */}
      <span style={{ 
        fontFamily: "'DM Sans', sans-serif", 
        fontSize: "14px", 
        fontWeight: 800, 
        color: "#0f172a", 
        letterSpacing: "-0.3px",
        marginRight: "4px"
      }}>
        About Me
      </span>

      {/* Structured Nav Links */}
      <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
        {NAV_LINKS.map((link, idx) => {
          if (link.isButton) {
            return (
              <a
                key={idx}
                href={link.target}
                onClick={(e) => handleScroll(e, link.target)}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#ffffff",
                  textDecoration: "none",
                  background: "#0f172a",
                  padding: "10px 22px",
                  borderRadius: "99px",
                  transition: "transform 0.3s ease, background 0.3s ease",
                  display: "inline-flex",
                  alignItems: "center"
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.03)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              >
                {link.label}
              </a>
            );
          }

          return (
            <a
              key={idx}
              href={link.target}
              onClick={(e) => handleScroll(e, link.target)}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                color: "#64748b",
                textDecoration: "none",
                transition: "color 0.2s ease"
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#0f172a"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#64748b"}
            >
              {link.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}