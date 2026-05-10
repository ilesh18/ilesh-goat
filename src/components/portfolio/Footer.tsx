import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "./BrandIcons";

export function Footer() {
  return (
    <footer className="relative border-t border-foreground/10 mt-10">
      <div className="mx-auto w-full max-w-7xl px-6 py-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-2xl md:text-4xl text-gradient-silver max-w-3xl"
        >
          “The best architecture is the one nobody notices —
          <span className="text-accent"> until everything else is on fire.</span>”
        </motion.p>

        <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ilesh · Built with React & passion
          </div>
          <div className="flex items-center gap-3">
            {[
              { Icon: Github, href: "https://github.com/ilesh18" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/ilesh-kumar-28825b384/" },
              { Icon: Twitter, href: "https://x.com/ileshkumar_08" }
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noreferrer" className="h-9 w-9 rounded-full glass flex items-center justify-center hover:border-accent/40 hover:text-accent transition">
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
    </footer>
  );
}
