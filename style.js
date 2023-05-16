let block = document.querySelector('.stick-block-phone')
//
function magic() {
  if (window.pageYOffset > 400) {
  block.style.opacity = '1'
  } else { block.style.opacity = '0' }
}

// When scrolling, we run the function
window.onscroll = magic

const swiperEl = document.querySelector('swiper-container')
Object.assign(swiperEl, {
  slidesPerView: 3,
  spaceBetween: 20,
  autoplay:true,
  speed: 600,
  pagination: false,
  breakpoints: {
    360: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    568: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
swiperEl.initialize();



