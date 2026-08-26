const SERVICES = [
  {
    title: "Web Development",
    icon: "🌐",
    color: "#06B6D4",
    desc: "Membangun aplikasi web yang responsif dan optimal.",
  },
  {
    title: "Mobile Development",
    icon: "📱",
    color: "#A855F7",
    desc: "Pengembangan aplikasi mobile lintas platform menggunakan Flutter.",
  },
  {
    title: "Desktop Apps",
    icon: "💻",
    color: "#10B981",
    desc: "Pengembangan aplikasi desktop Windows menggunakan C#.",
  },
  {
    title: "Creative Work",
    icon: "🎨",
    color: "#FBBF24",
    desc: "Pembuatan miniatur bus buatan tangan dari bahan kardus.",
  },
];

const TERM = [
  { key: "name", val: "Raffi Wahyu Kurniawan", color: "#06B6D4" },
  { key: "school", val: "SMK Negeri 2 Karanganyar", color: "#A855F7" },
  { key: "major", val: "RPL (Rekayasa Perangkat Lunak)", color: "#10B981" },
  { key: "location", val: "Karanganyar, Indonesia", color: "#FBBF24" },
  { key: "hobby", val: "Membuat Miniatur", color: "#F43F5E" },
  { key: "status", val: "Open to opportunities", color: "#10B981" },
];

const CSS = `
  .about-term {
    background:rgba(5,5,16,.9); border:1px solid rgba(168,85,247,.15); border-radius:3px;
    font-family:'JetBrains Mono',monospace; font-size:.78rem; padding:1.4rem;
  }
  .about-term-header { color:#A855F7; margin-bottom:1rem; font-size:.7rem; letter-spacing:.15em; }
  .about-term-key { color:rgba(240,240,255,.35); }
  .about-term-eq  { color:rgba(240,240,255,.2); margin:0 .4rem; }
  .service-card {
    background:rgba(10,10,31,.8); border-radius:3px; padding:1.5rem; border:1px solid;
    transition:all .35s; position:relative; overflow:hidden;
  }
  .service-card::after {
    content:''; position:absolute; bottom:0; left:0; right:0; height:2px;
    background:currentColor; transform:scaleX(0); transform-origin:left; transition:transform .35s;
  }
  .service-card:hover::after { transform:scaleX(1); }
  .service-card:hover { transform:translateY(-5px); }
  .service-icon { font-size:1.8rem; margin-bottom:.8rem; display:block; }
`;

export function About() {
  return (
    <>
      <style>{CSS}</style>
      <div
        style={{
          padding: "6rem 0",
          borderTop: "1px solid rgba(168,85,247,.12)",
        }}
      >
        <div className="container">
          {/* Header */}
          <div
            className="d-flex align-items-center gap-3 mb-5"
            data-aos="fade-right"
          >
            <span className="section-label" style={{ color: "#06B6D4" }}>
              02 /
            </span>
            <span
              className="section-label"
              style={{ color: "rgba(240,240,255,.35)" }}
            >
              About Me
            </span>
            <div className="section-line" />
          </div>

          <div className="row g-5 align-items-start">
            {/* Left — terminal */}
            <div className="col-lg-5" data-aos="fade-up" data-aos-delay="100">
              <h2
                className="display-neo mb-4"
                style={{ fontSize: "clamp(2.5rem,6vw,4rem)" }}
              >
                Who Am
                <br />
                <span className="grad-text">I?</span>
              </h2>
              <div className="about-term mb-4">
                <div className="about-term-header">$ whoami --verbose</div>
                {TERM.map((t) => (
                  <div key={t.key} className="mb-1">
                    <span className="about-term-key">{t.key}</span>
                    <span className="about-term-eq">=</span>
                    <span style={{ color: t.color }}>&quot;{t.val}&quot;</span>
                  </div>
                ))}
                <div className="mt-2" style={{ color: "rgba(240,240,255,.2)" }}>
                  _
                </div>
              </div>
              <p
                style={{
                  color: "rgba(240,240,255,.55)",
                  lineHeight: 1.9,
                  fontSize: ".9rem",
                }}
              >
                Saya adalah seorang pengembang web dan mobile yang fokus
                membangun aplikasi dengan tampilan antarmuka yang rapi serta
                performa yang optimal. Saya senang mengubah ide menjadi produk
                digital yang bermanfaat dan mudah digunakan.
              </p>
            </div>

            {/* Right — services */}
            <div className="col-lg-7" data-aos="fade-up" data-aos-delay="200">
              <div className="row g-3">
                {SERVICES.map((s, i) => (
                  <div
                    key={s.title}
                    className="col-sm-6"
                    data-aos="zoom-in"
                    data-aos-delay={200 + i * 80}
                  >
                    <div
                      className="service-card"
                      style={{
                        borderColor: `rgba(${hexToRgb(s.color)}, 0.2)`,
                        color: s.color,
                      }}
                    >
                      <span className="service-icon">{s.icon}</span>
                      <h5
                        style={{
                          fontFamily: "'Bricolage Grotesque',sans-serif",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          fontSize: ".95rem",
                          color: "#F0F0FF",
                          marginBottom: ".5rem",
                        }}
                      >
                        {s.title}
                      </h5>
                      <p
                        style={{
                          color: "rgba(240,240,255,.45)",
                          fontSize: ".8rem",
                          margin: 0,
                          lineHeight: 1.7,
                        }}
                      >
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Fun facts */}
              <div className="row g-3 mt-1">
                {[
                  {
                    val: "🚌",
                    text: "Bus miniatur collector",
                    color: "#FBBF24",
                  },
                  { val: "🏸", text: "Badminton player", color: "#10B981" },
                  { val: "📚", text: "SMK RPL student", color: "#06B6D4" },
                  { val: "🌏", text: "Based in Karanganyar", color: "#A855F7" },
                ].map((f) => (
                  <div key={f.text} className="col-6 col-sm-3">
                    <div
                      style={{
                        textAlign: "center",
                        padding: "1rem",
                        background: "rgba(10,10,31,.5)",
                        border: `1px solid rgba(${hexToRgb(f.color)},.15)`,
                        borderRadius: 3,
                      }}
                    >
                      <div
                        style={{ fontSize: "1.5rem", marginBottom: ".4rem" }}
                      >
                        {f.val}
                      </div>
                      <div
                        style={{
                          fontFamily: "'JetBrains Mono',monospace",
                          fontSize: ".6rem",
                          color: f.color,
                          textTransform: "uppercase",
                          letterSpacing: ".12em",
                        }}
                      >
                        {f.text}
                      </div>
                    </div>
                  </div>
                ))}
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
  return r
    ? `${parseInt(r[1], 16)},${parseInt(r[2], 16)},${parseInt(r[3], 16)}`
    : "255,255,255";
}
