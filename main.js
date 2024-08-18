// import { Genres } from "./components/genres";
import { makeFooter, makeHeader } from "./components/required";
import { getData } from "./libs/http";
import { mainSwiper, reload } from "./libs/utils";
makeHeader()
mainSwiper()
makeFooter()

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

const form = document.forms[0]
const inputs = document.querySelectorAll('.required')

form.onsubmit = (e) =>  {
  e.preventDefault()

  let user = {}
  let fn = new FormData(form)
  let token = generateToken();
  let userId= localStorage.getItem('userId')

  fn.forEach((value, key) => {
    user[key] = value;
  })

}

function generateToken() {
  const characters = "ADYUGKGLkhjgguaihfuuoh868658780"

  let res = ""
  for (let i = 0; i < 10; i++) {
      let random = Math.floor(Math.random() * characters.length)
      res += characters[random]
  }
  return res;
}

document.getElementById('likeIcon').addEventListener('click', function() {
  this.classList.toggle('fill');
});


  getData('goods')
  .then(res => {
    console.log(reload(res.data));
  })
  .catch(error => console.error(error))
