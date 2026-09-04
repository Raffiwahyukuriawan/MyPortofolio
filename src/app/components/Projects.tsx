import { useState, useEffect } from 'react';

interface Project {
  num: string;
  cat: string;
  color: string;
  title: string;
  desc: string;
  tags: string[];
  img: string;
}

const PROJECTS: Project[] = [
  {
    num: '01',
    cat: 'web',
    color: '#06B6D4',
    title: 'Kasir Toko Ravira Mart',
    desc: 'Aplikasi kasir untuk Toko Ravira Mart yang dilengkapi dengan pencatatan transaksi, manajemen produk, laporan penjualan, serta pengelolaan stok secara real-time.',
    tags: ['Laravel 11', 'MySQL', 'Tailwind CSS'],
    img: 'https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/web%20kasir%20(34).png',
  },
  {
    num: '02',
    cat: 'mobile',
    color: '#A855F7',
    title: 'Hotel Smart System',
    desc: 'Mobile app untuk pemesanan kamar hotel dan makanan secara real-time, dilengkapi fitur manajemen pesanan, detail kamar, dan tracking status layanan.',
    tags: ['Flutter', 'Dart', 'API'],
    img: 'https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/hss%20mobile.jpeg',
  },
  {
    num: '03',
    cat: 'desktop',
    color: '#FBBF24',
    title: 'Aplikasi Admin Sistem Reservasi Hotel',
    desc: 'Aplikasi admin untuk sistem reservasi hotel yang dilengkapi dengan pengelolaan kamar, manajemen data tamu, Pengelolaan menu restorant, dan laporan reservasi.',
    tags: ['C#', 'WPF', 'MySQL'],
    img: 'https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/admin%20reservasi%20hotel.png',
  },
  {
    num: '04',
    cat: 'web',
    color: '#06B6D4',
    title: 'Sistem Penggajian',
    desc: 'Aplikasi penggajian berbasis web yang dilengkapi fitur lengkap seperti melihat seluruh daftar absensi karyawan, manajemen data tunjangan, pengelolaan izin karyawan, perhitungan gaji otomatis, serta pencetakan slip gaji secara cepat dan akurat.',
    tags: ['Laravel', 'MySQL'],
    img: 'https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/penggajian.png',
  },
  {
    num: '05',
    cat: 'mobile',
    color: '#A855F7',
    title: 'Sistem Pembayaran SPP Sekolah',
    desc: 'Sistem pembayaran SPP sekolah berbasis web untuk mengelola data siswa, mencatat pembayaran bulanan, dan menampilkan laporan SPP secara otomatis.',
    tags: ['Laravel', 'MySQl'],
    img: 'https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/web%20spp%20sekolah.png',
  },
  {
    num: '06',
    cat: 'creative',
    color: '#F43F5E',
    title: 'Miniatur Bus SJM BATOSAI',
    desc: 'Miniatur bus SR 2 XHD Prime handmade dari kardus dengan detail eksterior dan interior yang realistis.',
    tags: ['Handmade', 'Miniature'],
    img: 'https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/sjm%20batosai.jpg',
  },
  {
    num: '07',
    cat: 'web',
    color: '#06B6D4',
    title: 'Event Organizer Resto',
    desc: 'Website Event Organizer Resto dengan sistem frontend dan backend untuk mengelola pemesanan acara, jadwal, dan informasi layanan.',
    tags: ['CI 3', 'MySQL'],
    img: 'https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/event%20organizer.png',
  },
  {
    num: '08',
    cat: 'creative',
    color: '#F43F5E',
    title: 'Miniatur Bus ASYROF TUAN MUDA',
    desc: 'Miniatur bus Jetbus 5 handmade dari kardus dengan detail eksterior dan interior yang realistis.',
    tags: ['Handmade', 'Miniature'],
    img: 'https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/asyrof.jpg',
  },
  {
    num: '09',
    cat: 'web',
    color: '#06B6D4',
    title: 'Web Pemesanan Tiket Kereta',
    desc: 'Sistem pemesanan tiket kereta berbasis web yang memungkinkan penumpang memesan tiket secara online, petugas melakukan proses check-in, serta admin mengelola seluruh data seperti jadwal perjalanan, kereta, gerbong, dan membuat laporan.',
    tags: ['Laravel', 'MySQL'],
    img: 'https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/tiketing2.png',
  },
  {
    num: '10',
    cat: 'web',
    color: '#06B6D4',
    title: 'Website Undangan Pernikahan',
    desc: 'Website undangan pernikahan sederhana yang dilengkapi fitur Countdown, Info, Story, Gallery, RSVP, Gift, serta musik autoplay untuk menyambut tamu.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    img: 'https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/web%20wedding.png',
  },
  {
    num: '11',
    cat: 'mobile',
    color: '#A855F7',
    title: 'Mobile Absensi',
    desc: 'Aplikasi mobile untuk absensi karyawan yang dilengkapi fitur absen masuk/keluar, pengajuan izin, riwayat kehadiran, dan profil karyawan.',
    tags: ['Flutter', 'Dart'],
    img: 'https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/mobile%20absensi.png',
  },
  {
    num: '12',
    cat: 'web',
    color: '#06B6D4',
    title: 'Website Sigap Alam',
    desc: 'SIGAP ALAM adalah aplikasi web edukasi lingkungan dan mitigasi bencana yang menyediakan informasi bencana, langkah pencegahan, serta sistem manajemen konten berbasis role (user, kontributor, admin). Aplikasi ini dibangun dengan Laravel dan Bootstrap, memiliki tampilan modern, responsif, serta sistem autentikasi yang aman.',
    tags: ['Laravel', 'MySQL'],
    img: 'https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/sigap%20alam.png',
  },
    {
    num: '13',
    cat: 'creative',
    color: '#F43F5E',
    title: 'Miniatur Bus FADEL MAUDI',
    desc: 'Miniatur bus Jetbus 5 handmade dari kardus dengan detail eksterior dan interior yang realistis.',
    tags: ['Handmade', 'Miniature'],
    img: 'https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/fadel.jpg',
  },
];

