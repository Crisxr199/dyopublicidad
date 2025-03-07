document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const bars = document.querySelectorAll('.bar'); // Seleccionar todas las barras

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');

        // Agregar/quitar la clase 'active' a cada barra individualmente
        bars.forEach((bar, index) => {
            bar.classList.toggle(`active-${index + 1}`);
        });
    });
});