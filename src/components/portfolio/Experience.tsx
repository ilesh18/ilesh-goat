import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const items = [
  { year: "2026", title: "GSSoC Contributor", body: "Selected contributor for GirlScript Summer of Code 2026 — shipping meaningful open source.", tag: "Open Source" },
  { year: "2026", title: "Hackathon Winner", body: "1st place — built a production-ready solution end-to-end under 24 hours.", tag: "Hackathon" },
  { year: "2025", title: "GDGC Contributor", body: "Contributed to the Google Developer Group Bhopal, helping organize events and mentoring new members.", tag: "Open Source" },
  { year: "2025", title: "AI Projects", body: "Designed and shipped multiple AI products: Finance for Teens, Legal Aid, Chess AI.", tag: "AI" },
  { year: "2024", title: "Freelance Work", body: "Built backend systems, dashboards and commerce experiences for early-stage clients.", tag: "Freelance" },
  { year: "2024", title: "Startup Experiments", body: "Quietly prototyping startup concepts solving infrastructural problems.", tag: "R&D" },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="mx-auto w-full max-w-5xl px-6">
        <SectionHeader index="04" kicker="Experience" title="A timeline of build receipts." subtitle="Where the hours actually went." />

        <div className="mt-16 relative">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.2, 0.8, 0.2, 1] }}
            style={{ originY: 0 }}
            className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/60 via-foreground/20 to-transparent"
          />
          <ul className="space-y-12">
            {items.map((it, i) => (
              <motion.li
                key={it.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="relative md:grid md:grid-cols-2 md:gap-12 pl-12 md:pl-0"
              >
                <span className="absolute left-[12px] md:left-1/2 top-2 -translate-x-1/2 h-3.5 w-3.5 rounded-full bg-accent shadow-[0_0_24px_var(--ember)]" />
                <div className={i % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}>
                  <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">{it.year} · {it.tag}</div>
                  <h3 className="mt-2 font-display text-2xl text-foreground">{it.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{it.body}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
