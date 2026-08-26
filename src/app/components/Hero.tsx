import { useState, useEffect } from "react";

const ROLES = [
  "Full-Stack Developer",
  "Web Developer",
];

const TICKER = [
  "React",
  "Next.js",
  "TypeScript",
  "Flutter",
  "Kotlin",
  "Node.js",
  "Python",
  "Tailwind",
  "Bootstrap",
  "SQLite",
  "MySQL",
  "PostgreSQL",
  "Figma",
  "Git",
  "REST API",
  "GraphQL",
];

const STATS = [
  { val: "3+", label: "Years Coding", color: "#A855F7" },
  { val: "15+", label: "Projects Done", color: "#06B6D4" },
  { val: "5+", label: "Tech Stacks", color: "#10B981" },
  { val: "∞", label: "Lines of Code", color: "#FBBF24" },
];

const CSS = `
  .hero-section { min-height:100vh; display:flex; align-items:center; padding-top:80px; margin-bottom:30px;}
  .hero-name-line { font-family:'Bricolage Grotesque',sans-serif; font-weight:800; text-transform:uppercase;
    line-height:.88; letter-spacing:-.03em; }
  .hero-stroke { -webkit-text-stroke:1.5px #F0F0FF; color:transparent; }
  .hero-stat-card {
    background:rgba(10,10,31,.7); border-radius:3px; padding:1rem 1.2rem;
    border-left:3px solid; transition:all .4s; animation:float-y 4s ease-in-out infinite;
  }
  .hero-stat-card:hover { transform:translateY(-6px) scale(1.04); }
  .hero-stat-val { font-family:'Bricolage Grotesque',sans-serif; font-weight:800; font-size:1.8rem; line-height:1; }
  .hero-stat-lbl { font-family:'JetBrains Mono',monospace; font-size:.6rem; letter-spacing:.2em; opacity:.55; text-transform:uppercase; }
  .hero-ticker { border-top:1px solid rgba(168,85,247,.15); border-bottom:1px solid rgba(168,85,247,.15);
    padding:.6rem 0; overflow:hidden; position:relative; }
  .ticker-item { font-family:'JetBrains Mono',monospace; font-size:.65rem; letter-spacing:.2em; text-transform:uppercase;
    color:rgba(240,240,255,.35); flex-shrink:0; display:flex; align-items:center; gap:1rem; }
  .ticker-sep { width:4px; height:4px; border-radius:50%; background:var(--c-purple); flex-shrink:0; }
  .hero-badge { font-family:'JetBrains Mono',monospace; font-size:.6rem; letter-spacing:.2em; text-transform:uppercase;
    border:1px solid rgba(16,185,129,.3); background:rgba(16,185,129,.08); color:#10B981;
    padding:.3rem .8rem; border-radius:99px; display:inline-flex; align-items:center; gap:.5rem; }
  .hero-badge-dot { width:6px; height:6px; border-radius:50%; background:#10B981; animation:blink 1.4s ease infinite; }
  @keyframes enter-up { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:none} }
  .enter-1 { animation:enter-up .7s cubic-bezier(.16,1,.3,1) .3s both; }
  .enter-2 { animation:enter-up .7s cubic-bezier(.16,1,.3,1) .5s both; }
  .enter-3 { animation:enter-up .7s cubic-bezier(.16,1,.3,1) .7s both; }
  .enter-4 { animation:enter-up .7s cubic-bezier(.16,1,.3,1) .9s both; }
  .enter-5 { animation:enter-up .7s cubic-bezier(.16,1,.3,1) 1.1s both; }
  .enter-6 { animation:enter-up .7s cubic-bezier(.16,1,.3,1) 1.3s both; }
`;

