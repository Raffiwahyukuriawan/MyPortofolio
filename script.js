// Initialize Lucide Icons
lucide.createIcons();

// Project Data
const projects = [
  {
    title: "Kasir Toko Ravira Mart",
    description:
      "Aplikasi kasir untuk Toko Ravira Mart yang dilengkapi dengan pencatatan transaksi, manajemen produk, laporan penjualan, serta pengelolaan stok secara real-time.",
    category: ["web"],
    tags: ["Laravel 11", "MySQL"],
    image:
      "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/web%20kasir%20(34).png",
  },
  {
    title: "Sistem Pembayaran SPP Sekolah",
    description:
      "Sistem pembayaran SPP sekolah berbasis web untuk mengelola data siswa, mencatat pembayaran bulanan, dan menampilkan laporan SPP secara otomatis.",
    category: ["web"],
    tags: ["laravel", "MySQL"],
    image:
      "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/web%20spp%20sekolah.png",
  },
  {
    title: "Sistem Penggajian",
    description:
      "Aplikasi penggajian berbasis web yang dilengkapi fitur lengkap seperti melihat seluruh daftar absensi karyawan, manajemen data tunjangan, pengelolaan izin karyawan, perhitungan gaji otomatis, serta pencetakan slip gaji secara cepat dan akurat.",
    category: ["web"],
    tags: ["Laravel", "MySQL"],
    image:
      "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/penggajian.png",
  },
  {
    title: "Aplikasi Admin Sistem Reservasi Hotel",
    description:
      "Aplikasi admin untuk sistem reservasi hotel yang dilengkapi dengan pengelolaan kamar, manajemen data tamu, Pengelolaan menu restorant, dan laporan reservasi.",
    category: ["desktop"],
    tags: ["C#", "WPF", "MySQL"],
    image:
      "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/admin%20reservasi%20hotel.png",
  },
  {
    title: "Hotel Smart System",
    description:
      "Mobile app untuk pemesanan kamar hotel dan makanan secara real-time, dilengkapi fitur manajemen pesanan, detail kamar, dan tracking status layanan.",
    category: ["mobile"],
    tags: ["Flutter", "Dart", "API"],
    image:
      "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/hss%20mobile.jpeg",
  },
  {
    title: "Miniatur Bus Fadel Maudi",
    description:
      "Miniatur bus Fadel Maudi yang dibuat secara handmade menggunakan bahan kardus, dengan detail eksterior dan interior yang dirancang semirip mungkin dengan model aslinya.",
    category: ["creative"],
    tags: ["Cardboard Craft", "Handmade", "Miniature"],
    image:
      "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/maudi.png",
  },
  {
    title: "Event Organizer Resto",
    description:
      "Website Event Organizer Resto dengan sistem frontend dan backend untuk mengelola pemesanan acara, jadwal, dan informasi layanan.",
    category: ["web"],
    tags: ["CI3", "MySQL"],
    image:
      "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/event%20organizer.png",
  },
  {
    title: "Web Pemesanan Tiket Kereta",
    description:
      "Sistem pemesanan tiket kereta berbasis web yang memungkinkan penumpang memesan tiket secara online, petugas melakukan proses check-in, serta admin mengelola seluruh data seperti jadwal perjalanan, kereta, gerbong, dan membuat laporan.",
    category: ["web"],
    tags: ["Laravel", "MySQL"],
    image:
      "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/tiketing2.png",
  },
  {
    title: "Website Wedding Invitation",
    description:
      "Website undangan pernikahan sederhana yang dilengkapi fitur Countdown, Info, Story, Gallery, RSVP, Gift, serta musik autoplay untuk menyambut tamu.",
    category: ["web"],
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image:
      "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/web%20wedding.png",
  },
  {
    title: "Mobile Absensi",
    description:
      "Aplikasi mobile untuk absensi karyawan yang dilengkapi fitur absen masuk/keluar, pengajuan izin, riwayat kehadiran, dan profil karyawan.",
    category: ["mobile"],
    tags: ["Flutter", "Dart"],
    image:
      "https://raw.githubusercontent.com/Raffiwahyukuriawan/foto-projek/refs/heads/main/mobile%20absensi.png",
  },
];

