// assets/js/script.js
document.addEventListener('DOMContentLoaded', () => {
    // Active les animations CSS uniquement si JavaScript est activé
    document.documentElement.classList.remove('no-js');

    // --- Animation au défilement (Intersection Observer) ---
    const animatedElements = document.querySelectorAll('.scroll-animate');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    animatedElements.forEach(el => observer.observe(el));

    // --- Initialisation CONDITIONNELLE des Carrousels ---
    // (Ne s'exécute que si les carrousels sont sur la page actuelle)

    const ucarkCarouselElement = document.querySelector('#ucak-carousel');
    if (ucarkCarouselElement) {
        new Swiper(ucarkCarouselElement, {
            loop: true,
            autoplay: { delay: 3000, disableOnInteraction: false },
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        });
    }

    const juloCarouselElement = document.querySelector('#julo-carousel');
    if (juloCarouselElement) {
        new Swiper(juloCarouselElement, {
            loop: true,
            autoplay: { delay: 3500, disableOnInteraction: false },
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        });
    }
});