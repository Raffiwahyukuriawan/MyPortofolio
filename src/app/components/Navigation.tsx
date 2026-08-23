import { useState, useEffect } from "react";

interface Props {
  activeSection: string;
}

const LINKS = [
  { id: "about", label: "About", color: "#06B6D4" },
  { id: "skills", label: "Skills", color: "#A855F7" },
  { id: "projects", label: "Work", color: "#10B981" },
  { id: "experience", label: "Exp", color: "#FBBF24" },
  { id: "achievements", label: "Awards", color: "#F43F5E" },
  { id: "contact", label: "Contact", color: "#A855F7" },
];

const CSS = `
  .nav-link-neo {
    font-family:'JetBrains Mono',monospace; font-size:.7rem; letter-spacing:.18em;
    text-transform:uppercase; text-decoration:none; color:rgba(240,240,255,.5);
    padding:.4rem .1rem; border-bottom:1px solid transparent; transition:all .25s; position:relative;
    cursor:none;
  }
  .nav-link-neo:hover { color:#F0F0FF; }
  .nav-link-neo.active { border-bottom-color:currentColor; }
  .nav-logo-box {
    width:36px; height:36px; border-radius:3px; display:flex; align-items:center; justify-content:center;
    background:linear-gradient(135deg,#7C3AED,#06B6D4); font-family:'Bricolage Grotesque',sans-serif;
    font-weight:800; font-size:.85rem; color:#fff; letter-spacing:.05em; flex-shrink:0;
    cursor:none; border:none;
  }
  .nav-hire {
    font-family:'JetBrains Mono',monospace; font-size:.65rem; letter-spacing:.18em; text-transform:uppercase;
    background:linear-gradient(135deg,#7C3AED,#A855F7,#06B6D4); background-size:200%;
    border:none; color:#fff; padding:.5rem 1.1rem; border-radius:2px; cursor:none;
    animation:grad-shift 3s ease infinite; transition:box-shadow .3s;
    text-decoration:none; display:inline-block;
  }
  .nav-hire:hover { color:#fff; box-shadow:0 4px 24px rgba(168,85,247,.45); }
  .mob-menu {
    position:fixed; inset:0; z-index:888;
    background:linear-gradient(135deg,rgba(5,5,16,.97),rgba(10,10,31,.97));
    backdrop-filter:blur(20px); display:flex; flex-direction:column;
    align-items:center; justify-content:center; gap:2.5rem;
    transition:opacity .35s, transform .35s;
  }
  .mob-menu.closed { opacity:0; pointer-events:none; transform:translateY(-12px); }
  .mob-link {
    font-family:'Bricolage Grotesque',sans-serif; font-weight:800; font-size:2.5rem;
    text-transform:uppercase; text-decoration:none; color:#F0F0FF; transition:color .2s;
    background:none; border:none; cursor:none;
  }
  @media(min-width:768px){ .mob-toggle{display:none!important;} }
  @media(max-width:767px){ .nav-links-desk{display:none!important;} .nav-hire-desk{display:none!important;} }
`;

export function Navigation({ activeSection }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <style>{CSS}</style>
      <nav
        className={`navbar-neo ${scrolled ? " scrolled" : ""}`}
        style={{ zIndex: 999, padding: ".9rem 0" }}
      >
        <div className="container-fluid px-3 d-flex align-items-center justify-content-between">
          {" "}
          <button
            onClick={() => scrollTo("home")}
            className="nav-logo-box"
            aria-label="Home"
          >
            RWK
          </button>
          <div className="nav-links-desk d-flex align-items-center gap-4">
            {LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className={`nav-link-neo${activeSection === l.id ? " active" : ""}`}
                style={{ color: activeSection === l.id ? l.color : undefined }}
              >
                {l.label}
              </button>
            ))}
          </div>
          <a href="mailto:raffi@example.com" className="nav-hire nav-hire-desk">
            Hire Me
          </a>
          <button
            className="mob-toggle btn p-1 border-0 bg-transparent"
            onClick={() => setOpen(!open)}
            style={{ zIndex: 999, position: "relative" }}
          >
            <div
              style={{
                width: 22,
                height: 2,
                background: "#F0F0FF",
                margin: "5px 0",
                transition: "all .3s",
                transform: open ? "rotate(45deg) translate(5px,5px)" : "none",
              }}
            />
            <div
              style={{
                width: 22,
                height: 2,
                background: "#F0F0FF",
                margin: "5px 0",
                transition: "all .3s",
                opacity: open ? 0 : 1,
              }}
            />
            <div
              style={{
                width: 22,
                height: 2,
                background: "#F0F0FF",
                margin: "5px 0",
                transition: "all .3s",
                transform: open ? "rotate(-45deg) translate(5px,-5px)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      <div className={`mob-menu${open ? "" : " closed"}`}>
        {LINKS.map((l) => (
          <button
            key={l.id}
            onClick={() => scrollTo(l.id)}
            className="mob-link"
            style={{ color: activeSection === l.id ? l.color : "#F0F0FF" }}
          >
            {l.label}
          </button>
        ))}
        <a href="mailto:raffi@example.com" className="nav-hire mt-2">
          Hire Me
        </a>
      </div>
    </>
  );
}
