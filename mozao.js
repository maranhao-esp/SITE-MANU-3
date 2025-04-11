document.addEventListener('DOMContentLoaded', function() {
    // Carrossel
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const indicators = document.querySelectorAll('.indicator');
    
    let currentIndex = 0;
    const totalItems = items.length;
    
    function updateCarousel() {
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    
    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    });
    
    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    });
    
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            currentIndex = index;
            updateCarousel();
        });
    });
    
    setInterval(function() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }, 3000);

    // Mostrar/ocultar conteúdo das seções
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        section.addEventListener('click', function() {
            this.classList.toggle('active');
            
            // Fecha as outras seções quando uma é aberta
            if (this.classList.contains('active')) {
                sections.forEach(sec => {
                    if (sec !== this && sec.classList.contains('active')) {
                        sec.classList.remove('active');
                    }
                });
            }
        });
    });
});