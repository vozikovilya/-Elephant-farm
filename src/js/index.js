document.addEventListener("DOMContentLoaded", function(event) {
    // Header Nav

    var burger = document.querySelector('.header__burger');
    var nav = document.querySelector('.nav');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Swiper

    function initialSwiper() {
        return new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 1,
            breakpoints: {
    
                1024: {
                    slidesPerView: 1,
                    updateOnWindowResize: true,
                },
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });
    }

    let swiper = null;

    function resize() {
        if (window.innerWidth > 1024) {
            if (swiper) {
                swiper.destroy();
                swiper = null;
            }
        } else {
            if (!swiper) {
                swiper = initialSwiper();
            }
        }
    }

    resize()
    window.onresize = resize;
});