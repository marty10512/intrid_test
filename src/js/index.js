;document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: false,
        navigation: {
            nextEl: '.index__notofications-arrow--next',
            prevEl: '.index__notofications-arrow--prev',
        },
        pagination: {
            el: '.index__notofications-pagination',
            clickable: true,
        },
        slidesPerView: 1,
        spaceBetween: 50,
        breakpoints: {
            465: {
                slidesPerView: 2,
            },
            700: {
                slidesPerView: 3,
            },
            920: {
                slidesPerView: 4,

            }
        }
    });
});