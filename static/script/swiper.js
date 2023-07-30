const swiperOne = new Swiper('.swiper-video', {

    loop: true,
    speed: 1000,

    allowTouchMove: false,

    cssMode: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    
});

const swiperTwo = new Swiper('.swiper-text', {

  loop: true,
  speed: 1000,

  allowTouchMove: false,
  
  cssMode: true,
  slidesPerView: 1,
  slidesPerGroup: 1,

});

function previousSlide() {
    swiperOne.slidePrev();
    swiperTwo.slidePrev();
}

function nextSlide() {
    swiperOne.slideNext();
    swiperTwo.slideNext();
}