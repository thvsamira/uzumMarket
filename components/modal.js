import { getData, postData } from "../libs/http";
import { generateToken } from "../libs/utils";

 export function makeModal() {
    const modal = document.querySelector('.modal'); 
 modal.innerHTML = ` 
 <div class="modal__dialog">
 <div class="modal__content">
   <form action="#" name="account">
     <div data-close class="modal__close">&times;</div>
     <div class="modal__title">Введите ваши данные</div>
     <div class="modal__text">Отправим смс с кодом подтверждения</div>
     <input required placeholder="Ваше имя" name="name" type="text" class="modal__input required" id="first-name">
     <input required placeholder="Ваш номер телефона" name="phone" type="phone" class="modal__input required" id="phone">
     <button class="btn btn_dark btn_min">Получить код</button>
     <p class="privacy-text">Авторизуясь, вы соглашаетесь c <a href="" class="blue-text">политикой <br>  
       обработки персональных данных</a> </p>
   </form>
 </div>
</div>
 `
 const modalOpen = document.querySelector('.user-box'); 
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
           location.href = '/pages/account/'
          })
          .catch((error) => console.log(error));
      }
    })
    .catch(error => console.log(error));
  };
}