document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // Lucide Icons
  // =========================
  if (window.lucide) {
    lucide.createIcons();
  }
  // =========================
  // Mobile Menu Toggle
  // =========================
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      const isActive = mobileMenu.classList.toggle("active");

      mobileMenuBtn.innerHTML = isActive
        ? '<i data-lucide="x"></i>'
        : '<i data-lucide="menu"></i>';

      lucide.createIcons();
    });

    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");

        mobileMenuBtn.innerHTML = '<i data-lucide="menu"></i>';
        lucide.createIcons();
      });
    });
  }

  // =========================
  // Navbar Active Link on Scroll (ScrollSpy)
  // =========================
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  function setActiveNav() {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120; // offset navbar
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");

      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", setActiveNav);

  // =========================
  // Skill Progress Animation
  // =========================
  const skillSection = document.getElementById("skills");
  let skillsAnimated = false;

  function animateSkills() {
    if (!skillSection || skillsAnimated) return;

    const sectionTop = skillSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 100) {
      // BAR ANIMATION
      document.querySelectorAll(".progress-fill").forEach((bar) => {
        const value = bar.getAttribute("data-progress");
        bar.style.width = value + "%";
      });

      // PERCENT COUNT-UP
      document.querySelectorAll(".percent-number").forEach((el) => {
        const target = parseInt(el.dataset.percent);
        let current = 0;

        const interval = setInterval(() => {
          current++;
          el.textContent = current;
          if (current >= target) {
            el.textContent = target;
            clearInterval(interval);
          }
        }, 15); // makin kecil = makin cepat
      });

      skillsAnimated = true;
    }
  }

  window.addEventListener("scroll", animateSkills);
  animateSkills();

  window.addEventListener("scroll", animateSkills);
  animateSkills(); // trigger awal

  // send message
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const subject = `Portfolio Contact from ${name}`;
    const body = `
Nama: ${name}
Email: ${email}

Pesan:
${message}
  `;

    window.location.href = `mailto:raffi.wahyu@example.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  });

  // =========================
  // Language State
  // =========================
  let currentLang = localStorage.getItem("language") || "id";

  // =========================
  // Project Data
  // =========================
  const projects = [
    {
      title: {
        id: "Kasir Toko Ravira Mart",
        en: "Ravira Mart Store Cashier",
      },
      description: {
        id: "Aplikasi kasir untuk Toko Ravira Mart yang dilengkapi dengan pencatatan transaksi, manajemen produk, laporan penjualan, serta pengelolaan stok secara real-time.",
        en: "Cashier application for Ravira Mart Stores equipped with transaction recording, product management, sales reports, and real-time stock management.",
      },
      category: ["web"],
      tags: ["Laravel 11", "MySQL"],
      image:
        "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/web%20kasir%20(34).png",
    },
    {
      title: {
        id: "Sistem Pembayaran SPP Sekolah",
        en: "School Tuition Payment System",
      },
      description: {
        id: "Sistem pembayaran SPP sekolah berbasis web untuk mengelola data siswa, mencatat pembayaran bulanan, dan menampilkan laporan SPP secara otomatis.",
        en: "Web-based school tuition payment system to manage student data, record monthly payments, and display tuition reports automatically.",
      },
      category: ["web"],
      tags: ["laravel", "MySQL"],
      image:
        "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/web%20spp%20sekolah.png",
    },
    {
      title: {
        id: "Sistem Penggajian",
        en: "Payroll System",
      },
      description: {
        id: "Aplikasi penggajian berbasis web yang dilengkapi fitur lengkap seperti melihat seluruh daftar absensi karyawan, manajemen data tunjangan, pengelolaan izin karyawan, perhitungan gaji otomatis, serta pencetakan slip gaji secara cepat dan akurat.",
        en: "A web-based payroll application equipped with comprehensive features such as viewing the entire employee attendance list, managing benefits data, managing employee permits, automatic salary calculations, and printing pay slips quickly and accurately.",
      },
      category: ["web"],
      tags: ["Laravel", "MySQL"],
      image:
        "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/penggajian.png",
    },
    {
      title: {
        id: "Aplikasi Admin Sistem Reservasi Hotel",
        en: "Hotel Reservation System Admin Application",
      },
      description: {
        id: "Aplikasi admin untuk sistem reservasi hotel yang dilengkapi dengan pengelolaan kamar, manajemen data tamu, Pengelolaan menu restorant, dan laporan reservasi.",
        en: "Admin application for hotel reservation system equipped with room management, guest data management, restaurant menu management, and reservation reports.",
      },
      category: ["desktop"],
      tags: ["C#", "WPF", "MySQL"],
      image:
        "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/admin%20reservasi%20hotel.png",
    },
    {
      title: {
        id: "Hotel Smart System",
        en: "Hotel Smart System",
      },
      description: {
        id: "Mobile app untuk pemesanan kamar hotel dan makanan secara real-time, dilengkapi fitur manajemen pesanan, detail kamar, dan tracking status layanan.",
        en: "Mobile app for real-time hotel room and food reservations, equipped with order management features, room details, and service status tracking.",
      },
      category: ["mobile"],
      tags: ["Flutter", "Dart", "API"],
      image:
        "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/hss%20mobile.jpeg",
    },
    {
      title: {
        id: "Miniatur Bus Fadel Maudi",
        en: "Fadel Maudi Miniature Bus",
      },
      description: {
        id: "Miniatur bus handmade dari kardus dengan detail eksterior dan interior.",
        en: "Handmade cardboard bus miniature with detailed exterior and interior.",
      },
      category: ["creative"],
      tags: ["Handmade", "Miniature"],
      image:
        "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/maudi.png",
    },
    {
      title: {
        id: "Event Organizer Resto",
        en: "Restaurant Event Organizer",
      },
      description: {
        id: "Website Event Organizer Resto dengan sistem frontend dan backend untuk mengelola pemesanan acara, jadwal, dan informasi layanan.",
        en: "Event Organizer Resto website with frontend and backend system to manage event bookings, schedules, and service information.",
      },
      category: ["web"],
      tags: ["CI3", "MySQL"],
      image:
        "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/event%20organizer.png",
    },
    {
      title: {
        id: "Web Pemesanan Tiket Kereta",
        en: "Train Ticket Booking Website",
      },
      description: {
        id: "Sistem pemesanan tiket kereta berbasis web yang memungkinkan penumpang memesan tiket secara online, petugas melakukan proses check-in, serta admin mengelola seluruh data seperti jadwal perjalanan, kereta, gerbong, dan membuat laporan.",
        en: "A web-based train ticket booking system that allows passengers to book tickets online, officers to carry out the check-in process, and admins to manage all data such as travel schedules, trains, carriages, and create reports.",
      },
      category: ["web"],
      tags: ["Laravel", "MySQL"],
      image:
        "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/tiketing2.png",
    },
    {
      title: {
        id: "Website Undangan Pernikahan",
        en: "Website Wedding Invitation",
      },
      description: {
        id: "Website undangan pernikahan sederhana yang dilengkapi fitur Countdown, Info, Story, Gallery, RSVP, Gift, serta musik autoplay untuk menyambut tamu.",
        en: "A simple wedding invitation website equipped with Countdown, Info, Story, Gallery, RSVP, Gift features, and autoplay music to welcome guests.",
      },
      category: ["web"],
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      image:
        "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/web%20wedding.png",
    },
    {
      title: {
        id: "Mobile Absensi",
        en: "Mobile Absensi",
      },
      description: {
        id: "Aplikasi mobile untuk absensi karyawan yang dilengkapi fitur absen masuk/keluar, pengajuan izin, riwayat kehadiran, dan profil karyawan.",
        en: "Mobile application for employee attendance equipped with features for clocking in/out, requesting permission, attendance history, and employee profiles.",
      },
      category: ["mobile"],
      tags: ["Flutter", "Dart"],
      image:
        "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/mobile%20absensi.png",
    },
  ];

  // =========================
  // Render Projects
  // =========================
  function renderProjects(filter = "all") {
    const grid = document.getElementById("projectsGrid");
    if (!grid) return;

    grid.innerHTML = "";

    const filtered =
      filter === "all"
        ? projects
        : projects.filter((p) => p.category.includes(filter));

    filtered.forEach((project, index) => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.style.animationDelay = `${index * 0.05}s`;

      card.innerHTML = `
        <div class="project-image">
          <img src="${project.image}" alt="${project.title[currentLang]}">
        </div>
        <div class="project-info">
          <h3>${project.title[currentLang]}</h3>
          <p>${project.description[currentLang]}</p>
          <div class="project-tags">
            ${project.tags
              .map((t) => `<span class="project-tag">${t}</span>`)
              .join("")}
          </div>
        </div>
      `;

      card
        .querySelector(".project-image")
        .addEventListener("click", () => openModal(project));

      grid.appendChild(card);
    });

    lucide.createIcons();
  }

  // =========================
  // Language Switch
  // =========================
  window.setLanguage = function (lang) {
    currentLang = lang;

    // Update text content
    document.querySelectorAll("[data-id]").forEach((el) => {
      el.textContent = el.getAttribute(`data-${lang}`);
    });

    // === UPDATE TOGGLE SLIDING (DESKTOP + MOBILE) ===
    document.querySelectorAll(".lang-toggle").forEach((toggle) => {
      toggle.classList.toggle("en", lang === "en");

      const buttons = toggle.querySelectorAll(".lang-option");
      buttons.forEach((btn) => btn.classList.remove("active"));

      if (lang === "id") {
        buttons[0]?.classList.add("active");
      } else {
        buttons[1]?.classList.add("active");
      }
    });

    // Simpan bahasa
    localStorage.setItem("language", lang);

    // Render ulang project sesuai filter aktif
    const activeFilter =
      document.querySelector(".filter-btn.active")?.dataset.filter || "all";
    renderProjects(activeFilter);

    // === AUTO CLOSE MOBILE MENU SETELAH GANTI BAHASA ===
    const mobileMenu = document.getElementById("mobileMenu");
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");

    if (mobileMenu?.classList.contains("active")) {
      mobileMenu.classList.remove("active");

      if (mobileMenuBtn) {
        mobileMenuBtn.innerHTML = '<i data-lucide="menu"></i>';
        lucide.createIcons();
      }
    }
  };

  setLanguage(currentLang);

  // =========================
  // Count Animation
  // =========================
  function animateCountUp(id, endValue, duration = 800) {
    const el = document.getElementById(id);
    if (!el) return;

    let start = 0;
    const step = endValue / (duration / 16);

    function update() {
      start += step;
      if (start >= endValue) {
        el.textContent = endValue;
      } else {
        el.textContent = Math.floor(start);
        requestAnimationFrame(update);
      }
    }
    update();
  }

  const totalProjects = projects.length;
  const totalTech = [...new Set(projects.flatMap((p) => p.tags))].length;

  animateCountUp("totalProjects", totalProjects);
  animateCountUp("totalTech", totalTech);

  // =========================
  // Init Projects
  // =========================
  renderProjects();

  // =========================
  // Project Filters
  // =========================
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(btn.dataset.filter);
    });
  });

  // =========================
  // Navbar Scroll
  // =========================
  const navbar = document.getElementById("navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 50);
    });
  }

  // =========================
  // Modal
  // =========================
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalTags = document.getElementById("modalTags");
  const modalClose = document.querySelector(".modal-close");

  function openModal(project) {
    if (!modal) return;
    modal.classList.add("active");
    modalImage.src = project.image;
    modalTitle.textContent = project.title[currentLang];
    modalDescription.textContent = project.description[currentLang];
    modalTags.innerHTML = project.tags
      .map((t) => `<span class="project-tag">${t}</span>`)
      .join("");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }

  modalClose?.addEventListener("click", closeModal);
  modal?.addEventListener("click", (e) => e.target === modal && closeModal());
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
});
