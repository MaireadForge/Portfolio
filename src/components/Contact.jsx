import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        minHeight: "85vh",
        width: "100%",
        background: "#eeeeee",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "100px 60px",
        boxSizing: "border-box",
        borderTop: "1px solid #e2e8f0"
      }}
    >
      <div style={{ maxWidth: "1120px", width: "100%", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "80px", alignItems: "start" }}>
        
        {/* LEFT COLUMN: CALL TO ACTION HEADINGS */}
        <div>
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(40px, 5vw, 60px)", fontWeight: 800, color: "#0f172a", lineHeight: 1.1, letterSpacing: "-2px", margin: 0 }}>
            Let's build<br />something <span style={{ color: "#94a3b8" }}>together</span>
          </h2>
          
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: "#64748b", lineHeight: 1.6, marginTop: "24px", maxWidth: "420px" }}>
            Open for software engineering internships, technical collaborations, and core systems architecture opportunities.
          </p>

          <div style={{ marginTop: "50px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "11px", color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>Email Reference</span>
              <a href="mailto:anshita@example.com" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "18px", fontWeight: 700, color: "#0f172a", textDecoration: "none" }}>anshita@example.com</a>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", marginTop: "12px" }}>
              <span style={{ fontSize: "11px", color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>Location Location</span>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", fontWeight: 600, color: "#475569" }}>Indore, Madhya Pradesh, India</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: REFINED LINK INTERFACE */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
          <span style={{ fontSize: "11px", color: "#64748b", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>Network Channels</span>
          
          {[
            { platform: "LinkedIn", link: "https://linkedin.com/in/", icon: "🔗" },
            { platform: "GitHub Handle", link: "https://github.com/", icon: "💻" },
            { platform: "LeetCode Profile", link: "https://leetcode.com/", icon: "🏆" }
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "#ffffff",
                padding: "22px 28px",
                borderRadius: "20px",
                textDecoration: "none",
                boxShadow: "0 10px 25px rgba(0,0,0,0.03)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateX(6px)";
                e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateX(0px)";
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.03)";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "18px" }}>{item.icon}</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", fontWeight: 700, color: "#0f172a" }}>{item.platform}</span>
              </div>
              <span style={{ color: "#94a3b8", fontSize: "14px", fontWeight: 700 }}>→</span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}