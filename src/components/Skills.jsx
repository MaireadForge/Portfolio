import React from "react";

// EVERY SINGLE TECH STACK DETAIL: Expanded into a comprehensive 15-item icon grid
const TECH_ICONS = [
  { name: "C++", color: "#00599C", path: "M2 16C2 8.3 8.3 2 16 2s14 6.3 14 14-6.3 14-14 14S2 23.7 2 16zm18.2 4.8l-1.3-1.5c-1.2 1.1-2.7 1.7-4.4 1.7-3.6 0-6.4-2.7-6.4-6.3s2.8-6.3 6.4-6.3c1.7 0 3.1.6 4.3 1.6l1.3-1.6C18.4 7.1 16.4 6.3 14.5 6.3 9.4 6.3 5.3 10.3 5.3 15.6s4.1 9.3 9.2 9.3c1.9 0 4-.9 5.7-2.6z" },
  { name: "Python", color: "#3776AB", path: "M16 2a4.4 4.4 0 0 0-4.4 4.4v2.2h4.4v.6H9.4A4.4 4.4 0 0 0 5 13.6v4.4A4.4 4.4 0 0 0 9.4 22.4h1.7v-2.5a2.5 2.5 0 0 1 2.5-2.5h6.6a2.5 2.5 0 0 0 2.5-2.5V8.4A4.4 4.4 0 0 0 23.3 4H21.1V6.2a.8.8 0 1 1-1.6 0V4H16zm-3.1 2.2a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6z" },
  { name: "JavaScript", color: "#F7DF1E", path: "M2 2h28v28H2V2zm22.2 20.8c0-1.5-.9-2.5-2.8-3.2l-1.1-.4c-1-.4-1.4-.7-1.4-1.3 0-.6.5-1 1.2-1 .8 0 1.3.4 1.5 1l2.1-1.3c-.6-1.3-1.8-2-3.6-2-2.3 0-3.8 1.4-3.8 3.4 0 1.6 1 2.6 2.8 3.2l1.1.4c1.2.4 1.5.8 1.5 1.4 0 .7-.6 1.2-1.5 1.2-1.1 0-1.8-.6-2.1-1.4l-2.2 1.3c.7 1.6 2.1 2.5 4.3 2.5 2.6-.1 4-1.4 4-3.5z" },
  { name: "TypeScript", color: "#3178C6", path: "M4 4h24v24H4V4zm13.1 13.9h-2.1v6.5h-2.1v-6.5H10.7v-1.8h6.5v1.8zm5.7 4.2c-.3.6-.9 1.1-1.6 1.5-.7.3-1.6.5-2.6.5-1 0-1.9-.2-2.6-.5-.7-.4-1.2-.9-1.5-1.5l1.7-1c.4.7 1.2 1.1 2.2 1.1.5 0 .9-.1 1.2-.3.3-.2.4-.5.4-.9 0-.3-.1-.5-.3-.7-.2-.2-.5-.3-.8-.4l-1-.3c-.8-.3-1.4-.7-1.8-1.2-.4-.5-.6-1.1-.6-1.9 0-.8.3-1.5.8-2 .5-.5 1.3-.8 2.2-.8.9 0 1.7.2 2.3.6.6.4 1 .9 1.2 1.7l-1.7.7c-.3-.6-.8-1-1.5-1-.4 0-.8.1-1 .3-.2.2-.3.4-.3.8 0 .2.1.5.3.6.2.2.5.3 1 .5l1 .3c.9.3 1.5.7 1.9 1.2.4.5.6 1.2.6 2 0 .8-.2 1.5-.7 2z" },
  { name: "React", color: "#61DAFB", path: "M29 16c0 1.9-1.7 4.5-4.8 6.9-3.1 2.4-6.9 4.1-10.2 4.1s-5.1-1.1-5.1-2.5c0-1.9 1.7-4.5 4.8-6.9 3.1-2.4 6.9-4.1 10.2-4.1S29 14.6 29 16z" },
  { name: "NextJS", color: "#000000", path: "M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2zm4.3 21.3l-5.9-7.8v7.8h-1.9V10.8h1.9l5.8 7.7V10.8h1.9v12.5h-1.8z" },
  { name: "HTML5", color: "#E34F26", path: "M5 3l2.2 24.5L16 30l8.8-2.5L27 3H5zm16.5 9.3h-7.6l-.2 2.5h7.4l-.7 7.7-5.4 1.5-5.4-1.5-.4-3.7h2.5l.2 1.8 3.1.9 3.1-.9.3-3.6H10.5l-.7-7.7h12.1l-.4 3z" },
  { name: "CSS3", color: "#1572B6", path: "M5 3l2.2 24.5L16 30l8.8-2.5L27 3H5zm4.8 6.2h12.3l-.3 3.1H12.6l.3 3.1h6.7l-.6 6.3-3 1-3-1-.2-2.1H10.2l.3 4.2 5.5 1.8 5.5-1.8.8-9.3H13.2l-.3-3.1h9.7l.3-3.1H9.5l.1.1z" },
  { name: "Vite", color: "#646CFF", path: "M25.4 3L16 22.5 6.6 3h18.8zM16 30l7-10H9l7 10z" },
  { name: "NodeJS", color: "#339933", path: "M16 2L4 9v14l12 7 12-7V9L16 2zm10 21.7l-10 5.8-10-5.8v-11.4l10-5.8 10 5.8v11.4z" },
  { name: "Express", color: "#000000", path: "M4 10h5v2H4zm0 5h8v2H4zm0 5h6v2H4zm11-10h13v12H15zm2 2v8h9v-8z" },
  { name: "Socket.io", color: "#010101", path: "M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2zm0 24c-5.5 0-10-4.5-10-10S10.5 6 16 6s10 4.5 10 10-4.5 10-10 10zm-1-15h2v6h-2zm0 8h2v2h-2z" },
  { name: "MySQL", color: "#4479A1", path: "M16 2C8.3 2 2 5.1 2 9v14c0 3.9 6.3 7 14 7s14-3.1 14-7V9c0-3.9-6.3-7-14-7zm0 4c5 0 9 1.3 9 3s-4 3-9 3-9-1.3-9-3 4-3 9-3zm0 18c-5 0-9-1.3-9-3v-3.5c1.8 1.3 5.1 2 9 2s7.2-.7 9-2V21c0 1.7-4 3-9 3zm0-6.5c-5 0-9-1.3-9-3v-3.5c1.8 1.3 5.1 2 9 2s7.2-.7 9-2v3.5c0 1.7-4 3-9 3z" },
  { name: "MongoDB", color: "#47A248", path: "M16 2s6 5 6 11c0 4.4-2.7 8-6 11-3.3-3-6-6.6-6-11 0-6 6-11 6-11zm0 4.5c-2.2 2.8-3.5 5.5-3.5 8.5 0 2.5 1.3 4.8 3.5 6.7 2.2-1.9 3.5-4.2 3.5-6.7 0-3-1.3-5.7-3.5-8.5z" },
  { name: "Figma", color: "#F24E1E", path: "M12 2a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4V6a4 4 0 0 0-4-4zm4 8a4 4 0 0 0 4-4 4 4 0 0 0-4 4v4z" },

  // --- Platforms & Design ---
  { name: "Git & GitHub", path: "M16 2C7.2 2 0 9.2 0 18c0 7 4.5 13 10.7 15.1.8.1 1-.4 1-.8v-2.8c-4.5 1-5.4-2.1-5.4-2.1-.7-1.9-1.8-2.4-1.8-2.4-1.5-1 .1-1 .1-1 1.6.1 2.5 1.7 2.5 1.7 1.4 2.5 3.8 1.8 4.7 1.4.1-1 .6-1.8 1-2.2-3.6-.4-7.3-1.8-7.3-8 0-1.8.6-3.2 1.7-4.3-.2-.4-.7-2.1.2-4.3 0 0 1.4-.4 4.5 1.7A15.7 15.7 0 0 1 16 8c1.4 0 2.7.2 4 .5 3.1-2.1 4.5-1.7 4.5-1.7.9 2.2.3 3.9.2 4.3 1.1 1.1 1.7 2.5 1.7 4.3 0 6.2-3.7 7.6-7.3 8 .6.5 1.1 1.5 1.1 3v4.4c0 .4.2.9 1.1.8C27.5 31 32 25 32 18c0-8.8-7.2-16-16-16z" },
];

