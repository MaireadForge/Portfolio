import Cursor from "./components/Cursor";
import useLenis from "./hooks/useLenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function App() {
  useLenis();

  return (
    <>
      <Cursor />
      <Navbar />
      <div style={{ paddingTop: "0px" }}>
        <Hero />
        <Projects />
        {/* About, Experience, OSS, Contact coming next */}
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