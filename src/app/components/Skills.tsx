import { useEffect, useRef } from 'react';

const CATS = [
  {
    title:'Frontend',   color:'#06B6D4', icon:'🖥️',
    tags:['React','Next.js','TypeScript','Tailwind','Bootstrap','HTML','CSS','Redux'],
  },
  {
    title:'Backend',    color:'#A855F7', icon:'⚙️',
    tags:['Node.js','Express','Python','PHP','REST API','GraphQL','JWT','Socket.io'],
  },
  {
    title:'Mobile',     color:'#10B981', icon:'📱',
    tags:['Flutter','Kotlin','Android','Dart','Firebase','SQLite'],
  },
  {
    title:'Tools',      color:'#FBBF24', icon:'🛠️',
    tags:['Git','GitHub','Docker','VS Code','Figma','Postman','Linux'],
  },
];

const BARS = [
  { skill:'React / Next.js', pct:88, color:'#06B6D4' },
  { skill:'Flutter',         pct:82, color:'#A855F7' },
  { skill:'Node.js',         pct:78, color:'#10B981' },
  { skill:'Python',          pct:75, color:'#FBBF24' },
  { skill:'UI/UX Design',    pct:70, color:'#F43F5E' },
  { skill:'Kotlin',          pct:65, color:'#A855F7' },
];

const CSS = `
  .skill-cat-card {
    background:rgba(10,10,31,.8); border-radius:3px; padding:1.4rem;
    border:1px solid; border-top-width:2px; transition:all .35s;
  }
  .skill-cat-card:hover { transform:translateY(-5px); }
  .skill-cat-title { font-family:'Bricolage Grotesque',sans-serif; font-weight:800; text-transform:uppercase; font-size:1rem; color:#F0F0FF; margin-bottom:1rem; }
  .avail-card {
    background:rgba(5,5,16,.9); border:1px solid rgba(16,185,129,.2); border-radius:3px; padding:1.6rem;
  }
`;

export function Skills() {
  const barRefs = useRef<(HTMLDivElement|null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const el = e.target as HTMLElement;
          el.style.width = el.dataset.pct + '%';
        }
      });
    }, { threshold: 0.3 });
    barRefs.current.forEach(r => r && observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{CSS}</style>
      <div style={{ padding:'6rem 0', borderTop:'1px solid rgba(168,85,247,.12)' }}>
        <div className="container">
          <div className="d-flex align-items-center gap-3 mb-5" data-aos="fade-right">
            <span className="section-label" style={{ color:'#A855F7' }}>03 /</span>
            <span className="section-label" style={{ color:'rgba(240,240,255,.35)' }}>Skills</span>
            <div className="section-line" />
          </div>

          <div className="row g-5">
            {/* Left — bento grid */}
            <div className="col-lg-7">
              <h2 className="display-neo mb-4" style={{ fontSize:'clamp(2.5rem,6vw,4rem)' }}>
                Tech<br /><span className="grad-text">Stack</span>
              </h2>
              <div className="row g-3">
                {CATS.map((c,i) => (
                  <div key={c.title} className="col-sm-6" data-aos="zoom-in" data-aos-delay={i*80}>
                    <div className="skill-cat-card" style={{ borderColor:`rgba(${hexToRgb(c.color)},.18)`, borderTopColor:c.color }}>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <span style={{ fontSize:'1.2rem' }}>{c.icon}</span>
                        <div className="skill-cat-title">{c.title}</div>
                      </div>
                      <div className="d-flex flex-wrap gap-1">
                        {c.tags.map(t => (
                          <span key={t} className="chip" style={{ color:c.color, borderColor:`rgba(${hexToRgb(c.color)},.25)`, background:`rgba(${hexToRgb(c.color)},.06)` }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — proficiency bars + availability */}
            <div className="col-lg-5" data-aos="fade-left" data-aos-delay="150">
              <h3 style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontWeight:700, textTransform:'uppercase', fontSize:'1rem', color:'rgba(240,240,255,.4)', marginBottom:'1.5rem', letterSpacing:'.15em' }}>
                Proficiency
              </h3>
              <div className="d-flex flex-column gap-4 mb-5">
                {BARS.map((b,i) => (
                  <div key={b.skill}>
                    <div className="d-flex justify-content-between mb-2">
                      <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'.7rem', color:'rgba(240,240,255,.6)', letterSpacing:'.1em' }}>{b.skill}</span>
                      <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'.7rem', color:b.color }}>{b.pct}%</span>
                    </div>
                    <div className="skill-bar">
                      <div ref={el => { barRefs.current[i] = el; }}
                        className="skill-bar-fill"
                        data-pct={b.pct}
                        style={{ width:0, background:`linear-gradient(90deg, ${b.color}99, ${b.color})`, boxShadow:`0 0 10px ${b.color}55` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Availability */}
              <div className="avail-card">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span style={{ width:8, height:8, borderRadius:'50%', background:'#10B981', display:'inline-block', animation:'blink 1.4s ease infinite' }} />
                  <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'.65rem', color:'#10B981', letterSpacing:'.2em', textTransform:'uppercase' }}>
                    Available for Work
                  </span>
                </div>
                <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'.72rem', color:'rgba(240,240,255,.5)', lineHeight:1.8 }}>
                  <div>{'> freelance.status = "open"'}</div>
                  <div>{'> fulltime.status = "open"'}</div>
                  <div>{'> internship.status = "open"'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function hexToRgb(hex: string) {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return r ? `${parseInt(r[1],16)},${parseInt(r[2],16)},${parseInt(r[3],16)}` : '255,255,255';
}
