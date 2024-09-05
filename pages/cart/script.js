import {  CreateProductElement, DisplayImg} from "../../components/createItems";
import { makeHeader } from "../../components/required";
import { getData } from "../../libs/http";
import { cartSwiper, mainSwiper, reload } from "../../libs/utils";
import { totalQuantity } from "../../main";
import { catalog, openModal, showUser } from "../../scripts/script";
cartSwiper()
mainSwiper()
makeHeader()
totalQuantity()
openModal()
catalog()
let slotId = localStorage.getItem('slotId')
getData(`goods?id=${slotId}`)
.then(res => {
  reload(res.data, 'product-cont', CreateProductElement)
  reload(res.data, 'item-swiper', DisplayImg)
})
.catch(error => console.error(error))

let token = localStorage.getItem("token")
getData(`users?token=${token}`)
.then(res => {
  showUser(res.data[0])

})
.catch(error => console.log(error))