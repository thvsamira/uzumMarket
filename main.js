import { CreateItem } from "./components/createItems";
import { makeFooter, makeHeader} from "./components/required";
import { getData } from "./libs/http";
import { mainSwiper, reload } from "./libs/utils";
import {  renderUser } from "./pages/account/script";
import { catalog, openModal, showUser } from "./scripts/script";
makeHeader()
mainSwiper()
makeFooter()
openModal()
catalog()
export function totalQuantity () {
let backetArr = JSON.parse(localStorage.getItem('backet')) || [];
let quantity = document.querySelector('.quantity')
quantity.textContent = backetArr.length
}
totalQuantity()

let token = localStorage.getItem("token")
getData(`users?token=${token}`)
.then(res => {
  showUser(res.data[0])
  renderUser(res.data[0])

})
.catch(error => console.log(error))



getData('goods')
  .then(res => {    
        const categorizedGoods = {
            furniture: res.data.filter(item => item.type === 'furniture'),
            audio: res.data.filter(item => item.type === 'audio'),
            TV: res.data.filter(item => item.type === 'TV'),
            kitchen: res.data.filter(item => item.type === 'kitchen'),
            PC: res.data.filter(item => item.type === 'PC')
          };
        reload(categorizedGoods.furniture.slice(0,5), 'furniture', CreateItem)  
        reload(categorizedGoods.audio.slice(0,5), 'audio', CreateItem)  
        reload(categorizedGoods.TV.slice(0,5), 'TV', CreateItem)  
        reload(categorizedGoods.kitchen.slice(0,5), 'kitchen', CreateItem)  
        reload(categorizedGoods.PC.slice(5,10), 'PC', CreateItem)  
      })
  .catch(error => console.error(error))