// Render Projects
function renderProjects(filter = "all") {
  const projectsGrid = document.getElementById("projectsGrid");
  projectsGrid.innerHTML = "";

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category.includes(filter));

  filteredProjects.forEach((project, index) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";
    projectCard.style.animationDelay = `${index * 0.05}s`;

    projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags
                      .map((tag) => `<span class="project-tag">${tag}</span>`)
                      .join("")}
                </div>
            </div>
        `;

    projectsGrid.appendChild(projectCard);
  });

  // Reinitialize icons after adding new content
  lucide.createIcons();
}

// Hitung total projects
const totalProjects = projects.length;

// Hitung total unique technologies
const allTags = projects.flatMap((p) => p.tags);
const uniqueTags = [...new Set(allTags)];
const totalTech = uniqueTags.length;

// Fungsi animasi count-up
function animateCountUp(elementId, endValue, duration = 800) {
  const element = document.getElementById(elementId);
  let start = 0;
  const increment = endValue / (duration / 16); // 16ms ~ 60fps

  function update() {
    start += increment;
    if (start >= endValue) {
      element.textContent = endValue;
    } else {
      element.textContent = Math.floor(start);
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

// Jalankan animasi
animateCountUp("totalProjects", totalProjects);
animateCountUp("totalTech", totalTech);

// Initialize projects on load
renderProjects();

// Navigation Scroll Effect
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Update active nav link based on scroll position
  updateActiveNavLink();
});

// Update Active Navigation Link
function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileLinks = document.querySelectorAll(".mobile-link");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  const icon = mobileMenuBtn.querySelector("i");
  if (mobileMenu.classList.contains("active")) {
    icon.setAttribute("data-lucide", "x");
  } else {
    icon.setAttribute("data-lucide", "menu");
  }
  lucide.createIcons();
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    const icon = mobileMenuBtn.querySelector("i");
    icon.setAttribute("data-lucide", "menu");
    lucide.createIcons();
  });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Project Filters
const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Update active button
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    // Filter projects
    const filter = button.getAttribute("data-filter");
    renderProjects(filter);
  });
});

// Contact Form Submission
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  // Show alert (in real application, this would send to a server)
  alert(
    "Thank you for your message! This is a demo form.\n\nName: " +
      formData.name +
      "\nEmail: " +
      formData.email
  );

  // Reset form
  contactForm.reset();
});

// Scroll Indicator
const scrollIndicator = document.querySelector(".scroll-indicator");
if (scrollIndicator) {
  scrollIndicator.addEventListener("click", () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  });
}

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements
document
  .querySelectorAll(".service-card, .stat-card, .skill-category, .tech-tag")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(el);
  });

// Animate progress bars on scroll
const progressObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const progressFills = entry.target.querySelectorAll(".progress-fill");
      progressFills.forEach((fill, index) => {
        setTimeout(() => {
          fill.style.width = fill.style.width;
        }, index * 100);
      });
    }
  });
}, observerOptions);

document.querySelectorAll(".skill-category").forEach((category) => {
  progressObserver.observe(category);
});

// Image Modal Functionality
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalTags = document.getElementById("modalTags");
const modalClose = document.querySelector(".modal-close");

// Function to open modal
function openModal(project) {
  modal.classList.add("active");
  modalImage.src = project.image;
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;

  // Populate tags
  modalTags.innerHTML = project.tags
    .map((tag) => `<span class="project-tag">${tag}</span>`)
    .join("");

  // Prevent body scroll when modal is open
  document.body.style.overflow = "hidden";

  // Reinitialize icons
  lucide.createIcons();
}

// Function to close modal
function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Close modal when clicking the X button
modalClose.addEventListener("click", closeModal);

// Close modal when clicking outside the image
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("active")) {
    closeModal();
  }
});

// Update renderProjects function to add click handler
function renderProjectsWithModal(filter = "all") {
  const projectsGrid = document.getElementById("projectsGrid");
  projectsGrid.innerHTML = "";

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category.includes(filter));

  filteredProjects.forEach((project, index) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";
    projectCard.style.animationDelay = `${index * 0.05}s`;

    projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags
                      .map((tag) => `<span class="project-tag">${tag}</span>`)
                      .join("")}
                </div>
            </div>
        `;

    // Add click event to project image
    const projectImage = projectCard.querySelector(".project-image");
    projectImage.addEventListener("click", () => {
      openModal(project);
    });

    projectsGrid.appendChild(projectCard);
  });

  // Reinitialize icons after adding new content
  lucide.createIcons();
}

// Replace the old renderProjects call
renderProjectsWithModal();

// Update filter buttons to use new function
const filterButtonsUpdated = document.querySelectorAll(".filter-btn");
filterButtonsUpdated.forEach((button) => {
  button.addEventListener("click", () => {
    // Update active button
    filterButtonsUpdated.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    // Filter projects
    const filter = button.getAttribute("data-filter");
    renderProjectsWithModal(filter);
  });
});
