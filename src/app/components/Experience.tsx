const RESPONSIBILITIES = [
  'Menginput dan mengelola data income & outcome menggunakan spreadsheet',
  'Pencatatan dan validasi data buku pada sistem perpustakaan berbasis web',
  'Menjaga akurasi dan konsistensi data secara real-time',
  'Terbiasa bekerja dengan sistem administrasi digital',
];

const GAINED = ['Data Management','Spreadsheet','Web Systems','Validation','Digital Admin'];

const LOG = [
  { hash:'a1b2c3d', msg:'Internship @ Data Administration dept.' },
  { hash:'e4f5g6h', msg:'Mastered spreadsheet data workflows' },
  { hash:'i7j8k9l', msg:'Library web system validation & input' },
];

const CSS = `
  .exp-card {
    background:rgba(10,10,31,.8); border:1px solid rgba(168,85,247,.15); border-left:3px solid #FBBF24;
    border-radius:3px; padding:2rem; position:relative; overflow:hidden; transition:all .35s;
  }
  .exp-card:hover { border-color:rgba(168,85,247,.3); }
  .exp-term {
    background:rgba(5,5,16,.9); border:1px solid rgba(168,85,247,.12); border-radius:3px; padding:1.2rem;
    font-family:'JetBrains Mono',monospace; font-size:.72rem;
  }
`;

export function Experience() {
  return (
    <>
      <style>{CSS}</style>
      <div style={{ padding:'6rem 0', borderTop:'1px solid rgba(168,85,247,.12)' }}>
        <div className="container">
          <div className="d-flex align-items-center gap-3 mb-5" data-aos="fade-right">
            <span className="section-label" style={{ color:'#FBBF24' }}>05 /</span>
            <span className="section-label" style={{ color:'rgba(240,240,255,.35)' }}>Experience</span>
            <div className="section-line" />
          </div>

          <div className="row g-5">
            <div className="col-lg-4" data-aos="fade-up">
              <h2 className="display-neo" style={{ fontSize:'clamp(2.5rem,6vw,4rem)', marginBottom:0 }}>
                Work<br /><span className="grad-text-warm">History</span>
              </h2>
            </div>

            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="120">
              {/* Role card */}
              <div className="exp-card mb-4">
                <div className="d-flex justify-content-between align-items-start flex-wrap gap-3 mb-4">
                  <div>
                    <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'.65rem', color:'#FBBF24', letterSpacing:'.2em', textTransform:'uppercase', marginBottom:'.4rem' }}>
                      Praktik Kerja Lapangan (PKL)
                    </div>
                    <h4 style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontWeight:800, textTransform:'uppercase', color:'#F0F0FF', marginBottom:0, fontSize:'1.4rem' }}>
                      Administrasi Data
                    </h4>
                  </div>
                  <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'.65rem', color:'rgba(240,240,255,.35)', border:'1px solid rgba(168,85,247,.2)', padding:'.35rem .8rem', borderRadius:2 }}>
                    2023
                  </span>
                </div>

                <div className="d-flex flex-column gap-3 mb-4">
                  {RESPONSIBILITIES.map((r,i) => (
                    <div key={i} className="d-flex gap-3" data-aos="fade-left" data-aos-delay={200+i*70}>
                      <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'.65rem', color:'#FBBF24', flexShrink:0, marginTop:'.1rem' }}>
                        {String(i+1).padStart(2,'0')}
                      </span>
                      <span style={{ color:'rgba(240,240,255,.55)', fontSize:'.85rem', lineHeight:1.7 }}>{r}</span>
                    </div>
                  ))}
                </div>

                <div style={{ borderTop:'1px solid rgba(168,85,247,.12)', paddingTop:'1.2rem' }}>
                  <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'.6rem', color:'rgba(240,240,255,.3)', letterSpacing:'.2em', textTransform:'uppercase', marginBottom:'.6rem' }}>
                    Skills Acquired
                  </div>
                  <div className="d-flex flex-wrap gap-2">
                    {GAINED.map(s => (
                      <span key={s} className="chip" style={{ color:'#FBBF24', borderColor:'rgba(251,191,36,.25)', background:'rgba(251,191,36,.07)' }}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Git log */}
              <div className="exp-term">
                <div style={{ color:'#A855F7', marginBottom:'.8rem', fontSize:'.65rem', letterSpacing:'.12em' }}>
                  $ git log --oneline experience
                </div>
                {LOG.map(l => (
                  <div key={l.hash} style={{ marginBottom:'.4rem' }}>
                    <span style={{ color:'#10B981' }}>{l.hash}</span>
                    <span style={{ color:'rgba(240,240,255,.35)', marginLeft:'.8rem' }}>{l.msg}</span>
                  </div>
                ))}
                <div style={{ color:'rgba(240,240,255,.15)', marginTop:'.4rem' }}>...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
