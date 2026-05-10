import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Github } from "./BrandIcons";
import { SectionHeader } from "./SectionHeader";

const projects = [
  {
    title: "AI Smart Alarm",
    tag: "Productivity · AI",
    description: "An intelligent alarm system that adapts to your sleep cycles and provides personalized morning routines.",
    stack: ["Next.js", "Python", "OpenAI", "Firebase"],
    accent: "ember",
    liveUrl: "https://smart-alarm-i3ho-lqboo8vle-ilesh-kumars-projects.vercel.app/",
    sourceUrl: "https://github.com/ilesh18/Smart-Alarm",
    expectedDate: "",
  },
  {
    title: "AI Legal Aid Platform",
    tag: "Legal Tech · AI",
    description: "Conversational legal assistant that demystifies rights, drafts notices and routes cases to verified counsel.",
    stack: ["React", "Python", "LLM", "MongoDB"],
    accent: "blood",
    liveUrl: "",
    sourceUrl: "",
    expectedDate: "24.05.2026",
  },
  {
    title: "Astra chess Engine",
    tag: "AI · Education",
    description: "An adaptive chess engine that explains its moves — built to teach humans how machines think, one tactic at a time.",
    stack: ["C++", "Python", "React", "WebAssembly"],
    accent: "terminal",
    liveUrl: "",
    sourceUrl: "",
    expectedDate: "17.05.2026",
  },
  {
    title: "Finance Tracker",
    tag: "Productivity",
    description: "Personal finance OS with category intelligence, recurring detection and clean analytics charts.",
    stack: ["React", "Node", "Pandas", "MySQL"],
    accent: "gold",
    liveUrl: "",
    sourceUrl: "",
    expectedDate: "12.05.2026",
  },
  {
    title: "Gdgc Website",
    tag: "Google Developer Group",
    description: "A sleek, modern website for the Google Developer Group Bhopal, showcasing events, resources and community highlights.",
    stack: ["Next.js", "Tailwind", "Stripe"],
    accent: "ember",
    liveUrl: "https://gdgvitbhopal.vercel.app",
    sourceUrl: "https://github.com/GDGCVITBHOPAL/gdgcvitbhopal",
    expectedDate: "",
  },
  {
    title: "Future Startup Concepts",
    tag: "R&D",
    description: "A quiet stack of ideas being prototyped — each tackling a real, unsexy backend problem.",
    stack: ["Distributed", "AI Agents", "Edge"],
    accent: "blood",
    liveUrl: "",
    sourceUrl: "",
    expectedDate: "13.06.2026",
  },
];

const accentMap: Record<string, string> = {
  ember: "var(--ember)",
  blood: "var(--blood)",
  terminal: "var(--terminal)",
  gold: "var(--gold)",
};

