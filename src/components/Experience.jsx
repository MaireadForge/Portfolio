const TIMELINE_DATA = [
  { year: "2025 - Present", role: "Full Stack Engineering Intern", company: "CoGrow", description: "Architected real-time dashboard tracking features using React, Node.js, and web sockets. Reduced data fetching latencies by 35%.", glow: "#3b82f6" },
  { year: "2024", role: "AI Software Contributor", company: "NarrativeX", description: "Implemented transformer-based natural language processing pipelines and engineered vector search embeddings integration patterns.", glow: "#22c55e" },
  { year: "2023", role: "Computer Vision Lead", company: "ShopLens", description: "Developed custom convolutional neural networks for asset sorting operations deployed across container platforms.", glow: "#a855f7" },
  { year: "2022", role: "B.Tech IT Undergrad", company: "MITS Gwalior", description: "Started core technical foundations journey. Specialized in algorithm structures, data modeling variants, and systems architectures.", glow: "#f97316" },
];

export default function Experience() {
  return (
    <div style={{ height: "100vh", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 60px", overflow: "hidden" }}>
      
      {/* Header section */}
      <div style={{ maxWidth: "1120px", width: "100%", margin: "0 auto 40px" }}>
        <div style={{ fontSize: 11, color: "#475569", letterSpacing: "2px", textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, marginBottom: 6 }}>
          Journey
        </div>
        <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(32px, 3.5vw, 44px)", fontWeight: 800, color: "#fff", letterSpacing: "-1px" }}>
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
              background: "#0f172a", 
              borderRadius: 24, 
              border: "1px solid rgba(255,255,255,0.05)", 
              padding: 32, 
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              flexShrink: 0,
              boxShadow: "0 20px 50px rgba(0,0,0,0.2)"
            }}
          >
            <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at 10% 10%, ${item.glow}15 0%, transparent 60%)`, pointerEvents: "none", borderRadius: 24 }} />
            
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <span style={{ fontSize: 13, color: item.glow, fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>{item.year}</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif" }}>0{idx + 1}</span>
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: "#fff", fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.5px", marginBottom: 4 }}>{item.role}</h3>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>{item.company}</div>
            </div>

            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6, margin: 0 }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}