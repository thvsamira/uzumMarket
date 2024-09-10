import { makeModal } from "../../components/modal";
import { makeFooter, makeHeader } from "../../components/required";
import { deleteUser, getData} from "../../libs/http";
import { catalog,  showUser } from "../../scripts/script";
makeHeader()
makeFooter()
catalog()
makeModal()

let backetArr = JSON.parse(localStorage.getItem('backet')) || [];
let quantity = document.querySelector('.quantity')
quantity.textContent = backetArr.length



export function renderUser (user) {
let firstName = document.getElementById('name')
firstName.value = user.name

let number = document.getElementById('phonenum')
number.value = user.phone
}

let token = localStorage.getItem("token");
let logout = document.getElementById('logoutbtn');
console.log(logout);

getData(`users?token=${token}`)
.then(res => {
   showUser(res.data[0])
  renderUser(res.data[0])
})
.catch(error => console.log(error))
