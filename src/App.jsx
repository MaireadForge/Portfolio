import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useLenis from "./hooks/useLenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact"; 

gsap.registerPlugin(ScrollTrigger);

const PROJECT_CARDS = [
  { 
    id: 1, 
    //tag: "Real-time Web App", 
    title: "CodeCollab", 
    color: "#0f172a", 
    accent: "#f97316",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    description: "A full-stack real-time collaborative coding platform where multiple users can join rooms, write code together simultaneously, explore GitHub repositories, get AI-powered code analysis, chat, and see each other's cursors live",
    tags: ["Next.js", "TypeScript", "LangChain"],
    githubUrl: "https://github.com/MaireadForge/Code-Collab",
    liveUrl: "https://code-collab-swart-sigma.vercel.app/"
  },
  { 
    id: 2, 
   // tag: "AI / ML Platform", 
    title: "NarrativeX", 
    color: "#0f172a", 
    accent: "#f97316",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
    description: "NarrativeX is an AI-powered news platform that aggregates real-time headlines, generates intelligent summaries, and lets you have conversations with your news using natural language.",
    tags: ["MERN Stack", "Docker", "Redis"],
    githubUrl: "https://github.com/MaireadForge/NarrativeX",
    liveUrl: "https://narrative-x-six.vercel.app/"
  },
  { 
    id: 3, 
   // tag: "Computer Vision", 
    title: "ShopLens", 
    color: "#0f172a", 
    accent: "#f97316",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    description: "ShopLens helps users find visually similar products on Walmart by simply uploading or clicking a picture of an item they don’t know the name of or want to shop an exactly similar item.",
    tags: ["React", "TensorFlow", "WebSockets"],
    githubUrl: "https://github.com/MaireadForge/ShopLensss",
    //liveUrl: "https://your-live-demo.com"
  },
  { 
    id: 4, 
   // tag: "Internship Project", 
    title: "HelpDesk", 
    color: "#0f172a", 
    accent: "#f97316",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
    description: "A full-stack Customer Support Ticketing System built using the MERN Stack with real-time chat, file uploads, role-based dashboards, and basic analytics — simulating a real-world helpdesk experience.",
    tags: ["Solidity", "Next.js", "Ethers.js"],
    githubUrl: "https://github.com/MaireadForge/HelpDesk---Customer-Support-Ticket--Project",
    liveUrl: "https://help-desk-customer-support-ticket-p.vercel.app/"
  },
];

export default function App() {
  useLenis(); 

  const containerRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current;
    const slots = [0, 1, 2, 3].map((i) => document.getElementById(`grid-slot-${i}`));
    const deckAnchor = document.getElementById("deck-anchor");

    if (!cards.length || !slots[0] || !deckAnchor || !containerRef.current) return;

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

    const expTrack = document.getElementById("experience-track");
    if (expTrack && experienceRef.current) {
      const totalScrollWidth = expTrack.scrollWidth - window.innerWidth + 120;
      
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

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <Navbar />
      
      <section id="projects" ref={containerRef} style={{ position: "relative", width: "100%", overflow: "hidden" }}>
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
            pointerEvents: "none", // Allows scrolling through the wrapper layer
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
                      width: 450,  
                      height: 400, 
                      borderRadius: 24,
                      background: card.color,
                      border: "1px solid rgba(255,255,255,0.08)",
                      boxShadow: "0 30px 70px rgba(0,0,0,0.35)",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      padding: 24,
                      boxSizing: "border-box",
                      zIndex: 4 - i,
                      left: "50%",
                      top: "50%",
                      transform: `translate(-50%, -50%) rotate(${startRotations[i]}deg) translate(${startOffsets[i].x}px, ${startOffsets[i].y}px)`,
                      pointerEvents: "auto", // FIX: Re-enables pointer events exclusively for the card contents
                    }}
                  >
                    <div style={{
                      position: "absolute", inset: 0,
                      background: `radial-gradient(circle at 70% 25%, ${card.accent}24 0%, transparent 60%)`,
                      pointerEvents: "none",
                    }} />

                    {/* PHOTO BANNER FRAME */}
                    <div style={{
                      width: "100%",
                      height: "140px",
                      borderRadius: "14px",
                      overflow: "hidden",
                      background: "rgba(255,255,255,0.05)",
                      marginBottom: "12px",
                      position: "relative",
                      zIndex: 2
                    }}>
                      <img 
                        src={card.image} 
                        alt={card.title} 
                        style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }}
                      />
                      
                      <div style={{
                        position: "absolute", top: 12, left: 12,
                        background: "rgba(0,0,0,0.75)",
                        borderRadius: 999, padding: "6px 14px",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}>
                        <span style={{ fontSize: 11, fontWeight: 500, color: "rgba(255,255,255,0.6)", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.2px" }}>
                          {card.tag}
                        </span>
                      </div>
                    </div>

                    {/* MAIN EXPLANATORY BODY TEXT */}
                    <p style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "16px",
                      color: "rgba(255,255,255,0.65)",
                      lineHeight: 1.5,
                      margin: "0 0 12px 0",
                      flexGrow: 1,
                      zIndex: 2
                    }}>
                      {card.description}
                    </p>

                    {/* FOOTER BAR */}
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
                      <div style={{ fontSize: 12, fontWeight: 500, fontFamily: "'DM Sans', sans-serif", display: "flex", gap: "14px" }}>
                        <a href={card.githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>Code 🛠️</a>
                        <a href={card.liveUrl} target="_blank" rel="noopener noreferrer" style={{ color: card.accent, textDecoration: "none" }}>Live Demo ↗</a>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" ref={experienceRef} style={{ background: "#0f172a", width: "100%" }}>
        <Experience />
      </section>

      <section id="skills" ref={skillsRef} style={{ background: "#eeeeee", width: "100%" }}>
        <Skills />
      </section>

      <section id="achievements" style={{ background: "#eeeeee", width: "100%" }}>
        <Achievements />
      </section>

      <section id="contact" style={{ background: "#eeeeee", width: "100%" }}>
        <Contact />
      </section>
    </>
  );
}