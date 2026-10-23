import { useEffect, useState, lazy, Suspense } from "react";
import { Moon, Sun } from "lucide-react";
import Hero from "./components/Hero";
import CursorEyes from "./components/CursorEyes";
const GitHubContributions = lazy(() => import("./components/GitHubContributions"));
const Skills = lazy(() => import("./components/Skills"));
const Experience = lazy(() => import("./components/Experience"));
const Project = lazy(() => import("./components/Project"));

function App() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.dataset.theme === "light" ? "light" : "dark"
  );

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      "content",
      nextTheme === "light" ? "#f8f5ed" : "#0a0a0a"
    );
    try {
      localStorage.setItem("portfolio-theme", nextTheme);
    } catch {
      // The selected theme still works when storage is unavailable.
    }
    setTheme(nextTheme);
  };

  useEffect(() => {
    if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    if (window.location.hash) history.replaceState(null, "", window.location.pathname + window.location.search);
    const t = setTimeout(() => window.scrollTo(0, 0), 80);
    return () => clearTimeout(t);
  }, []);

  // Pulse favicon follows the current ink and paper colors.
  useEffect(() => {
    const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    let raf;
    let link = document.querySelector('link[rel="icon"][type="image/svg+xml"]');
    if (!link) link = document.querySelector('link[rel="icon"]');
    if (!link) return;
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const draw = (t) => {
      const isLight = document.documentElement.dataset.theme === "light";
      const background = isLight ? "#f8f5ed" : "#0a0a0a";
      const foreground = isLight ? "#0a0a0a" : "#f3f5f7";
      const pulse = (Math.sin(t / 1000) + 1) / 2; // 0..1 over 2s
      const r = 2.2 + pulse * 2.0;
      const op = 1 - pulse * 0.3;
      const ringR = 3.2 + pulse * 3.3;
      const ringOp = 0.18 * (1 - pulse);
      ctx.clearRect(0, 0, 32, 32);
      ctx.fillStyle = background;
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(0, 0, 32, 32, 7);
      else ctx.rect(0, 0, 32, 32);
      ctx.fill();
      ctx.strokeStyle = isLight ? "rgba(10,10,10,0.30)" : "rgba(243,245,247,0.30)";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.globalAlpha = op;
      ctx.fillStyle = foreground;
      ctx.beginPath();
      ctx.arc(16, 16, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = ringOp;
      ctx.strokeStyle = foreground;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(16, 16, ringR, 0, Math.PI * 2);
      ctx.stroke();
      ctx.globalAlpha = 1;
      link.href = canvas.toDataURL("image/png");
    };
    if (reducedMotion) {
      draw(0);
      return;
    }
    let last = 0;
    const loop = (now) => {
      if (document.hidden) {
        raf = requestAnimationFrame(loop);
        return;
      }
      if (now - last > 45) {
        last = now;
        draw(now);
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [theme]);
  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-10000 -translate-y-24 border-2 border-paper bg-paper px-3 py-1 text-xs font-bold uppercase text-ink transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>

      <main
        id="main-content"
        className="relative z-10 mx-auto flex w-full flex-col items-center gap-8 px-4 pb-10 sm:px-6"
      >
        <nav
          aria-label="Portfolio sections"
          className="portfolio-section sticky top-0 z-50 mb-6 flex flex-wrap justify-center gap-x-6 gap-y-2 bg-ink px-2 py-5 text-sm font-black lowercase sm:mb-8 sm:gap-x-8 sm:text-[15px]"
        >
          <span className="nav-eyes">
            <CursorEyes />
          </span>
          <a className="px-1 py-1 underline decoration-1 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper" href="#hero">
            intro
          </a>
          <a className="px-1 py-1 underline decoration-1 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper" href="#contributions">
            contributions
          </a>
          <a className="px-1 py-1 underline decoration-1 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper" href="#skills">
            skills
          </a>
          <a className="px-1 py-1 underline decoration-1 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper" href="#experience">
            experience
          </a>
          <a className="px-1 py-1 underline decoration-1 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper" href="#projects">
            projects
          </a>
          <a className="px-1 py-1 underline decoration-1 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper" href="#contact">
            contact
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="inline-flex items-center gap-1.5 rounded-full border border-paper px-2.5 py-1 text-xs font-black lowercase transition-colors hover:bg-paper hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper"
          >
            {theme === "dark" ? <Sun className="h-3.5 w-3.5" aria-hidden="true" /> : <Moon className="h-3.5 w-3.5" aria-hidden="true" />}
            {theme === "dark" ? "light" : "dark"}
          </button>
        </nav>

        <section id="hero" className="portfolio-section border-b border-line/40 pb-8">
          <Hero
            profileLinks={[
              {
                label: "Resume",
                href: "https://drive.google.com/file/d/1SGwhko2mDzWD_IoYJt3RSr7N-6uc1ND9/view",
                description: "Experience, skills, and selected work",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/nraj24/",
                description: "Professional experience and updates",
              },
              {
                label: "GitHub",
                href: "https://github.com/nixrdev",
                description: "Code, open source, and experiments",
              },
              {
                label: "x.com",
                href: "https://x.com/sfunish",
                description: "Thoughts on engineering and current work",
              },
              {
                label: "Peerlist",
                href: "https://peerlist.io/nishantraj",
                description: "Developer profile and featured projects",
              },
            ]}
          />
        </section>

        <Suspense fallback={<div className="portfolio-section h-32 animate-pulse rounded-xl bg-paper/5" aria-hidden="true" />}>
          <section id="contributions" className="portfolio-section border-b border-line/40 pb-8">
            <GitHubContributions />
          </section>
          <section id="skills" className="portfolio-section border-b border-line/40 pb-8">
            <Skills />
          </section>
          <section id="experience" className="portfolio-section border-b border-line/40 pb-8">
            <Experience />
          </section>
          <section id="projects" className="portfolio-section border-b border-line/40 pb-8">
            <Project />
          </section>
        </Suspense>

        <footer className="portfolio-section flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-wide">
          <span>Designed &amp; built by Nishant Raj</span>
          <span>© {new Date().getFullYear()}</span>
        </footer>
      </main>
    </>
  );
}

export default App;
