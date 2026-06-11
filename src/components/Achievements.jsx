import React from "react";

// Coding profile links with brand styling colors matching the theme concept
const PROFILES = [
  { name: "LeetCode", color: "#f59e0b", path: "M16 2h2v28h-2z" }, // Simplistic vector paths for alignment
  { name: "CodeChef", color: "#92400e", path: "M12 2h4v26h-4z" },
  { name: "GFG", color: "#22c55e", path: "M8 2h6v24H8z" }
];

const ACHIEVEMENTS_LIST = [
  { title: "University Topper", detail: "Exceptional academic performance with a 9.42 CGPA", icon: "🎓" },
  { title: "GATE CS Qualified", detail: "Achieved an elite All India Rank (AIR) 6375", icon: "🏆" },
  { title: "GSSOC Contributor", detail: "GirlScript Summer of Code • Open Source Integration", icon: "💻" },
  { title: "SheFi Scholar", detail: "Web3 & Blockchain Educational Fellowship Track", icon: "⚛️" },
  { title: "Infosys Springboard", detail: "Pragati Path to Future Cohort Program", icon: "🌿" },
  { title: "Udemy Certified", detail: "Professional Verification in Web Architecture Foundations", icon: "📜" },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "#eeeeee", // Keeps it entirely matching the target theme layout
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "120px 60px",
        boxSizing: "border-box",
        borderTop: "1px solid #e2e8f0" // Clean divider layout transition 
      }}
    >
      <div style={{ maxWidth: "1120px", width: "100%", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "80px", alignItems: "center" }}>
        
        {/* LEFT COLUMN: BRANDING AND CODING PLATFORMS GRID */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(48px, 5vw, 64px)", fontWeight: 800, color: "#0f172a", lineHeight: 1.05, letterSpacing: "-2px", margin: 0 }}>
            Achievements &
          </h2>
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(48px, 5vw, 64px)", fontWeight: 800, color: "#94a3b8", lineHeight: 1.05, letterSpacing: "-2px", margin: "0 0 50px 0" }}>
            Certifications
          </h2>

          <div style={{ marginBottom: 24 }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "#64748b", fontWeight: 600, letterSpacing: "-0.2px" }}>
              Coding Profiles
            </span>
          </div>

          {/* Profile Cards using the exact grid specification style from your references */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 74px)", gap: "18px" }}>
            {PROFILES.map((profile, idx) => (
              <div
                key={idx}
                className="skill-pill"
                style={{
                  width: "74px",
                  height: "74px",
                  background: "#ffffff",
                  borderRadius: "18px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.04), 0 2px 6px rgba(0,0,0,0.02)",
                  transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-6px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
              >
                {/* Visual branding container for coding nodes */}
                <div style={{ width: "24px", height: "24px", borderRadius: "6px", background: profile.color, opacity: 0.15, position: "absolute" }}></div>
                <span style={{ fontSize: "18px", zIndex: 1, fontWeight: "bold", color: profile.color }}>
                  {profile.name[0]}
                </span>

                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "9px", fontWeight: 700, color: "#475569", marginTop: "6px", letterSpacing: "-0.1px" }}>
                  {profile.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: VERTICAL RECOGNITION LIST */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", paddingTop: "20px" }}>
          {ACHIEVEMENTS_LIST.map((item, idx) => (
            <div key={idx} style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              {/* Core Round Icon Badges matching theme standards */}
              <div style={{ width: "48px", height: "48px", background: "#000000", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "18px", boxShadow: "0 4px 12px rgba(0,0,0,0.15)", flexShrink: 0 }}>
                {item.icon}
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", fontWeight: 600, color: "#475569", letterSpacing: "-0.3px" }}>
                  {item.title}
                </span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#64748b", marginTop: "2px" }}>
                  {item.detail}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}