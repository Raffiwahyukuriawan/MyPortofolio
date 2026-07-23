import { ImageWithFallback } from './figma/ImageWithFallback';

const ACHIEVEMENTS = [
  {
    img:'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&h=600&fit=crop&auto=format',
    title:'Best Graduation Project',
    date:'Maret 2024', tag:'ACADEMIC', color:'#06B6D4', wide:true,
  },
  {
    img:'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&h=600&fit=crop&auto=format',
    title:'Web Dev Competition — Juara 2',
    date:'November 2023', tag:'COMPETITION', color:'#A855F7', wide:false,
  },
  {
    img:'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop&auto=format',
    title:'Outstanding Internship',
    date:'Agustus 2023', tag:'INTERNSHIP', color:'#10B981', wide:false,
  },
  {
    img:'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=600&fit=crop&auto=format',
    title:'Mobile App Innovation Award',
    date:'Februari 2024', tag:'INNOVATION', color:'#F43F5E', wide:true,
  },
];

const CSS = `
  .ach-card {
    position:relative; overflow:hidden; cursor:none;
    border:1px solid rgba(168,85,247,.1); transition:all .4s;
  }
  .ach-card:hover { border-color:rgba(168,85,247,.4); }
  .ach-card img { filter:saturate(.3) brightness(.7); transition:all .6s; }
  .ach-card:hover img { filter:saturate(1) brightness(.85); transform:scale(1.05); }
`;

export function Achievements() {
  return (
    <>
      <style>{CSS}</style>
      <div style={{ padding:'6rem 0', borderTop:'1px solid rgba(168,85,247,.12)' }}>
        <div className="container">
          <div className="d-flex align-items-center gap-3 mb-5" data-aos="fade-right">
            <span className="section-label" style={{ color:'#F43F5E' }}>06 /</span>
            <span className="section-label" style={{ color:'rgba(240,240,255,.35)' }}>Awards & Recognition</span>
            <div className="section-line" />
            <span className="section-label" style={{ color:'rgba(240,240,255,.2)' }}>{ACHIEVEMENTS.length} milestones</span>
          </div>

          <h2 className="display-neo mb-5" style={{ fontSize:'clamp(2.5rem,6vw,4rem)' }} data-aos="fade-up">
            Milestones &<br /><span className="grad-text">Recognition</span>
          </h2>

          <div className="row g-3">
            {ACHIEVEMENTS.map((a,i) => (
              <div key={i} className={a.wide ? 'col-md-8' : 'col-md-4'} data-aos="zoom-in" data-aos-delay={i*90}>
                <div className="ach-card">
                  <div style={{ position:'relative', height: a.wide ? 320 : 240, overflow:'hidden' }}>
                    <ImageWithFallback src={a.img} alt={a.title} className="w-100 h-100" style={{ objectFit:'cover' }} />
                    <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(5,5,16,.95) 0%, rgba(5,5,16,.2) 60%, transparent 100%)' }} />

                    {/* Tag */}
                    <span className="chip" style={{ position:'absolute', top:'1rem', left:'1rem', color:a.color, borderColor:`rgba(${hexToRgb(a.color)},.35)`, background:`rgba(${hexToRgb(a.color)},.1)`, backdropFilter:'blur(4px)' }}>
                      {a.tag}
                    </span>
                    <span style={{ position:'absolute', top:'1rem', right:'1rem', fontFamily:"'JetBrains Mono',monospace", fontSize:'.6rem', color:'rgba(240,240,255,.4)', border:'1px solid rgba(168,85,247,.15)', padding:'.3rem .6rem', background:'rgba(5,5,16,.7)', backdropFilter:'blur(4px)' }}>
                      {a.date}
                    </span>

                    {/* Bottom neon glow on hover */}
                    <div style={{ position:'absolute', bottom:0, left:0, right:0, height:2, background:`linear-gradient(90deg, transparent, ${a.color}, transparent)`, opacity:0, transition:'opacity .4s' }}
                      className="ach-glow" />

                    <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'1.2rem' }}>
                      <h5 style={{ fontFamily:"'Bricolage Grotesque',sans-serif", fontWeight:700, textTransform:'uppercase', color:'#F0F0FF', marginBottom:0, fontSize:'.95rem' }}>
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
    </>
  );
}

function hexToRgb(hex: string) {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return r ? `${parseInt(r[1],16)},${parseInt(r[2],16)},${parseInt(r[3],16)}` : '255,255,255';
}
