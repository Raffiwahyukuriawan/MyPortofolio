// Initialize Lucide Icons
lucide.createIcons();

// =====================
// LANGUAGE TRANSLATIONS
// =====================

const translations = {
    id: {
        // Navigation
        nav: {
            home: 'Home',
            about: 'Tentang',
            skills: 'Keahlian',
            projects: 'Projek',
            contact: 'Kontak'
        },
        // Hero Section
        hero: {
            badge: 'Tersedia untuk freelance',
            subtitle: 'Full-Stack Developer<br><span class="highlight">Web • Mobile • Desktop</span>',
            description: 'Merancang pengalaman digital yang memadukan antarmuka indah dengan performa optimal. Mengubah ide menjadi aplikasi yang fungsional dan mudah digunakan.',
            btnProjects: 'Lihat Projek',
            btnContact: 'Hubungi Saya',
            scrollDown: 'Scroll Kebawah'
        },
        // Floating Cards
        cards: {
            projects: 'Projek',
            technologies: 'Teknologi',
            hobbies: 'Hobi',
            miniatureBus: 'Miniatur Bus'
        },
        // About Section
        about: {
            badge: 'Kenali Saya',
            title: 'Tentang Saya',
            heading: 'Tentang Saya',
            paragraph1: 'Saya adalah seorang pengembang web dan mobile yang fokus membangun aplikasi dengan tampilan antarmuka yang rapi serta performa yang optimal.',
            paragraph2: 'Saya senang mengubah ide menjadi produk digital yang bermanfaat dan mudah digunakan.',
            paragraph3: 'Saat ini saya banyak bekerja menggunakan <span class="highlight">Laravel</span>, <span class="highlight">CodeIgniter</span>, <span class="highlight">Flutter</span>, dan <span class="highlight">API modern</span>.',
            statsProjects: 'Projek',
            statsYears: 'Tahun',
            statsClients: 'Klien',
            serviceWeb: 'Pengembangan Web',
            serviceWebDesc: 'Membangun aplikasi web responsif dan berperforma tinggi',
            serviceMobile: 'Aplikasi Mobile',
            serviceMobileDesc: 'Pengembangan mobile lintas platform dengan Flutter',
            serviceDesktop: 'Aplikasi Desktop',
            serviceDesktopDesc: 'Aplikasi desktop native untuk Windows dan lainnya',
            serviceCreative: 'Karya Kreatif',
            serviceCreativeDesc: 'Membuat model miniatur bus dengan detail yang rapi'
        },
        // Skills Section
        skills: {
            badge: 'Yang Saya Kuasai',
            title: 'Keahlian & Expertise',
            description: 'Toolkit komprehensif untuk membangun aplikasi modern di berbagai platform',
            categoryBackend: 'Backend',
            categoryMobile: 'Mobile',
            categoryFrontend: 'Frontend',
            categoryTools: 'Tools & Lainnya',
            descBackend: 'Pengembangan server-side dengan teknologi seperti Laravel dan CodeIgniter',
            descMobile: 'Pengembangan aplikasi mobile lintas platform dengan Flutter',
            descFrontend: 'Pengembangan antarmuka pengguna dengan HTML, CSS, dan JavaScript',
            descTools: 'Penggunaan berbagai alat dan teknologi pendukung seperti Git, Docker, dan CI/CD',
            techTitle: 'Teknologi Yang Saya Gunakan'
        },
        // Projects Section
        projects: {
            badge: 'Karya Saya',
            title: 'Projek Unggulan',
            description: 'Showcase dari karya terbaru saya di web, mobile, desktop, dan projek kreatif',
            filterAll: 'Semua Projek',
            filterWeb: 'Web',
            filterMobile: 'Mobile',
            filterDesktop: 'Desktop',
            filterCreative: 'Kreatif'
        },
        // Contact Section
        contact: {
            badge: 'Hubungi Saya',
            title: 'Kontak Saya',
            description: 'Punya projek atau ingin ngobrol? Jangan ragu untuk menghubungi saya!',
            heading: 'Mari Terhubung',
            intro: 'Saya selalu tertarik mendengar tentang projek dan peluang baru. Baik Anda punya pertanyaan atau hanya ingin menyapa, saya akan mencoba yang terbaik untuk merespon!',
            emailLabel: 'Email',
            githubLabel: 'GitHub',
            whatsappLabel: 'WhatsApp',
            locationLabel: 'Lokasi',
            locationValue: 'Indonesia',
            responseLabel: 'Waktu Respon',
            responseValue: 'Biasanya dalam 24 jam',
            formHeading: 'Kirim Pesan',
            formName: 'Nama Anda',
            formNamePlaceholder: 'John Doe',
            formEmail: 'Email Anda',
            formEmailPlaceholder: 'john@example.com',
            formMessage: 'Pesan',
            formMessagePlaceholder: 'Ceritakan tentang projek Anda...',
            formSubmit: 'Kirim Pesan',
            formAlert: 'Terima kasih atas pesan Anda! Ini adalah form demo.\\n\\nNama: ',
            formAlertEmail: '\\nEmail: '
        },
        // Footer
        footer: {
            copyright: '© 2024 Raffi Wahyu Kurniawan. Semua hak dilindungi.'
        }
    },
    en: {
        // Navigation
        nav: {
            home: 'Home',
            about: 'About',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact'
        },
        // Hero Section
        hero: {
            badge: 'Available for freelance',
            subtitle: 'Full-Stack Developer<br><span class="highlight">Web • Mobile • Desktop</span>',
            description: 'Crafting digital experiences that blend beautiful interfaces with optimized performance. Transforming ideas into functional, user-friendly applications.',
            btnProjects: 'View Projects',
            btnContact: 'Get in Touch',
            scrollDown: 'Scroll Down'
        },
        // Floating Cards
        cards: {
            projects: 'Projects',
            technologies: 'Technologies',
            hobbies: 'Hobbies',
            miniatureBus: 'Miniature Bus'
        },
        // About Section
        about: {
            badge: 'Get to know me',
            title: 'About Me',
            heading: 'About Me',
            paragraph1: 'I am a web and mobile developer focused on building applications with clean user interfaces and optimal performance.',
            paragraph2: 'I enjoy transforming ideas into useful and easy-to-use digital products.',
            paragraph3: 'Currently I work extensively with <span class="highlight">Laravel</span>, <span class="highlight">CodeIgniter</span>, <span class="highlight">Flutter</span>, and <span class="highlight">modern APIs</span>.',
            statsProjects: 'Projects',
            statsYears: 'Years',
            statsClients: 'Clients',
            serviceWeb: 'Web Development',
            serviceWebDesc: 'Building responsive and performant web applications',
            serviceMobile: 'Mobile Apps',
            serviceMobileDesc: 'Cross-platform mobile development with Flutter',
            serviceDesktop: 'Desktop Apps',
            serviceDesktopDesc: 'Native desktop applications for Windows and more',
            serviceCreative: 'Creative Work',
            serviceCreativeDesc: 'Crafting detailed miniature bus models'
        },
        // Skills Section
        skills: {
            badge: 'What I Do Best',
            title: 'Skills & Expertise',
            description: 'A comprehensive toolkit for building modern applications across multiple platforms',
            categoryBackend: 'Backend',
            categoryMobile: 'Mobile',
            categoryFrontend: 'Frontend',
            categoryTools: 'Tools & Others',
            descBackend: 'Server-side development with technologies like Laravel and CodeIgniter',
            descMobile: 'Cross-platform mobile development with Flutter',
            descFrontend: 'User interface development with HTML, CSS, and JavaScript',
            descTools: 'Use of various supporting tools and technologies such as Git, Docker, and CI/CD',
            techTitle: 'Technologies I Work With'
        },
        // Projects Section
        projects: {
            badge: 'My Work',
            title: 'Featured Projects',
            description: 'A showcase of my recent work across web, mobile, desktop, and creative projects',
            filterAll: 'All Projects',
            filterWeb: 'Web',
            filterMobile: 'Mobile',
            filterDesktop: 'Desktop',
            filterCreative: 'Creative'
        },
        // Contact Section
        contact: {
            badge: 'Get In Touch',
            title: 'Contact Me',
            description: 'Have a project in mind or just want to chat? Feel free to reach out!',
            heading: "Let's Connect",
            intro: "I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
            emailLabel: 'Email',
            githubLabel: 'GitHub',
            whatsappLabel: 'WhatsApp',
            locationLabel: 'Location',
            locationValue: 'Indonesia',
            responseLabel: 'Response Time',
            responseValue: 'Usually within 24 hours',
            formHeading: 'Send a Message',
            formName: 'Your Name',
            formNamePlaceholder: 'John Doe',
            formEmail: 'Your Email',
            formEmailPlaceholder: 'john@example.com',
            formMessage: 'Message',
            formMessagePlaceholder: 'Tell me about your project...',
            formSubmit: 'Send Message',
            formAlert: 'Thank you for your message! This is a demo form.\\n\\nName: ',
            formAlertEmail: '\\nEmail: '
        },
        // Footer
        footer: {
            copyright: '© 2024 Raffi Wahyu Kurniawan. All rights reserved.'
        }
    }
};