export function Projects() {
  const completedProjects = projects.filter(p => p.liveUrl && p.sourceUrl);
  const workingOnProjects = projects.filter(p => !p.liveUrl || !p.sourceUrl);

  return (
    <>
      <section id="projects" className="relative py-32">
        <div className="mx-auto w-full max-w-7xl px-6">
          <SectionHeader index="03" kicker="Projects" title="Built with intent." subtitle="A selection of systems and products — not just demos." />
        </div>

        <div className="mt-14 relative">
          <div className="mx-auto w-full max-w-7xl px-6 mb-4 flex justify-between items-end">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">drag · scroll →</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">{completedProjects.length.toString().padStart(2, "0")} projects</span>
          </div>
          <div
            className="flex gap-6 overflow-x-auto px-6 pb-10 snap-x snap-mandatory scrollbar-thin"
            style={{ scrollbarWidth: "thin" }}
          >
            {completedProjects.map((p, i) => (
              <ProjectCard key={p.title} p={p} index={i} />
            ))}
            <div className="shrink-0 w-2" />
          </div>
        </div>
      </section>

      {workingOnProjects.length > 0 && (
        <section id="working-on" className="relative py-32">
          <div className="mx-auto w-full max-w-7xl px-6">
            <SectionHeader index="04" kicker="In Progress" title="Coming soon." subtitle="Projects currently under development with expected launch dates." />
          </div>

          <div className="mt-14 relative">
            <div className="mx-auto w-full max-w-7xl px-6 mb-4 flex justify-between items-end">
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">drag · scroll →</span>
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">{workingOnProjects.length.toString().padStart(2, "0")} projects</span>
            </div>
            <div
              className="flex gap-6 overflow-x-auto px-6 pb-10 snap-x snap-mandatory scrollbar-thin"
              style={{ scrollbarWidth: "thin" }}
            >
              {workingOnProjects.map((p, i) => (
                <WorkingOnCard key={p.title} p={p} index={i} />
              ))}
              <div className="shrink-0 w-2" />
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function ProjectCard({ p, index }: { p: typeof projects[number]; index: number }) {
  const color = accentMap[p.accent] ?? "var(--ember)";
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      className="snap-start shrink-0 w-[88vw] sm:w-[520px] lg:w-[560px] relative glass-strong rounded-3xl overflow-hidden group"
    >
      {/* visual header */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 grid-bg-fine opacity-50" />
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${color} 0%, transparent 55%), radial-gradient(circle at 80% 70%, oklch(0.55 0.19 25 / 0.5) 0%, transparent 60%)`,
            filter: "blur(40px)",
            opacity: 0.55,
          }}
        />
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `conic-gradient(from 0deg at 50% 50%, transparent, ${color}, transparent 30%)`,
            mixBlendMode: "screen",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 flex items-end p-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/70 px-2 py-1 rounded-full border border-foreground/15 backdrop-blur-md">
            {p.tag}
          </span>
        </div>
        <div className="absolute top-4 right-4 font-mono text-[11px] text-foreground/50">/{(index + 1).toString().padStart(2, "0")}</div>
      </div>

      <div className="p-6 md:p-7">
        <h3 className="font-display text-2xl md:text-3xl tracking-tight text-foreground flex items-center justify-between gap-3">
          {p.title}
          <ArrowUpRight className="text-muted-foreground group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" size={22} />
        </h3>
        <p className="mt-3 text-muted-foreground text-[15px] leading-relaxed">{p.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <span key={s} className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground border border-foreground/10 rounded-full px-2.5 py-1">
              {s}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-3">
          {p.liveUrl && (
            <>
              <a className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-accent transition-colors" href={p.liveUrl} target="_blank" rel="noreferrer">
                <ExternalLink size={14} /> Live
              </a>
              {p.sourceUrl && <span className="text-foreground/20">·</span>}
            </>
          )}
          {p.sourceUrl && (
            <a className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-accent transition-colors" href={p.sourceUrl} target="_blank" rel="noreferrer">
              <Github size={14} /> Source
            </a>
          )}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ boxShadow: `0 0 0 1px ${color}55, 0 30px 80px -30px ${color}66` }} />
    </motion.article>
  );
}

function WorkingOnCard({ p, index }: { p: typeof projects[number]; index: number }) {
  const color = accentMap[p.accent] ?? "var(--ember)";
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      className="snap-start shrink-0 w-[88vw] sm:w-[520px] lg:w-[560px] relative glass-strong rounded-3xl overflow-hidden group"
    >
      {/* visual header */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 grid-bg-fine opacity-50" />
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${color} 0%, transparent 55%), radial-gradient(circle at 80% 70%, oklch(0.55 0.19 25 / 0.5) 0%, transparent 60%)`,
            filter: "blur(40px)",
            opacity: 0.55,
          }}
        />
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `conic-gradient(from 0deg at 50% 50%, transparent, ${color}, transparent 30%)`,
            mixBlendMode: "screen",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 flex items-end p-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/70 px-2 py-1 rounded-full border border-foreground/15 backdrop-blur-md">
            {p.tag}
          </span>
        </div>
        <div className="absolute top-4 right-4 font-mono text-[11px] text-foreground/50">/WIP</div>
      </div>

      <div className="p-6 md:p-7">
        <h3 className="font-display text-2xl md:text-3xl tracking-tight text-foreground flex items-center justify-between gap-3">
          {p.title}
          <ArrowUpRight className="text-muted-foreground group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" size={22} />
        </h3>
        <p className="mt-3 text-muted-foreground text-[15px] leading-relaxed">{p.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <span key={s} className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground border border-foreground/10 rounded-full px-2.5 py-1">
              {s}
            </span>
          ))}
        </div>
        {p.expectedDate && (
          <div className="mt-6 pt-6 border-t border-foreground/10">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Expected</span>
              <span className="font-mono text-sm font-medium text-accent">{p.expectedDate}</span>
            </div>
          </div>
        )}
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ boxShadow: `0 0 0 1px ${color}55, 0 30px 80px -30px ${color}66` }} />
    </motion.article>
  );
}