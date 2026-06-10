import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Track real-time coordinate positions
    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Move the center dot instantly with the mouse hardware thread
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    // Fast, lightweight linear interpolation animation loop (runs at maximum display refresh rate)
    const renderLoop = () => {
      // Smoothly ease the outer ring toward the mouse position (0.15 controls delay smoothness)
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      
      requestAnimationFrame(renderLoop);
    };

    window.addEventListener("mousemove", handleMouseMove);
    const animId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* Precision Center Dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          marginTop: -4,
          marginLeft: -4,
          background: "#000",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          willChange: "transform", // Forces GPU processing acceleration
        }}
      />
      {/* Smooth Fluid Outer Ring */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 32,
          height: 32,
          marginTop: -16,
          marginLeft: -16,
          border: "1px solid rgba(0,0,0,0.35)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9998,
          willChange: "transform",
        }}
      />
    </>
  );
}