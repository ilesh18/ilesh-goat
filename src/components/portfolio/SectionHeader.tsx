import { motion } from "framer-motion";

type Props = { index: string; kicker: string; title: string; subtitle?: string };

export function SectionHeader({ index, kicker, title, subtitle }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground"
      >
        <span className="text-accent">{index}</span>
        <span className="h-px w-12 bg-foreground/20" />
        <span>{kicker}</span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="font-display text-4xl md:text-6xl tracking-tight font-semibold text-gradient-silver max-w-3xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-2xl text-muted-foreground text-base md:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
