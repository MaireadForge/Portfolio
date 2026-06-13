import React from "react";

// Coding profile links with brand styling colors matching the theme concept
const PROFILES = [
  { name: "LeetCode", color: "#f59e0b", url: "https://leetcode.com/u/Mairead_07/" }, 
  { name: "CodeChef", color: "#92400e", url: "https://www.codechef.com/users/glam_goal_07" },
  { name: "GFG", color: "#22c55e", url: "https://www.geeksforgeeks.org/user/synapse_07/" }
];

const ACHIEVEMENTS_LIST = [
  { 
    title: "University Topper", 
    detail: "Exceptional academic performance with a 9.42 CGPA", 
    icon: "🎓",
    certificateUrl: "https://drive.google.com/file/d/1PDYvX3XjnhUM_G0cKwRZv9-PVUlk1Nxh/view?usp=sharing" 
  },
  { 
    title: "GATE CS'26 Qualified", 
    detail: "AIR 6375 | 520 Score | 44.55 Marks", 
    icon: "🏆",
    certificateUrl: "https://drive.google.com/file/d/10hzuGxWN9dTJl1KSzmVKxqs_VLM362q-/view?usp=sharing" 
  },
  { 
    title: "Infosys Springboard", 
    detail: "Pragati Path to Future Cohort Program", 
    icon: "🌿",
    certificateUrl: "https://drive.google.com/file/d/1igQRw16A9pGegIb6w18O-6YlvZBarSFD/view?usp=sharing" 
  },
  { 
    title: "NPTEL: Intro to IoT", 
    detail: "Scored 93% — Secured Top 1% Rank Elite Badge", 
    icon: "⭐",
    certificateUrl: "https://your-link.com/nptel-iot" 
  },
  { 
    title: "Udemy Certified", 
    detail: "Professional Verification in Web Architecture Foundations", 
    icon: "📜",
    certificateUrl: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-0677b505-0add-4346-a2ab-aa8c836578ef.pdf" 
  },
   { 
    title: "SheFi Scholar", 
    detail: "Web3 & Blockchain Educational Fellowship Track", 
    icon: "⚛️",
    certificateUrl: null 
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "#eeeeee", 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "120px 60px",
        boxSizing: "border-box",
        borderTop: "1px solid #e2e8f0" 
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
              Coding Profiles (Solved 700+ problems across platforms)
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 74px)", gap: "18px" }}>
            {PROFILES.map((profile, idx) => (
              <a 
                key={idx} 
                href={profile.url} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', position: 'relative' }}
              >
                <div
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
                  <div style={{ width: "24px", height: "24px", borderRadius: "6px", background: profile.color, opacity: 0.15, position: "absolute" }}></div>
                  <span style={{ fontSize: "18px", zIndex: 1, fontWeight: "bold", color: profile.color }}>
                    {profile.name[0]}
                  </span>

                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "9px", fontWeight: 700, color: "#475569", marginTop: "6px", letterSpacing: "-0.1px" }}>
                    {profile.name}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: VERTICAL RECOGNITION LIST */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", paddingTop: "20px" }}>
          {ACHIEVEMENTS_LIST.map((item, idx) => (
            <div key={idx} style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              
              <div style={{ width: "48px", height: "48px", background: "#000000", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "18px", boxShadow: "0 4px 12px rgba(0,0,0,0.15)", flexShrink: 0 }}>
                {item.icon}
              </div>
              
              <div style={{ display: "flex", flexDirection: "column" }}>
                
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", fontWeight: 700, color: "#475569", letterSpacing: "-0.3px" }}>
                    {item.title}
                  </span>
                  
                  {/* UPDATED EXTERNAL DIRECTIONAL VIEW LINK */}
                  {item.certificateUrl && (
                    <a
                      href={item.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "#94a3b8",
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                        display: "inline-flex",
                        alignItems: "center"
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = "#0f172a"}
                      onMouseLeave={(e) => e.currentTarget.style.color = "#94a3b8"}
                    >
                      (View ↗)
                    </a>
                  )}
                </div>

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