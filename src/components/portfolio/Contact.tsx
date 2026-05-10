import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { Github, Linkedin, Twitter } from "./BrandIcons";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeader index="06" kicker="Contact" title="Open a connection." subtitle="Send a packet. I read every one." />

        <div className="mt-14 grid lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass-strong rounded-2xl overflow-hidden terminal-glow"
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-foreground/10 bg-foreground/[0.02] font-mono text-xs text-muted-foreground">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--blood)]/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--ember)]/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--terminal)]/80" />
              <span className="ml-3">contact.sh — sending message…</span>
            </div>
            <form onSubmit={submit} className="p-6 md:p-8 font-mono text-sm space-y-5">
              <Field label="name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="Ada Lovelace" />
              <Field label="email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="ada@compute.dev" />
              <div>
                <div className="flex items-center gap-2 text-muted-foreground"><span className="text-accent">$</span><span>--message</span></div>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me what you're building."
                  className="mt-2 w-full bg-foreground/[0.03] border border-foreground/10 focus:border-accent/60 outline-none rounded-lg px-3 py-2.5 text-foreground placeholder:text-muted-foreground/60 transition-colors"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium overflow-hidden ember-glow"
              >
                <Send size={14} />
                {sent ? "Transmitted ✓" : "Send transmission"}
                <span className="absolute inset-0 shimmer opacity-30" />
              </motion.button>
            </form>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <div className="glass rounded-2xl p-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Direct</div>
              <a href="mailto:ileshkumar975@gmail.com" className="mt-3 inline-flex items-center gap-2 font-display text-xl text-foreground hover:text-accent transition-colors">
                <Mail size={18} /> ileshkumar975@gmail.com
              </a>
              <p className="mt-2 text-sm text-muted-foreground">Best for project briefs, hires and serious collaborations.</p>
            </div>
            <div className="glass rounded-2xl p-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Sockets</div>
              <div className="mt-3 grid grid-cols-3 gap-3">
                <Social icon={Github} label="GitHub" href="https://github.com/ilesh18" />
                <Social icon={Linkedin} label="LinkedIn" href="https://www.linkedin.com/in/ilesh-kumar-28825b384/" />
                <Social icon={Twitter} label="Twitter" href="https://x.com/ileshkumar_08" />
              </div>
            </div>
            <div className="glass rounded-2xl p-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Status</div>
              <div className="mt-3 flex items-center gap-2 text-sm">
                <span className="h-2 w-2 rounded-full bg-[var(--terminal)] shadow-[0_0_12px_var(--terminal)]" />
                <span className="text-foreground">Available for selected 2026 engagements.</span>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, type = "text", placeholder }: { label: string; value: string; onChange: (v: string) => void; type?: string; placeholder?: string }) {
  return (
    <div>
      <div className="flex items-center gap-2 text-muted-foreground"><span className="text-accent">$</span><span>--{label}</span></div>
      <input
        required
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full bg-foreground/[0.03] border border-foreground/10 focus:border-accent/60 outline-none rounded-lg px-3 py-2.5 text-foreground placeholder:text-muted-foreground/60 transition-colors"
      />
    </div>
  );
}

function Social({ icon: Icon, label, href }: { icon: React.ComponentType<{ size?: number }>; label: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="group glass rounded-xl p-3 flex flex-col items-center gap-2 hover:border-accent/40 transition">
      <Icon size={18} />
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground group-hover:text-foreground">{label}</span>
    </a>
  );
}