// Get saved language or default to Indonesian
let currentLanguage = localStorage.getItem('language') || 'id';

// Function to update page text based on language
function updateLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    const t = translations[lang];
    
    // Update language toggle display
    document.getElementById('currentLang').textContent = lang.toUpperCase();
    
    // Update data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const keys = element.getAttribute('data-i18n').split('.');
        let value = t;
        keys.forEach(key => value = value[key]);
        element.textContent = value;
    });
    
    // Update hero section
    document.querySelector('.badge').textContent = t.hero.badge;
    document.querySelector('.hero-subtitle').innerHTML = t.hero.subtitle;
    document.querySelector('.hero-description').textContent = t.hero.description;
    document.querySelector('.btn-primary').textContent = t.hero.btnProjects;
    document.querySelector('.btn-secondary').textContent = t.hero.btnContact;
    document.querySelector('.scroll-indicator span').textContent = t.hero.scrollDown;
    
    // Update floating cards
    const floatingCards = document.querySelectorAll('.floating-card h4');
    floatingCards[0].textContent = t.cards.projects;
    floatingCards[1].textContent = t.cards.technologies;
    floatingCards[2].textContent = t.cards.hobbies;
    document.querySelector('.card-3 .card-number').textContent = t.cards.miniatureBus;
    
    // Update about section
    document.querySelector('#about .section-badge').textContent = t.about.badge;
    document.querySelector('#about .section-title').textContent = t.about.title;
    document.querySelector('.glass-card .text-gradient').textContent = t.about.heading;
    
    const aboutParagraphs = document.querySelectorAll('.glass-card p');
    aboutParagraphs[0].textContent = t.about.paragraph1;
    aboutParagraphs[1].textContent = t.about.paragraph2;
    aboutParagraphs[2].innerHTML = t.about.paragraph3;
    
    const statLabels = document.querySelectorAll('.stat-label');
    statLabels[0].textContent = t.about.statsProjects;
    statLabels[1].textContent = t.about.statsYears;
    statLabels[2].textContent = t.about.statsClients;
    
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards[0].querySelector('h4').textContent = t.about.serviceWeb;
    serviceCards[0].querySelector('p').textContent = t.about.serviceWebDesc;
    serviceCards[1].querySelector('h4').textContent = t.about.serviceMobile;
    serviceCards[1].querySelector('p').textContent = t.about.serviceMobileDesc;
    serviceCards[2].querySelector('h4').textContent = t.about.serviceDesktop;
    serviceCards[2].querySelector('p').textContent = t.about.serviceDesktopDesc;
    serviceCards[3].querySelector('h4').textContent = t.about.serviceCreative;
    serviceCards[3].querySelector('p').textContent = t.about.serviceCreativeDesc;
    
    // Update skills section
    document.querySelector('#skills .section-badge').textContent = t.skills.badge;
    document.querySelector('#skills .section-title').textContent = t.skills.title;
    document.querySelector('#skills .section-description').textContent = t.skills.description;
    
    const skillCategoryCards = document.querySelectorAll('.skill-category-card h3');
    skillCategoryCards[0].textContent = t.skills.categoryBackend;
    skillCategoryCards[1].textContent = t.skills.categoryMobile;
    skillCategoryCards[2].textContent = t.skills.categoryFrontend;
    skillCategoryCards[3].textContent = t.skills.categoryTools;
    
    const skillCategoryDesc = document.querySelectorAll('.skill-category-card > p');
    skillCategoryDesc[0].textContent = t.skills.descBackend;
    skillCategoryDesc[1].textContent = t.skills.descMobile;
    skillCategoryDesc[2].textContent = t.skills.descFrontend;
    skillCategoryDesc[3].textContent = t.skills.descTools;
    
    document.querySelector('.tech-stack h3').textContent = t.skills.techTitle;
    
    // Update projects section
    document.querySelector('#projects .section-badge').textContent = t.projects.badge;
    document.querySelector('#projects .section-title').textContent = t.projects.title;
    document.querySelector('#projects .section-description').textContent = t.projects.description;
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons[0].textContent = t.projects.filterAll;
    filterButtons[1].textContent = t.projects.filterWeb;
    filterButtons[2].textContent = t.projects.filterMobile;
    filterButtons[3].textContent = t.projects.filterDesktop;
    filterButtons[4].textContent = t.projects.filterCreative;
    
    // Update contact section
    document.querySelector('#contact .section-badge').textContent = t.contact.badge;
    document.querySelector('#contact .section-title').textContent = t.contact.title;
    document.querySelector('#contact .section-description').textContent = t.contact.description;
    document.querySelector('.contact-info h3').textContent = t.contact.heading;
    document.querySelector('.contact-info > p').textContent = t.contact.intro;
    
    const methodTitles = document.querySelectorAll('.method-title');
    methodTitles[0].textContent = t.contact.emailLabel;
    methodTitles[1].textContent = t.contact.githubLabel;
    methodTitles[2].textContent = t.contact.whatsappLabel;
    methodTitles[3].textContent = t.contact.locationLabel;
    methodTitles[4].textContent = t.contact.responseLabel;
    
    const methodValues = document.querySelectorAll('.info-item .method-value');
    methodValues[0].textContent = t.contact.locationValue;
    methodValues[1].textContent = t.contact.responseValue;
    
    document.querySelector('.contact-form-container h3').textContent = t.contact.formHeading;
    document.querySelector('label[for="name"]').textContent = t.contact.formName;
    document.querySelector('#name').placeholder = t.contact.formNamePlaceholder;
    document.querySelector('label[for="email"]').textContent = t.contact.formEmail;
    document.querySelector('#email').placeholder = t.contact.formEmailPlaceholder;
    document.querySelector('label[for="message"]').textContent = t.contact.formMessage;
    document.querySelector('#message').placeholder = t.contact.formMessagePlaceholder;
    document.querySelector('.btn-full').innerHTML = '<i data-lucide="send"></i>' + t.contact.formSubmit;
    
    // Update footer
    document.querySelector('footer p').textContent = t.footer.copyright;
    
    // Reinitialize icons after text changes
    lucide.createIcons();
}

