const carouselSlides = [...document.querySelectorAll('.carousel-slide')];
const carouselDots = [...document.querySelectorAll('.carousel-dot')];
const carousel = document.querySelector('.strategy-carousel');
let carouselIndex = 0;
let carouselTimer;

function showCarouselSlide(index) {
  carouselIndex = (index + carouselSlides.length) % carouselSlides.length;
  carouselSlides.forEach((slide, slideIndex) => slide.classList.toggle('active', slideIndex === carouselIndex));
  carouselDots.forEach((dot, dotIndex) => {
    const isCurrent = dotIndex === carouselIndex;
    dot.classList.toggle('active', isCurrent);
    dot.setAttribute('aria-current', isCurrent ? 'true' : 'false');
  });
}

function restartCarousel() {
  window.clearInterval(carouselTimer);
  carouselTimer = window.setInterval(() => showCarouselSlide(carouselIndex + 1), 5200);
}

document.querySelector('#carousel-prev')?.addEventListener('click', () => { showCarouselSlide(carouselIndex - 1); restartCarousel(); });
document.querySelector('#carousel-next')?.addEventListener('click', () => { showCarouselSlide(carouselIndex + 1); restartCarousel(); });
carouselDots.forEach((dot, dotIndex) => dot.addEventListener('click', () => { showCarouselSlide(dotIndex); restartCarousel(); }));
carousel?.addEventListener('mouseenter', () => window.clearInterval(carouselTimer));
carousel?.addEventListener('mouseleave', restartCarousel);
carousel?.addEventListener('focusin', () => window.clearInterval(carouselTimer));
carousel?.addEventListener('focusout', restartCarousel);
showCarouselSlide(0);
restartCarousel();