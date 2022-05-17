import Swiper, { Navigation } from "swiper";

var ads = new Swiper(".ads__swiper", {
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
    694: { slidesPerView: 2 },
    320: { slidesPerView: 1 },
  },
});

var jobs = new Swiper(".jobs__swiper", {
  modules: [Navigation],
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".jobs__button-next",
    prevEl: ".jobs__button-prev",
  },
  breakpoints: {
    824: { slidesPerView: 3 },
    694: { slidesPerView: 2 },
    320: { slidesPerView: 1 },
  },
});