export function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = ROLES[roleIdx];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting) {
      if (typed.length < target.length) {
        t = setTimeout(() => setTyped(target.slice(0, typed.length + 1)), 70);
      } else {
        t = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (typed.length > 0) {
        t = setTimeout(() => setTyped(typed.slice(0, -1)), 45);
      } else {
        setDeleting(false);
        setRoleIdx((roleIdx + 1) % ROLES.length);
      }
    }
    return () => clearTimeout(t);
  }, [typed, deleting, roleIdx]);

  const doubled = [...TICKER, ...TICKER];

  return (
    <>
      <style>{CSS}</style>
      <div className="hero-section">
        <div className="container">
          {/* Status badge */}
          <div className="enter-1 mb-4">
            <span className="hero-badge">
              <span className="hero-badge-dot" />
              Available for Hire
            </span>
          </div>

          {/* Main name */}
          <div className="enter-2 mb-2" style={{ position: "relative" }}>
            {/* Decorative rings */}
            <div
              style={{
                position: "absolute",
                right: "-5%",
                top: "50%",
                transform: "translateY(-50%)",
                width: "320px",
                height: "320px",
                pointerEvents: "none",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  border: "1px solid rgba(168,85,247,.15)",
                  borderRadius: "50%",
                  animation: "spin 40s linear infinite",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: "-30px",
                  border: "1px solid rgba(6,182,212,.1)",
                  borderRadius: "50%",
                  animation: "spin 25s linear infinite reverse",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: "-60px",
                  border: "1px dashed rgba(244,63,94,.07)",
                  borderRadius: "50%",
                  animation: "spin 60s linear infinite",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  width: "60px",
                  height: "60px",
                  background:
                    "radial-gradient(circle, rgba(168,85,247,.3), transparent)",
                  borderRadius: "50%",
                  filter: "blur(10px)",
                }}
              />
            </div>

            <h1
              className="hero-name-line mb-0"
              style={{ fontSize: "clamp(3rem,10vw,8rem)" }}
            >
              <span className="glitch" data-text="RAFFI">
                RAFFI
              </span>
            </h1>
            <h1
              className="hero-name-line mb-0 grad-text"
              style={{ fontSize: "clamp(3rem,10vw,8rem)" }}
            >
              WAHYU
            </h1>
            <h1
              className="hero-name-line hero-stroke"
              style={{ fontSize: "clamp(3rem,10vw,8rem)" }}
            >
              KURNIAWAN
            </h1>
          </div>

          {/* Typewriter role */}
          <div className="enter-3 mb-4 mt-3">
            <span
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: ".9rem",
                color: "rgba(240,240,255,.5)",
                letterSpacing: ".15em",
              }}
            >
              {"> "}
              <span style={{ color: "#06B6D4" }}>{typed}</span>
              <span className="blink" style={{ color: "#A855F7" }}>
                |
              </span>
            </span>
          </div>

          {/* Bio */}
          <p
            className="enter-4 mb-5"
            style={{
              maxWidth: "520px",
              color: "rgba(240,240,255,.55)",
              fontFamily: "'DM Sans',sans-serif",
              lineHeight: 1.8,
              fontSize: ".95rem",
            }}
          >
            Merancang pengalaman digital yang memadukan antarmuka indah dengan
            performa optimal. Mengubah ide menjadi aplikasi yang fungsional dan
            mudah digunakan.
          </p>

          {/* CTA buttons */}
          <div className="enter-5 d-flex flex-wrap gap-3 mb-5">
            <a
              href="#projects"
              className="btn-neon btn"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View My Work
            </a>
            <a href="mailto:raffi@example.com" className="btn-outline-neon btn">
              Get In Touch
            </a>
          </div>

          {/* Stats */}
          <div className="enter-6">
            <div className="row g-3" style={{ maxWidth: "480px" }}>
              {STATS.map((s, i) => (
                <div key={s.label} className="col-6">
                  <div
                    className="hero-stat-card"
                    style={{
                      borderLeftColor: s.color,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  >
                    <div className="hero-stat-val" style={{ color: s.color }}>
                      {s.val}
                    </div>
                    <div className="hero-stat-lbl" style={{ color: s.color }}>
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="hero-ticker">
        <div className="marquee-track">
          {doubled.map((t, i) => (
            <span key={i} className="ticker-item">
              <span className="ticker-sep" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
