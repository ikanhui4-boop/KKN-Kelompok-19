/* =========================================================
   1. NAVBAR STICKY & ACTIVE LINK ON SCROLL
========================================================= */
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    // Tambahkan class 'scrolled' pada navbar jika di-scroll lebih dari 50px
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

/* =========================================================
   2. MOBILE MENU TOGGLE (RESPONSIVE HAMBURGER)
========================================================= */
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Klik ikon hamburger untuk membuka/menutup menu
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    // Ganti ikon bars dengan times (X) saat menu terbuka
    const icon = navToggle.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.classList.replace('fa-bars', 'fa-xmark');
    } else {
        icon.classList.replace('fa-xmark', 'fa-bars');
    }
});

// Tutup menu otomatis setelah klik salah satu link di HP
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = navToggle.querySelector('i');
        icon.classList.replace('fa-xmark', 'fa-bars');
    });
});

/* =========================================================
   3. BACK TO TOP BUTTON
========================================================= */
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    // Tampilkan tombol jika halaman di-scroll lebih dari 300px
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

// Fungsi klik untuk kembali ke atas dengan smooth
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

/* =========================================================
   4. LIGHTBOX GALERI DOKUMENTASI
========================================================= */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeBtn = document.querySelector('.lightbox-close');
const galleryItems = document.querySelectorAll('.gallery-item');

// Iterasi setiap item galeri untuk event klik
galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        const imgSrc = this.getAttribute('data-src');
        const imgCaption = this.getAttribute('data-caption');
        
        lightbox.style.display = 'block';
        lightboxImg.src = imgSrc;
        lightboxCaption.textContent = imgCaption || '';
    });
});

// Tombol close (X) pada lightbox
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Tutup lightbox saat klik di area luar gambar (background gelap)
window.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

/* =========================================================
   5. FORM KONTAK VALIDASI & ALERT
========================================================= */
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah reload halaman
    
    // Ambil nilai dari input form
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Validasi sederhana
    if (name === '' || email === '' || message === '') {
        alert('Mohon lengkapi semua bidang form sebelum mengirim!');
        return;
    }
    
    // Simulasi pengiriman pesan berhasil
    alert(`Terima kasih, ${name}!\nPesan Anda telah berhasil dikirim kepada tim KKN kami.`);
    
    // Reset form setelah pengiriman
    contactForm.reset();
});
