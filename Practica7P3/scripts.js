document.addEventListener('DOMContentLoaded', () => {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const carouselContent = document.querySelector('.carousel-content');
  const carousel = document.querySelector('.carousel');
  const images = document.querySelectorAll('.carousel-content img');
  let currentIndex = 0;

  const backgroundColors = [
    '#f0f8ff', // Light blue
    '#ffe4e1', // Misty rose
    '#e6e6fa', // Lavender
    '#fffacd', // Lemon chiffon
    '#d3ffce', // Light green
    '#ffe4b5', // Moccasin
    '#add8e6'  // Light blue (a different shade)
  ];

  function showSlide(index) {
    if (index >= images.length) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = images.length - 1;
    } else {
      currentIndex = index;
    }
    const offset = -currentIndex * 100;
    carouselContent.style.transform = `translateX(${offset}%)`;
    document.body.style.backgroundColor = backgroundColors[currentIndex];
    resizeCarousel();
  }

  function resizeCarousel() {
    const currentImage = images[currentIndex];
    carousel.style.width = `${currentImage.clientWidth}px`;
    carousel.style.height = `${currentImage.clientHeight}px`;
  }

  images.forEach(image => {
    image.addEventListener('load', () => {
      if (image === images[currentIndex]) {
        resizeCarousel();
      }
    });
  });

  prevBtn.addEventListener('click', () => {
    showSlide(currentIndex - 1);
  });

  nextBtn.addEventListener('click', () => {
    showSlide(currentIndex + 1);
  });

  showSlide(currentIndex);
});
