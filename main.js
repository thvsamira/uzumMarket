// import { Genres } from "./components/genres";
import { makeHeader } from "./components/header";
import { getData } from "./libs/http";
import { reload } from "./libs/utils";

makeHeader()

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

 
  getData('goods')
  .then(res => {
    console.log(reload(res.data));
  })
  .catch(errpr => console.error(errpr))
