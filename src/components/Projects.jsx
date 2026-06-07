import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    id: 1,
    tag: "Real-time Web App",
    title: "CodeCollab",
    desc: "Real-time collaborative coding platform with live cursors and AI code analysis.",
    color: "#0f172a",
    accent: "#3b82f6",
    github: "#",
    live: "#",
  },
  {
    id: 2,
    tag: "AI / ML Platform",
    title: "NarrativeX",
    desc: "AI-powered news intelligence platform using NLP and LLM pipelines.",
    color: "#0c1a12",
    accent: "#22c55e",
    github: "#",
    live: "#",
  },
  {
    id: 3,
    tag: "Computer Vision",
    title: "ShopLens",
    desc: "Visual search engine using ResNet50 to identify products from images.",
    color: "#1a0f2e",
    accent: "#a855f7",
    github: "#",
    live: "#",
  },
  {
    id: 4,
    tag: "Internship Project",
    title: "CoGrow",
    desc: "Full multi-section React landing page with Framer Motion animations.",
    color: "#1f0f05",
    accent: "#f97316",
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Final grid positions for each card
      const finalPositions = [
        { x: "-51%", y: "-52%", rotate: 0 }, // top-left
        { x: "51%",  y: "-52%", rotate: 0 }, // top-right
        { x: "-51%", y: "52%",  rotate: 0 }, // bottom-left
        { x: "51%",  y: "52%",  rotate: 0 }, // bottom-right
      ];

      // Starting stacked positions
      const startPositions = [
        { x: "-6%", y: "2%",  rotate: -9 },
        { x: "-2%", y: "-2%", rotate: -3 },
        { x: "2%",  y: "1%",  rotate: 4  },
        { x: "6%",  y: "-1%", rotate: 10 },
      ];

      // Set initial stacked state
      cardRefs.current.forEach((card, i) => {
        gsap.set(card, {
          x: startPositions[i].x,
          y: startPositions[i].y,
          rotate: startPositions[i].rotate,
          opacity: 1,
        });
      });

      // Animate cards flying out to grid on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        },
      });

      cardRefs.current.forEach((card, i) => {
        tl.to(
          card,
          {
            x: finalPositions[i].x,
            y: finalPositions[i].y,
            rotate: 0,
            duration: 1,
            ease: "power3.out",
          },
          i * 0.08 // stagger each card slightly
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{
        background: "#eeeeee",
        height: "100vh",
        borderTop: "1px solid #e5e5e5",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      {/* Header */}
<div
  style={{
    position: "absolute",
    top: 60,
    left: 60,
    right: 60,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    zIndex: 10,
  }}
>
  <div>
    <div
      style={{
        fontSize: 10,
        color: "#aaa",
        letterSpacing: "3px",
        textTransform: "uppercase",
        fontFamily: "'DM Sans', sans-serif",
        marginBottom: 10,
      }}
    >
      Selected Work
    </div>

    <h2
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "clamp(40px, 6vw, 72px)",
        fontWeight: 800,
        color: "#0f172a",
        letterSpacing: "-3px",
        lineHeight: 1,
      }}
    >
      Latest Projects
    </h2>
  </div>

  <a
    href="#"
    style={{
      fontFamily: "'DM Sans', sans-serif",
      fontSize: 13,
      color: "#555",
      textDecoration: "none",
      borderBottom: "1px solid #aaa",
      paddingBottom: 2,
    }}
  >
    View All →
  </a>
</div>

      {/* Cards — all stacked in center */}
      <div style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        {PROJECTS.map((project, i) => (
          <div
            key={project.id}
            ref={(el) => (cardRefs.current[i] = el)}
            style={{
              position: "absolute",
              width: "42%",
              aspectRatio: "16/10",
              borderRadius: 16,
              background: project.color,
              border: "1px solid rgba(255,255,255,0.07)",
              boxShadow: "0 16px 56px rgba(0,0,0,0.28)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: 24,
              zIndex: 4 - i,
              cursor: "none",
            }}
          >
            {/* Accent glow */}
            <div style={{
              position: "absolute", inset: 0,
              background: `radial-gradient(circle at 70% 25%, ${project.accent}28 0%, transparent 65%)`,
              pointerEvents: "none",
            }} />

            {/* Shimmer */}
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
                {project.tag}
              </span>
            </div>

            {/* Bottom */}
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              position: "relative",
            }}>
              <div>
                <div style={{
                  fontSize: 22,
                  fontWeight: 800,
                  color: "#fff",
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: "-0.5px",
                  marginBottom: 4,
                }}>
                  {project.title}
                </div>
                <div style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,0.4)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                }}>
                  {project.desc}
                </div>
              </div>
              <div style={{ display: "flex", gap: 8, flexShrink: 0, marginLeft: 16 }}>
                <a href={project.github} style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,0.55)",
                  textDecoration: "none",
                  background: "rgba(255,255,255,0.08)",
                  borderRadius: 999,
                  padding: "5px 12px",
                  fontFamily: "'DM Sans', sans-serif",
                  border: "1px solid rgba(255,255,255,0.1)",
                  whiteSpace: "nowrap",
                }}>
                  ↗ GitHub
                </a>
                <a href={project.live} style={{
                  fontSize: 11,
                  color: "#fff",
                  textDecoration: "none",
                  background: "rgba(255,255,255,0.14)",
                  borderRadius: 999,
                  padding: "5px 12px",
                  fontFamily: "'DM Sans', sans-serif",
                  border: "1px solid rgba(255,255,255,0.15)",
                  whiteSpace: "nowrap",
                }}>
                  ↗ Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}