# 🌐 Panduan Fitur Bilingual (Indonesia & English)

Website portfolio Raffi Wahyu Kurniawan sekarang sudah dilengkapi dengan fitur **Language Switcher** yang memungkinkan pengunjung untuk beralih antara Bahasa Indonesia dan Bahasa Inggris.

---

## ✨ Fitur Yang Ditambahkan

### 1. **Language Toggle Button**
- Tombol switch bahasa berada di **navigation bar** (kanan atas)
- Menampilkan bahasa aktif saat ini (ID / EN)
- Icon bahasa dari Lucide Icons
- Preferensi bahasa tersimpan di **localStorage**

### 2. **Translations Object**
- Semua teks website tersimpan dalam object JavaScript
- Dua bahasa: `id` (Indonesia) dan `en` (English)
- Mudah untuk menambah bahasa lain

### 3. **Dynamic Content Update**
- Semua teks di halaman berubah instant tanpa reload
- Smooth transition
- Icons tetap berfungsi sempurna

---

## 📁 File Yang Diubah

### **1. /index.html**
**Perubahan:**
- Menambahkan `data-i18n` attributes pada navigation links
- Menambahkan language toggle button di navigation bar
- Menambahkan mobile menu dengan data-i18n

**Lokasi Perubahan:**
```html
<!-- Line 17-31: Navigation bar dengan language toggle -->
<div class="nav-links">
    <a href="#home" class="nav-link active" data-i18n="nav.home">Home</a>
    <!-- dst... -->
</div>
<div class="nav-actions">
    <button class="language-toggle" id="languageToggle" title="Switch Language">
        <span id="currentLang">ID</span>
        <i data-lucide="languages"></i>
    </button>
    <button class="mobile-menu-btn" id="mobileMenuBtn">
        <i data-lucide="menu"></i>
    </button>
</div>
```

---

### **2. /style.css**
**Perubahan:**
- Styling untuk `.language-toggle` button
- Styling untuk `.nav-actions` container
- Responsive styling untuk mobile

**Lokasi Perubahan:**
```css
/* Line 143-173: Language toggle styling */
.nav-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.language-toggle {
    background: rgba(34, 211, 238, 0.1);
    border: 1px solid rgba(34, 211, 238, 0.3);
    color: #22d3ee;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    /* ... dst */
}

/* Line 1065-1082: Mobile responsive */
@media (max-width: 768px) {
    .language-toggle {
        padding: 0.4rem 0.75rem;
        font-size: 0.8rem;
    }
}
```

---

### **3. /script.js**
**Perubahan Utama:**

#### **a. Translations Object (Line 5-228)**
```javascript
const translations = {
    id: {
        nav: {
            home: 'Home',
            about: 'Tentang',
            skills: 'Keahlian',
            // dst...
        },
        hero: {
            badge: 'Tersedia untuk freelance',
            // dst...
        }
        // ... semua section
    },
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            skills: 'Skills',
            // dst...
        }
        // ... semua section
    }
};
```

#### **b. Language State (Line 230-231)**
```javascript
// Get saved language or default to Indonesian
let currentLanguage = localStorage.getItem('language') || 'id';
```

#### **c. Update Language Function (Line 233-322)**
```javascript
function updateLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    const t = translations[lang];
    
    // Update semua elemen
    // ... kode update ...
    
    // Reinitialize icons
    lucide.createIcons();
}
```

#### **d. Language Toggle Event (Line 324-327)**
```javascript
document.getElementById('languageToggle').addEventListener('click', () => {
    const newLang = currentLanguage === 'id' ? 'en' : 'id';
    updateLanguage(newLang);
});
```

#### **e. Initialize Language (Line 329-330)**
```javascript
// Initialize language on page load
updateLanguage(currentLanguage);
```

#### **f. Contact Form Alert (Line 494-507)**
```javascript
// Show alert with translated text
const t = translations[currentLanguage];
alert(t.contact.formAlert + formData.name + t.contact.formAlertEmail + formData.email);
```

---

## 🎨 Cara Mengubah Teks/Konten

### **Mengubah Teks Bahasa Indonesia**

Edit file `/script.js` pada object `translations.id`:

```javascript
const translations = {
    id: {
        // Navigation
        nav: {
            home: 'Home',              // ← Ubah disini
            about: 'Tentang',          // ← Ubah disini
            skills: 'Keahlian',        // ← Ubah disini
            projects: 'Projek',        // ← Ubah disini
            contact: 'Kontak'          // ← Ubah disini
        },
        // Hero Section
        hero: {
            badge: 'Tersedia untuk freelance',  // ← Ubah disini
            description: 'Teks deskripsi...',   // ← Ubah disini
            btnProjects: 'Lihat Projek',        // ← Ubah disini
            // dst...
        },
        // Dan seterusnya untuk section lain...
    }
}
```

### **Mengubah Teks Bahasa Inggris**

Edit file `/script.js` pada object `translations.en`:

