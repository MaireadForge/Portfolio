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
                  fontSize: "clamp(52px, 7.5vw, 100px)",
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
              fontSize: "clamp(52px, 7.5vw, 100px)",
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

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 15,
            fontWeight: 400,
            color: "#334155",
            marginTop: 28,
            maxWidth: 480,
            lineHeight: 1.75,
            cursor: "text", // Allows clean native text highlight selector on copy
          }}
        >
          <strong>Full-stack developer & open source contributor.</strong> React & Node.js specialist. B.Tech IT student at MITS Gwalior, building real products and growing through every cohort.
        </motion.p>

        <motion.a
          href="https://github.com/"
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
          <span style={{ color: "#94a3b8", fontSize: 16, margin: "0 8px" }}>+</span>
          <div style={{
            width: 28, height: 28, borderRadius: "50%",
            background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, marginRight: 12,
          }}>⌨</div>
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