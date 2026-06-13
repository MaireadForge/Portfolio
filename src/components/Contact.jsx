import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "#eeeeee",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "80px 24px",
        boxSizing: "border-box"
      }}
    >
      {/* CENTRALIZED LARGE CARD */}
      <div
        style={{
          maxWidth: "840px",
          width: "100%",
          background: "#ffffff",
          borderRadius: "32px",
          padding: "56px 40px",
          boxSizing: "border-box",
          boxShadow: "0 20px 50px rgba(15, 23, 42, 0.04), 0 1px 3px rgba(15, 23, 42, 0.01)",
          border: "1px solid rgba(0, 0, 0, 0.03)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center"
        }}
      >
        {/* AVATAR BADGE / INITIALS PLACEHOLDER */}
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "16px",
            background: "#f1f5f9",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "24px",
            fontWeight: 800,
            color: "#0f172a",
            fontFamily: "'DM Sans', sans-serif",
            marginBottom: "16px",
            border: "1px solid rgba(0, 0, 0, 0.02)"
          }}
        >
          A
        </div>

        {/* PROFILE SUB-TEXT */}
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", fontWeight: 700, color: "#0f172a", margin: 0 }}>
          Anshita
        </div>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 500, color: "#64748b", marginTop: "2px", marginBottom: "32px" }}>
          Full-Stack Engineer
        </div>

        {/* MAIN CALL TO ACTION HEADER */}
        <h2 style={{ 
          fontFamily: "'DM Sans', sans-serif", 
          fontSize: "clamp(32px, 4.5vw, 48px)", 
          fontWeight: 800, 
          color: "#0f172a", 
          lineHeight: 1.2, 
          letterSpacing: "-1.5px", 
          margin: "0 auto",
          maxWidth: "600px"
        }}>
          Let's build something <span style={{ color: "#94a3b8" }}>together</span>
        </h2>
        
        {/* CARD DESCRIPTION */}
        <p style={{ 
          fontFamily: "'Inter', sans-serif", 
          fontSize: "15px", 
          color: "#64748b", 
          lineHeight: 1.6, 
          marginTop: "16px", 
          marginBottom: "40px",
          maxWidth: "520px" 
        }}>
          Open for software engineering internships, technical collaborations, and core systems architecture opportunities.
        </p>

        

        {/* INTERACTIVE BUTTONS FOOTER CONTAINER */}
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
          
          {/* PRIMARY BLACK BUTTON */}
          <a
            href="mailto:anshitaa.shrivastava2005@gmail.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "#0f172a",
              color: "#ffffff",
              padding: "14px 28px",
              borderRadius: "99px",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 10px 25px rgba(15, 23, 42, 0.25)",
              transition: "transform 0.2s ease"
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
          >
            <span>✉</span> Email me
          </a>

          {/* SECONDARY OUTLINE BUTTONS */}
          {[
            { label: "LinkedIn", url: "https://www.linkedin.com/in/anshita-shrivastava-73a07929a/", icon: "🔗" },
            { label: "GitHub", url: "https://github.com/MaireadForge", icon: "💻" }
          ].map((btn, idx) => (
            <a
              key={idx}
              href={btn.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "#ffffff",
                color: "#0f172a",
                padding: "14px 28px",
                borderRadius: "99px",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                fontWeight: 700,
                textDecoration: "none",
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.02)",
                transition: "transform 0.2s ease, background 0.2s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.background = "#f8fafc";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.background = "#ffffff";
              }}
            >
              <span>{btn.icon}</span> {btn.label}
            </a>
          ))}

        </div>
      </div>
    </section>
  );
}