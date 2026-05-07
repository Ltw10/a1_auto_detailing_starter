import { beforeAfterSets, services } from "./content.js";
import Swiper from "swiper";
import { Navigation, A11y, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const serviceGrid = document.querySelector("#service-grid");
if (serviceGrid) {
  serviceGrid.innerHTML = services
    .map((service) => `<article class="card"><h3>${service}</h3></article>`)
    .join("");
}

const beforeAfterCarousel = document.querySelector("#before-after-carousel");
if (beforeAfterCarousel) {
  beforeAfterCarousel.innerHTML = beforeAfterSets
    .map(
      (set) => `
      <article class="before-after-card swiper-slide">
        <h3>${set.title}</h3>
        <div class="before-after-images">
          <figure>
            <img loading="lazy" src="${set.before}" alt="${set.title} before detailing" />
            <figcaption>Before</figcaption>
          </figure>
          <figure>
            <img loading="lazy" src="${set.after}" alt="${set.title} after detailing" />
            <figcaption>After</figcaption>
          </figure>
        </div>
      </article>
    `,
    )
    .join("");

  const swiperRoot = document.querySelector(".before-after-swiper");
  if (swiperRoot) {
    new Swiper(swiperRoot, {
      modules: [Navigation, A11y, Keyboard],
      slidesPerView: 1,
      spaceBetween: 16,
      speed: 450,
      keyboard: {
        enabled: true,
      },
      navigation: {
        prevEl: "#before-prev",
        nextEl: "#before-next",
      },
      a11y: {
        prevSlideMessage: "Previous result",
        nextSlideMessage: "Next result",
      },
    });
  }
}
