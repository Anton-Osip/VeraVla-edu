import Swiper, { Navigation } from "swiper";

var swiper = new Swiper(".ads__swiper", {
  modules: [Navigation],
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".ads__button-next",
    prevEl: ".ads__button-prev",
  },
  breakpoints: {
    824: { slidesPerView: 3 },
    594: { slidesPerView: 2 },
    320: { slidesPerView: 1 },
  },
});
