document.querySelectorAll('.carousel').forEach(carousel => {
  const images = carousel.querySelectorAll('.carousel-images img');
  const carouselImages = carousel.querySelector('.carousel-images');
  const description = carousel.querySelector('.description');
  const prevBtn = carousel.querySelector('.prevBtn');
  const nextBtn = carousel.querySelector('.nextBtn');
  let currentIndex = 0;

  
  function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselImages.style.transform = `translateX(${offset}%)`;
    description.style.display = "none";
  }

  
  function showDescription(event) {
    const desc = event.target.getAttribute('data-description');
    description.textContent = desc;
    description.style.display = "block"; 
  }

  
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
  });


  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  });

 
  images.forEach(img => {
    img.addEventListener('click', showDescription);
  });


  updateCarousel();
});


const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');


hamburger.addEventListener('click', () => {

  navbar.classList.toggle('open');
});
