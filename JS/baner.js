const bannerSlide = document.querySelector('.banner-slide');
const images = document.querySelectorAll('.banner-slide img');

// Clona las imágenes para llenar el espacio
images.forEach(img => {
    const clone = img.cloneNode(true);
    bannerSlide.appendChild(clone);
});