// RECTIFIED SPECIALTIES: Clean structural computer science focus areas
const CORE_CONCEPTS = [
  { title: "Full Stack Development", icon: "🧠" },
  { title: "Backend Engineering", icon: "🧩" },
  { title: "Data Structures & Algorithms", icon: "🗄️" },
  { title: "API Systems Testing", icon: "⚙️" },
  { title: "AI Integrated Systems", icon: "🌐" },
  { title: "Core Fundamentals", icon: "📡" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "#eeeeee",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "120px 60px",
        boxSizing: "border-box"
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "80px",
          alignItems: "center"
        }}
      >
        
        {/* LEFT COLUMN: BRANDING AND FLOATING LOGO BOXES GRID */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(48px, 5vw, 64px)",
              fontWeight: 800,
              color: "#0f172a",
              lineHeight: 1.05,
              letterSpacing: "-2px",
              margin: 0
            }}
          >
            Engineering
          </h2>
          <h2
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(48px, 5vw, 64px)",
              fontWeight: 800,
              color: "#94a3b8",
              lineHeight: 1.05,
              letterSpacing: "-2px",
              margin: "0 0 50px 0"
            }}
          >
            Toolkit
          </h2>

          <div style={{ marginBottom: 24 }}>
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                color: "#64748b",
                fontWeight: 600,
                letterSpacing: "-0.2px"
              }}
            >
              My tech stack
            </span>
          </div>

          {/* Balanced 3x5 Grid displaying your complete technical toolkit seamlessly */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 74px)",
              gap: "18px"
            }}
          >
            {TECH_ICONS.map((icon, idx) => (
              <div
                key={idx}
                className="skill-pill" // Retains active hook links for flawless staggered GSAP entrance transitions
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
                <svg
                  viewBox="0 0 32 32"
                  style={{
                    width: "26px",
                    height: "26px",
                    fill: "#0f172a"
                  }}
                >
                  <path d={icon.path} />
                </svg>

                <span style={{ 
                  fontFamily: "'DM Sans', sans-serif", 
                  fontSize: "9px", 
                  fontWeight: 700, 
                  color: "#94a3b8", 
                  marginTop: "5px",
                  letterSpacing: "-0.1px",
                  textAlign: "center"
                }}>
                  {icon.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: VERTICAL CORE PRINCIPLES LIST */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            paddingTop: "20px"
          }}
        >
          {CORE_CONCEPTS.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px"
              }}
            >
              {/* Premium Circular Matte-Black Indicators */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  background: "#000000",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "18px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  flexShrink: 0
                }}
              >
                {item.icon}
              </div>

              {/* Speciality Metric Description Stack */}
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#475569",
                  letterSpacing: "-0.3px"
                }}
              >
                {item.title}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}