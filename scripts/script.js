import { getData, postData } from "../libs/http";


export function showUser(user) {

  let name = document.querySelector('.user-name')

  name.textContent = user.name
  
  }
  
 export function catalog () {
  let catalog = document.querySelector('.dropdown-content');
let openC = document.querySelector('.dropbtn');

openC.onclick = () => {
  catalog.classList.toggle('visible'); 
};
 }