const FILTERS = ['all', 'web', 'mobile', 'desktop', 'creative'];
const CAT_COLORS: Record<string, string> = {
  web: '#06B6D4', mobile: '#A855F7', desktop: '#FBBF24', creative: '#F43F5E',
};

const CSS = `
  /* ── Filter buttons ── */
  .proj-filter {
    font-family: 'JetBrains Mono', monospace;
    font-size: .65rem; letter-spacing: .2em; text-transform: uppercase;
    padding: .45rem 1.1rem; border-radius: 2px;
    border: 1px solid rgba(168,85,247,.2);
    background: transparent; color: rgba(240,240,255,.4);
    transition: all .25s; cursor: none;
  }
  .proj-filter.active,
  .proj-filter:hover {
    color: #F0F0FF;
    border-color: rgba(168,85,247,.5);
    background: rgba(168,85,247,.1);
  }

  /* ── Project card ── */
  .proj-card {
    background: rgba(10,10,31,.8);
    border-radius: 3px; overflow: hidden;
    border: 1px solid rgba(168,85,247,.12);
    transition: transform .35s, border-color .35s;
    cursor: none;
  }
  .proj-card:hover {
    transform: translateY(-6px);
    border-color: rgba(168,85,247,.35);
  }
  .proj-card-img {
    width: 100%; height: 200px; object-fit: cover;
    display: block;
    filter: saturate(.3);
    transition: filter .5s, transform .5s;
  }
  .proj-card:hover .proj-card-img {
    filter: saturate(1);
    transform: scale(1.04);
  }
  .proj-num {
    position: absolute; top: .8rem; right: 1rem;
    font-family: 'Bricolage Grotesque', sans-serif;
    font-weight: 800; font-size: 4rem; opacity: .06;
    line-height: 1; pointer-events: none; color: #F0F0FF;
  }
  .proj-zoom-icon {
    position: absolute; top: 50%; left: 50%;
    transform: translate(-50%,-50%) scale(.6);
    width: 48px; height: 48px; border-radius: 50%;
    border: 1.5px solid rgba(240,240,255,.7);
    background: rgba(5,5,16,.55);
    backdrop-filter: blur(6px);
    display: flex; align-items: center; justify-content: center;
    font-size: 1rem; color: #F0F0FF;
    opacity: 0; transition: opacity .3s, transform .3s;
    pointer-events: none;
  }
  .proj-card:hover .proj-zoom-icon {
    opacity: 1;
    transform: translate(-50%,-50%) scale(1);
  }

  /* ── Modal backdrop ── */
  .proj-backdrop {
    position: fixed; inset: 0; z-index: 8000;
    background: rgba(3,3,12,.82);
    backdrop-filter: blur(14px);
    display: flex; align-items: center; justify-content: center;
    padding: 1rem;
    animation: proj-fade .22s ease;
  }
  @keyframes proj-fade { from { opacity: 0 } to { opacity: 1 } }

  /* ── Modal box ── */
  .proj-modal-box {
    position: relative;
    background: rgba(10,10,31,.98);
    border: 1px solid rgba(168,85,247,.28);
    border-radius: 4px;
    width: 100%; max-width: 820px;
    max-height: 90vh; overflow-y: auto;
    animation: proj-rise .3s cubic-bezier(.16,1,.3,1);
  }
  @keyframes proj-rise {
    from { opacity: 0; transform: translateY(28px) }
    to   { opacity: 1; transform: none }
  }
  .proj-modal-img {
    width: 100%; height: 300px;
    object-fit: cover; display: block;
  }
  .proj-modal-img-grad {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(10,10,31,1) 0%, rgba(10,10,31,.1) 55%, transparent 100%);
  }
  .proj-modal-body { padding: 1.8rem 2rem 2rem; }
  .proj-modal-close {
    position: absolute; top: .9rem; right: .9rem; z-index: 2;
    width: 34px; height: 34px; border-radius: 50%;
    background: rgba(5,5,16,.75);
    border: 1px solid rgba(168,85,247,.3);
    color: #F0F0FF; font-size: .8rem;
    display: flex; align-items: center; justify-content: center;
    cursor: none; transition: background .2s, border-color .2s; line-height: 1;
  }
  .proj-modal-close:hover {
    background: rgba(168,85,247,.22);
    border-color: #A855F7;
  }

  @media (max-width: 576px) {
    .proj-modal-img { height: 200px; }
    .proj-modal-body { padding: 1.2rem 1.2rem 1.5rem; }
  }
`;

