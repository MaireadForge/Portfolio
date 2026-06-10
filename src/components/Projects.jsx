export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        background: "#eeeeee",
        height: "100vh",
        position: "relative",
        padding: "80px 60px 40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: 40,
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto 40px",
        }}
      >
        <div>
          <div style={{
            fontSize: 10, color: "#aaa",
            letterSpacing: "3px", textTransform: "uppercase",
            fontFamily: "'DM Sans', sans-serif", marginBottom: 10,
          }}>
            Selected Work
          </div>
          <h2 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(40px, 5vw, 64px)",
            fontWeight: 800, color: "#0f172a",
            letterSpacing: "-2px", lineHeight: 1,
          }}>
            Latest Projects
          </h2>
        </div>
        <a href="#" style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 13, color: "#555",
          textDecoration: "none", borderBottom: "1px solid #aaa",
          paddingBottom: 2,
        }}>
          View All →
        </a>
      </div>

      {/* Dynamic Grid Coordinates */}
      <div
        id="projects-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 30,
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            id={`grid-slot-${i}`}
            style={{
              aspectRatio: "16/10",
              borderRadius: 18,
              background: "transparent", // Completely invisible box anchors
              position: "relative",
            }}
          />
        ))}
      </div>
    </section>
  );
}