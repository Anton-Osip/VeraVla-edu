import Swiper, { Navigation } from "swiper";
const FILE = [
  {
    id: 1,
    img: "../../img/ads/slider-1.jpg",
    title: "Заголовок объявления из несколькиз слов",
    description: `  Искусственный интеллект - это не одна дисциплина, как думают многие,
            а совокупность различных между собой направлений.`,
    date: "24 мая 2021",
  },
  {
    id: 2,
    img: "../../img/ads/slider-2.jpg",
    title: "Заголовок объявления из несколькиз слов",
    description: `  Искусственный интеллект - это не одна дисциплина, как думают многие,
            а совокупность различных между собой направлений.`,
    date: "24 мая 2021",
  },
  {
    id: 3,
    img: "../../img/ads/slider-3.jpg",
    title: "Заголовок объявления из несколькиз слов",
    description: `  Искусственный интеллект - это не одна дисциплина, как думают многие,
            а совокупность различных между собой направлений.`,
    date: "24 мая 2021",
  },
  {
    id: 4,
    img: "../../img/ads/slider-4.jpg",
    title: "Заголовок объявления из несколькиз слов",
    description: `  Искусственный интеллект - это не одна дисциплина, как думают многие,
            а совокупность различных между собой направлений.`,
    date: "24 мая 2021",
  },
];
const adsBtn = document.querySelectorAll(".ads__slide-btn");

adsBtn.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    const id = e.target.dataset.adsid;
    const obj = FILE.filter((item) => {
      if (item.id == id) {
        return item;
      }
    });

    let element = document.createElement("div");
    element.classList.add("popup");
    document
      .querySelector(".this-popup")
      .insertAdjacentElement("beforeend", element);
    element.innerHTML = `
    <div class='popup__wrapper'>
      <div class='popup__inner'>
        <div class="popup__content">
          <div class='popup__close'>
            <div class='popup__line'></div>
            <div class='popup__line'></div>
          </div>
          <h1 class='popup__title'>${obj[0].title}</h1>
          <div class="popup__img-block">
            <img src="${obj[0].img}" alt="slider" class="popup__img"/>
            <span class="popup__img-text">${obj[0].date}</span>
          </div>
          <p class='popup__text'> 
            Основателем курса является Владимир Ким, действующий и ведущий   специалист в области искусственного интеллекта в Южной Корее, который разрабатывал системы искусственного интеллекта для компаний Samsung SDS, LG science park 
            и LG digital park. 
          </p>
          <p class='popup__text'>
            На данный момент, Владимир занимается разработкой виртуальных сенсоров на основе нейронных сетей. 
          </p>
          <p class='popup__text'>
          Основателем курса является Владимир Ким, действующий и ведущий специалист в области искусственного интеллекта в Южной Корее, который разрабатывал системы искусственного интеллекта для компаний Samsung SDS, LG science park 
          и LG digital park. 
        </p>
        <p class='popup__text'>
          На данный момент, Владимир занимается разработкой виртуальных сенсоров на основе нейронных сетей. 
        </p>      
        </div>
      </div>
    </div>`;
    document.querySelector(".popup__close").addEventListener("click", () => {
      element.remove();
    });
    document.querySelector(".popup").addEventListener("click", () => {
      element.remove();
    });
  });
});

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
