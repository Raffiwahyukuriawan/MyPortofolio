import { useState } from 'react';

const PROJECTS = [
  {
    num:'01', cat:'web', color:'#06B6D4',
    title:'E-Learning Platform',
    desc:'Platform belajar online berbasis React + Node.js dengan fitur live quiz, progress tracking, dan sertifikat otomatis.',
    tags:['React','Node.js','MongoDB','Socket.io'],
    img:'https://images.unsplash.com/photo-1610484826967-09c5720778c7?w=800&h=500&fit=crop&auto=format',
  },
  {
    num:'02', cat:'mobile', color:'#A855F7',
    title:'Bus Tracker App',
    desc:'Aplikasi Flutter untuk tracking jadwal bus real-time dengan peta interaktif dan notifikasi push.',
    tags:['Flutter','Firebase','Google Maps'],
    img:'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=500&fit=crop&auto=format',
  },
  {
    num:'03', cat:'desktop', color:'#FBBF24',
    title:'Inventory Management',
    desc:'Sistem manajemen inventaris desktop dengan Python + SQLite, laporan PDF, dan barcode scanner.',
    tags:['Python','SQLite','Tkinter'],
    img:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&auto=format',
  },
  {
    num:'04', cat:'web', color:'#06B6D4',
    title:'Library Web System',
    desc:'Sistem perpustakaan berbasis web dengan fitur peminjaman, katalog buku, dan laporan adminstrasi.',
    tags:['PHP','MySQL','Bootstrap'],
    img:'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=500&fit=crop&auto=format',
  },
  {
    num:'05', cat:'mobile', color:'#A855F7',
    title:'School Attendance App',
    desc:'Aplikasi absensi sekolah berbasis QR code dengan Kotlin, dashboard guru, dan laporan harian.',
    tags:['Kotlin','Firebase','QR Code'],
    img:'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop&auto=format',
  },
  {
    num:'06', cat:'creative', color:'#F43F5E',
    title:'Portfolio Website',
    desc:'Website portfolio personal dengan animasi aurora, glitch effects, custom cursor, dan preloader keren.',
    tags:['React','TypeScript','CSS Animations'],
    img:'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=500&fit=crop&auto=format',
  },
];

const FILTERS = ['all','web','mobile','desktop','creative'];
const CAT_COLORS: Record<string,string> = { web:'#06B6D4', mobile:'#A855F7', desktop:'#FBBF24', creative:'#F43F5E' };

const CSS = `
  .proj-filter {
    font-family:'JetBrains Mono',monospace; font-size:.65rem; letter-spacing:.2em; text-transform:uppercase;
    padding:.45rem 1.1rem; border-radius:2px; border:1px solid rgba(168,85,247,.2);
    background:transparent; color:rgba(240,240,255,.4); transition:all .25s; cursor:none;
  }
  .proj-filter.active, .proj-filter:hover { color:#F0F0FF; border-color:rgba(168,85,247,.5); background:rgba(168,85,247,.1); }
  .proj-card {
    background:rgba(10,10,31,.8); border-radius:3px; overflow:hidden;
    border:1px solid rgba(168,85,247,.12); transition:all .4s; position:relative;
  }
  .proj-card:hover { transform:translateY(-6px); border-color:rgba(168,85,247,.3); }
  .proj-img { width:100%; height:200px; object-fit:cover; filter:saturate(.3); transition:all .5s; }
  .proj-card:hover .proj-img { filter:saturate(1); }
  .proj-num {
    position:absolute; top:1rem; right:1rem; font-family:'Bricolage Grotesque',sans-serif;
    font-weight:800; font-size:4rem; opacity:.06; line-height:1; pointer-events:none;
    color:#F0F0FF;
  }
`;

export function Projects() {
  const [active, setActive] = useState('all');

  const filtered = active === 'all' ? PROJECTS : PROJECTS.filter(p => p.cat === active);

  return (
    <>
      <style>{CSS}</style>
      <div style={{ padding:'6rem 0', borderTop:'1px solid rgba(168,85,247,.12)' }}>
        <div className="container">
          <div className="d-flex align-items-center gap-3 mb-5" data-aos="fade-right">
            <span className="section-label" style={{ color:'#10B981' }}>04 /</span>
            <span className="section-label" style={{ color:'rgba(240,240,255,.35)' }}>Projects</span>
            <div className="section-line" />
          </div>

          <div className="row align-items-end mb-5">
            <div className="col-lg-6" data-aos="fade-up">
              <h2 className="display-neo" style={{ fontSize:'clamp(2.5rem,6vw,4rem)', marginBottom:0 }}>
                Selected<br /><span className="grad-text">Work</span>
              </h2>
            </div>
            <div className="col-lg-6 d-flex flex-wrap gap-2 justify-content-lg-end mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="100">
              {FILTERS.map(f => (
                <button key={f} onClick={() => setActive(f)} className={`proj-filter${active===f?' active':''}`}
                  style={active===f ? { borderColor:CAT_COLORS[f]||'#A855F7', color:CAT_COLORS[f]||'#F0F0FF', background:`rgba(${hexToRgb(CAT_COLORS[f]||'#A855F7')},.1)` } : {}}>
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="row g-4">
            {filtered.map((p,i) => (
              <div key={p.num} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={i*80}>
                <div className="proj-card h-100">
                  <div style={{ position:'relative', overflow:'hidden' }}>
                    <img src={p.img} alt={p.title} className="proj-img" />
                    <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(10,10,31,1) 0%, rgba(10,10,31,.3) 60%, transparent 100%)' }} />
                    <div className="proj-num">{p.num}</div>
                    <span className="chip" style={{ position:'absolute', top:'1rem', left:'1rem', color:p.color, borderColor:`rgba(${hexToRgb(p.color)},.3)`, background:`rgba(${hexToRgb(p.color)},.1)` }}>
                      {p.cat}
                    </span>
                  </div>
                  <div style={{ padding:'1.4rem' }}>
                    <h5 style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontWeight:700, textTransform:'uppercase', color:'#F0F0FF', marginBottom:'.6rem', fontSize:'1rem' }}>
                      {p.title}
                    </h5>
                    <p style={{ color:'rgba(240,240,255,.45)', fontSize:'.8rem', lineHeight:1.7, marginBottom:'1rem' }}>{p.desc}</p>
                    <div className="d-flex flex-wrap gap-1">
                      {p.tags.map(t => (
                        <span key={t} className="chip" style={{ color:p.color, borderColor:`rgba(${hexToRgb(p.color)},.2)`, background:`rgba(${hexToRgb(p.color)},.06)` }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
