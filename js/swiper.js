document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.presentation', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.movies-carrousel', {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});