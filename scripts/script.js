import { getData, postData } from "../libs/http";

const form = document.forms['account']; // or document.forms[0] if it's the first form
const inputs = document.querySelectorAll('.required');
form.onsubmit = (e) => {
  e.preventDefault(); 

  let user = {}; 
  let fn = new FormData(form); 
  let token = generateToken();

  fn.forEach((value, key) => {
    user[key] = value;
  });

  getData(`users?name=${user.name}`)
  .then(res => {
    if (res.data.length > 0) {
        alert('Пользователь с такой почтой уже зарегистрирован')
    }else{
         // if(validateInputs()){
            postData('users', { token, ...user })
            .then((res) => {
                localStorage.setItem("token", res.data.token)    
               
            })
            .catch((error) => console.log(error))
    // }
    }
  })
      .catch(error => console.log(error))

};

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
