import { makeHeader } from "../../components/header";

makeHeader()


var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      }
  });