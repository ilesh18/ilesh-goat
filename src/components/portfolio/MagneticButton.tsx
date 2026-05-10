import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost" | "ember";
  className?: string;
  onClick?: () => void;
  download?: boolean;
};

export function MagneticButton({ children, href, variant = "primary", className = "", onClick, download }: Props) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 200, damping: 18 });
  const sy = useSpring(my, { stiffness: 200, damping: 18 });
  const tx = useTransform(sx, (v) => v * 0.35);
  const ty = useTransform(sy, (v) => v * 0.35);

  const onMove = (e: MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set(e.clientX - r.left - r.width / 2);
    my.set(e.clientY - r.top - r.height / 2);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide overflow-hidden magnetic-btn select-none";
  const styles = {
    primary: "bg-foreground text-background hover:shadow-[0_10px_40px_-10px_oklch(0.96_0.005_90/0.4)]",
    ghost: "bg-transparent text-foreground border border-foreground/15 hover:border-foreground/40",
    ember:
      "text-foreground border border-accent/40 bg-accent/10 hover:bg-accent/15 ember-glow",
  }[variant];

  const inner = (
    <>
      <motion.span style={{ x: tx, y: ty }} className="relative z-10 inline-flex items-center gap-2">
        {children}
      </motion.span>
      <span
        className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
        style={{ background: "radial-gradient(120px circle at var(--mx,50%) var(--my,50%), oklch(0.72 0.16 55 / 0.25), transparent 60%)" }}
      />
    </>
  );

  if (href) {
    return (
      <motion.a
        ref={ref as any}
        href={href}
        download={download}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={`${base} ${styles} ${className}`}
        whileTap={{ scale: 0.97 }}
      >
        {inner}
      </motion.a>
    );
  }
  return (
    <motion.button
      ref={ref as any}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`${base} ${styles} ${className}`}
      whileTap={{ scale: 0.97 }}
    >
      {inner}
    </motion.button>
  );
}
