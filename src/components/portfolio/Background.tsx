import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function AmbientBackground() {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.3 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div
        className="absolute h-[600px] w-[600px] rounded-full blur-3xl transition-transform duration-700"
        style={{
          left: `${mouse.x * 100}%`,
          top: `${mouse.y * 100}%`,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, oklch(0.72 0.16 55 / 0.18), transparent 65%)",
        }}
      />
      <div
        className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.55 0.19 25 / 0.14), transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.78 0.16 145 / 0.07), transparent 70%)" }}
      />
      <Particles />
      <div className="noise absolute inset-0" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at top, transparent 0%, oklch(0.14 0.005 270 / 0.7) 100%)",
        }}
      />
    </div>
  );
}

function Particles() {
  const dots = Array.from({ length: 32 }, (_, i) => i);
  return (
    <div className="absolute inset-0">
      {dots.map((i) => {
        const left = (i * 53) % 100;
        const top = (i * 37) % 100;
        const delay = (i % 7) * 0.6;
        const duration = 8 + (i % 6);
        const size = 1 + (i % 3);
        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-foreground/30"
            style={{ left: `${left}%`, top: `${top}%`, width: size, height: size }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
          />
        );
      })}
    </div>
  );
}

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("a,button,[data-cursor='hover']"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed z-[100] hidden md:block rounded-full mix-blend-difference transition-[width,height] duration-200"
        style={{
          left: pos.x,
          top: pos.y,
          width: hovering ? 44 : 14,
          height: hovering ? 44 : 14,
          transform: "translate(-50%, -50%)",
          background: "oklch(0.96 0.005 90)",
          opacity: 0.9,
        }}
      />
      <div
        className="pointer-events-none fixed z-[100] hidden md:block h-1 w-1 rounded-full bg-accent"
        style={{ left: pos.x, top: pos.y, transform: "translate(-50%, -50%)" }}
      />
    </>
  );
}
