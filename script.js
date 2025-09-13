// Ambil elemen navigasi
const nav = document.getElementById('main-nav');

// Simpan posisi gulir sebelumnya
let lastScrollY = window.scrollY;

// Tambahkan event listener untuk memantau aksi gulir
window.addEventListener('scroll', () => {
  // Jika posisi gulir saat ini lebih kecil dari posisi sebelumnya (menggulir ke atas)
  if (lastScrollY > window.scrollY) {
    nav.classList.add('show-nav');
  } 
  // Jika posisi gulir saat ini lebih besar dari posisi sebelumnya (menggulir ke bawah)
  else {
    nav.classList.remove('show-nav');
  }

  // Perbarui posisi gulir sebelumnya untuk perbandingan berikutnya
  lastScrollY = window.scrollY;
});



    const carouselUl = document.querySelector('.carousel ul');
    const navDots = document.querySelectorAll('.nav-dot');
    const slides = document.querySelectorAll('.carousel li');
    
    let currentSlide = 0;
    const slideInterval = 4000; // Change slide every 4 seconds

    function updateCarousel() {
        const translateValue = -currentSlide * 100;
        carouselUl.style.left = `${translateValue}%`;

        // Update nav dots to show which slide is active
        navDots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.style.opacity = '1';
            } else {
                dot.style.opacity = '0.5';
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateCarousel();
    }

    // Automatically change slide every 4 seconds
    setInterval(nextSlide, slideInterval);

    // Optional: Add functionality to nav dots
    navDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateCarousel();
        });
    });