// Language toggle button event
document.getElementById('languageToggle').addEventListener('click', () => {
    const newLang = currentLanguage === 'id' ? 'en' : 'id';
    updateLanguage(newLang);
});

// Initialize language on page load
updateLanguage(currentLanguage);

// Project Data
const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'Full-featured e-commerce platform with admin panel, payment gateway integration, and real-time inventory management.',
        category: ['web'],
        tags: ['Laravel', 'MySQL', 'REST API'],
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    },
    {
        title: 'Food Delivery App',
        description: 'Cross-platform mobile application for food ordering with real-time tracking and multiple payment options.',
        category: ['mobile'],
        tags: ['Flutter', 'Dart', 'Firebase'],
        image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&h=600&fit=crop',
    },
    {
        title: 'School Management System',
        description: 'Comprehensive school management system with student, teacher, and parent portals.',
        category: ['web'],
        tags: ['CodeIgniter', 'PHP', 'MySQL'],
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop',
    },
    {
        title: 'Inventory Desktop App',
        description: 'Desktop application for warehouse inventory management with barcode scanning support.',
        category: ['desktop'],
        tags: ['C#', '.NET', 'SQLite'],
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
    },
    {
        title: 'Health Tracking App',
        description: 'Mobile app for tracking daily health metrics, workouts, and nutrition with beautiful charts.',
        category: ['mobile'],
        tags: ['Flutter', 'Dart', 'Charts'],
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    },
    {
        title: 'Custom Miniature Buses',
        description: 'Hand-crafted detailed miniature bus collection featuring various Indonesian bus models with realistic details.',
        category: ['creative'],
        tags: ['Crafting', 'Detail Work', 'Miniature'],
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop',
    },
    {
        title: 'POS System',
        description: 'Point of sale system for retail stores with inventory management and sales reporting.',
        category: ['desktop', 'web'],
        tags: ['C#', 'Laravel', 'MySQL'],
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    },
    {
        title: 'Real Estate Portal',
        description: 'Property listing platform with advanced search filters, virtual tours, and agent management.',
        category: ['web'],
        tags: ['Laravel', 'API', 'Maps'],
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    },
    {
        title: 'Chat Application',
        description: 'Real-time messaging app with group chats, file sharing, and end-to-end encryption.',
        category: ['mobile', 'web'],
        tags: ['Flutter', 'Laravel', 'WebSocket'],
        image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=600&fit=crop',
    },
];

