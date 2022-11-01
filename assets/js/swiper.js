
var swiper1 = new Swiper('.swiper1', {
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination1',
    clickable: true,
  },    // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next ',
    prevEl: '.swiper-button-prev ',
  },
  loop: false
});
var swiper2 = new Swiper('.swiper2', {
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination2',
    clickable: true,
  },  navigation: {
    nextEl: '.swiper-button-next ',
    prevEl: '.swiper-button-prev ',
  },loop: false
});
var swiper3 = new Swiper('.swiper3', {
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination3',
    clickable: true,
  },loop: true,
    autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    }
});