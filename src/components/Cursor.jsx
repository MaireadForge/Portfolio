import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { stiffness: 800, damping: 40, mass: 0.2 });
  const springY = useSpring(mouseY, { stiffness: 800, damping: 40, mass: 0.2 });

  const ringX = useSpring(mouseX, { stiffness: 200, damping: 30, mass: 0.3 });
  const ringY = useSpring(mouseY, { stiffness: 200, damping: 30, mass: 0.3 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <motion.div
        style={{
          position: "fixed",
          top: -4, left: -4,
          width: 8, height: 8,
          background: "#000",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          x: springX,
          y: springY,
        }}
      />
      <motion.div
        style={{
          position: "fixed",
          top: -16, left: -16,
          width: 32, height: 32,
          border: "1px solid rgba(0,0,0,0.35)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9998,
          x: ringX,
          y: ringY,
        }}
      />
    </>
  );
}