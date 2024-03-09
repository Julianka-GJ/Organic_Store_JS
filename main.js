const mySwiper1 = new Swiper('.swiper1', {
  slidesPerView: 2,
  loop: true,
  spaceBetween: 20,
  autoplay: {
      delay: 2000,
      disableOnInteraction: false
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    350: {
      slidesPerView: 1,
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
  },
});

const mySwiper2 = new Swiper('.swiper2', {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: "auto",
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },

  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 4,
    slideShadows: false,
  },

  keyboard: {
    enabled: true
  },

  mousewheel: {
    thresholdDelta: 70
  },

  breakpoints: {
    375: {
      slidesPerView: 2
    }
  }
});





