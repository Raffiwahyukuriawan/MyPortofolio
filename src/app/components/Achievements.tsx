import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Achievement {
  img: string;
  title: string;
  date: string;
  tag: string;
  color: string;
  wide: boolean;
  desc: string;
}

// catatan
// wide true itu besar, false itu kecil
const ACHIEVEMENTS: Achievement[] = [
  {
    img: 'https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/sertifikat%20traspac.webp',
    title: 'Sertifikat Traspac IT Competition',
    date: 'January 2026',
    tag: 'ACADEMIC',
    color: '#06B6D4',
    wide: true,
    desc: 'Peserta Web/Mobile Apps • Jakarta, 25 Januari 2026.',
  }
];

const CSS = `
  /* ── Card ── */
  .ach-card {
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(168,85,247,.12);
    border-radius: 3px;
    transition: border-color .35s, transform .35s;
    cursor: none;
  }
  .ach-card:hover {
    border-color: rgba(168,85,247,.45);
    transform: translateY(-4px);
  }
  .ach-card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    filter: saturate(.3) brightness(.65);
    transition: filter .55s, transform .55s;
  }
  .ach-card:hover .ach-card-img {
    filter: saturate(1) brightness(.8);
    transform: scale(1.06);
  }

  /* hover zoom icon — pointer-events none so clicks go straight to card */
  .ach-zoom-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(.65);
    width: 52px;
    height: 52px;
    border-radius: 50%;
    border: 1.5px solid rgba(240,240,255,.7);
    background: rgba(5,5,16,.55);
    backdrop-filter: blur(6px);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    color: #F0F0FF;
    opacity: 0;
    transition: opacity .3s, transform .3s;
    pointer-events: none;
  }
  .ach-card:hover .ach-zoom-icon {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }

  /* ── Modal backdrop ── */
  .ach-backdrop {
    position: fixed;
    inset: 0;
    z-index: 8000;
    background: rgba(3,3,12,.82);
    backdrop-filter: blur(14px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    animation: ach-fade .22s ease;
  }
  @keyframes ach-fade { from { opacity:0 } to { opacity:1 } }

  /* ── Modal box ── */
  .ach-modal-box {
    position: relative;
    background: rgba(10,10,31,.98);
    border: 1px solid rgba(168,85,247,.28);
    border-radius: 4px;
    width: 100%;
    max-width: 800px;
    max-height: 90vh;
    overflow-y: auto;
    animation: ach-rise .3s cubic-bezier(.16,1,.3,1);
  }
  @keyframes ach-rise { from { opacity:0; transform:translateY(28px) } to { opacity:1; transform:none } }

  .ach-modal-img-wrap {
    position: relative;
    width: 100%;
    height: 300px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .ach-modal-img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .ach-modal-img-grad {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(10,10,31,1) 0%, rgba(10,10,31,.15) 60%, transparent 100%);
  }
  .ach-modal-body {
    padding: 1.8rem 2rem 2rem;
  }
  .ach-modal-close {
    position: absolute;
    top: .9rem;
    right: .9rem;
    z-index: 2;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: rgba(5,5,16,.75);
    border: 1px solid rgba(168,85,247,.3);
    color: #F0F0FF;
    font-size: .8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: none;
    transition: background .2s, border-color .2s;
    line-height: 1;
  }
  .ach-modal-close:hover {
    background: rgba(168,85,247,.22);
    border-color: #A855F7;
  }
  .ach-divider {
    height: 2px;
    border-radius: 99px;
    margin-bottom: 1.1rem;
  }

  @media (max-width: 576px) {
    .ach-modal-img-wrap { height: 200px; }
    .ach-modal-body { padding: 1.2rem 1.2rem 1.5rem; }
  }
`;

function rgb(hex: string) {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return m ? `${parseInt(m[1],16)},${parseInt(m[2],16)},${parseInt(m[3],16)}` : '255,255,255';
}

