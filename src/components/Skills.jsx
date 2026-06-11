const SKILLS_DATA = [
  { category: "Frontend", tech: ["React.js", "Next.js", "TailwindCSS", "Framer Motion", "GSAP ScrollTrigger", "Redux Toolkit"] },
  { category: "Backend & DB", tech: ["Node.js", "Express", "GraphQL", "MongoDB", "PostgreSQL", "Redis", "WebSockets"] },
  { category: "AI & Tools", tech: ["Python", "TensorFlow", "PyTorch", "Git / GitHub", "Docker", "AWS Cloud Services"] }
];

export default function Skills() {
  return (
    <section id="skills" style={{ minHeight: "100vh", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "100px 40px" }}>
      
      {/* Section Header */}
      <div style={{ maxWidth: "1120px", width: "100%", marginBottom: 60, textAlign: "center" }}>
        <div style={{ fontSize: 11, color: "#888", letterSpacing: "2px", textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, marginBottom: 6 }}>
          Expertise
        </div>
        <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(32px, 3.5vw, 44px)", fontWeight: 800, color: "#0f172a", letterSpacing: "-1px" }}>
          Technical Superpowers
        </h2>
      </div>

      {/* Grid Track Wrapper */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 32, maxWidth: "1120px", width: "100%" }}>
        {SKILLS_DATA.map((group, idx) => (
          <div 
            key={idx} 
            style={{ 
              background: "#ffffff", 
              borderRadius: 24, 
              padding: 32, 
              boxShadow: "0 15px 40px rgba(0,0,0,0.03)", 
              border: "1px solid rgba(0,0,0,0.04)" 
            }}
          >
            <h3 style={{ fontSize: 14, fontWeight: 700, color: "#475569", textTransform: "uppercase", letterSpacing: "1px", fontFamily: "'DM Sans', sans-serif", marginBottom: 20, borderBottom: "1px solid #f1f5f9", paddingBottom: 12 }}>
              {group.category}
            </h3>
            
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {group.tech.map((skill, sIdx) => (
                <div 
                  key={sIdx} 
                  className="skill-pill"
                  style={{ 
                    padding: "10px 18px", 
                    background: "#0f172a", 
                    borderRadius: 999, 
                    display: "inline-flex", 
                    alignItems: "center",
                    boxShadow: "0 4px 12px rgba(15,23,42,0.15)",
                    willChange: "transform, opacity"
                  }}
                >
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#fff", fontFamily: "'DM Sans', sans-serif" }}>
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}