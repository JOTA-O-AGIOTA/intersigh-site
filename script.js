document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.querySelector('.carousel_btn.prev');
    const nextButton = document.querySelector('.carousel_btn.next');
    const carouselItems = document.querySelector('.carousel_items');
    const items = document.querySelectorAll('.carrossel_content');
    const itemWidth = items[0].offsetWidth + 10; // Inclui a margem entre os itens
    let currentIndex = 0;

    function updateCarousel() {
        carouselItems.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    nextButton.addEventListener('click', () => {
        if (currentIndex < items.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Retorna ao início ao chegar no último item
        }
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = items.length - 1; // Vai para o final ao chegar no início
        }
        updateCarousel();
    });
});