import { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";

import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Achievements } from "./components/Achievements";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";
import { Preloader } from "./components/Preloader";

const CUSTOM_CSS = `
  /* ── Fonts ── */
  @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300;12..96,700;12..96,800&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap');

  /* ── Root palette ── */
  :root {
    --c-bg:      #050510;
    --c-surface: #0A0A1F;
    --c-border:  rgba(168,85,247,0.18);
    --c-purple:  #A855F7;
    --c-cyan:    #06B6D4;
    --c-rose:    #F43F5E;
    --c-emerald: #10B981;
    --c-gold:    #FBBF24;
    --c-fg:      #F0F0FF;
    --c-muted:   #6B6B8A;
    --bs-body-bg: #050510;
    --bs-body-color: #F0F0FF;
    --bs-font-sans-serif: 'DM Sans', sans-serif;
  }

  *, *::before, *::after { box-sizing: border-box; cursor: none !important; }
  html { scroll-behavior: smooth; }
  body { background: var(--c-bg); color: var(--c-fg); overflow-x: hidden; }
  ::-webkit-scrollbar { width: 3px; }
  ::-webkit-scrollbar-track { background: var(--c-bg); }
  ::-webkit-scrollbar-thumb { background: linear-gradient(var(--c-purple), var(--c-cyan)); }

  /* ── Custom cursor ── */
  .cursor-dot {
    position: fixed; width: 10px; height: 10px; border-radius: 50%;
    background: linear-gradient(135deg, var(--c-purple), var(--c-cyan));
    pointer-events: none; z-index: 9999; transform: translate(-50%,-50%);
    mix-blend-mode: screen; transition: transform .15s;
  }
  .cursor-ring {
    position: fixed; width: 36px; height: 36px;
    border: 1px solid rgba(168,85,247,0.5); border-radius: 50%;
    pointer-events: none; z-index: 9998; transform: translate(-50%,-50%);
    transition: left .09s ease, top .09s ease;
  }

  /* ── Aurora background ── */
  .aurora { position: fixed; inset: 0; z-index: 0; pointer-events: none; overflow: hidden; }
  .aurora-blob {
    position: absolute; border-radius: 50%; filter: blur(70px);
    animation: aurora-float 20s ease-in-out infinite alternate;
  }
  @keyframes aurora-float {
    from { transform: translate(0,0) scale(1); }
    to   { transform: translate(40px,-60px) scale(1.15); }
  }

  /* ── Gradient text ── */
  .grad-text {
    background: linear-gradient(135deg, var(--c-purple), var(--c-cyan), var(--c-rose));
    background-size: 200% 200%; -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; background-clip: text;
    animation: grad-shift 5s ease infinite;
  }
  .grad-text-warm {
    background: linear-gradient(135deg, var(--c-gold), var(--c-rose), var(--c-purple));
    background-size: 200% 200%; -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; background-clip: text;
    animation: grad-shift 5s ease infinite;
  }
  @keyframes grad-shift {
    0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%}
  }

  /* ── Glitch ── */
  .glitch { animation: glitch-main 7s infinite; position: relative; }
  .glitch::before, .glitch::after {
    content: attr(data-text); position: absolute; inset: 0;
    font-size: inherit; font-weight: inherit; line-height: inherit;
    font-family: inherit;
  }
  .glitch::before { animation: glitch-cyan 7s infinite; }
  .glitch::after  { animation: glitch-rose 7s infinite; }
  @keyframes glitch-main {
    0%,88%,100%{transform:none}
    89%{transform:skewX(-2deg) translateX(-4px)}
    90%{transform:skewX(1deg) translateX(4px)}
    91%{transform:none}
    92%{transform:skewX(-1.5deg) translateX(-6px)}
    93%{transform:none}
  }
  @keyframes glitch-cyan {
    0%,88%,100%{opacity:0;transform:none}
    89%{opacity:.7;clip-path:polygon(0 10%,100% 10%,100% 28%,0 28%);transform:translateX(-8px);color:var(--c-cyan)}
    90%{clip-path:polygon(0 60%,100% 60%,100% 78%,0 78%);transform:translateX(8px)}
    91%{opacity:0}
  }
  @keyframes glitch-rose {
    0%,90%,100%{opacity:0;transform:none}
    91%{opacity:.6;clip-path:polygon(0 40%,100% 40%,100% 55%,0 55%);transform:translateX(6px);color:var(--c-rose)}
    92%{clip-path:polygon(0 2%,100% 2%,100% 18%,0 18%);transform:translateX(-6px)}
    93%{opacity:0}
  }

  /* ── Blink cursor ── */
  .blink { animation: blink 1s step-end infinite; }
  @keyframes blink { 0%,49%{opacity:1} 50%,100%{opacity:0} }

  /* ── Marquee ── */
  .marquee-wrap { overflow: hidden; }
  .marquee-track { display: flex; gap: 2rem; animation: marquee 22s linear infinite; white-space: nowrap; width: 100%;}
  @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }

  /* ── Float ── */
  .float-anim { animation: float-y 4s ease-in-out infinite; }
  @keyframes float-y { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }

  /* ── Spin ── */
  .spin-slow  { animation: spin 40s linear infinite; }
  .spin-rev   { animation: spin 25s linear infinite reverse; }
  @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }

  /* ── Neon glow button ── */
  .btn-neon {
    background: linear-gradient(135deg, #7C3AED, #A855F7, #06B6D4);
    background-size: 200% 200%; animation: grad-shift 3s ease infinite;
    border: none; color: #fff; font-family: 'JetBrains Mono', monospace;
    font-size: .75rem; letter-spacing: .15em; text-transform: uppercase;
    font-weight: 700; padding: .9rem 2rem; transition: all .3s;
  }
  .btn-neon:hover { color: #fff; transform: translateY(-2px); box-shadow: 0 8px 40px rgba(168,85,247,.5); }
  .btn-outline-neon {
    background: transparent; border: 1px solid rgba(168,85,247,.4);
    color: var(--c-fg); font-family: 'JetBrains Mono', monospace;
    font-size: .75rem; letter-spacing: .15em; text-transform: uppercase;
    padding: .9rem 2rem; transition: all .3s;
  }
  .btn-outline-neon:hover { border-color: var(--c-purple); color: var(--c-purple); box-shadow: 0 0 20px rgba(168,85,247,.2); }

  /* ── Cards ── */
  .card-neo {
    background: var(--c-surface); border: 1px solid var(--c-border);
    border-radius: 4px; transition: all .35s;
  }
  .card-neo:hover { transform: translateY(-5px); }

  /* ── Section header line ── */
  .section-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: .7rem; letter-spacing: .25em; text-transform: uppercase;
  }
  .section-line { height: 1px; flex: 1; background: linear-gradient(90deg, rgba(168,85,247,.3), transparent); }

  /* ── Display heading ── */
  .display-neo {
    font-family: 'Bricolage Grotesque', sans-serif;
    font-weight: 800; text-transform: uppercase; line-height: .9;
  }

  /* ── Skill bar ── */
  .skill-bar { height: 4px; background: rgba(255,255,255,.06); border-radius: 99px; overflow: hidden; }
  .skill-bar-fill { height: 100%; border-radius: 99px; transition: width 1.4s cubic-bezier(.16,1,.3,1); }

  /* ── Radial decorators ── */
  .ring-deco {
    position: absolute; border-radius: 50%; border: 1px solid;
    pointer-events: none;
  }

  /* ── Tag chip ── */
  .chip {
    font-family: 'JetBrains Mono', monospace; font-size: .65rem;
    padding: .3rem .65rem; border: 1px solid; border-radius: 2px;
    display: inline-block; transition: all .2s;
  }
  .chip:hover { transform: scale(1.05); }

  /* ── Progress ── */
  .progress { height: 4px; background: rgba(255,255,255,.06); border-radius: 99px; }
  .progress-bar { border-radius: 99px; }

  /* ── Form ── */
  .form-neo {
    background: rgba(5,5,16,.8); border: 1px solid rgba(168,85,247,.2);
    color: var(--c-fg); font-family: 'JetBrains Mono', monospace;
    font-size: .8rem; padding: .85rem 1rem; border-radius: 2px;
    transition: border-color .3s, box-shadow .3s;
  }
  .form-neo::placeholder { color: var(--c-muted); }
  .form-neo:focus {
    outline: none; background: rgba(5,5,16,.8);
    border-color: rgba(168,85,247,.6); color: var(--c-fg);
    box-shadow: 0 0 16px rgba(168,85,247,.15);
  }

  /* ── Navbar overrides ── */
  .navbar-neo {
    background: transparent; transition: background .3s, border-bottom .3s;
  }
  .navbar-neo.scrolled {
    background: rgba(5,5,16,.9); backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(168,85,247,.15);
  }

  /* ── AOS custom ── */
  [data-aos] { opacity: 0; }
  [data-aos].aos-animate { opacity: 1; }
`;

