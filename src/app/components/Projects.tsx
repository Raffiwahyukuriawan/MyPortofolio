import { useState } from "react";

const PROJECTS = [
  {
    num: "01",
    cat: "web",
    color: "#06B6D4",
    title: "Kasir Toko Ravira Mart",
    desc: "Aplikasi kasir untuk Toko Ravira Mart yang dilengkapi dengan pencatatan transaksi, manajemen produk, laporan penjualan, serta pengelolaan stok secara real-time.",
    tags: ["Laravel 11", "MySQL", "Tailwind CSS"],
    img: "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/web%20kasir%20(34).png",
  },
  {
    num: "02",
    cat: "mobile",
    color: "#A855F7",
    title: "Hotel Smart System",
    desc: "Mobile app untuk pemesanan kamar hotel dan makanan secara real-time, dilengkapi fitur manajemen pesanan, detail kamar, dan tracking status layanan.",
    tags: ["Flutter", "Dart", "API"],
    img: "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/hss%20mobile.jpeg",
  },
  {
    num: "03",
    cat: "desktop",
    color: "#FBBF24",
    title: "Aplikasi Admin Sistem Reservasi Hotel",
    desc: "Aplikasi admin untuk sistem reservasi hotel yang dilengkapi dengan pengelolaan kamar, manajemen data tamu, Pengelolaan menu restorant, dan laporan reservasi.",
    tags: ["C#", "WPF", "MySQL"],
    img: "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/admin%20reservasi%20hotel.png",
  },
  {
    num: "04",
    cat: "web",
    color: "#06B6D4",
    title: "Sistem Penggajian",
    desc: "Aplikasi penggajian berbasis web yang dilengkapi fitur lengkap seperti melihat seluruh daftar absensi karyawan, manajemen data tunjangan, pengelolaan izin karyawan, perhitungan gaji otomatis, serta pencetakan slip gaji secara cepat dan akurat.",
    tags: ["Laravel", "MySQL"],
    img: "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/penggajian.png",
  },
  {
    num: "05",
    cat: "mobile",
    color: "#A855F7",
    title: "Sistem Pembayaran SPP Sekolah",
    desc: "Sistem pembayaran SPP sekolah berbasis web untuk mengelola data siswa, mencatat pembayaran bulanan, dan menampilkan laporan SPP secara otomatis.",
    tags: ["Laravel", "MySQl"],
    img: "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/web%20spp%20sekolah.png",
  },
  {
    num: "06",
    cat: "creative",
    color: "#F43F5E",
    title: "Miniatur Bus SJM BATOSAI",
    desc: "Miniatur bus SR 2 XHD Prime handmade dari kardus dengan detail eksterior dan interior yang realistis.",
    tags: ["Handmade", "Miniature"],
    img: "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/sjm%20batosai.jpg",
  },
  {
    num: "07",
    cat: "web",
    color: "#06B6D4",
    title: "Event Organizer Resto",
    desc: "Website Event Organizer Resto dengan sistem frontend dan backend untuk mengelola pemesanan acara, jadwal, dan informasi layanan.",
    tags: ["CI 3", "MySQL"],
    img: "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/event%20organizer.png",
  },
  {
    num: "08",
    cat: "creative",
    color: "#F43F5E",
    title: "Miniatur Bus ASYROF TUAN MUDA",
    desc: "Miniatur bus Jetbus 5 handmade dari kardus dengan detail eksterior dan interior yang realistis.",
    tags: ["Handmade", "Miniature"],
    img: "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/asyrof.jpg",
  },
  {
    num: "09",
    cat: "web",
    color: "#06B6D4",
    title: "Web Pemesanan Tiket Kereta",
    desc: "Sistem pemesanan tiket kereta berbasis web yang memungkinkan penumpang memesan tiket secara online, petugas melakukan proses check-in, serta admin mengelola seluruh data seperti jadwal perjalanan, kereta, gerbong, dan membuat laporan.",
    tags: ["Laravel", "MySQL"],
    img: "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/tiketing2.png",
  },
  {
    num: "10",
    cat: "web",
    color: "#06B6D4",
    title: "Website Undangan Pernikahan",
    desc: "Website undangan pernikahan sederhana yang dilengkapi fitur Countdown, Info, Story, Gallery, RSVP, Gift, serta musik autoplay untuk menyambut tamu.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    img: "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/web%20wedding.png",
  },
  {
    num: "11",
    cat: "mobile",
    color: "#A855F7",
    title: "Mobile Absensi",
    desc: "Aplikasi mobile untuk absensi karyawan yang dilengkapi fitur absen masuk/keluar, pengajuan izin, riwayat kehadiran, dan profil karyawan.",
    tags: ["Flutter", "Dart"],
    img: "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/mobile%20absensi.png",
  },
  {
    num: "12",
    cat: "web",
    color: "#06B6D4",
    title: "Website Sigap Alam",
    desc: "SIGAP ALAM adalah aplikasi web edukasi lingkungan dan mitigasi bencana yang menyediakan informasi bencana, langkah pencegahan, serta sistem manajemen konten berbasis role (user, kontributor, admin). Aplikasi ini dibangun dengan Laravel dan Bootstrap, memiliki tampilan modern, responsif, serta sistem autentikasi yang aman.",
    tags: ["Laravel", "MySQL"],
    img: "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/sigap%20alam.png",
  },
    {
    num: "13",
    cat: "creative",
    color: "#F43F5E",
    title: "Miniatur Bus FADEL MAUDI",
    desc: "Miniatur bus Jetbus 5 handmade dari kardus dengan detail eksterior dan interior yang realistis.",
    tags: ["Handmade", "Miniature"],
    img: "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/fadel.jpg",
  },
];

