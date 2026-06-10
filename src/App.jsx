import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// CLEANED UP: Removed Cursor import completely
import useLenis from "./hooks/useLenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

gsap.registerPlugin(ScrollTrigger);

const PROJECT_CARDS = [
  { id: 1, tag: "Real-time Web App", title: "CodeCollab", color: "#0f172a", accent: "#3b82f6" },
  { id: 2, tag: "AI / ML Platform", title: "NarrativeX", color: "#0c1a12", accent: "#22c55e" },
  { id: 3, tag: "Computer Vision", title: "ShopLens", color: "#1a0f2e", accent: "#a855f7" },
  { id: 4, tag: "Internship Project", title: "CoGrow", color: "#1f0f05", accent: "#f97316" },
];

export default function App() {
  useLenis();

  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current;
    const slots = [0, 1, 2, 3].map((i) => document.getElementById(`grid-slot-${i}`));
    const deckAnchor = document.getElementById("deck-anchor");

    if (!cards.length || !slots[0] || !deckAnchor || !containerRef.current) return;

    // Build the scrubbing timeline linked to the scroll position
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=150%", // Gives the user comfortable scrolling room to watch them split up
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    cards.forEach((card, i) => {
      const slot = slots[i];
      if (!card || !slot) return;

      tl.to(
        card,
        {
          x: () => {
            const cardRect = card.getBoundingClientRect();
            const slotRect = slot.getBoundingClientRect();
            return `+=${slotRect.left - cardRect.left}`;
          },
          y: () => {
            const cardRect = card.getBoundingClientRect();
            const slotRect = slot.getBoundingClientRect();
            return `+=${slotRect.top - cardRect.top}`;
          },
          scaleX: () => slot.getBoundingClientRect().width / 300, // Normalized base width
          scaleY: () => slot.getBoundingClientRect().height / 370, // Normalized base height
          rotation: 0,
          transformOrigin: "center center",
          ease: "power1.inOut",
        },
        i * 0.05 // Sleek sequential fly-out stagger
      );
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      {/* CLEANED UP: Cursor tag is completely gone now */}
      <Navbar />
      
      {/* Pinned Scroll Container */}
      <div ref={containerRef} style={{ position: "relative", width: "100%" }}>
        <Hero />
        <Projects />

        {/* FLOATING MASTER CARDS LAYER */}
        {/* This sits absolutely on top, positioning the deck anchor context right in the Hero column */}
        <div 
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            pointerEvents: "none", // Allows clicking through to buttons underneath
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
            padding: "0 60px",
            gap: 40,
            zIndex: 5,
          }}
        >
          {/* Left space filler to match layout columns */}
          <div />

          {/* Right deck zone where the cards start stacked */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
            <div id="deck-anchor" style={{ position: "relative", width: 320, height: 400, pointerEvents: "auto" }}>
              {PROJECT_CARDS.map((card, i) => {
                const startRotations = [-9, -3, 4, 10];
                const startOffsets = [
                  { x: -20, y: 16 },
                  { x: -6, y: 6 },
                  { x: 8, y: -4 },
                  { x: 22, y: -12 },
                ];

                return (
                  <div
                    key={card.id}
                    ref={(el) => (cardRefs.current[i] = el)}
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
                    {/* Background Glow */}
                    <div style={{
                      position: "absolute", inset: 0,
                      background: `radial-gradient(circle at 70% 25%, ${card.accent}28 0%, transparent 65%)`,
                      pointerEvents: "none",
                    }} />

                    {/* Tag */}
                    <div style={{
                      display: "inline-flex", background: "rgba(0,0,0,0.4)",
                      backdropFilter: "blur(8px)", borderRadius: 999, padding: "5px 14px",
                      width: "fit-content", border: "1px solid rgba(255,255,255,0.08)",
                    }}>
                      <span style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", fontFamily: "'DM Sans', sans-serif" }}>
                        {card.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <div style={{ fontSize: 24, fontWeight: 800, color: "#fff", fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.5px" }}>
                      {card.title}
                      <div style={{ fontSize: 11, fontWeight: 300, color: "rgba(255,255,255,0.4)", marginTop: 4 }}>
                        ↗ View Case Study
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Spacer zone so the site can keep scrolling past the animation hook */}
      <div style={{ height: "100vh", background: "#eeeeee" }} />
    </>
  );
}