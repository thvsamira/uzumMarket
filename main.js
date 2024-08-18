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

export function modalOpen () {
  const modal = document.querySelector('.modal')
  const modalOpen = document.querySelector('.user-box')
  const close = document.querySelector('.modal__close')
  modalOpen.onclick = () => {
    modal.style.display = 'block'
    modal.classList.add ('fade')
  }
 
close.onclick = () => {
  modal.style.display = 'none'
}
}

modalOpen()
 
  // getData('goods')
  // .then(res => {
  //   console.log(reload(res.data));
  // })
  // .catch(errpr => console.error(errpr))
