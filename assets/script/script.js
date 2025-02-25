document.getElementById('mobile-menu').addEventListener('click', function() {
    var mobileNav = document.getElementById('mobile-nav');
    mobileNav.classList.toggle('active');
});


document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const totalItems = carouselItems.length;

    function moveToNextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        const offset = -currentIndex * 100;
        carouselInner.style.transform = `translateX(${offset}%)`;
    }

    setInterval(moveToNextSlide, 5000);
});