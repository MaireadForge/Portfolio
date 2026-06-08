export default function Projects({ projectsSectionRef }) {
  return (
    <section
      id="projects"
      ref={projectsSectionRef}
      style={{
        background: "#eeeeee",
        minHeight: "100vh",
        borderTop: "1px solid #e5e5e5",
        position: "relative",
        padding: "60px 60px 100px",
      }}
    >
      {/* Header */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginBottom: 60,
      }}>
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
            fontSize: "clamp(40px, 6vw, 72px)",
            fontWeight: 800, color: "#0f172a",
            letterSpacing: "-3px", lineHeight: 1,
          }}>
            Latest Projects
          </h2>
        </div>
        <a href="#" style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 13, color: "#555",
          textDecoration: "none",
          borderBottom: "1px solid #aaa",
          paddingBottom: 2,
        }}>
          View All →
        </a>
      </div>

      {/* Empty grid slots — cards fly here from Hero via GSAP in App.jsx */}
      <div
        id="projects-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 20,
        }}
      >
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            id={`grid-slot-${i}`}
            style={{
              aspectRatio: "16/10",
              borderRadius: 16,
              background: "rgba(0,0,0,0.04)",
              border: "1px dashed #ddd",
            }}
          />
        ))}
      </div>
    </section>
  );
}