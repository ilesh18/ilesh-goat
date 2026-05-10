import { motion, useInView } from "framer-motion";
import { Trophy, Code2, Rocket, Crown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "./SectionHeader";

const items = [
  { icon: Trophy, label: "Hackathon Winner", value: 1, suffix: "st", note: "Place" },
  { icon: Code2, label: "GSSoC '26", value: 2026, suffix: "", note: "Selected Contributor" },
  { icon: Rocket, label: "AI Projects", value: 5, suffix: "+", note: "Shipped & shipping" },
  { icon: Crown, label: "Chess AI", value: 1, suffix: "", note: "Engine in development" },
];

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf: number;
    const start = performance.now();
    const dur = 1200;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(p * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export function Achievements() {
  return (
    <section id="achievements" className="relative py-32">
      <div className="mx-auto w-full max-w-7xl px-6">
        <SectionHeader index="05" kicker="Achievements" title="Receipts, badges, milestones." subtitle="The wins that taught the most." />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative glass rounded-2xl p-6 overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full blur-3xl opacity-30 group-hover:opacity-70 transition-opacity"
                style={{ background: "radial-gradient(circle, var(--ember), transparent 70%)" }} />
              <div className="relative flex items-center justify-between">
                <div className="h-10 w-10 rounded-xl border border-foreground/10 flex items-center justify-center bg-foreground/[0.03]">
                  <it.icon size={18} className="text-accent" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">/{(i+1).toString().padStart(2,"0")}</span>
              </div>
              <div className="relative mt-6 font-display text-4xl text-gradient-silver tracking-tight">
                <CountUp to={it.value} suffix={it.suffix} />
              </div>
              <div className="relative mt-2 text-foreground">{it.label}</div>
              <div className="relative text-xs text-muted-foreground mt-1">{it.note}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
