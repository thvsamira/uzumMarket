function reload(arr, place, Element) {
    let box = document.querySelector(`#${place}`);

    box.innerHTML = ''

    for (let item of arr) {
        
        let elem = Element(item);
        box.append(elem);
    }
}

function mainSwiper(){
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
}

export{ reload, mainSwiper }