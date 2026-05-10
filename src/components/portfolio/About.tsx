import { motion } from "framer-motion";
import { Code2, Compass, GitBranch, Hammer, Sparkles, Target } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const cards = [
  {
    icon: Code2, title: "Who I Am", span: "md:col-span-2",
    body: "Backend-first engineer who treats systems like architecture — clean primitives, layered well, observable by default.",
  },
  {
    icon: Compass, title: "My Journey",
    body: "From terminal experiments to AI-driven products. Curiosity has always been the compiler.",
  },
  {
    icon: Hammer, title: "What I Build",
    body: "APIs, data pipelines, AI agents, and the unglamorous internals that make products feel fast.",
  },
  {
    icon: Target, title: "Current Goals", span: "md:col-span-2",
    body: "Ship the AI Legal Aid platform, contribute meaningfully to GSSoC '26, and turn the Chess AI into a product.",
  },
  {
    icon: Sparkles, title: "Interests",
    body: "Distributed systems, LLM tooling, chess engines, retro terminal aesthetics.",
  },
  {
    icon: GitBranch, title: "Open Source",
    body: "GSSoC 2026 selection. Quietly contributing where it counts.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto w-full max-w-7xl px-6">
        <SectionHeader index="01" kicker="About" title="Signal over noise." subtitle="A short manifest of how I think, build and operate." />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className={`group relative glass rounded-2xl p-6 md:p-7 overflow-hidden ${c.span ?? ""}`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "radial-gradient(400px circle at var(--mx,50%) var(--my,50%), oklch(0.72 0.16 55 / 0.10), transparent 60%)" }} />
              <div className="relative flex items-center gap-2 text-muted-foreground">
                <c.icon size={16} className="text-accent" />
                <span className="font-mono text-[11px] uppercase tracking-[0.2em]">{c.title}</span>
              </div>
              <p className="relative mt-4 text-foreground/90 text-[15px] leading-relaxed">{c.body}</p>
              <div className="absolute -bottom-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
