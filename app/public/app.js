window.addEventListener("DOMContentLoaded", function(){
  this.swiper;
});


const swiper = new Swiper('.c-slider', {
  slidesPerView: 1.4,
  spaceBetween: 50,
  updateOnImagesReady: true,
  loop: true,
  autoplay: true,
  speed: 1200,

  pagination: {
    el: '.c-slider__dots',
    clickable: true,
  },
});
