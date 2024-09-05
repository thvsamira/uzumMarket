import { makeFooter, makeHeader } from "../../components/required";
import { getData } from "../../libs/http";
import { catalog, openModal, showUser } from "../../scripts/script";
makeHeader()
makeFooter()
openModal()
catalog()
let backetArr = JSON.parse(localStorage.getItem('backet')) || [];
let quantity = document.querySelector('.quantity')
quantity.textContent = backetArr.length




export function renderUser (user) {
let firstName = document.getElementById('first-name')
firstName.value = user.name

let number = document.getElementById('phone')
number.value = user.phone
}

let token = localStorage.getItem("token")
getData(`users?token=${token}`)
.then(res => {
   showUser(res.data[0])
  renderUser(res.data[0])
})
.catch(error => console.log(error))
