import { useState, useEffect } from "react";

export default function FloatingButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShow(window.scrollY >= 3000);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      style={{
        position: "fixed",
        bottom: "50px",
        right: "50px",
        display: show ? "block" : "none",
        padding: "12px 16px",
        borderRadius: "50%",
        border: "1px solid #fff",
        backgroundColor: "#000",
        color: "#fff",
        cursor: "pointer",
        fontSize: "16px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
        transition: "opacity 0.3s",
        
      }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" stroke="currentColor" strokeWidth="0" viewBox="0 0 448 512"><path stroke="none" d="m34.9 289.5-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4"/></svg>
    </button>
  );
}