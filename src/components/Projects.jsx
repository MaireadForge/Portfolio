export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        background: "#eeeeee",
        minHeight: "100vh",
        position: "relative",
        padding: "80px 40px", 
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center", 
      }}
    >
      {/* Dynamic Header Block Aligning with Wide Frame Boundaries */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: 40,
          width: "100%",
          maxWidth: "1120px", // Expanded to precisely frame wide grid dimensions
          paddingHorizontal: 10,
        }}
      >
        <div>
          <div style={{
            fontSize: 15, color: "#888",
            letterSpacing: "2px", textTransform: "uppercase",
            fontFamily: "'DM Sans', sans-serif", marginBottom: 6,
            fontWeight: 600,
          }}>
            Selected Work
          </div>
          <h2 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(32px, 3.5vw, 44px)",
            fontWeight: 800, color: "#0f172a",
            letterSpacing: "-1px", lineHeight: 1,
          }}>
            Latest Projects
          </h2>
        </div>
        <a 
          href="https://github.com/MaireadForge" // <-- Replace with your actual GitHub profile link
          target="_blank" 
          rel="noopener noreferrer" 
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 15, 
            color: "#555",
            textDecoration: "none", 
            borderBottom: "1px solid #ccc",
            paddingBottom: 4,
            fontWeight: 500,
          }}
        >
          View All →
        </a>
      </div>

      {/* Broad Target Grid Positions Layout */}
      <div
        id="projects-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "540px 540px", // Exact wide card specifications
          justifyContent: "center", 
          gap: "40px 40px", // Matches standard layout gutters
          width: "100%",
          maxWidth: "1120px",
        }}
      >
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            id={`grid-slot-${i}`}
            style={{
              width: 450, 
              height: 400,
              background: "transparent",
              position: "relative",
            }}
          />
        ))}
      </div>
    </section>
  );
}