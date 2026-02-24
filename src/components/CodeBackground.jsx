import { useEffect, useRef } from "react";

const SYMBOLS = [
  "</>", "{}", "=>", "//", "&&", "||", "!!", "::", "[]", "()",
  "01", "10", "00", "11", "#", "$", "~", ">>", "<<", "**",
  "fn", "if", "for", "var", "const", "let", "def", "git", "npm", "ssh",
  "git", "sudo", "curl", "grep", "vim", "==", "!=", ">=", "<=", "++",
];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

export default function CodeBackground() {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const count = window.matchMedia('(max-width: 1280px)').matches ? 34 : 52;
    const elements = [];

    for (let i = 0; i < count; i++) {
      const el = document.createElement("span");
      el.textContent = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];

      const size = randomBetween(10, 18);
      const x = randomBetween(0, 100);
      const duration = randomBetween(18, 45);
      const delay = randomBetween(0, 30);
      const opacity = randomBetween(0.6, 0.85); // ⬆️ raised opacity range

      el.style.cssText = `
        position: absolute;
        left: ${x}%;
        top: ${randomBetween(0, 100)}%;
        font-size: ${size}px;
        font-family: 'Courier New', monospace;
        color: #00b85c;
        opacity: ${opacity};
        --op: ${opacity};
        pointer-events: none;
        user-select: none;
        animation: floatSymbol ${duration}s ${delay}s infinite linear;
        will-change: transform, opacity;
      `;

      container.appendChild(el);
      elements.push(el);
    }

    return () => elements.forEach((el) => el.remove());
  }, []);

  return (
    <>
      <style>{`
        @keyframes floatSymbol {
          0%   { transform: translateY(0px) rotate(0deg);   opacity: 0; }
          5%   { opacity: var(--op, 0.75); }
          95%  { opacity: var(--op, 0.75); }
          100% { transform: translateY(-120vh) rotate(360deg); opacity: 0; }
        }
      `}</style>
      <div
        ref={containerRef}
        style={{
          position: "fixed",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
    </>
  );
}
