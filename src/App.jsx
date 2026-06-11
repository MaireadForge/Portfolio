import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useLenis from "./hooks/useLenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience"; // Added Import
import Skills from "./components/Skills";         // Added Import
import Achievements from "./components/Achievements";

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
  const experienceRef = useRef(null); // Ref for Experience Section
  const skillsRef = useRef(null);     // Ref for Skills Section
  const cardRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current;
    const slots = [0, 1, 2, 3].map((i) => document.getElementById(`grid-slot-${i}`));
    const deckAnchor = document.getElementById("deck-anchor");

    if (!cards.length || !slots[0] || !deckAnchor || !containerRef.current) return;

    // 1. YOUR PERFECT PROJECTS PINNED TIMELINE
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top", 
        end: "+=140%", 
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
          rotation: 0,
          transformOrigin: "center center",
          ease: "power1.inOut",
        },
        i * 0.03
      );
    });

    // 2. UNIQUE ANIMATION FOR EXPERIENCE: Horizontal Scroll Track Panel
    const expTrack = document.getElementById("experience-track");
    if (expTrack && experienceRef.current) {
      const totalScrollWidth = expTrack.scrollWidth - window.innerWidth + 120; // 120px to account for paddings
      
      gsap.to(expTrack, {
        x: -totalScrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: experienceRef.current,
          start: "top top",
          end: () => `+=${totalScrollWidth}`,
          pin: true, 
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }

    // 3. UNIQUE ANIMATION FOR SKILLS: 3D Pop & Stagger Rise up
    const skillPills = document.querySelectorAll(".skill-pill");
    if (skillPills.length && skillsRef.current) {
      gsap.fromTo(
        skillPills,
        { opacity: 0, y: 60, scale: 0.9, rotationX: -15 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          stagger: 0.03,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 60%", 
            end: "top 20%",
            scrub: 1,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <Navbar />
      
      {/* PERFECT HERO + PROJECTS WRAPPER (Stays 100% Unchanged) */}
      <div ref={containerRef} style={{ position: "relative", width: "100%", overflow: "hidden" }}>
        <Hero />
        <Projects />

        {/* FLOATING MASTER CARDS LAYER */}
        <div 
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh", 
            pointerEvents: "none",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
            padding: "0 60px",
            gap: 40,
            zIndex: 5,
          }}
        >
          <div />
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
            <div id="deck-anchor" style={{ position: "relative", width: 420, height: 340, pointerEvents: "auto" }}>
              {PROJECT_CARDS.map((card, i) => {
                const startRotations = [-7, -2, 3, 8];
                const startOffsets = [
                  { x: -25, y: 12 },
                  { x: -8, y: 4 },
                  { x: 10, y: -6 },
                  { x: 26, y: -14 },
                ];

                return (
                  <div
                    key={card.id}
                    ref={(el) => (cardRefs.current[i] = el)}
                    style={{
                      position: "absolute",
                      width: 540,  
                      height: 400, 
                      borderRadius: 24,
                      background: card.color,
                      border: "1px solid rgba(255,255,255,0.08)",
                      boxShadow: "0 30px 70px rgba(0,0,0,0.35)",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      padding: 24,
                      zIndex: 4 - i,
                      left: "50%",
                      top: "50%",
                      transform: `translate(-50%, -50%) rotate(${startRotations[i]}deg) translate(${startOffsets[i].x}px, ${startOffsets[i].y}px)`,
                    }}
                  >
                    <div style={{
                      position: "absolute", inset: 0,
                      background: `radial-gradient(circle at 70% 25%, ${card.accent}24 0%, transparent 60%)`,
                      pointerEvents: "none",
                    }} />

                    <div style={{
                      display: "inline-flex", background: "rgba(0,0,0,0.5)",
                      borderRadius: 999, padding: "6px 14px",
                      width: "fit-content", border: "1px solid rgba(255,255,255,0.06)",
                    }}>
                      <span style={{ fontSize: 11, fontWeight: 500, color: "rgba(255,255,255,0.6)", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.2px" }}>
                        {card.tag}
                      </span>
                    </div>

                    <div style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                      width: "100%",
                      zIndex: 2
                    }}>
                      <div style={{ fontSize: 28, fontWeight: 700, color: "#fff", fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.5px" }}>
                        {card.title}
                      </div>
                      <div style={{ fontSize: 12, fontWeight: 400, color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif" }}>
                        View Case Study ↗
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: EXPERIENCE (Horizontal Timelines Flow) */}
      <div ref={experienceRef} style={{ background: "#090d16", width: "100%" }}>
        <Experience />
      </div>

      {/* SECTION 4: SKILLS (Staggered Pop Grid) */}
      <div ref={skillsRef} style={{ background: "#eeeeee", width: "100%" }}>
        <Skills />
      </div>
      {/* ACHIEVEMENTS CONTAINER */}
      <div>
        <Achievements />
      </div>
    </>
  );
}