export function Achievements() {
  const [selected, setSelected] = useState<Achievement | null>(null);

  /* close on Escape key */
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelected(null); };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, []);

  /* lock body scroll while modal open */
  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

  return (
    <>
      <style>{CSS}</style>

      <div style={{ padding: '6rem 0', borderTop: '1px solid rgba(168,85,247,.12)' }}>
        <div className="container">
          {/* Header */}
          <div className="d-flex align-items-center gap-3 mb-5 flex-wrap" data-aos="fade-right">
            <span className="section-label" style={{ color: '#F43F5E' }}>06 /</span>
            <span className="section-label" style={{ color: 'rgba(240,240,255,.35)' }}>Awards & Recognition</span>
            <div className="section-line" />
            <span className="section-label" style={{ color: 'rgba(240,240,255,.2)' }}>
              {ACHIEVEMENTS.length} milestones
            </span>
          </div>

          <h2 className="display-neo mb-5" style={{ fontSize: 'clamp(2.5rem,6vw,4rem)' }} data-aos="fade-up">
            Milestones &<br /><span className="grad-text">Recognition</span>
          </h2>

          {/* Gallery grid */}
          <div className="row g-3">
            {ACHIEVEMENTS.map((a, i) => (
              <div
                key={i}
                className={a.wide ? 'col-md-8' : 'col-md-4'}
                data-aos="zoom-in"
                data-aos-delay={i * 90}
              >
                {/* Clicking anywhere on this div opens modal */}
                <div
                  className="ach-card"
                  onClick={() => setSelected(a)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Lihat detail: ${a.title}`}
                  onKeyDown={e => e.key === 'Enter' && setSelected(a)}
                >
                  <div style={{ position: 'relative', height: a.wide ? 320 : 240, overflow: 'hidden' }}>
                    <ImageWithFallback
                      src={a.img}
                      alt={a.title}
                      className="ach-card-img"
                    />

                    {/* gradient overlay */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(5,5,16,.95) 0%, rgba(5,5,16,.15) 55%, transparent 100%)',
                      pointerEvents: 'none',
                    }} />

                    {/* zoom icon — pointer-events: none, just decorative */}
                    <div className="ach-zoom-icon">⤢</div>

                    {/* category tag */}
                    <span className="chip" style={{
                      position: 'absolute', top: '1rem', left: '1rem',
                      color: a.color,
                      borderColor: `rgba(${rgb(a.color)},.35)`,
                      background: `rgba(${rgb(a.color)},.12)`,
                      backdropFilter: 'blur(4px)',
                      pointerEvents: 'none',
                    }}>
                      {a.tag}
                    </span>

                    {/* date */}
                    <span style={{
                      position: 'absolute', top: '1rem', right: '1rem',
                      fontFamily: "'JetBrains Mono',monospace", fontSize: '.6rem',
                      color: 'rgba(240,240,255,.45)',
                      border: '1px solid rgba(168,85,247,.15)',
                      padding: '.3rem .6rem',
                      background: 'rgba(5,5,16,.7)',
                      backdropFilter: 'blur(4px)',
                      pointerEvents: 'none',
                    }}>
                      {a.date}
                    </span>

                    {/* title */}
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.1rem', pointerEvents: 'none' }}>
                      <h5 style={{
                        fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 700,
                        textTransform: 'uppercase', color: '#F0F0FF', marginBottom: 0, fontSize: '.9rem',
                      }}>
                        {a.title}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Modal ── */}
      {selected && (
        <div
          className="ach-backdrop"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
        >
          {/* stop propagation so clicking inside doesn't close */}
          <div className="ach-modal-box" onClick={e => e.stopPropagation()}>

            {/* close button */}
            <button
              className="ach-modal-close"
              onClick={() => setSelected(null)}
              aria-label="Tutup"
            >
              ✕
            </button>

            {/* hero image */}
            <div className="ach-modal-img-wrap">
              <img src={selected.img} alt={selected.title} />
              <div className="ach-modal-img-grad" />

              {/* tag overlay on image */}
              <span className="chip" style={{
                position: 'absolute', top: '1rem', left: '1rem',
                color: selected.color,
                borderColor: `rgba(${rgb(selected.color)},.4)`,
                background: `rgba(${rgb(selected.color)},.14)`,
                backdropFilter: 'blur(6px)',
              }}>
                {selected.tag}
              </span>
            </div>

            {/* modal body */}
            <div className="ach-modal-body">
              {/* meta row */}
              <div className="d-flex flex-wrap gap-2 mb-3">
                <span style={{
                  fontFamily: "'JetBrains Mono',monospace", fontSize: '.62rem',
                  color: 'rgba(240,240,255,.4)',
                  border: '1px solid rgba(168,85,247,.18)',
                  padding: '.3rem .75rem',
                }}>
                  📅 {selected.date}
                </span>
              </div>

              {/* title */}
              <h3 style={{
                fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 800,
                textTransform: 'uppercase', color: '#F0F0FF',
                fontSize: 'clamp(1.3rem,4vw,1.9rem)', lineHeight: 1.08,
                marginBottom: '1rem',
              }}>
                {selected.title}
              </h3>

              {/* colored divider */}
              <div className="ach-divider" style={{
                background: `linear-gradient(90deg, ${selected.color}, rgba(${rgb(selected.color)},.0))`,
              }} />

              {/* description */}
              <p style={{
                color: 'rgba(240,240,255,.58)', lineHeight: 1.85,
                fontSize: '.88rem', marginBottom: '1.6rem',
              }}>
                {selected.desc}
              </p>

              {/* footer */}
              <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                <span style={{
                  fontFamily: "'JetBrains Mono',monospace", fontSize: '.62rem',
                  color: 'rgba(240,240,255,.2)', letterSpacing: '.1em',
                }}>
                  Klik di luar atau tekan Esc untuk menutup
                </span>
                <button
                  onClick={() => setSelected(null)}
                  className="btn-outline-neon btn btn-sm"
                >
                  Tutup ✕
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