export default function App() {
  const [ready, setReady] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  useEffect(() => {
    const ids = [
      "home",
      "about",
      "skills",
      "projects",
      "experience",
      "achievements",
      "contact",
    ];
    const onScroll = () => {
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top <= 120 && r.bottom >= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
      if (ringRef.current) {
        ringRef.current.style.left = e.clientX + "px";
        ringRef.current.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <style>{CUSTOM_CSS}</style>

      {/* Custom cursor */}
      <div ref={cursorRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />

      {/* Aurora blobs */}
      <div className="aurora">
        <div
          className="aurora-blob"
          style={{
            top: "-15%",
            left: "-10%",
            width: "55vw",
            height: "55vw",
            background:
              "radial-gradient(circle, rgba(168,85,247,.2) 0%, transparent 70%)",
            animationDuration: "20s",
          }}
        />
        <div
          className="aurora-blob"
          style={{
            top: "35%",
            right: "0",
            position: "relative",
            overflow: "hidden",
            width: "48vw",
            height: "48vw",
            background:
              "radial-gradient(circle, rgba(6,182,212,.16) 0%, transparent 70%)",
            animationDuration: "26s",
            animationDirection: "alternate-reverse",
          }}
        />
        <div
          className="aurora-blob"
          style={{
            bottom: "-10%",
            left: "25%",
            width: "42vw",
            height: "42vw",
            background:
              "radial-gradient(circle, rgba(244,63,94,.12) 0%, transparent 70%)",
            animationDuration: "32s",
          }}
        />
        <div
          className="aurora-blob"
          style={{
            top: "60%",
            left: "-5%",
            width: "30vw",
            height: "30vw",
            background:
              "radial-gradient(circle, rgba(16,185,129,.1) 0%, transparent 70%)",
            animationDuration: "18s",
            animationDirection: "alternate-reverse",
          }}
        />
      </div>

      {/* Preloader */}
      {!ready && <Preloader onDone={() => setReady(true)} />}

      {/* Main app */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          opacity: ready ? 1 : 0,
          transition: "opacity .6s",
        }}
      >
        <Navigation activeSection={activeSection} />
        <main>
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="achievements">
            <Achievements />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <footer
          style={{ borderTop: "1px solid var(--c-border)", padding: "2rem 0" }}
        >
          <div className="container">
            <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between gap-2">
              <span className="grad-text section-label fw-bold">
                © 2026 Raffi Wahyu Kurniawan
              </span>
              <span
                className="section-label"
                style={{ color: "var(--c-muted)" }}
              >
                Full-Stack Developer · Indonesia
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