```javascript
const translations = {
    // ... id section ...
    en: {
        nav: {
            home: 'Home',              // ← Ubah disini
            about: 'About',            // ← Ubah disini
            skills: 'Skills',          // ← Ubah disini
            // dst...
        },
        hero: {
            badge: 'Available for freelance',  // ← Ubah disini
            description: 'Description text...', // ← Ubah disini
            // dst...
        }
    }
}
```

---

## 🔧 Mengubah Kontak Information

### **Email**
**File:** `/index.html`

```html
<!-- Line 73, 76, 395-401 -->
<a href="mailto:raffi.wahyu@example.com" class="social-link">
<!-- Ubah email disini ↑ -->

<a href="mailto:raffi.wahyu@example.com" class="contact-method">
    <!-- ... -->
    <div class="method-value">raffi.wahyu@example.com</div>
    <!-- Ubah email display disini ↑ -->
</a>
```

### **GitHub**
**File:** `/index.html`

```html
<!-- Line 73, 404-411 -->
<a href="https://github.com/username" target="_blank" class="social-link">
<!-- Ubah URL GitHub disini ↑ -->

<a href="https://github.com/username" target="_blank" class="contact-method">
    <!-- ... -->
    <div class="method-value">@raffiwahyu</div>
    <!-- Ubah username display disini ↑ -->
</a>
```

### **WhatsApp**
**File:** `/index.html`

```html
<!-- Line 79, 413-420 -->
<a href="https://wa.me/6281234567890" target="_blank" class="social-link">
<!-- Ubah nomor WhatsApp disini ↑ (format: 62 + nomor tanpa 0) -->

<a href="https://wa.me/6281234567890" target="_blank" class="contact-method">
    <!-- ... -->
    <div class="method-value">+62 812-3456-7890</div>
    <!-- Ubah nomor display disini ↑ -->
</a>
```

---

## 🌍 Menambah Bahasa Baru (Opsional)

Jika ingin menambah bahasa lain (misal: Jepang - `jp`):

1. **Tambah object bahasa baru di `/script.js`:**

```javascript
const translations = {
    id: { /* ... */ },
    en: { /* ... */ },
    jp: {  // ← Bahasa baru
        nav: {
            home: 'ホーム',
            about: '私について',
            // ... dst
        }
        // ... semua section
    }
};
```

2. **Ubah logic toggle di `/script.js`:**

```javascript
// Dari:
document.getElementById('languageToggle').addEventListener('click', () => {
    const newLang = currentLanguage === 'id' ? 'en' : 'id';
    updateLanguage(newLang);
});

// Menjadi (contoh cycle 3 bahasa):
document.getElementById('languageToggle').addEventListener('click', () => {
    const langs = ['id', 'en', 'jp'];
    const currentIndex = langs.indexOf(currentLanguage);
    const newLang = langs[(currentIndex + 1) % langs.length];
    updateLanguage(newLang);
});
```

---

## 📱 Testing

### **Desktop:**
1. Buka website di browser
2. Klik tombol bahasa di navigation bar (kanan atas)
3. Semua teks akan berubah sesuai bahasa yang dipilih

### **Mobile:**
1. Buka di mobile browser
2. Tombol language toggle ada di sebelah hamburger menu
3. Ukuran button responsive untuk mobile

### **LocalStorage:**
1. Pilih bahasa (misal: EN)
2. Refresh halaman
3. Bahasa tetap EN (tersimpan di localStorage)

---

## 🎯 Summary Lokasi Perubahan

| File | Baris | Perubahan |
|------|-------|-----------|
| `/index.html` | 17-31 | Navigation dengan language toggle |
| `/index.html` | 34-39 | Mobile menu dengan data-i18n |
| `/index.html` | 73-82 | Social links (kontak) |
| `/index.html` | 395-421 | Contact method details |
| `/style.css` | 143-173 | Language toggle styling |
| `/style.css` | 1065-1082 | Mobile responsive styling |
| `/script.js` | 5-228 | Translations object (ID & EN) |
| `/script.js` | 230-231 | Language state management |
| `/script.js` | 233-322 | Update language function |
| `/script.js` | 324-330 | Language toggle & initialization |
| `/script.js` | 494-507 | Contact form alert translation |

---

## ✅ Checklist

- [x] Language toggle button di navigation
- [x] Translations object untuk ID & EN
- [x] Update semua teks dinamis
- [x] LocalStorage untuk save preferensi
- [x] Mobile responsive
- [x] Contact form alert bilingual
- [x] Icons re-initialize setelah switch
- [x] Smooth transition

---

## 🚀 Next Steps

Untuk customize lebih lanjut:

1. **Ganti kontak di `/index.html`** (email, GitHub, WhatsApp)
2. **Edit teks di `/script.js`** translations object
3. **Tambah/ubah project data** di `/script.js`
4. **Sesuaikan warna** di `/style.css`

---

**Dibuat untuk:** Raffi Wahyu Kurniawan
**Tanggal:** 2024
**Fitur:** Bilingual Portfolio (Indonesia & English)
