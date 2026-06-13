const TIMELINE_DATA = [
  { year: "May 2026-Present", role: "Software Engineer Intern", company: "Webzian Digital Service Pvt. Ltd.", description: "Developing a Sports Club Management System featuring member onboarding, secure authentication, and event scheduling. Building operational admin dashboards for attendance tracking and player performance analytics.", glow: "#3b82f6" },
  { year: "Nov 2025-Jan 2026", role: "AI/ML Intern", company: "Infosys Springboard", description: "Developed an NLP Contract Review Assistant using Python, spaCy, LangChain, and LLMs to identify financial risks. Built the interactive frontend in Flutter and backend APIs with FastAPI.", glow: "#22c55e" },
  { year: "Sep 2025-Nov 2025", role: "Undergraduate Researcher", company: "Madhav Institute Of Technology and Science", description: "Built a Python/TensorFlow CNN audio pipeline with Librosa, achieving 85.12% accuracy on the Watkins Database. Co-authored and submitted a peer-reviewed research manuscript on multi-species acoustic signal classification (2025).", glow: "#a855f7" },
  { year: "Aug 2025-Sep 2025", role: "Open Source Contributor", company: "GirlScript Summer of Code (GSSOC)", description: "Contributed to multiple open-source repositories, optimization patches, and UI modules. Collaborated with maintainers via GitHub workflows to resolve production codebase issues.", glow: "#a855f7" },
];

export default function Experience() {
  return (
    <div style={{ height: "100vh", width: "100%", background: "#0f172a", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 60px", overflow: "hidden" }}>
      
      {/* Header section */}
      <div style={{ maxWidth: "1120px", width: "100%", margin: "0 auto 40px" }}>
        <div style={{ fontSize: 11, color: "#94a3b8", letterSpacing: "2px", textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, marginBottom: 6 }}>
          Journey
        </div>
        <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(32px, 3.5vw, 44px)", fontWeight: 800, color: "#ffffff", letterSpacing: "-1px" }}>
          Experience Timeline
        </h2>
      </div>

      {/* Horizontal Sliding Track Container */}
      <div id="experience-track" style={{ display: "flex", gap: 40, paddingLeft: "calc((100vw - 1120px) / 2)", width: "fit-content", willChange: "transform" }}>
        {TIMELINE_DATA.map((item, idx) => (
          <div 
            key={idx} 
            style={{ 
              width: "420px", 
              height: "280px", 
              background: "#eeeeee", /* The light gray theme color for cards */
              borderRadius: 24, 
              border: "1px solid rgba(0,0,0,0.03)", 
              padding: 32, 
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              flexShrink: 0,
              boxShadow: "0 20px 40px rgba(0,0,0,0.25)"
            }}
          >
            {/* Subtle light brand glow blending onto the gray cards */}
            <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at 10% 10%, ${item.glow}15 0%, transparent 60%)`, pointerEvents: "none", borderRadius: 24 }} />
            
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <span style={{ fontSize: 13, color: item.glow, fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}>{item.year}</span>
                <span style={{ fontSize: 12, color: "#64748b", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>0{idx + 1}</span>
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: "#0f172a", fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.5px", marginBottom: 4 }}>{item.role}</h3>
              <div style={{ fontSize: 14, color: "#475569", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>{item.company}</div>
            </div>

            <p style={{ fontSize: 14, color: "#334155", fontFamily: "'Inter', sans-serif", lineHeight: 1.6, margin: 0 }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}