// Render Projects
function renderProjects(filter = 'all') {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';

    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(project => project.category.includes(filter));

    filteredProjects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.style.animationDelay = `${index * 0.05}s`;
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });

    // Reinitialize icons after adding new content
    lucide.createIcons();
}

// Initialize projects on load
renderProjects();

// Navigation Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Update active nav link based on scroll position
    updateActiveNavLink();
});

// Update Active Navigation Link
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    if (mobileMenu.classList.contains('active')) {
        icon.setAttribute('data-lucide', 'x');
    } else {
        icon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.setAttribute('data-lucide', 'menu');
        lucide.createIcons();
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Project Filters
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter projects
        const filter = button.getAttribute('data-filter');
        renderProjects(filter);
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    // Show alert with translated text (in real application, this would send to a server)
    const t = translations[currentLanguage];
    alert(t.contact.formAlert + formData.name + t.contact.formAlertEmail + formData.email);
    
    // Reset form
    contactForm.reset();
});

// Scroll Indicator
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    });
}

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.service-card, .stat-card, .skill-category-card, .tech-tag').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

// Animate progress bars on scroll
const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressFills = entry.target.querySelectorAll('.progress-fill');
            progressFills.forEach((fill, index) => {
                setTimeout(() => {
                    fill.style.width = fill.style.width;
                }, index * 100);
            });
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-category').forEach(category => {
    progressObserver.observe(category);
});

// Image Modal Functionality
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalTags = document.getElementById('modalTags');
const modalClose = document.querySelector('.modal-close');

// Function to open modal
function openModal(project) {
    modal.classList.add('active');
    modalImage.src = project.image;
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    
    // Populate tags
    modalTags.innerHTML = project.tags.map(tag => 
        `<span class="project-tag">${tag}</span>`
    ).join('');
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    // Reinitialize icons
    lucide.createIcons();
}

// Function to close modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking the X button
modalClose.addEventListener('click', closeModal);

// Close modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Update renderProjects function to add click handler
function renderProjectsWithModal(filter = 'all') {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';

    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(project => project.category.includes(filter));

    filteredProjects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.style.animationDelay = `${index * 0.05}s`;
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        
        // Add click event to project image
        const projectImage = projectCard.querySelector('.project-image');
        projectImage.addEventListener('click', () => {
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
const filterButtonsUpdated = document.querySelectorAll('.filter-btn');
filterButtonsUpdated.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtonsUpdated.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter projects
        const filter = button.getAttribute('data-filter');
        renderProjectsWithModal(filter);
    });
});