function rgb(hex: string) {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return m ? `${parseInt(m[1],16)},${parseInt(m[2],16)},${parseInt(m[3],16)}` : '255,255,255';
}

export function Projects() {
  const [active, setActive] = useState('all');
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = active === 'all' ? PROJECTS : PROJECTS.filter(p => p.cat === active);

  /* Escape key */
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelected(null); };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, []);

  /* Lock body scroll */
  useEffect(() => {
    if(!selected) return;

    const scrollY = window.scrollY;

    document.body.style.position = 'fixed';
    document.body.style.top = '-${scrollY}px';
    document.body.style.width = '100%';
    
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';

      window.scrollTo(0, scrollY);
    };
  }, [selected]);

  return (
    <>
      <style>{CSS}</style>

      <div style={{ padding: '6rem 0', borderTop: '1px solid rgba(168,85,247,.12)' }}>
        <div className="container">
          {/* Header */}
          <div className="d-flex align-items-center gap-3 mb-5" data-aos="fade-right">
            <span className="section-label" style={{ color: '#10B981' }}>04 /</span>
            <span className="section-label" style={{ color: 'rgba(240,240,255,.35)' }}>Projects</span>
            <div className="section-line" />
          </div>

          <div className="row align-items-end mb-5">
            <div className="col-lg-6" data-aos="fade-up">
              <h2 className="display-neo" style={{ fontSize: 'clamp(2.5rem,6vw,4rem)', marginBottom: 0 }}>
                Selected<br /><span className="grad-text">Work</span>
              </h2>
            </div>
            <div
              className="col-lg-6 d-flex flex-wrap gap-2 justify-content-lg-end mt-4 mt-lg-0"
              data-aos="fade-up" data-aos-delay="100"
            >
              {FILTERS.map(f => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`proj-filter${active === f ? ' active' : ''}`}
                  style={active === f ? {
                    borderColor: CAT_COLORS[f] || '#A855F7',
                    color: CAT_COLORS[f] || '#F0F0FF',
                    background: `rgba(${rgb(CAT_COLORS[f] || '#A855F7')},.1)`,
                  } : {}}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="row g-4">
            {filtered.map((p, i) => (
              <div
                key={p.num}
                className="col-md-6 col-lg-4"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div
                  className="proj-card h-100"
                  onClick={() => setSelected(p)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Lihat detail: ${p.title}`}
                  onKeyDown={e => e.key === 'Enter' && setSelected(p)}
                >
                  {/* Image area */}
                  <div style={{ position: 'relative', overflow: 'hidden', height: 200 }}>
                    <img src={p.img} alt={p.title} className="proj-card-img" />
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(10,10,31,1) 0%, rgba(10,10,31,.25) 60%, transparent 100%)',
                      pointerEvents: 'none',
                    }} />
                    {/* zoom hint */}
                    <div className="proj-zoom-icon">⤢</div>
                    {/* big number */}
                    <div className="proj-num">{p.num}</div>
                    {/* cat chip */}
                    <span className="chip" style={{
                      position: 'absolute', top: '1rem', left: '1rem',
                      color: p.color,
                      borderColor: `rgba(${rgb(p.color)},.3)`,
                      background: `rgba(${rgb(p.color)},.1)`,
                      pointerEvents: 'none',
                    }}>
                      {p.cat}
                    </span>
                  </div>

                  {/* Card body */}
                  <div style={{ padding: '1.3rem' }}>
                    <h5 style={{
                      fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 700,
                      textTransform: 'uppercase', color: '#F0F0FF',
                      marginBottom: '.5rem', fontSize: '1rem',
                    }}>
                      {p.title}
                    </h5>
                    <p style={{
                      color: 'rgba(240,240,255,.42)', fontSize: '.8rem',
                      lineHeight: 1.7, marginBottom: '1rem',
                      display: '-webkit-box', WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical', overflow: 'hidden',
                    }}>
                      {p.desc}
                    </p>
                    <div className="d-flex flex-wrap gap-1">
                      {p.tags.map(t => (
                        <span key={t} className="chip" style={{
                          color: p.color,
                          borderColor: `rgba(${rgb(p.color)},.2)`,
                          background: `rgba(${rgb(p.color)},.06)`,
                        }}>
                          {t}
                        </span>
                      ))}
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
          className="proj-backdrop"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="proj-modal-box" onClick={e => e.stopPropagation()}>

            {/* Close */}
            <button
              className="proj-modal-close"
              onClick={() => setSelected(null)}
              aria-label="Tutup"
            >
              ✕
            </button>

            {/* Hero image */}
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <img src={selected.img} alt={selected.title} className="proj-modal-img" />
              <div className="proj-modal-img-grad" />

              {/* cat chip over image */}
              <span className="chip" style={{
                position: 'absolute', top: '1rem', left: '1rem',
                color: selected.color,
                borderColor: `rgba(${rgb(selected.color)},.4)`,
                background: `rgba(${rgb(selected.color)},.14)`,
                backdropFilter: 'blur(6px)',
              }}>
                {selected.cat}
              </span>

            </div>

            {/* Body */}
            <div className="proj-modal-body">
              {/* meta */}
              <div className="d-flex flex-wrap gap-2 mb-3">

                <span style={{
                  fontFamily: "'JetBrains Mono',monospace", fontSize: '.62rem',
                  color: 'rgba(240,240,255,.38)',
                  border: '1px solid rgba(168,85,247,.15)',
                  padding: '.3rem .75rem',
                }}>
                  🗂 {selected.num} / {PROJECTS.length.toString().padStart(2,'0')}
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

              {/* color divider */}
              <div style={{
                height: 2, borderRadius: 99, marginBottom: '1.1rem',
                background: `linear-gradient(90deg, ${selected.color}, rgba(${rgb(selected.color)},0))`,
              }} />

              {/* description */}
              <p style={{
                color: 'rgba(240,240,255,.58)', lineHeight: 1.85,
                fontSize: '.88rem', marginBottom: '1.4rem',
              }}>
                {selected.desc}
              </p>

              {/* tech stack */}
              <div style={{
                fontFamily: "'JetBrains Mono',monospace", fontSize: '.6rem',
                color: 'rgba(240,240,255,.3)', letterSpacing: '.18em',
                textTransform: 'uppercase', marginBottom: '.65rem',
              }}>
                Tech Stack
              </div>
              <div className="d-flex flex-wrap gap-2 mb-4">
                {selected.tags.map(t => (
                  <span key={t} className="chip" style={{
                    color: selected.color,
                    borderColor: `rgba(${rgb(selected.color)},.28)`,
                    background: `rgba(${rgb(selected.color)},.08)`,
                    fontSize: '.7rem',
                  }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* footer */}
              <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                <span style={{
                  fontFamily: "'JetBrains Mono',monospace", fontSize: '.62rem',
                  color: 'rgba(240,240,255,.18)', letterSpacing: '.1em',
                }}>
                  Tekan Esc atau klik di luar untuk menutup
                </span>
                <button onClick={() => setSelected(null)} className="btn-outline-neon btn btn-sm">
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
