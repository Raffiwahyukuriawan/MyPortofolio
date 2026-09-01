import { useState } from 'react';

const METHODS = [
  { icon:'✉️', label:'Email',     val:'wahyukurniawanraffi.com',    color:'#06B6D4', href:'mailto:wahyukurniawanraffi.com' },
  { icon:'💼', label:'LinkedIn',  val:'linkedin.com/in/raffi', color:'#A855F7', href:'#' },
  { icon:'🐱', label:'GitHub',    val:'github.com/raffi',      color:'#10B981', href:'#' },
  { icon:'💬', label:'WhatsApp',  val:'+62 831 4988 6707',     color:'#FBBF24', href:'#' },
];

const CSS = `
  .contact-method {
    background:rgba(10,10,31,.8); border:1px solid rgba(168,85,247,.12); border-radius:3px;
    padding:1.2rem 1.4rem; display:flex; align-items:center; gap:1rem;
    transition:all .35s; text-decoration:none; cursor:none;
  }
  .contact-method:hover { transform:translateX(6px); border-color:rgba(168,85,247,.35); }
  .contact-method-icon { font-size:1.4rem; flex-shrink:0; }
  .contact-form-wrap { background:rgba(10,10,31,.6); border:1px solid rgba(168,85,247,.12); border-radius:3px; padding:2rem; }
  .sent-overlay {
    position:absolute; inset:0; background:rgba(5,5,16,.95); display:flex; align-items:center; justify-content:center;
    flex-direction:column; gap:1rem; border-radius:3px;
    animation:enter-up .4s ease;
  }
  @keyframes enter-up { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:none} }
`;

export function Contact() {
  const [form, setForm] = useState({ name:'', email:'', msg:'' });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <style>{CSS}</style>
      <div style={{ padding:'6rem 0', borderTop:'1px solid rgba(168,85,247,.12)' }}>
        <div className="container">
          <div className="d-flex align-items-center gap-3 mb-5" data-aos="fade-right">
            <span className="section-label" style={{ color:'#A855F7' }}>07 /</span>
            <span className="section-label" style={{ color:'rgba(240,240,255,.35)' }}>Contact</span>
            <div className="section-line" />
          </div>

          <div className="row g-5 align-items-start">
            {/* Left */}
            <div className="col-lg-5" data-aos="fade-up">
              <h2 className="display-neo mb-3" style={{ fontSize:'clamp(2.5rem,6vw,4rem)' }}>
                Let&apos;s<br /><span className="grad-text">Connect</span>
              </h2>
              <p style={{ color:'rgba(240,240,255,.5)', fontSize:'.9rem', lineHeight:1.8, marginBottom:'2rem' }}>
                Tertarik untuk kolaborasi, freelance project, atau sekedar say hi?
                Saya selalu senang berkenalan dengan orang-orang baru di dunia tech!
              </p>

              <div className="d-flex flex-column gap-3">
                {METHODS.map((m,i) => (
                  <a key={m.label} href={m.href} className="contact-method"
                    style={{ borderLeftColor:`rgba(${hexToRgb(m.color)},.3)`, borderLeftWidth:2 }}
                    data-aos="fade-left" data-aos-delay={i*70}>
                    <span className="contact-method-icon">{m.icon}</span>
                    <div>
                      <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'.6rem', color:m.color, letterSpacing:'.2em', textTransform:'uppercase', marginBottom:'.15rem' }}>{m.label}</div>
                      <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'.75rem', color:'rgba(240,240,255,.6)' }}>{m.val}</div>
                    </div>
                    <div style={{ marginLeft:'auto', color:'rgba(240,240,255,.15)', fontSize:'1rem' }}>→</div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className="col-lg-7" data-aos="fade-up" data-aos-delay="150">
              <div className="contact-form-wrap" style={{ position:'relative' }}>
                {sent ? (
                  <div className="sent-overlay">
                    <div style={{ fontSize:'3rem' }}>🚀</div>
                    <div className="grad-text display-neo" style={{ fontSize:'1.5rem' }}>Message Sent!</div>
                    <p style={{ color:'rgba(240,240,255,.5)', fontFamily:"'JetBrains Mono',monospace", fontSize:'.75rem', textAlign:'center' }}>
                      Thanks! I will get back to you soon.
                    </p>
                    <button onClick={() => setSent(false)} className="btn-outline-neon btn btn-sm">
                      Send Another
                    </button>
                  </div>
                ) : null}

                <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'.65rem', color:'#A855F7', letterSpacing:'.15em', marginBottom:'1.5rem' }}>
                  $ new Message()
                </div>

                <form onSubmit={submit}>
                  <div className="mb-3">
                    <label style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'.65rem', color:'rgba(240,240,255,.35)', letterSpacing:'.15em', textTransform:'uppercase', display:'block', marginBottom:'.5rem' }}>
                      name
                    </label>
                    <input className="form-neo w-100" value={form.name} onChange={e => setForm({...form,name:e.target.value})}
                      placeholder="Your name" required />
                  </div>
                  <div className="mb-3">
                    <label style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'.65rem', color:'rgba(240,240,255,.35)', letterSpacing:'.15em', textTransform:'uppercase', display:'block', marginBottom:'.5rem' }}>
                      email
                    </label>
                    <input type="email" className="form-neo w-100" value={form.email} onChange={e => setForm({...form,email:e.target.value})}
                      placeholder="your@email.com" required />
                  </div>
                  <div className="mb-4">
                    <label style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'.65rem', color:'rgba(240,240,255,.35)', letterSpacing:'.15em', textTransform:'uppercase', display:'block', marginBottom:'.5rem' }}>
                      message
                    </label>
                    <textarea className="form-neo w-100" rows={5} value={form.msg} onChange={e => setForm({...form,msg:e.target.value})}
                      placeholder="Hey Raffi, let's work together on..." required style={{ resize:'none' }} />
                  </div>
                  <button type="submit" className="btn-neon btn w-100">Send Message →</button>
                </form>
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
