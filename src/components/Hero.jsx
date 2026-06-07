import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const PROJECT_CARDS = [
  { title: "CodeCollab", tag: "Real-time Web App", color: "#0f172a", accent: "#3b82f6" },
  { title: "NarrativeX", tag: "AI / ML Platform", color: "#0c1a12", accent: "#22c55e" },
  { title: "ShopLens", tag: "Computer Vision", color: "#1a0f2e", accent: "#a855f7" },
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const leftY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
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
      <motion.div style={{ y: leftY, opacity }}>

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
            fontSize: 12,
            color: "#333",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 400,
          }}>
            Gwalior, India
          </span>
        </motion.div>

        {/* Big name — bold sans like Austin */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* 3D depth layers */}
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
            fontSize: 15,
            fontWeight: 400,
            color: "#334155",
            marginTop: 28,
            maxWidth: 480,
            lineHeight: 1.75,
          }}
        >
          <strong>Full-stack developer & open source contributor.</strong>{" "}
          React & Node.js specialist. B.Tech IT student at MITS Gwalior,
          building real products and growing through every cohort.
        </motion.p>

        {/* Photo + Github CTA — exactly like Austin */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 0,
            marginTop: 36,
            background: "#0f172a",
            borderRadius: 999,
            padding: "6px 20px 6px 6px",
            cursor: "none",
          }}
        >
          {/* Photo circle */}
          <div style={{
            width: 42, height: 42,
            borderRadius: "50%",
            background: "#334155",
            border: "2px solid #475569",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 20,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            {/* Replace with your photo: */}
            {/* <img src="/photo.jpg" style={{width:"100%",height:"100%",objectFit:"cover"}} /> */}
            👤
          </div>

          {/* Plus sign */}
          <span style={{
            color: "#94a3b8",
            fontSize: 16,
            margin: "0 8px",
            fontWeight: 300,
          }}>+</span>

          {/* Github icon */}
          <div style={{
            width: 28, height: 28,
            borderRadius: "50%",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 16,
            marginRight: 12,
          }}>
            ⌨
          </div>

          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13,
            fontWeight: 600,
            color: "#fff",
            letterSpacing: "0.2px",
          }}>
            See My Github
          </span>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginTop: 48,
          }}
        >
          <div style={{ width: 24, height: "1px", background: "#aaa" }} />
          <span style={{
            fontSize: 9,
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#aaa",
            fontFamily: "'DM Sans', sans-serif",
          }}>
            Scroll to explore
          </span>
        </motion.div>
      </motion.div>

      {/* RIGHT — stacked fanned cards like Austin */}
<motion.div
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
  style={{
    position: "relative",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <div style={{ position: "relative", width: 340, height: 420 }}>
    {PROJECT_CARDS.map((card, i) => {
      const rotations = [-8, -2, 5];
      const offsets = [
        { x: -24, y: 20 },
        { x: -8, y: 8 },
        { x: 10, y: -6 },
      ];
      return (
        <motion.div
          key={card.title}
          whileHover={{ y: -8, rotate: 0, zIndex: 10, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          style={{
            position: "absolute",
            width: 300,
            height: 380,
            borderRadius: 20,
            background: card.color,
            border: "1px solid rgba(255,255,255,0.08)",
            rotate: rotations[i],
            x: offsets[i].x,
            y: offsets[i].y,
            zIndex: i,
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 24,
          }}
        >
          {/* Accent glow */}
          <div style={{
            position: "absolute", inset: 0,
            background: `radial-gradient(circle at 70% 20%, ${card.accent}25 0%, transparent 65%)`,
            pointerEvents: "none",
          }} />

          {/* Tag pill */}
          <div style={{
            display: "inline-flex",
            background: "rgba(0,0,0,0.35)",
            backdropFilter: "blur(8px)",
            borderRadius: 999,
            padding: "5px 12px",
            width: "fit-content",
            border: "1px solid rgba(255,255,255,0.08)",
          }}>
            <span style={{
              fontSize: 10,
              color: "rgba(255,255,255,0.65)",
              fontFamily: "'DM Sans', sans-serif",
            }}>
              {card.tag}
            </span>
          </div>

          {/* Title + link */}
          <div>
            <div style={{
              fontSize: 24,
              fontWeight: 800,
              color: "#fff",
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: "-0.5px",
              marginBottom: 10,
            }}>
              {card.title}
            </div>
            <div style={{
              fontSize: 11,
              color: "rgba(255,255,255,0.4)",
              fontFamily: "'DM Sans', sans-serif",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}>
              ↗ View Case Study
            </div>
          </div>
        </motion.div>
      );
    })}
  </div>
</motion.div>
    </section>
  );
}