import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const skills = [
  { name: "Python", cat: "Language" },
  { name: "Java", cat: "Language" },
  { name: "C++", cat: "Language" },
  { name: "TypeScript", cat: "Language" },
  { name: "React", cat: "Frontend" },
  { name: "Next.js", cat: "Frontend" },
  { name: "Tailwind CSS", cat: "Frontend" },
  { name: "HTML5", cat: "Frontend" },
  { name: "CSS3", cat: "Frontend" },
  { name: "MongoDB", cat: "Database" },
  { name: "MySQL", cat: "Database" },
  { name: "Firebase", cat: "Backend" },
  { name: "NumPy", cat: "Data/AI" },
  { name: "Pandas", cat: "Data/AI" },
  { name: "Matplotlib", cat: "Data/AI" },
  { name: "Google Cloud", cat: "Cloud" },
  { name: "Vercel", cat: "Cloud" },
  { name: "Render", cat: "Cloud" },
  { name: "Git", cat: "DevOps" },
  { name: "GitHub", cat: "DevOps" },
];

const groups = [
  { title: "Core Languages", filter: ["Python", "Java", "C++", "TypeScript"], span: "md:col-span-2" },
  { title: "Frontend", filter: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"] },
  { title: "Data & AI", filter: ["NumPy", "Pandas", "Matplotlib"] },
  { title: "Databases", filter: ["MongoDB", "MySQL", "Firebase"] },
  { title: "Cloud & Infra", filter: ["Google Cloud", "Vercel", "Render"] },
  { title: "Tooling", filter: ["Git", "GitHub"], span: "md:col-span-2" },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto w-full max-w-7xl px-6">
        <SectionHeader index="02" kicker="Skills" title="Engineering arsenal." subtitle="The tools sharpened through years of building, breaking and shipping." />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: gi * 0.05 }}
              className={`relative glass rounded-2xl p-6 ${g.span ?? ""}`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg text-foreground">{g.title}</h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{g.filter.length} tools</span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {skills.filter((s) => g.filter.includes(s.name)).map((s, i) => (
                  <motion.span
                    key={s.name}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    whileHover={{ y: -3, scale: 1.04 }}
                    className="group relative cursor-default rounded-lg border border-foreground/10 bg-foreground/[0.03] px-3 py-1.5 text-[12px] font-mono text-foreground/85 hover:border-accent/40 hover:text-foreground transition-colors"
                  >
                    <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: "radial-gradient(80px circle at center, oklch(0.72 0.16 55 / 0.18), transparent)" }} />
                    <span className="relative">{s.name}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <Marquee />
      </div>
    </section>
  );
}

function Marquee() {
  const items = [...skills, ...skills];
  return (
    <div className="mt-16 relative overflow-hidden border-y border-foreground/10 py-6"
      style={{ maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}>
      <div className="flex gap-12 whitespace-nowrap animate-marquee will-change-transform">
        {items.map((s, i) => (
          <span key={i} className="font-display text-2xl md:text-3xl text-foreground/40 hover:text-accent transition-colors">
            {s.name} <span className="text-foreground/15 mx-2">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