const FILTERS = ["all", "web", "mobile", "desktop", "creative"];
const CAT_COLORS: Record<string, string> = {
  web: "#06B6D4",
  mobile: "#A855F7",
  desktop: "#FBBF24",
  creative: "#F43F5E",
};

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
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? PROJECTS : PROJECTS.filter((p) => p.cat === active);

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
          <div
            className="d-flex align-items-center gap-3 mb-5"
            data-aos="fade-right"
          >
            <span className="section-label" style={{ color: "#10B981" }}>
              04 /
            </span>
            <span
              className="section-label"
              style={{ color: "rgba(240,240,255,.35)" }}
            >
              Projects
            </span>
            <div className="section-line" />
          </div>

          <div className="row align-items-end mb-5">
            <div className="col-lg-6" data-aos="fade-up">
              <h2
                className="display-neo"
                style={{ fontSize: "clamp(2.5rem,6vw,4rem)", marginBottom: 0 }}
              >
                Selected
                <br />
                <span className="grad-text">Work</span>
              </h2>
            </div>
            <div
              className="col-lg-6 d-flex flex-wrap gap-2 justify-content-lg-end mt-4 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`proj-filter${active === f ? " active" : ""}`}
                  style={
                    active === f
                      ? {
                          borderColor: CAT_COLORS[f] || "#A855F7",
                          color: CAT_COLORS[f] || "#F0F0FF",
                          background: `rgba(${hexToRgb(CAT_COLORS[f] || "#A855F7")},.1)`,
                        }
                      : {}
                  }
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="row g-4">
            {filtered.map((p, i) => (
              <div
                key={p.num}
                className="col-md-6 col-lg-4"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="proj-card h-100">
                  <div style={{ position: "relative", overflow: "hidden" }}>
                    <img src={p.img} alt={p.title} className="proj-img" />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, rgba(10,10,31,1) 0%, rgba(10,10,31,.3) 60%, transparent 100%)",
                      }}
                    />
                    <div className="proj-num">{p.num}</div>
                    <span
                      className="chip"
                      style={{
                        position: "absolute",
                        top: "1rem",
                        left: "1rem",
                        color: p.color,
                        borderColor: `rgba(${hexToRgb(p.color)},.3)`,
                        background: `rgba(${hexToRgb(p.color)},.1)`,
                      }}
                    >
                      {p.cat}
                    </span>
                  </div>
                  <div style={{ padding: "1.4rem" }}>
                    <h5
                      style={{
                        fontFamily: "'Bricolage Grotesque',sans-serif",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        color: "#F0F0FF",
                        marginBottom: ".6rem",
                        fontSize: "1rem",
                      }}
                    >
                      {p.title}
                    </h5>
                    <p
                      style={{
                        color: "rgba(240,240,255,.45)",
                        fontSize: ".8rem",
                        lineHeight: 1.7,
                        marginBottom: "1rem",
                      }}
                    >
                      {p.desc}
                    </p>
                    <div className="d-flex flex-wrap gap-1">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="chip"
                          style={{
                            color: p.color,
                            borderColor: `rgba(${hexToRgb(p.color)},.2)`,
                            background: `rgba(${hexToRgb(p.color)},.06)`,
                          }}
                        >
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
    </>
  );
}

function hexToRgb(hex: string) {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return r
    ? `${parseInt(r[1], 16)},${parseInt(r[2], 16)},${parseInt(r[3], 16)}`
    : "255,255,255";
}
