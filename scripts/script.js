import { getData, postData } from "../libs/http";

export function signIn () {
  const form = document.forms['account']; 
form.onsubmit = (e) => {
  e.preventDefault(); 

  let user = {}; 
  let fn = new FormData(form); 
  let token = generateToken();

  fn.forEach((value, key) => {
    user[key] = value;
  });

  getData(`users?name=${user['first-name']}`) 
  .then(res => {
    if (res.data.length > 0) {
      alert('Пользователь с таким именем уже зарегистрирован');
    } else {
      postData('users', { token, ...user })
        .then((res) => {
          localStorage.setItem("token", res.data.token);  
          alert('Регистрация успешна! Вы будете перенаправлены.');

          localStorage.setItem("isRegistered", "true");

        })
        .catch((error) => console.log(error));
    }
  })
  .catch(error => console.log(error));
};
}



function generateToken() {
  const characters = "ADYUGKGLkhjgguaihfuuoh868658780";
  let res = "";
  for (let i = 0; i < 10; i++) {
    let random = Math.floor(Math.random() * characters.length);
    res += characters[random];
  }
  console.log(res); 
  return res; 
}


export function showUser(user) {

  let name = document.querySelector('.user-name')

  name.textContent = user.name
  
  }
 
  export function openModal() {
    const modalOpen = document.querySelector('.user-box'); 
    const modal = document.querySelector('.modal'); 
    const modalClose = document.querySelector('.modal__close'); 
  
    modalOpen.onclick = () => {
      const isRegistered = localStorage.getItem("isRegistered") === "true"; 
  
      if (!isRegistered) {
         modal.style.display = 'block';
         modal.classList.add('fade');
       
      } else {
        window.location.href = '/pages/account/';
      }
    };
  
    modalClose.onclick = () => {
      modal.style.display = 'none';
    };
  }
  
  
 export function catalog () {
  let catalog = document.querySelector('.dropdown-content');
let openC = document.querySelector('.dropbtn');
let overlay = document.querySelector('.overlay');

openC.onclick = () => {
  catalog.classList.toggle('visible'); 
  overlay.classList.toggle('visible'); 
};
 }