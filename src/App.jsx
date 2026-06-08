import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Cursor from "./components/Cursor";
import useLenis from "./hooks/useLenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useLenis();

  const cardRefs = useRef([]);
  const deckRef = useRef(null);
  const projectsSectionRef = useRef(null);

  useEffect(() => {
    const cards = cardRefs.current;
    const slots = [0, 1, 2, 3].map((i) =>
      document.getElementById(`grid-slot-${i}`)
    );

    if (!cards.length || !slots[0]) return;

    const getRelativePos = (el) => {
      const rect = el.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2 + window.scrollY,
      };
    };

    ScrollTrigger.create({
      trigger: projectsSectionRef.current,
      start: "top 80%",
      onEnter: () => {
        slots.forEach((slot, i) => {
          const card = cards[i];
          if (!card || !slot) return;

          const cardRect = card.getBoundingClientRect();
          const slotRect = slot.getBoundingClientRect();

          const dx = slotRect.left - cardRect.left;
          const dy = slotRect.top + window.scrollY - (cardRect.top + window.scrollY);
          const scaleX = slotRect.width / cardRect.width;
          const scaleY = slotRect.height / cardRect.height;

          gsap.to(card, {
            x: `+=${dx}`,
            y: `+=${dy}`,
            rotate: 0,
            scaleX,
            scaleY,
            duration: 0.9,
            delay: i * 0.1,
            ease: "power3.out",
            borderRadius: 16,
          });
        });
      },
      onLeaveBack: () => {
        const startRotations = [-9, -3, 4, 10];
        const startOffsets = [
          { x: -20, y: 16 },
          { x: -6,  y: 6  },
          { x: 8,   y: -4 },
          { x: 22,  y: -12},
        ];

        cards.forEach((card, i) => {
          gsap.to(card, {
            x: startOffsets[i].x,
            y: startOffsets[i].y,
            rotate: startRotations[i],
            scaleX: 1,
            scaleY: 1,
            duration: 0.7,
            ease: "power2.inOut",
          });
        });
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <>
      <Cursor />
      <Navbar />
      <div style={{ paddingTop: "0px" }}>
        <Hero cardRefs={cardRefs} deckRef={deckRef} />
        <Projects projectsSectionRef={projectsSectionRef} />

        <div style={{
          height: "60vh",
          background: "#eeeeee",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderTop: "1px solid #e5e5e5",
        }}>
          <p style={{
            color: "#ccc",
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: "3px",
            fontSize: 11,
            textTransform: "uppercase",
          }}>
            About · Experience · OSS · Contact coming next...
          </p>
        </div>
      </div>
    </>
  );
}