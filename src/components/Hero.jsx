import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PROJECT_CARDS = [
  { id: 1, tag: "Real-time Web App", title: "CodeCollab", color: "#0f172a", accent: "#3b82f6" },
  { id: 2, tag: "AI / ML Platform", title: "NarrativeX", color: "#0c1a12", accent: "#22c55e" },
  { id: 3, tag: "Computer Vision", title: "ShopLens", color: "#1a0f2e", accent: "#a855f7" },
  { id: 4, tag: "Internship Project", title: "CoGrow", color: "#1f0f05", accent: "#f97316" },
];

export default function Hero({ cardRefs, deckRef }) {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#eeeeee",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        padding: "0 60px",
        gap: 40,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* LEFT */}
      <div>
        {/* Location pill */}
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
          <div style={{
            width: 8, height: 8,
            borderRadius: "50%",
            background: "#22c55e",
          }} />
          <span style={{
            fontSize: 12, color: "#333",
            fontFamily: "'DM Sans', sans-serif",
          }}>
            Gwalior, India
          </span>
        </motion.div>

        {/* Big name with 3D depth */}
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
              <div key={i} style={{
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
              }}>
                Anshita Sharma<br />
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
              Anshita Sharma<br />
              <span style={{ color: "#475569" }}>Portfolio</span>
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 15, fontWeight: 400,
            color: "#334155",
            marginTop: 28, maxWidth: 480, lineHeight: 1.75,
          }}
        >
          <strong>Full-stack developer & open source contributor.</strong>{" "}
          React & Node.js specialist. B.Tech IT student at MITS Gwalior,
          building real products and growing through every cohort.
        </motion.p>

        {/* Github CTA */}
        <motion.a
          href="https://github.com/"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          whileHover={{ scale: 1.03 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 0,
            marginTop: 36,
            background: "#0f172a",
            borderRadius: 999,
            padding: "6px 20px 6px 6px",
            cursor: "none",
            textDecoration: "none",
          }}
        >
          <div style={{
            width: 42, height: 42, borderRadius: "50%",
            background: "#334155",
            border: "2px solid #475569",
            display: "flex", alignItems: "center",
            justifyContent: "center", fontSize: 20,
            overflow: "hidden", flexShrink: 0,
          }}>
            👤
          </div>
          <span style={{ color: "#94a3b8", fontSize: 16, margin: "0 8px" }}>+</span>
          <div style={{
            width: 28, height: 28, borderRadius: "50%",
            background: "#fff", display: "flex",
            alignItems: "center", justifyContent: "center",
            fontSize: 16, marginRight: 12,
          }}>
            ⌨
          </div>
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13, fontWeight: 600, color: "#fff",
          }}>
            See My Github →
          </span>
        </motion.a>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          style={{
            display: "flex", alignItems: "center",
            gap: 10, marginTop: 48,
          }}
        >
          <div style={{ width: 24, height: "1px", background: "#aaa" }} />
          <span style={{
            fontSize: 9, letterSpacing: "3px",
            textTransform: "uppercase", color: "#aaa",
            fontFamily: "'DM Sans', sans-serif",
          }}>
            Scroll to explore
          </span>
        </motion.div>
      </div>

      {/* RIGHT — stacked deck, controlled by GSAP from App */}
      <div
        ref={deckRef}
        style={{
          position: "relative",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ position: "relative", width: 320, height: 400 }}>
          {PROJECT_CARDS.map((card, i) => {
            const startRotations = [-9, -3, 4, 10];
            const startOffsets = [
              { x: -20, y: 16 },
              { x: -6,  y: 6  },
              { x: 8,   y: -4 },
              { x: 22,  y: -12},
            ];

            return (
              <div
                key={card.id}
                ref={(el) => (cardRefs.current[i] = el)}
                data-index={i}
                style={{
                  position: "absolute",
                  width: 300,
                  height: 370,
                  borderRadius: 18,
                  background: card.color,
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: 22,
                  zIndex: 4 - i,
                  transform: `rotate(${startRotations[i]}deg) translate(${startOffsets[i].x}px, ${startOffsets[i].y}px)`,
                }}
              >
                {/* Accent glow */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: `radial-gradient(circle at 70% 25%, ${card.accent}28 0%, transparent 65%)`,
                  pointerEvents: "none",
                }} />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 55%)",
                  pointerEvents: "none",
                }} />

                {/* Tag */}
                <div style={{
                  display: "inline-flex",
                  background: "rgba(0,0,0,0.4)",
                  backdropFilter: "blur(8px)",
                  borderRadius: 999,
                  padding: "5px 14px",
                  width: "fit-content",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}>
                  <span style={{
                    fontSize: 11,
                    color: "rgba(255,255,255,0.7)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}>
                    {card.tag}
                  </span>
                </div>

                {/* Title */}
                <div style={{
                  fontSize: 24, fontWeight: 800,
                  color: "#fff",
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: "-0.5px",
                }}>
                  {card.title}
                  <div style={{
                    fontSize: 11, fontWeight: 300,
                    color: "rgba(255,255,255,0.4)",
                    marginTop: 4,
                    fontFamily: "'DM Sans', sans-serif",
                  }}>
                    ↗ View Case Study
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}