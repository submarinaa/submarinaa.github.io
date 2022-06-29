const swiper = new Swiper('.js-history-slider', {
  slidesPerView: 3,
  slidesPerGroup: 1,

  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 3,
    }
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});