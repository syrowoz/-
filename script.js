const images = document.querySelectorAll('.zoomable');

images.forEach(image => {
    image.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.05)';
        image.style.transition = 'transform 0.3s ease';
    });

    image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)';
    });
});
