import { createFileRoute } from "@tanstack/react-router";
import { AmbientBackground, CustomCursor } from "@/components/portfolio/Background";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ilesh — Backend Engineer & AI Developer" },
      { name: "description", content: "Ilesh — backend engineer and AI developer building scalable systems, AI-driven applications and high-performance digital experiences." },
      { property: "og:title", content: "Ilesh — Backend Engineer & AI Developer" },
      { property: "og:description", content: "Scalable systems. AI products. Quietly engineered at the edge." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="dark relative min-h-screen bg-background text-foreground antialiased">
      <CustomCursor />
      <AmbientBackground />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
