import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      style={{
        height: "100vh",
        background: "#eeeeee",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        padding: "0 60px",
        gap: 40,
        position: "relative",
        cursor: "default", // Ensures the regular system arrow remains default here
      }}
    >
      {/* LEFT CONTENT AREA */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: 999,
            padding: "6px 14px",
            marginBottom: 28,
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e" }} />
          <span style={{ fontSize: 12, color: "#333", fontFamily: "'DM Sans', sans-serif" }}>
            Gwalior, Madhya Pradesh, India
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{ position: "relative", display: "inline-block" }}>
            {[
              { top: 8, left: 8, opacity: 0.025 },
              { top: 5, left: 5, opacity: 0.05 },
              { top: 2, left: 2, opacity: 0.08 },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  top: s.top, left: s.left,
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "clamp(40px, 5.5vw, 72px)",
                  fontWeight: 800,
                  lineHeight: 1,
                  letterSpacing: "-3px",
                  color: `rgba(0,0,0,${s.opacity})`,
                  userSelect: "none",
                  pointerEvents: "none",
                  whiteSpace: "nowrap",
                }}
              >
                Anshita Shrivastava<br />
                <span style={{ color: `rgba(80,80,80,${s.opacity * 1.5})` }}>Portfolio</span>
              </div>
            ))}
            <div style={{
              position: "relative",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(40px, 5.5vw, 72px)",
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-3px",
              color: "#0f172a",
            }}>
              Anshita Shrivastava<br />
              <span style={{ color: "#475569" }}>Portfolio</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            marginTop: 28,
            maxWidth: 520,
            cursor: "default",
          }}
        >
          {/* PARAGRAPH 1 */}
          <p style={{
            fontSize: 15,
            fontWeight: 400,
            color: "#334155",
            lineHeight: 1.75,
            margin: "0 0 16px 0",
            cursor: "text"
          }}>
            I'm a full-stack developer with a focus on <strong>MERN, Next.js, and TypeScript</strong>. I enjoy building products end-to-end — from database design to UI — and integrating AI where it genuinely adds value.
          </p>

          {/* PARAGRAPH 2 */}
          <p style={{
            fontSize: 15,
            fontWeight: 400,
            color: "#334155",
            lineHeight: 1.75,
            margin: "0 0 24px 0",
            cursor: "text"
          }}>
            Currently deepening my expertise in AI engineering — leveraging LLMs, RAG pipelines, LangChain, and TensorFlow to build intelligent, real-world solutions. Simultaneously leveling up in DevOps — containerization, cloud infrastructure, and CI/CD — because great products need both smart features and scalable infrastructure.
          </p>

          {/* METRICS ROW (FORCED TO NEXT LINE) */}
          <div style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            alignItems: "center"
          }}>
            {[
              { label: "CGPA", value: "9.4" },
              { label: "Recognition", value: "University Topper" },
              { label: "GATE 2026", value: "AIR 6375 (CSE)" }
            ].map((metric, idx) => (
              <div
                key={idx}
                style={{
                  background: "#ffffff",
                  border: "1px solid #ddd",
                  borderRadius: "99px",
                  padding: "4px 12px",
                  fontSize: "12px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.01)"
                }}
              >
                <span style={{ color: "#64748b", fontWeight: 500 }}>{metric.label}:</span>
                <span style={{ color: "#0f172a", fontWeight: 700 }}>{metric.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.a
          href="https://github.com/MaireadForge"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          whileHover={{ scale: 1.03 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            marginTop: 36,
            background: "#0f172a",
            borderRadius: 999,
            padding: "6px 20px 6px 6px",
            textDecoration: "none",
            cursor: "pointer", // Restores standard interactive pointing-hand cursor on hover
          }}
        >
          <div style={{
            width: 42, height: 42, borderRadius: "50%",
            background: "#334155", border: "2px solid #475569",
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20,
          }}>👤</div>
          <span style={{ color: "#94a3b8", fontSize: 16, margin: "0 8px" }}></span>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: "#fff" }}>
            See My Github →
          </span>
        </motion.a>
      </div>

      {/* RIGHT COLUMN (Kept clean so global cards align safely behind layout columns) */}
      <div style={{ height: "100%" }} />
    </section>
  );
}