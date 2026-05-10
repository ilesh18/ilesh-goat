import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Mail, Terminal } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

const titles = [
  "Backend Engineer",
  "AI Developer",
  "Problem Solver",
  "Open Source Contributor",
  "Hackathon Winner",
];

function useTypewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = titles[i % titles.length];
    const speed = del ? 35 : 70;
    const t = setTimeout(() => {
      if (!del) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDel(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") { setDel(false); setI((v) => v + 1); }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return text;
}

export function Hero() {
  const text = useTypewriter();
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20">
      <div className="mx-auto w-full max-w-7xl px-6 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--terminal)] shadow-[0_0_12px_var(--terminal)]" />
            Available for select engagements · 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.95] tracking-tight font-semibold"
          >
            <span className="text-gradient-silver">Ilesh.</span>
            <br />
            <span className="text-gradient-ember">Engineering quietly</span>
            <br />
            <span className="text-foreground/90">at the edge.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex items-center gap-3 font-mono text-sm md:text-base"
          >
            <span className="text-muted-foreground">~$</span>
            <span className="text-foreground">role</span>
            <span className="text-muted-foreground">=</span>
            <span className="text-[var(--terminal)]">"{text}"</span>
            <span className="inline-block w-2 h-5 bg-accent animate-blink" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            I build scalable systems, AI-driven applications, and high-performance digital experiences —
            <span className="text-foreground"> obsessed with the architecture beneath the surface.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <MagneticButton href="#projects" variant="primary">
              View Projects <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton href="#contact" variant="ember">
              <Mail size={16} /> Contact Me
            </MagneticButton>
            <MagneticButton href="/resume.pdf" variant="ghost" download>
              <Download size={16} /> Resume
            </MagneticButton>
          </motion.div>

          <div className="mt-10 flex gap-8 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <Stat value="12+" label="Projects" />
            <Stat value="01" label="Hackathon Won" />
            <Stat value="∞" label="Commits" />
          </div>
        </div>

        <div className="lg:col-span-5">
          <FloatingTerminal />
        </div>
      </div>

      <ScrollHint />
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-2xl text-foreground">{value}</div>
      <div className="text-[10px] mt-1 text-muted-foreground/70">{label}</div>
    </div>
  );
}

function FloatingTerminal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: -10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="relative"
      style={{ perspective: 1200 }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="glass-strong rounded-2xl overflow-hidden ember-glow"
      >
        <div className="flex items-center gap-2 px-4 py-3 border-b border-foreground/10 bg-foreground/[0.02]">
          <span className="h-3 w-3 rounded-full bg-[var(--blood)]/80" />
          <span className="h-3 w-3 rounded-full bg-[var(--ember)]/80" />
          <span className="h-3 w-3 rounded-full bg-[var(--terminal)]/80" />
          <div className="ml-3 flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <Terminal size={12} /> ilesh@dev — zsh
          </div>
        </div>
        <div className="p-5 font-mono text-[13px] leading-relaxed">
          <Line>$ whoami</Line>
          <Line className="text-foreground">ilesh — backend & ai engineer</Line>
          <Line className="mt-2">$ cat stack.yml</Line>
          <Line className="text-muted-foreground">  languages: [python, java, c++, ts]</Line>
          <Line className="text-muted-foreground">  cloud:     [gcp, render, vercel]</Line>
          <Line className="text-muted-foreground">  data:      [pandas, numpy, mongo, mysql]</Line>
          <Line className="mt-2">$ ./deploy --prod</Line>
          <Line className="text-[var(--terminal)]">✓ build succeeded in 1.42s</Line>
          <Line className="text-[var(--terminal)]">✓ shipping to edge nodes…</Line>
          <Line className="text-accent">→ ready. listening on :443</Line>
          <div className="mt-2 flex items-center gap-1 text-foreground">
            <span className="text-accent">~</span>
            <span className="text-muted-foreground">$</span>
            <span className="inline-block h-4 w-2 bg-accent animate-blink" />
          </div>
        </div>
      </motion.div>
      <div className="absolute -inset-6 -z-10 rounded-3xl blur-3xl opacity-50"
        style={{ background: "radial-gradient(circle at 30% 20%, oklch(0.72 0.16 55 / 0.35), transparent 60%)" }} />
    </motion.div>
  );
}

function Line({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

function ScrollHint() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground"
    >
      <span>scroll</span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.6, repeat: Infinity }}
        className="h-8 w-px bg-gradient-to-b from-foreground/40 to-transparent"
      />
    </motion.div>
  );
}
